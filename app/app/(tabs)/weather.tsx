import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function WeatherScreen() {
  const [weather] = useState({
    temperature: 28,
    humidity: 65,
    rainfall: 12,
    windSpeed: 8,
    condition: 'Partly Cloudy',
    alerts: ['Heavy rain expected tomorrow', 'Temperature may drop by 5°C'],
  });

  const weeklyForecast = [
    { day: 'Mon', temp: 29, condition: 'Sunny', icon: 'sunny' },
    { day: 'Tue', temp: 27, condition: 'Cloudy', icon: 'cloudy' },
    { day: 'Wed', temp: 25, condition: 'Rainy', icon: 'rainy' },
    { day: 'Thu', temp: 26, condition: 'Partly Cloudy', icon: 'partly-sunny' },
    { day: 'Fri', temp: 28, condition: 'Sunny', icon: 'sunny' },
    { day: 'Sat', temp: 30, condition: 'Sunny', icon: 'sunny' },
    { day: 'Sun', temp: 29, condition: 'Cloudy', icon: 'cloudy' },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#1976D2"
        translucent={false}
      />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Current Weather Card */}
        <LinearGradient colors={['#2196F3', '#1976D2']} style={styles.weatherCard}>
          <Text style={styles.locationText}>Your Location</Text>
          <Text style={styles.temperature}>{weather.temperature}°C</Text>
          <Text style={styles.condition}>{weather.condition}</Text>

          <View style={styles.weatherDetails}>
            <WeatherDetail icon="water" value={`${weather.humidity}%`} label="Humidity" />
            <WeatherDetail icon="rainy" value={`${weather.rainfall}mm`} label="Rainfall" />
            <WeatherDetail icon="speedometer" value={`${weather.windSpeed} km/h`} label="Wind" />
          </View>
        </LinearGradient>

        {/* Weather Alerts */}
        <View style={styles.alertsCard}>
          <View style={styles.sectionHeader}>
            <Ionicons name="warning" size={20} color="#FF6B35" />
            <Text style={styles.sectionTitle}>Weather Alerts</Text>
          </View>
          {weather.alerts.map((alert, index) => (
            <View key={index} style={styles.alertItem}>
              <Ionicons name="notifications" size={16} color="#FF6B35" />
              <Text style={styles.alertText}>{alert}</Text>
            </View>
          ))}
        </View>

        {/* Weekly Forecast */}
        <View style={styles.forecastCard}>
          <View style={styles.sectionHeader}>
            <Ionicons name="calendar" size={20} color="#4CAF50" />
            <Text style={styles.sectionTitle}>7-Day Forecast</Text>
          </View>
          {weeklyForecast.map((day, index) => (
            <View key={index} style={styles.forecastItem}>
              <Text style={styles.dayText}>{day.day}</Text>
              <Ionicons name={day.icon} size={20} color="#FFA000" />
              <Text style={styles.forecastTemp}>{day.temp}°C</Text>
              <Text style={styles.forecastCondition}>{day.condition}</Text>
            </View>
          ))}
        </View>

        {/* Farming Advice */}
        <View style={styles.adviceCard}>
          <View style={styles.sectionHeader}>
            <Ionicons name="leaf" size={20} color="#2E7D32" />
            <Text style={styles.sectionTitle}>Farming Advice</Text>
          </View>
          <Text style={styles.adviceText}>
            • Good time for wheat sowing
            {"\n"}• Avoid pesticide spraying today
            {"\n"}• Ideal conditions for irrigation
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const WeatherDetail = ({ icon, value, label }) => (
  <View style={styles.weatherDetail}>
    <Ionicons name={icon} size={24} color="#ffffff" />
    <Text style={styles.detailValue}>{value}</Text>
    <Text style={styles.detailLabel}>{label}</Text>
  </View>
);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    paddingTop: StatusBar.currentHeight || 0, // ✅ adds space for status bar
  },
  scrollContent: {
    paddingBottom: 20,
  },
  weatherCard: {
    margin: 20,
    borderRadius: 20,
    padding: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  locationText: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
    opacity: 0.9,
  },
  temperature: {
    color: '#ffffff',
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  condition: {
    color: '#ffffff',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  weatherDetails: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  weatherDetail: {
    alignItems: 'center',
  },
  detailValue: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  detailLabel: {
    color: '#ffffff',
    fontSize: 12,
    opacity: 0.9,
    marginTop: 2,
  },
  alertsCard: {
    backgroundColor: '#ffffff',
    margin: 20,
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  forecastCard: {
    backgroundColor: '#ffffff',
    margin: 20,
    marginTop: 0,
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  adviceCard: {
    backgroundColor: '#ffffff',
    margin: 20,
    marginTop: 0,
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 8,
  },
  alertItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF3E0',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  alertText: {
    color: '#E65100',
    marginLeft: 8,
    flex: 1,
    fontSize: 14,
  },
  forecastItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  dayText: {
    fontSize: 16,
    color: '#333',
    width: 40,
  },
  forecastTemp: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    width: 40,
    textAlign: 'right',
  },
  forecastCondition: {
    fontSize: 14,
    color: '#666',
    width: 100,
    textAlign: 'right',
  },
  adviceText: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
});
