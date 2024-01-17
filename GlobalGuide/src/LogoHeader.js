import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const logoImage = require('../public/logo.png'); // Replace with actual path

export default function LogoHeader() {
  const navigation = useNavigation(); // This hook will provide the navigation object

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
    marginTop: 15,
    marginLeft: 0, 
    alignSelf: 'flex-start',
    position: 'absolute',
    top: 10,
    left: 0,
    zIndex: 1,
  },
  logo: {
    width: 70,
    height: 60,
    resizeMode: 'contain',
  },
});