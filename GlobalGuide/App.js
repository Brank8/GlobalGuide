import * as React from 'react';
import { SafeAreaView, StyleSheet, SafeAreaProvider } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Auth } from './src/pages/Signup/Auth';
import HomeScreen from './src/pages/HomeScreen/HomeScreen';
// If you have other screens, import them here
// import HomeScreen from './path-to-HomeScreen';
// import SettingsScreen from './path-to-SettingsScreen';
import MainContainer from './src/MainContainer';
// import Auth from './src/pages/Signup/Auth.native';

const Stack = createStackNavigator();

const LandingScreen = ({ navigation }) => {
  return (
    <Auth />
  );
};

const AuthenticatedNavigator = () => {
  return (
    <Stack.Navigator>
      {/* Add screens for authenticated users */}
      <Stack.Screen name="Authenticated" component={MainContainer} options={{headerShown: false}}/>
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
      {/* Other authenticated screens */}
    </Stack.Navigator>
  );
};

const GuestNavigator = () => {
  return (
    <Stack.Navigator>
      {/* Add screens for guest users */}
      <Stack.Screen name="Home" component={MainContainer} options={{headerShown: false}}/>
      {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
      {/* Other guest screens */}
    </Stack.Navigator>
  );
};

const App = () => {
  // const userIsAuthenticated = Auth(); // Implement your authentication check logic

  return (
    <NavigationContainer>
      <Stack.Navigator options={{headerShown: false}}>
        <Stack.Screen
          name="Landing"
          component={LandingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Authenticated"
          component={AuthenticatedNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Guest"
          component={GuestNavigator}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;