import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StatusBar, View, Text, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Define types for the navigation
type RootTabParamList = {
  Weather: undefined;
  Market: undefined;
  Schemes: undefined;
  Profile: undefined;
};

// Create placeholder screens
const WeatherScreen: React.FC = () => (
  <View style={styles.screen}>
    <Text style={styles.screenTitle}>Weather & Alerts</Text>
    <Text>Weather information will appear here</Text>
  </View>
);

const MarketScreen: React.FC = () => (
  <View style={styles.screen}>
    <Text style={styles.screenTitle}>Market Prices</Text>
    <Text>Mandi prices and trends will appear here</Text>
  </View>
);

const SchemesScreen: React.FC = () => (
  <View style={styles.screen}>
    <Text style={styles.screenTitle}>Government Schemes</Text>
    <Text>Subsidies and schemes information will appear here</Text>
  </View>
);

const ProfileScreen: React.FC = () => (
  <View style={styles.screen}>
    <Text style={styles.screenTitle}>Profile</Text>
    <Text>User profile and settings will appear here</Text>
  </View>
);

const Tab = createBottomTabNavigator<RootTabParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName: string = 'help';

            if (route.name === 'Weather') {
              iconName = focused ? 'partly-sunny' : 'partly-sunny-outline';
            } else if (route.name === 'Market') {
              iconName = focused ? 'stats-chart' : 'stats-chart-outline';
            } else if (route.name === 'Schemes') {
              iconName = focused ? 'document-text' : 'document-text-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#2e7d32',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: 'white',
            borderTopWidth: 1,
            borderTopColor: '#f0f0f0',
            height: 60,
            paddingBottom: 10,
            paddingTop: 5,
          },
          headerStyle: {
            backgroundColor: '#2e7d32',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        })}>
        <Tab.Screen 
          name="Weather" 
          component={WeatherScreen}
          options={{title: 'Weather & Alerts'}}
        />
        <Tab.Screen 
          name="Market" 
          component={MarketScreen}
          options={{title: 'Market Prices'}}
        />
        <Tab.Screen 
          name="Schemes" 
          component={SchemesScreen}
          options={{title: 'Govt Schemes'}}
        />
        <Tab.Screen 
          name="Profile" 
          component={ProfileScreen}
          options={{title: 'Profile'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: 20,
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2e7d32',
    marginBottom: 10,
  },
});

export default App;