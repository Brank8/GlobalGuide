import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Platform, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const logo = require('../public/logo.png'); // Replace with actual path

export default function LogoHeader() {
  const navigation = useNavigation();

  const topPadding = getTopPadding();

  return (
    <View style={[styles.logoContainer, { paddingTop: topPadding }]}>
      <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
        <Image source={logo} style={styles.logo} />
      </TouchableOpacity>
    </View>
  );
}

const getTopPadding = () => {
  // Adjust this value if needed for different devices or iOS versions
  const standardIOSPadding = 20; // Standard padding for older iOS devices without a notch
  const notchPadding = 44; // Known padding for iOS devices with a notch
  const androidPadding = StatusBar.currentHeight || 0;

  if (Platform.OS === 'android') return androidPadding;
  if (Platform.OS === 'ios') {
    // Here you may add additional checks for specific devices or screen sizes if needed
    const hasNotch = false; // Set this based on the device model or screen dimensions
    return hasNotch ? notchPadding : standardIOSPadding;
  }
  return 0; // Default padding for other platforms
};

const styles = StyleSheet.create({
  logoContainer: {
    paddingLeft: 5,
    position: 'absolute',
    top: 20, // Use top instead of paddingTop for the container
    left: 0,
    zIndex: 1,
  },
  logo: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
});
