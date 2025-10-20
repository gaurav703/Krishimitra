import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
  Dimensions,
  RefreshControl,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

export default function SchemesScreen() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [refreshing, setRefreshing] = useState(false);

  const categories = ['All', 'Subsidy', 'Insurance', 'Loan', 'Training', 'Equipment'];

 const schemesData = [
    {
      id: 1,
      title: 'PM-KISAN Scheme',
      category: 'Subsidy',
      description: 'Income support of ₹6000 per year to all land holding farmer families. Distributed in three equal installments.',
      eligibility: 'All land holding farmers',
      deadline: '31 Dec 2024',
      link: 'https://pmkisan.gov.in',
      icon: 'cash-outline',
      benefits: ['₹6000/year', '3 Installments', 'Direct Transfer']
    },
    {
      id: 2,
      title: 'Crop Insurance (PMFBY)',
      category: 'Insurance',
      description: 'Premium based crop insurance against natural calamities, pests and diseases. Low premium for farmers.',
      eligibility: 'All farmers including sharecroppers',
      deadline: 'Ongoing',
      link: 'https://pmfby.gov.in',
      icon: 'shield-checkmark-outline',
      benefits: ['Low Premium', 'All Crops', 'Quick Claim']
    },
    {
      id: 3,
      title: 'Kisan Credit Card',
      category: 'Loan',
      description: 'Credit for cultivation needs, investment credit and consumption needs. Flexible repayment options.',
      eligibility: 'Farmers, sharecroppers, tenant farmers',
      deadline: 'Ongoing',
      link: 'https://www.nabard.org',
      icon: 'card-outline',
      benefits: ['Low Interest', 'Flexible Repayment', 'Up to ₹3 Lakhs']
    },
    {
      id: 4,
      title: 'Soil Health Card',
      category: 'Subsidy',
      description: 'Provides information on soil nutrient status with customized recommendations for fertilizers.',
      eligibility: 'All farmers',
      deadline: 'Ongoing',
      link: 'https://soilhealth.dac.gov.in',
      icon: 'leaf-outline',
      benefits: ['Free Testing', 'Custom Advice', 'Better Yield']
    },
    {
      id: 5,
      title: 'National Agriculture Market (e-NAM)',
      category: 'Training',
      description: 'Online trading platform for agricultural commodities. Connect with buyers across India.',
      eligibility: 'All farmers and traders',
      deadline: 'Ongoing',
      link: 'https://enam.gov.in',
      icon: 'trending-up-outline',
      benefits: ['Better Prices', 'Pan-India Market', 'Online Platform']
    },
    {
      id: 6,
      title: 'Farm Machinery Subsidy',
      category: 'Equipment',
      description: 'Up to 50% subsidy on agricultural machinery like tractors, harvesters, and irrigation equipment.',
      eligibility: 'Small & marginal farmers',
      deadline: '31 Mar 2024',
      link: '#',
      icon: 'build-outline',
      benefits: ['50% Subsidy', 'Modern Equipment', 'Easy EMI']
    },
    // NEW SCHEMES ADDED BELOW
    {
      id: 7,
      title: 'Pradhan Mantri Fasal Bima Yojana',
      category: 'Insurance',
      description: 'Comprehensive crop insurance scheme with low premium rates and easy claim settlement process.',
      eligibility: 'All farmers including tenant farmers',
      deadline: 'Ongoing',
      link: 'https://pmfby.gov.in',
      icon: 'umbrella-outline',
      benefits: ['2% Premium', 'All Seasons', 'Mobile Claim']
    },
    {
      id: 8,
      title: 'National Mission on Oilseeds & Oil Palm',
      category: 'Subsidy',
      description: 'Promotes oilseed cultivation with subsidies on seeds, inputs, and processing units.',
      eligibility: 'Oilseed farmers',
      deadline: '31 Mar 2025',
      link: 'https://nmoop.gov.in',
      icon: 'flower-outline',
      benefits: ['50% Subsidy', 'Input Support', 'Market Linkage']
    },
    {
      id: 9,
      title: 'Micro Irrigation Fund',
      category: 'Equipment',
      description: 'Provides loans at concessional rates for micro irrigation systems like drip and sprinkler.',
      eligibility: 'Individual & group farmers',
      deadline: 'Ongoing',
      link: 'https://pmksy.gov.in',
      icon: 'water-outline',
      benefits: ['Low Interest', 'Water Saving', 'Higher Yield']
    },
    {
      id: 10,
      title: 'Animal Husbandry Infrastructure Fund',
      category: 'Loan',
      description: 'Financial support for dairy processing, meat processing, and animal feed plants.',
      eligibility: 'Dairy farmers & entrepreneurs',
      deadline: '31 Dec 2024',
      link: 'https://dahd.nic.in',
      icon: 'paw-outline',
      benefits: ['3% Interest', 'Up to ₹50 Lakhs', 'Tech Support']
    },
    {
      id: 11,
      title: 'National Beekeeping & Honey Mission',
      category: 'Training',
      description: 'Promotes beekeeping as additional income source with training and infrastructure support.',
      eligibility: 'Farmers, rural youth',
      deadline: 'Ongoing',
      link: 'https://nbhm.gov.in',
      icon: 'bee-outline',
      benefits: ['Free Training', 'Equipment Subsidy', 'Market Support']
    },
    {
      id: 12,
      title: 'Per Drop More Crop',
      category: 'Subsidy',
      description: 'Focuses on water use efficiency through micro irrigation with up to 55% subsidy.',
      eligibility: 'All farmers',
      deadline: 'Ongoing',
      link: 'https://pmksy.gov.in',
      icon: 'rainy-outline',
      benefits: ['55% Subsidy', 'Water Saving', 'Drip Systems']
    },
    {
      id: 13,
      title: 'Agriculture Infrastructure Fund',
      category: 'Loan',
      description: '₹1 Lakh Crore fund for post-harvest management and community farming assets.',
      eligibility: 'Farmers, FPOs, Agri-entrepreneurs',
      deadline: '31 Mar 2032',
      link: 'https://agriinfra.dac.gov.in',
      icon: 'storefront-outline',
      benefits: ['3% Interest', 'Long Tenure', 'Cold Storage']
    },
    {
      id: 14,
      title: 'National Food Security Mission',
      category: 'Subsidy',
      description: 'Enhances production of rice, wheat, pulses, and coarse cereals through input subsidies.',
      eligibility: 'Cereal & pulse growers',
      deadline: 'Ongoing',
      link: 'https://nfsm.gov.in',
      icon: 'nutrition-outline',
      benefits: ['Seed Subsidy', 'Nutrient Support', 'Crop Insurance']
    },
    {
      id: 15,
      title: 'Pradhan Mantri Krishi Sinchayee Yojana',
      category: 'Equipment',
      description: 'Harvesting every drop with focus on water conservation and irrigation efficiency.',
      eligibility: 'All farmers',
      deadline: 'Ongoing',
      link: 'https://pmksy.gov.in',
      icon: 'fitness-outline',
      benefits: ['Irrigation', 'Water Mgmt', '55% Subsidy']
    },
    {
      id: 16,
      title: 'Rainfed Area Development',
      category: 'Training',
      description: 'Integrated farming system approach for rainfed areas with multiple income sources.',
      eligibility: 'Rainfed area farmers',
      deadline: 'Ongoing',
      link: 'https://nmsa.dac.gov.in',
      icon: 'cloudy-outline',
      benefits: ['Multi-cropping', 'Soil Health', 'Training']
    },
    {
      id: 17,
      title: 'Sub-Mission on Agricultural Mechanization',
      category: 'Equipment',
      description: 'Promotes farm mechanization among small farmers through custom hiring centers.',
      eligibility: 'Small & marginal farmers',
      deadline: 'Ongoing',
      link: 'https://agricoop.gov.in',
      icon: 'hardware-chip-outline',
      benefits: ['40-50% Subsidy', 'Hiring Centers', 'Training']
    },
    {
      id: 18,
      title: 'National Mission for Sustainable Agriculture',
      category: 'Training',
      description: 'Promotes climate resilient practices and sustainable agriculture technologies.',
      eligibility: 'All farmers',
      deadline: 'Ongoing',
      link: 'https://nmsa.dac.gov.in',
      icon: 'leaf-outline',
      benefits: ['Climate Smart', 'Organic Farming', 'Tech Support']
    },
    {
      id: 19,
      title: 'Pradhan Mantri Matsya Sampada Yojana',
      category: 'Subsidy',
      description: 'Comprehensive development of fisheries sector with infrastructure and input support.',
      eligibility: 'Fish farmers',
      deadline: '31 Mar 2025',
      link: 'https://dof.gov.in',
      icon: 'fish-outline',
      benefits: ['40-60% Subsidy', 'Pond Creation', 'Input Support']
    },
    {
      id: 20,
      title: 'National Livestock Mission',
      category: 'Loan',
      description: 'Employment generation through entrepreneurship development in livestock sector.',
      eligibility: 'Livestock farmers',
      deadline: 'Ongoing',
      link: 'https://dahd.nic.in',
      icon: 'git-branch-outline',
      benefits: ['25-35% Subsidy', 'Bank Linkage', 'Training']
    },
    {
      id: 21,
      title: 'Gramin Bhandaran Yojana',
      category: 'Equipment',
      description: 'Subsidy for construction of rural godowns for storage of agricultural produce.',
      eligibility: 'Farmers, FPOs, Individuals',
      deadline: 'Ongoing',
      link: 'https://nhm.gov.in',
      icon: 'home-outline',
      benefits: ['25% Subsidy', 'Storage', 'Reduced Losses']
    },
    {
      id: 22,
      title: 'National Bamboo Mission',
      category: 'Training',
      description: 'Promotes holistic growth of bamboo sector through area expansion and product development.',
      eligibility: 'Bamboo growers',
      deadline: 'Ongoing',
      link: 'https://nbm.nic.in',
      icon: 'bonfire-outline',
      benefits: ['Input Support', 'Processing', 'Market Linkage']
    },
    {
      id: 23,
      title: 'Mission for Integrated Development of Horticulture',
      category: 'Subsidy',
      description: 'Promotes holistic growth of horticulture sector from pre-production to post-harvest management.',
      eligibility: 'Horticulture farmers',
      deadline: 'Ongoing',
      link: 'https://midh.gov.in',
      icon: 'cafe-outline',
      benefits: ['Plantation', 'Infrastructure', 'Market Access']
    },
    {
      id: 24,
      title: 'Dairy Entrepreneurship Development Scheme',
      category: 'Loan',
      description: 'Promotes dairy entrepreneurship through establishment of small dairy farms and infrastructure.',
      eligibility: 'Dairy farmers',
      deadline: 'Ongoing',
      link: 'https://nddb.coop',
      icon: 'ice-cream-outline',
      benefits: ['25-33% Subsidy', 'Bank Loan', 'Training']
    },
    {
      id: 25,
      title: 'National Mission on Natural Farming',
      category: 'Training',
      description: 'Promotes chemical-free natural farming with training and input support.',
      eligibility: 'All farmers',
      deadline: 'Ongoing',
      link: 'https://naturalfarming.dac.gov.in',
      icon: 'earth-outline',
      benefits: ['Chemical Free', 'Low Cost', 'Training']
    }
  ];

  const filteredSchemes = schemesData.filter(scheme => 
    selectedCategory === 'All' || scheme.category === selectedCategory
  );

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1500);
  };

  const handleApply = async (link) => {
    try {
      await Linking.openURL(link);
    } catch (error) {
      console.error('Failed to open URL:', error);
    }
  };

  const SchemeCard = ({ scheme }) => (
    <View style={styles.schemeCard}>
      <View style={styles.cardHeader}>
        <View style={[styles.iconContainer, { backgroundColor: getCategoryColor(scheme.category) + '20' }]}>
          <Ionicons name={scheme.icon} size={24} color={getCategoryColor(scheme.category)} />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.schemeTitle}>{scheme.title}</Text>
          <View style={[styles.categoryBadge, { backgroundColor: getCategoryColor(scheme.category) }]}>
            <Text style={styles.categoryBadgeText}>{scheme.category}</Text>
          </View>
        </View>
      </View>
      
      <Text style={styles.schemeDescription}>{scheme.description}</Text>
      
      {/* Benefits Tags */}
      <View style={styles.benefitsContainer}>
        {scheme.benefits.map((benefit, index) => (
          <View key={index} style={styles.benefitTag}>
            <Text style={styles.benefitText}>{benefit}</Text>
          </View>
        ))}
      </View>
      
      <View style={styles.schemeDetails}>
        <View style={styles.detailRow}>
          <View style={styles.detailItem}>
            <Ionicons name="people-outline" size={16} color="#666" />
            <Text style={styles.detailText}>{scheme.eligibility}</Text>
          </View>
        </View>
        
        <View style={styles.detailRow}>
          <View style={styles.detailItem}>
            <Ionicons name="calendar-outline" size={16} color="#666" />
            <Text style={styles.detailText}>Deadline: {scheme.deadline}</Text>
          </View>
          <View style={[styles.statusIndicator, 
            scheme.deadline === 'Ongoing' ? styles.statusActive : styles.statusUpcoming
          ]}>
            <Text style={styles.statusText}>
              {scheme.deadline === 'Ongoing' ? 'Active' : 'Upcoming'}
            </Text>
          </View>
        </View>
      </View>

      <TouchableOpacity 
        style={styles.applyButton}
        onPress={() => handleApply(scheme.link)}
      >
        <Ionicons name="arrow-forward-circle" size={20} color="#FFFFFF" />
        <Text style={styles.applyButtonText}>Apply Now</Text>
      </TouchableOpacity>
    </View>
  );

  const ListHeader = () => (
    <View style={styles.headerSection}>
      <LinearGradient
        colors={['#2196F3', '#1976D2']}
        style={styles.heroSection}
      >
        <View style={styles.heroContent}>
          <Text style={styles.heroTitle}>Government Schemes</Text>
          <Text style={styles.heroSubtitle}>Discover benefits and subsidies for your farming journey</Text>
          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{schemesData.length}</Text>
              <Text style={styles.statLabel}>Active Schemes</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statValue}>6</Text>
              <Text style={styles.statLabel}>Categories</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statValue}>100%</Text>
              <Text style={styles.statLabel}>Verified</Text>
            </View>
          </View>
        </View>
      </LinearGradient>

      {/* Category Filter */}
      <View style={styles.filterSection}>
        <Text style={styles.filterTitle}>Filter by Category</Text>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          contentContainerStyle={styles.filterScrollContent}
        >
          {categories.map((category) => (
            <TouchableOpacity
              key={category}
              style={[
                styles.categoryChip,
                selectedCategory === category && styles.categoryChipActive
              ]}
              onPress={() => setSelectedCategory(category)}
            >
              <Ionicons 
                name={getCategoryIcon(category)} 
                size={16} 
                color={selectedCategory === category ? '#FFFFFF' : getCategoryColor(category)} 
              />
              <Text style={[
                styles.categoryText,
                selectedCategory === category && styles.categoryTextActive
              ]}>
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Results Header */}
      <View style={styles.resultsHeader}>
        <Text style={styles.resultsTitle}>
          {filteredSchemes.length} {filteredSchemes.length === 1 ? 'Scheme' : 'Schemes'} Available
        </Text>
        <View style={styles.infoButton}>
          <Ionicons name="information-circle-outline" size={18} color="#2196F3" />
        </View>
      </View>
    </View>
  );

  const ListEmptyComponent = () => (
    <View style={styles.emptyState}>
      <Ionicons name="document-text-outline" size={64} color="#ccc" />
      <Text style={styles.emptyTitle}>No schemes found</Text>
      <Text style={styles.emptySubtitle}>
        Try selecting a different category or check back later for new schemes
      </Text>
    </View>
  );

  return (
      <ScrollView 
        style={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <ListHeader />
      
        {/* Schemes List */}
        <View style={styles.schemesList}>
          {filteredSchemes.map((scheme) => (
            <SchemeCard key={scheme.id} scheme={scheme} />
          ))}
        </View>

        {/* Help Section */}
        <View style={styles.helpCard}>
          <View style={styles.helpIcon}>
            <Ionicons name="headset" size={24} color="#2196F3" />
          </View>
          <View style={styles.helpContent}>
            <Text style={styles.helpTitle}>Need Help Applying?</Text>
            <Text style={styles.helpText}>
              Our agricultural experts are available to guide you through the application process
            </Text>
            <View style={styles.helpContacts}>
              <TouchableOpacity style={styles.contactButton}>
                <Ionicons name="call" size={16} color="#2196F3" />
                <Text style={styles.contactText}>Call: 1800-180-1551</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.contactButton}>
                <Ionicons name="mail" size={16} color="#2196F3" />
                <Text style={styles.contactText}>Email Support</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            All schemes are verified and updated regularly
          </Text>
        </View>
      </ScrollView>
  );
}

