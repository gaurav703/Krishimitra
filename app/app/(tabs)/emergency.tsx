import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
  Alert,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

export default function EmergencyScreen() {
  const [emergencyMode, setEmergencyMode] = useState(false);

  const emergencyContacts = [
    {
      id: 1,
      name: 'Agricultural Helpline',
      number: '1800-180-1551',
      type: 'Toll Free',
      icon: 'call',
      color: '#4CAF50',
      priority: 'high'
    },
    {
      id: 2,
      name: 'Disaster Management',
      number: '1078',
      type: 'Toll Free',
      icon: 'warning',
      color: '#FF9800',
      priority: 'high'
    },
    {
      id: 3,
      name: 'Police',
      number: '100',
      type: 'Emergency',
      icon: 'shield-checkmark',
      color: '#2196F3',
      priority: 'critical'
    },
    {
      id: 4,
      name: 'Ambulance',
      number: '102',
      type: 'Emergency',
      icon: 'medkit',
      color: '#F44336',
      priority: 'critical'
    },
    {
      id: 5,
      name: 'Fire Department',
      number: '101',
      type: 'Emergency',
      icon: 'flame',
      color: '#FF6B35',
      priority: 'critical'
    },
    {
      id: 6,
      name: 'Women Helpline',
      number: '1091',
      type: '24/7',
      icon: 'female',
      color: '#9C27B0',
      priority: 'high'
    },
    {
      id: 7,
      name: 'Animal Welfare',
      number: '1962',
      type: '24/7',
      icon: 'paw',
      color: '#795548',
      priority: 'medium'
    },
    {
      id: 8,
      name: 'Child Helpline',
      number: '1098',
      type: '24/7',
      icon: 'heart',
      color: '#E91E63',
      priority: 'high'
    },
  ];

  const quickActions = [
    {
      id: 1,
      title: 'Crop Emergency',
      description: 'Pest attack, disease outbreak',
      icon: 'bug',
      color: '#4CAF50',
      contacts: ['1800-180-1551', '1078']
    },
    {
      id: 2,
      title: 'Weather Disaster',
      description: 'Flood, drought, storm damage',
      icon: 'thunderstorm',
      color: '#2196F3',
      contacts: ['1078', '100']
    },
    {
      id: 3,
      title: 'Animal Attack',
      description: 'Wild animal crop damage',
      icon: 'paw',
      color: '#FF9800',
      contacts: ['1962', '100']
    },
    {
      id: 4,
      title: 'Market Crisis',
      description: 'Price crash, storage issues',
      icon: 'trending-down',
      color: '#F44336',
      contacts: ['1800-180-1551']
    },
    {
      id: 5,
      title: 'Health Emergency',
      description: 'Farmer health issues',
      icon: 'medkit',
      color: '#F44336',
      contacts: ['102', '100']
    },
    {
      id: 6,
      title: 'Equipment Failure',
      description: 'Machinery breakdown',
      icon: 'build',
      color: '#607D8B',
      contacts: ['1800-180-1551']
    },
  ];

  const makeCall = (number) => {
    Linking.openURL(`tel:${number}`).catch(err => 
      Alert.alert('Error', 'Failed to make call. Please check your device.')
    );
  };

  const handleQuickAction = (action) => {
    Alert.alert(
      `🚨 ${action.title}`,
      `${action.description}\n\nRecommended contacts: ${action.contacts.join(', ')}`,
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Call Primary', 
          onPress: () => makeCall(action.contacts[0]),
          style: 'destructive'
        },
        { 
          text: 'See All Contacts', 
          onPress: () => {
            // Scroll to contacts section
          }
        },
      ]
    );
  };

  const handleEmergencyMode = () => {
    setEmergencyMode(true);
    Alert.alert(
      '🚨 EMERGENCY MODE ACTIVATED',
      'All emergency contacts are now easily accessible. Stay calm and call the appropriate number.',
      [
        { text: 'I Understand', style: 'default' }
      ]
    );
  };

  const EmergencyHeader = () => (
    <LinearGradient
      colors={['#F44336', '#D32F2F']}
      style={styles.emergencyHeader}
    >
      <View style={styles.headerContent}>
        <View style={styles.alertIcon}>
          <Ionicons name="warning" size={32} color="#FFFFFF" />
        </View>
        <View style={styles.headerText}>
          <Text style={styles.emergencyTitle}>Emergency Support</Text>
          <Text style={styles.emergencySubtitle}>
            Immediate assistance for farming emergencies
          </Text>
        </View>
        <TouchableOpacity 
          style={styles.sosButton}
          onPress={handleEmergencyMode}
        >
          <Ionicons name="alert-circle" size={20} color="#F44336" />
          <Text style={styles.sosText}>SOS</Text>
        </TouchableOpacity>
      </View>
      
      {emergencyMode && (
        <View style={styles.emergencyBanner}>
          <Ionicons name="flash" size={16} color="#FFFFFF" />
          <Text style={styles.emergencyBannerText}>
            EMERGENCY MODE ACTIVE - Quick access enabled
          </Text>
        </View>
      )}
    </LinearGradient>
  );

  const QuickActionCard = ({ action }) => (
    <TouchableOpacity
      style={styles.actionCard}
      onPress={() => handleQuickAction(action)}
      activeOpacity={0.7}
    >
      <LinearGradient
        colors={[action.color, `${action.color}DD`]}
        style={styles.actionGradient}
      >
        <View style={styles.actionIconContainer}>
          <Ionicons name={action.icon} size={28} color="#FFFFFF" />
        </View>
        <Text style={styles.actionTitle}>{action.title}</Text>
        <Text style={styles.actionDescription}>{action.description}</Text>
        <View style={styles.contactHint}>
          <Ionicons name="call" size={12} color="#FFFFFF" />
          <Text style={styles.contactHintText}>Tap for quick help</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );

  const ContactCard = ({ contact }) => (
    <TouchableOpacity
      style={[
        styles.contactCard,
        contact.priority === 'critical' && styles.criticalContact,
        contact.priority === 'high' && styles.highPriorityContact
      ]}
      onPress={() => makeCall(contact.number)}
      activeOpacity={0.7}
    >
      <View style={styles.contactLeft}>
        <View style={[styles.contactIcon, { backgroundColor: contact.color }]}>
          <Ionicons name={contact.icon} size={20} color="#FFFFFF" />
        </View>
        <View style={styles.contactInfo}>
          <Text style={styles.contactName}>{contact.name}</Text>
          <View style={styles.contactMeta}>
            <View style={[styles.priorityBadge, 
              contact.priority === 'critical' && styles.criticalBadge,
              contact.priority === 'high' && styles.highPriorityBadge
            ]}>
              <Text style={styles.priorityText}>
                {contact.priority === 'critical' ? 'CRITICAL' : 
                 contact.priority === 'high' ? 'HIGH' : 'MEDIUM'}
              </Text>
            </View>
            <Text style={styles.contactType}>{contact.type}</Text>
          </View>
        </View>
      </View>
      <View style={styles.contactRight}>
        <Text style={styles.numberText}>{contact.number}</Text>
        <View style={styles.callButton}>
          <Ionicons name="call" size={16} color="#FFFFFF" />
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <EmergencyHeader />
        
        {/* Quick Actions */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="flash" size={24} color="#333" />
            <Text style={styles.sectionTitle}>Quick Emergency Actions</Text>
          </View>
          <Text style={styles.sectionSubtitle}>
            Tap on any emergency type for immediate assistance
          </Text>
          <View style={styles.actionsGrid}>
            {quickActions.map((action) => (
              <QuickActionCard key={action.id} action={action} />
            ))}
          </View>
        </View>

        {/* Emergency Contacts */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="call" size={24} color="#333" />
            <Text style={styles.sectionTitle}>Emergency Contacts</Text>
          </View>
          <Text style={styles.sectionSubtitle}>
            Direct lines for immediate assistance
          </Text>
          <View style={styles.contactsList}>
            {emergencyContacts
              .sort((a, b) => {
                const priorityOrder = { critical: 0, high: 1, medium: 2 };
                return priorityOrder[a.priority] - priorityOrder[b.priority];
              })
              .map((contact) => (
                <ContactCard key={contact.id} contact={contact} />
              ))
            }
          </View>
        </View>

        {/* Emergency Guide */}
        <View style={styles.guideSection}>
          <LinearGradient
            colors={['#2196F3', '#1976D2']}
            style={styles.guideCard}
          >
            <View style={styles.guideHeader}>
              <Ionicons name="information-circle" size={24} color="#FFFFFF" />
              <Text style={styles.guideTitle}>Emergency Guide</Text>
            </View>
            <View style={styles.guideItems}>
              <View style={styles.guideItem}>
                <Ionicons name="checkmark-circle" size={16} color="#FFFFFF" />
                <Text style={styles.guideText}>
                  Stay calm and speak clearly
                </Text>
              </View>
              <View style={styles.guideItem}>
                <Ionicons name="checkmark-circle" size={16} color="#FFFFFF" />
                <Text style={styles.guideText}>
                  Provide exact location and farm details
                </Text>
              </View>
              <View style={styles.guideItem}>
                <Ionicons name="checkmark-circle" size={16} color="#FFFFFF" />
                <Text style={styles.guideText}>
                  Describe the emergency briefly
                </Text>
              </View>
              <View style={styles.guideItem}>
                <Ionicons name="checkmark-circle" size={16} color="#FFFFFF" />
                <Text style={styles.guideText}>
                  Take photos for insurance claims
                </Text>
              </View>
              <View style={styles.guideItem}>
                <Ionicons name="checkmark-circle" size={16} color="#FFFFFF" />
                <Text style={styles.guideText}>
                  Follow operator instructions carefully
                </Text>
              </View>
            </View>
          </LinearGradient>
        </View>

        {/* Local Resources */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="location" size={24} color="#333" />
            <Text style={styles.sectionTitle}>Local Resources</Text>
          </View>
          <View style={styles.localResources}>
            <View style={styles.resourceCard}>
              <View style={styles.resourceIcon}>
                <Ionicons name="business" size={24} color="#4CAF50" />
              </View>
              <View style={styles.resourceInfo}>
                <Text style={styles.resourceTitle}>Agriculture Office</Text>
                <Text style={styles.resourceDetail}>5km away • 9AM-5PM</Text>
                <Text style={styles.resourceContact}>Contact: 1800-180-1551</Text>
              </View>
            </View>
            
            <View style={styles.resourceCard}>
              <View style={styles.resourceIcon}>
                <Ionicons name="medkit" size={24} color="#F44336" />
              </View>
              <View style={styles.resourceInfo}>
                <Text style={styles.resourceTitle}>Nearest Hospital</Text>
                <Text style={styles.resourceDetail}>8km away • 24/7</Text>
                <Text style={styles.resourceContact}>Emergency: 102</Text>
              </View>
            </View>
            
            <View style={styles.resourceCard}>
              <View style={styles.resourceIcon}>
                <Ionicons name="shield-checkmark" size={24} color="#2196F3" />
              </View>
              <View style={styles.resourceInfo}>
                <Text style={styles.resourceTitle}>Police Station</Text>
                <Text style={styles.resourceDetail}>3km away • 24/7</Text>
                <Text style={styles.resourceContact}>Emergency: 100</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Footer Note */}
        <View style={styles.footer}>
          <Ionicons name="heart" size={16} color="#666" />
          <Text style={styles.footerText}>
            Your safety is our priority. Save these contacts for emergencies.
          </Text>
        </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  emergencyHeader: {
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  alertIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    flex: 1,
    marginLeft: 15,
  },
  emergencyTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  emergencySubtitle: {
    fontSize: 14,
    color: '#FFFFFF',
    opacity: 0.9,
  },
  sosButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  sosText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#F44336',
    marginLeft: 6,
  },
  emergencyBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: 10,
    borderRadius: 8,
    marginTop: 15,
  },
  emergencyBannerText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginLeft: 6,
  },
  section: {
    padding: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 8,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
    lineHeight: 18,
  },
  actionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  actionCard: {
    width: '48%',
    marginBottom: 15,
    borderRadius: 16,
  },
  actionGradient: {
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    minHeight: 140,
    justifyContent: 'space-between',
  },
  actionIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  actionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 4,
  },
  actionDescription: {
    fontSize: 12,
    color: '#FFFFFF',
    textAlign: 'center',
    opacity: 0.9,
    lineHeight: 14,
  },
  contactHint: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  contactHintText: {
    fontSize: 10,
    color: '#FFFFFF',
    marginLeft: 4,
    opacity: 0.8,
  },
  contactsList: {
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  contactCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  criticalContact: {
    backgroundColor: '#FFEBEE',
    borderLeftWidth: 4,
    borderLeftColor: '#F44336',
  },
  highPriorityContact: {
    backgroundColor: '#FFF3E0',
  },
  contactLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  contactIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  contactInfo: {
    flex: 1,
  },
  contactName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  contactMeta: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  priorityBadge: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    marginRight: 8,
  },
  criticalBadge: {
    backgroundColor: '#F44336',
  },
  highPriorityBadge: {
    backgroundColor: '#FF9800',
  },
  priorityText: {
    fontSize: 8,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  contactType: {
    fontSize: 12,
    color: '#666',
  },
  contactRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  numberText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginRight: 12,
  },
  callButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
  },
  guideSection: {
    padding: 20,
    paddingTop: 0,
  },
  guideCard: {
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 8,
  },
  guideHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  guideTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginLeft: 8,
  },
  guideItems: {
    gap: 12,
  },
  guideItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  guideText: {
    fontSize: 14,
    color: '#FFFFFF',
    marginLeft: 8,
    flex: 1,
    lineHeight: 18,
    opacity: 0.9,
  },
  localResources: {
    gap: 12,
  },
  resourceCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  resourceIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#f8f9fa',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  resourceInfo: {
    flex: 1,
  },
  resourceTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  resourceDetail: {
    fontSize: 12,
    color: '#666',
    marginBottom: 2,
  },
  resourceContact: {
    fontSize: 12,
    color: '#4CAF50',
    fontWeight: '500',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    paddingTop: 10,
  },
  footerText: {
    fontSize: 12,
    color: '#666',
    marginLeft: 6,
    textAlign: 'center',
  },
});