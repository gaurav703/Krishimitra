import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

export default function MarketScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCrop, setSelectedCrop] = useState('All');
  const [refreshing, setRefreshing] = useState(false);

  const marketData = [
    { id: 1, crop: 'Wheat', price: 4200, unit: 'Quintal', change: '+2.5%', mandi: 'Azamgarh Mandi', trend: 'up', time: '2 min ago' },
    { id: 2, crop: 'Rice', price: 3800, unit: 'Quintal', change: '+1.2%', mandi: 'Varanasi Mandi', trend: 'up', time: '5 min ago' },
    { id: 3, crop: 'Maize', price: 3200, unit: 'Quintal', change: '-0.8%', mandi: 'Gorakhpur Mandi', trend: 'down', time: '8 min ago' },
    { id: 4, crop: 'Sugarcane', price: 280, unit: 'Quintal', change: '+0.5%', mandi: 'Lucknow Mandi', trend: 'up', time: '10 min ago' },
    { id: 5, crop: 'Cotton', price: 6500, unit: 'Quintal', change: '-1.2%', mandi: 'Kanpur Mandi', trend: 'down', time: '12 min ago' },
    { id: 6, crop: 'Soybean', price: 4800, unit: 'Quintal', change: '+3.1%', mandi: 'Allahabad Mandi', trend: 'up', time: '15 min ago' },
    { id: 7, crop: 'Mustard', price: 5200, unit: 'Quintal', change: '+1.8%', mandi: 'Jaunpur Mandi', trend: 'up', time: '18 min ago' },
    { id: 8, crop: 'Potato', price: 800, unit: 'Quintal', change: '-2.1%', mandi: 'Sultanpur Mandi', trend: 'down', time: '20 min ago' },
  ];

  const crops = ['All', 'Wheat', 'Rice', 'Maize', 'Sugarcane', 'Cotton', 'Soybean', 'Mustard', 'Potato'];

  const filteredData = marketData.filter(item => 
    item.crop.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (selectedCrop === 'All' || item.crop === selectedCrop)
  );

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1500);
  };

  const renderMarketItem = ({ item, index }) => (
    <TouchableOpacity 
      style={[
        styles.marketItem,
        index === 0 && styles.firstItem,
        index === filteredData.length - 1 && styles.lastItem
      ]}
      activeOpacity={0.7}
    >
      <View style={styles.itemLeft}>
        <View style={styles.cropIconContainer}>
          <Ionicons 
            name="leaf" 
            size={20} 
            color={item.trend === 'up' ? '#4CAF50' : '#F44336'} 
          />
        </View>
        <View style={styles.cropInfo}>
          <Text style={styles.cropName}>{item.crop}</Text>
          <View style={styles.mandiInfo}>
            <Ionicons name="location" size={12} color="#666" />
            <Text style={styles.mandiName}>{item.mandi}</Text>
            <Text style={styles.timeText}>• {item.time}</Text>
          </View>
        </View>
      </View>
      
      <View style={styles.itemRight}>
        <View style={styles.priceInfo}>
          <Text style={styles.price}>₹{item.price.toLocaleString()}</Text>
          <Text style={styles.unit}>/{item.unit}</Text>
        </View>
        <View style={[
          styles.changeIndicator, 
          { backgroundColor: item.trend === 'up' ? 'rgba(76, 175, 80, 0.1)' : 'rgba(244, 67, 54, 0.1)' }
        ]}>
          <Ionicons 
            name={item.trend === 'up' ? 'trending-up' : 'trending-down'} 
            size={14} 
            color={item.trend === 'up' ? '#4CAF50' : '#F44336'} 
          />
          <Text style={[
            styles.changeText, 
            { color: item.trend === 'up' ? '#4CAF50' : '#F44336' }
          ]}>
            {item.change}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const ListHeader = () => (
    <View style={styles.headerSection}>
      <LinearGradient
        colors={['#2E7D32', '#4CAF50']}
        style={styles.heroSection}
      >
        <View style={styles.heroContent}>
          <Text style={styles.heroTitle}>Market Prices</Text>
          <Text style={styles.heroSubtitle}>Live updates from mandis across India</Text>
          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>8</Text>
              <Text style={styles.statLabel}>Active Crops</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statValue}>12+</Text>
              <Text style={styles.statLabel}>Mandi Feeds</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statValue}>Live</Text>
              <Text style={styles.statLabel}>Updates</Text>
            </View>
          </View>
        </View>
      </LinearGradient>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#666" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search crops (Wheat, Rice, Cotton...)"
          placeholderTextColor="#999"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        {searchQuery.length > 0 && (
          <TouchableOpacity onPress={() => setSearchQuery('')}>
            <Ionicons name="close-circle" size={20} color="#999" />
          </TouchableOpacity>
        )}
      </View>

      {/* Crop Filter */}
      <View style={styles.filterSection}>
        <Text style={styles.filterTitle}>Filter by Crop</Text>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          contentContainerStyle={styles.filterScrollContent}
        >
          {crops.map((crop) => (
            <TouchableOpacity
              key={crop}
              style={[
                styles.filterChip,
                selectedCrop === crop && styles.filterChipActive
              ]}
              onPress={() => setSelectedCrop(crop)}
            >
              <Text style={[
                styles.filterText,
                selectedCrop === crop && styles.filterTextActive
              ]}>
                {crop}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Results Header */}
      <View style={styles.resultsHeader}>
        <Text style={styles.resultsTitle}>
          {filteredData.length} {filteredData.length === 1 ? 'Result' : 'Results'} Found
        </Text>
        <View style={styles.sortButton}>
          <Ionicons name="filter" size={16} color="#666" />
          <Text style={styles.sortText}>Sort</Text>
        </View>
      </View>
    </View>
  );

  const ListEmptyComponent = () => (
    <View style={styles.emptyState}>
      <Ionicons name="search-outline" size={64} color="#ccc" />
      <Text style={styles.emptyTitle}>No crops found</Text>
      <Text style={styles.emptySubtitle}>
        Try adjusting your search or filter criteria
      </Text>
    </View>
  );

  return (
      <View style={styles.container}>
        <FlatList
          data={filteredData}
          renderItem={renderMarketItem}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
          style={styles.marketList}
          contentContainerStyle={styles.listContent}
          ListHeaderComponent={ListHeader}
          ListEmptyComponent={ListEmptyComponent}
          refreshing={refreshing}
          onRefresh={onRefresh}
          stickyHeaderIndices={[0]}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  headerSection: {
    backgroundColor: '#f8f9fa',
  },
  heroSection: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 30,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  heroContent: {
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  heroSubtitle: {
    fontSize: 16,
    color: '#FFFFFF',
    opacity: 0.9,
    marginBottom: 20,
    textAlign: 'center',
  },
  statsContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 16,
    padding: 12,
  },
  statItem: {
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 2,
  },
  statLabel: {
    fontSize: 12,
    color: '#FFFFFF',
    opacity: 0.9,
  },
  statDivider: {
    width: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    margin: 20,
    marginTop: -10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 8,
    borderWidth: 1,
    borderColor: '#f0f0f0',
  },
  searchInput: {
    flex: 1,
    marginLeft: 12,
    marginRight: 8,
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  filterSection: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  filterTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 12,
  },
  filterScrollContent: {
    paddingRight: 20,
  },
  filterChip: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#f0f0f0',
  },
  filterChipActive: {
    backgroundColor: '#2E7D32',
    borderColor: '#2E7D32',
  },
  filterText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  filterTextActive: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  resultsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  resultsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  sortButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  sortText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
    marginLeft: 4,
  },
  marketList: {
    flex: 1,
  },
  listContent: {
    paddingBottom: 20,
  },
  marketItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginHorizontal: 20,
    marginBottom: 8,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#f8f8f8',
  },
  firstItem: {
    marginTop: 8,
  },
  lastItem: {
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  cropIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: 'rgba(76, 175, 80, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  cropInfo: {
    flex: 1,
  },
  cropName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  mandiInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mandiName: {
    fontSize: 12,
    color: '#666',
    marginLeft: 4,
    marginRight: 8,
  },
  timeText: {
    fontSize: 11,
    color: '#999',
  },
  itemRight: {
    alignItems: 'flex-end',
  },
  priceInfo: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 6,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  unit: {
    fontSize: 12,
    color: '#666',
    marginLeft: 2,
  },
  changeIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  changeText: {
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 4,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
    paddingHorizontal: 40,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#666',
    marginTop: 16,
    marginBottom: 8,
  },
  emptySubtitle: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
    lineHeight: 20,
  },
});