const getCategoryColor = (category) => {
  const colors = {
    'Subsidy': '#4CAF50',
    'Insurance': '#2196F3',
    'Loan': '#FF9800',
    'Training': '#9C27B0',
    'Equipment': '#795548',
    'All': '#666',
  };
  return colors[category] || '#666';
};

const getCategoryIcon = (category) => {
  const icons = {
    'Subsidy': 'cash',
    'Insurance': 'shield-checkmark',
    'Loan': 'card',
    'Training': 'school',
    'Equipment': 'build',
    'All': 'apps',
  };
  return icons[category] || 'square';
};

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
    textAlign: 'center',
  },
  heroSubtitle: {
    fontSize: 16,
    color: '#FFFFFF',
    opacity: 0.9,
    marginBottom: 20,
    textAlign: 'center',
    lineHeight: 20,
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
  filterSection: {
    paddingHorizontal: 20,
    marginTop: 20,
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
  categoryChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 10,
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
  categoryChipActive: {
    backgroundColor: '#2196F3',
    borderColor: '#2196F3',
  },
  categoryText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
    marginLeft: 6,
  },
  categoryTextActive: {
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
  infoButton: {
    padding: 6,
    borderRadius: 8,
    backgroundColor: 'rgba(33, 150, 243, 0.1)',
  },
  schemesList: {
    paddingHorizontal: 20,
  },
  schemeCard: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 6,
    borderWidth: 1,
    borderColor: '#f8f8f8',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  schemeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
    marginRight: 10,
    lineHeight: 22,
  },
  categoryBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  categoryBadgeText: {
    fontSize: 10,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  schemeDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 12,
  },
  benefitsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  benefitTag: {
    backgroundColor: 'rgba(76, 175, 80, 0.1)',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
    marginRight: 8,
    marginBottom: 6,
  },
  benefitText: {
    fontSize: 12,
    color: '#4CAF50',
    fontWeight: '500',
  },
  schemeDetails: {
    marginBottom: 16,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  detailText: {
    fontSize: 13,
    color: '#666',
    marginLeft: 8,
    flex: 1,
  },
  statusIndicator: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  statusActive: {
    backgroundColor: 'rgba(76, 175, 80, 0.1)',
  },
  statusUpcoming: {
    backgroundColor: 'rgba(255, 152, 0, 0.1)',
  },
  statusText: {
    fontSize: 11,
    fontWeight: 'bold',
  },
  applyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2196F3',
    paddingVertical: 14,
    borderRadius: 12,
    shadowColor: '#2196F3',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  applyButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  helpCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    margin: 20,
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 6,
    borderLeftWidth: 4,
    borderLeftColor: '#2196F3',
  },
  helpIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(33, 150, 243, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  helpContent: {
    flex: 1,
  },
  helpTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1976D2',
    marginBottom: 6,
  },
  helpText: {
    fontSize: 14,
    color: '#1976D2',
    lineHeight: 18,
    marginBottom: 12,
    opacity: 0.9,
  },
  helpContacts: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  contactButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(33, 150, 243, 0.1)',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    marginRight: 8,
    marginBottom: 4,
  },
  contactText: {
    fontSize: 12,
    color: '#2196F3',
    fontWeight: '500',
    marginLeft: 6,
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
  footer: {
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 40,
  },
  footerText: {
    fontSize: 12,
    color: '#999',
    textAlign: 'center',
  },
});