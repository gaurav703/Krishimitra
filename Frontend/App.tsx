/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import APMC_screen from './src/screens/APMC/APMC_screen';
import Home from './src/screens/Home/Home';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ecommerce from './src/screens/Ecommerce/ecommerce';
import profile from './src/screens/Profile/profile';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="APMC_screen" component={APMC_screen} />
    </Stack.Navigator>
  );
}

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

function AppTabsNavigation(): JSX.Element {
  const Tab = createMaterialBottomTabNavigator();

  return (
    <Tab.Navigator
      activeColor="#3c9764"
      barStyle={{
        backgroundColor: '#ffffff',
        borderRadius: 10,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="APMC"
        component={APMC_screen}
        options={{
          title: 'APMC',
          tabBarLabel: 'APMC',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="bell" size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="E-commerce"
        component={ecommerce}
        options={{
          title: 'E-commerce',
          tabBarLabel: 'E-commerce',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  main_cont: {
    backgroundColor: '#fff',
    flex: 1,
  },
  text: {
    color: '#000',
  },

  // sectionContainer: {
  //   marginTop: 32,
  //   paddingHorizontal: 24,
  // },
  // sectionTitle: {
  //   fontSize: 24,
  //   fontWeight: '600',
  // },
  // sectionDescription: {
  //   marginTop: 8,
  //   fontSize: 18,
  //   fontWeight: '400',
  // },
  // highlight: {
  //   fontWeight: '700',
  // },
});

const App = () => {
  return (
    <NavigationContainer>
      <AppTabsNavigation />
    </NavigationContainer>
  );
};

export default App;
