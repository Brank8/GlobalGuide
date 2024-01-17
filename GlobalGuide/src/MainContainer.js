import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './pages/HomeScreen/HomeScreen';
import FavoriteTrip from './pages/FavoriteTrip/FavoriteTrip';
import SettingsScreen from './pages/Settings/SettingsScreen';
import LogoHeader from './LogoHeader';

const homeName = 'Home';
const favoritetripName = 'My Favorite Trips';
const settingsName = 'Settings';

const Tab = createBottomTabNavigator();

export default function MainContainer() {
  return (
    <NavigationContainer>
      <LogoHeader />
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === homeName) {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === favoritetripName) {
              iconName = focused ? 'list' : 'list-outline';
            } else if (route.name === settingsName) {
              iconName = focused ? 'settings' : 'settings-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'black',
          tabBarShowLabel: true,
          tabBarStyle: {
            height: 55,
            backgroundColor: 'white',

            // justifyContent: 'space-evenly'
          },
          tabBarItemStyle: {
            // flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          },
        })}
      >
        <Tab.Screen name={homeName} component={HomeScreen} options={{ tabBarLabel: 'Home' }} />
        <Tab.Screen name={favoritetripName} component={FavoriteTrip} options={{ tabBarLabel: 'My Favorite Trips' }} />
        <Tab.Screen name={settingsName} component={SettingsScreen} options={{ tabBarLabel: 'Settings' }} />
        {/* <Tab.Screen name="TripResults" component={TripResults} options={{ tabBarLabel: 'Trip Results' }} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}