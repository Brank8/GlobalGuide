import React from "react";
import {
  Platform,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import * as AppleAuthentication from "expo-apple-authentication";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import Svg, { Path } from 'react-native-svg';

export function Auth({ promptAsync }) {
  const navigation = useNavigation();

  const handleAppleSignIn = async () => {
    try {
      const credential = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ],
      });
      if (credential.identityToken) {
        console.log("APPLE USER");
        navigation.navigate("Authenticated");
      } else {
        throw new Error("No identityToken.");
      }
    } catch (e) {
      if (e.code === "ERR_REQUEST_CANCELED") {
        // Handle the error when the request was cancelled
      } else {
        // Handle other errors
      }
    }
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.googleButton}
          onPress={() => promptAsync()}
        >
          <View style={styles.iconContainer}>
<Svg width={30} height={30} viewBox="0 0 48 48" style={styles.googleIcon}>
    <Path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"/>
    <Path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"/>
    <Path fill="#FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z"/>
    <Path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"/>
    <Path d="M2 2h44v44H2z" fill="none"/>
  </Svg>
  </View>
          <View style={styles.googleTextContainer}>
            <Text style={[styles.googleLetter]}>Sign in with </Text>
            <Text style={[styles.googleLetter, { color: "#4285F4" }]}>G</Text>
            <Text style={[styles.googleLetter, { color: "#EA4335" }]}>o</Text>
            <Text style={[styles.googleLetter, { color: "#FBBC04" }]}>o</Text>
            <Text style={[styles.googleLetter, { color: "#4285F4" }]}>g</Text>
            <Text style={[styles.googleLetter, { color: "#34A853" }]}>l</Text>
            <Text style={[styles.googleLetter, { color: "#EA4335" }]}>e</Text>
          </View>
        </TouchableOpacity>
        {Platform.OS === "ios" && (
          <AppleAuthentication.AppleAuthenticationButton
            buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
            buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
            cornerRadius={5}
            style={styles.appleButton}
            onPress={handleAppleSignIn}
          />
        )}
        <View style={styles.textContainer}>
          <Text style={styles.text}>Continue as Guest? Click </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Guest")}>
            <Text style={styles.here}>here</Text>
          </TouchableOpacity>
          <Text style={styles.text}>.</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: "grey",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  googleButton: {
    backgroundColor: "white",
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 5,
    marginBottom: 10,
  },
  googleTextContainer: {
    flexDirection: 'row',
    // marginLeft: 10,
  },
  googleLetter: {
    fontWeight: "bold",
    fontSize: 22.7,
    color: '#333333'
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 8,
  },
  googleIcon: {
    marginLeft: 0
  },
  appleButton: {
    width: "80%",
    height: 60,
    marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 7,
  },
  text: {
    fontSize: 14,
  },
  here: {
    fontSize: 14,
    color: "blue",
    textDecorationLine: 'underline',
  },
});

export default Auth;
