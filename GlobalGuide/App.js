import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Auth } from './src/pages/Signup/Auth';
import HomeScreen from './src/pages/HomeScreen/HomeScreen';
import MainContainer from './src/MainContainer';

const Stack = createStackNavigator();

const LandingScreen = ({ navigation }) => {
  return (
    <Auth />
  );
};

const AuthenticatedNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AuthenticatedHome" component={MainContainer} options={{ headerShown: false }} />
      {/* Other authenticated screens */}
    </Stack.Navigator>
  );
};

const GuestNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="GuestHome" component={MainContainer} options={{ headerShown: false }} listeners={{ focus: () => console.log("GUEST USER") }}/>
      {/* Other guest screens */}
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Landing"
          component={LandingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Authenticated"
          component={AuthenticatedNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Guest"
          component={GuestNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;