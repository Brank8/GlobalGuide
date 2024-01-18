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
        // If the identity token is present, navigate to MainContainer
        navigation.navigate('Guest');
      } else {
        throw new Error("No identityToken.");
      }
    } catch (e) {
      if (e.code === "ERR_REQUEST_CANCELED") {
        // Handle the case where the user cancelled the sign-in request
      } else {
        // Handle other exceptions
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
        <Text>
          Continue as Guest? Click{" "}
          <TouchableOpacity onPress={() => navigation.navigate('Guest')}>
            <Text>here</Text>
          </TouchableOpacity>
        </Text>
      </View>
    );
  else
    // If the platform is not iOS, you can return null or update the logic as needed
    return null;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Auth;
