import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Platform, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const logoImage = require('../public/logo.png'); // Replace with actual path

export default function LogoHeader() {
  const navigation = useNavigation();

  return (
    <View style={styles.logoContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
        <Image source={logoImage} style={styles.logo} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 50,
    paddingLeft: 5,
    position: 'absolute',
    // top: 50,
    left: 0,
    zIndex: 1,
  },
  logo: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
});