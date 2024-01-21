import * as React from "react";
import { Dimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import HomeScreen from "./pages/HomeScreen/HomeScreen";
import FavoriteTrip from "./pages/FavoriteTrip/FavoriteTrip";
import SettingsScreen from "./pages/Settings/SettingsScreen";
import LogoHeader from "./LogoHeader";

const homeName = "Home";
const favoritetripName = "My Favorite Trips";
const settingsName = "Settings";

const Tab = createBottomTabNavigator();

// Get the screen dimensions
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

// Calculate the appropriate padding based on screen size
const tabBarHeight = screenHeight * 0.1; // For example, 10% of screen height

export default function MainContainer() {
  return (
    <>
      <LogoHeader />
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === homeName) {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === favoritetripName) {
              iconName = focused ? "list" : "list-outline";
            } else if (route.name === settingsName) {
              iconName = focused ? "settings" : "settings-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "darkmagenta",
          tabBarInactiveTintColor: "midnightblue",
          tabBarShowLabel: true,
          tabBarStyle: {
            height: tabBarHeight,
            backgroundColor: "gold",
            paddingTop: tabBarHeight * 0.03,
            paddingBottom: tabBarHeight * 0.3,
          },
          tabBarItemStyle: {
            alignItems: "center",
            justifyContent: "center",
          },
        })}
      >
        <Tab.Screen
          name={homeName}
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name={favoritetripName}
          component={FavoriteTrip}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name={settingsName}
          component={SettingsScreen}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </>
  );
}
