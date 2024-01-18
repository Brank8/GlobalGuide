import React from "react";
import {
  Platform,
  Button,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import * as AppleAuthentication from "expo-apple-authentication";
import { useNavigation } from "@react-navigation/native";
import HomeScreen from "../HomeScreen/HomeScreen";

export function Auth() {
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
        navigation.navigate("Authenticated");
      } else {
        throw new Error("No identityToken.");
      }
    } catch (e) {
      if (e.code === "ERR_REQUEST_CANCELED") {
      } else {
      }
    }
  };

  if (Platform.OS === "ios")
    return (
      <View style={styles.container}>
        <AppleAuthentication.AppleAuthenticationButton
          buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
          buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
          cornerRadius={5}
          style={{ width: 200, height: 64 }}
          onPress={handleAppleSignIn}
        />
        <View style={styles.textContainer}>
          <Text style={styles.text}>Continue as Guest? Click </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Guest")}>
            <Text style={styles.here}>here</Text>
          </TouchableOpacity>
          <Text style={styles.text}>.</Text>
        </View>
      </View>
    );
  else return null;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 7,
  },
  text: {
    fontSize: 14,
    // lineHeight: 20,
  },
  here: {
    fontSize: 14,
    // lineHeight: 20,
    color: "blue",
    // textDecorationLine: 'underline'
  },
});

export default Auth;
