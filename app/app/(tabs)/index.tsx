import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen() {
  const quickActions = [
    { icon: 'partly-sunny', title: 'Weather', color: '#2196F3', screen: 'weather' },
    { icon: 'stats-chart', title: 'Market Prices', color: '#4CAF50', screen: 'market' },
    { icon: 'document-text', title: 'Govt Schemes', color: '#FF9800', screen: 'schemes' },
    { icon: 'call', title: 'Emergency', color: '#F44336', screen: 'emergency' },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <LinearGradient colors={['#4CAF50', '#2E7D32']} style={styles.header}>
        <Text style={styles.greeting}>Hello, Farmer! 👋</Text>
        <Text style={styles.subtitle}>Welcome to Krishimitra</Text>
      </LinearGradient>

      {/* Quick Actions */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.actionsGrid}>
          {quickActions.map((action, index) => (
            <TouchableOpacity key={index} style={styles.actionCard}>
              <View style={[styles.iconContainer, { backgroundColor: action.color }]}>
                <Ionicons name={action.icon} size={24} color="#FFF" />
              </View>
              <Text style={styles.actionTitle}>{action.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Today's Update */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Today's Update</Text>
        <View style={styles.updateCard}>
          <Ionicons name="notifications" size={24} color="#4CAF50" />
          <View style={styles.updateContent}>
            <Text style={styles.updateTitle}>Wheat prices increased by 5%</Text>
            <Text style={styles.updateSubtitle}>Best time to sell your produce</Text>
          </View>
        </View>
        
        <View style={styles.updateCard}>
          <Ionicons name="rainy" size={24} color="#2196F3" />
          <View style={styles.updateContent}>
            <Text style={styles.updateTitle}>Rain expected tomorrow</Text>
            <Text style={styles.updateSubtitle}>Plan your farming activities</Text>
          </View>
        </View>
      </View>

      {/* Emergency Contacts */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Emergency Contacts</Text>
        <View style={styles.emergencyCard}>
          <Ionicons name="call" size={20} color="#F44336" />
          <Text style={styles.emergencyText}>Agricultural Helpline: 1800-180-1551</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    padding: 30,
    paddingTop: 60,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  greeting: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#FFFFFF',
    opacity: 0.9,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  actionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  actionCard: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  actionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
  updateCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  updateContent: {
    marginLeft: 12,
    flex: 1,
  },
  updateTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 2,
  },
  updateSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  emergencyCard: {
    flexDirection: 'row',
    backgroundColor: '#FFEBEE',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    borderLeftWidth: 4,
    borderLeftColor: '#F44336',
  },
  emergencyText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#D32F2F',
    marginLeft: 10,
  },
});