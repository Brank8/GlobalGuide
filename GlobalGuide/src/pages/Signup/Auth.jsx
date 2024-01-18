import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export function Auth() {
  const handleSignInWeb = () => {
    // This would be your endpoint that initiates the Sign in with Apple process.
    const appleAuthURL = 'https://apple.com/auth/apple';

    // Redirect user to your backend endpoint for handling Sign in with Apple.
    window.location.href = appleAuthURL;
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={handleSignInWeb}
      >
        <Text style={styles.buttonText}>Sign in with Apple</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#000', // Apple's button color
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});