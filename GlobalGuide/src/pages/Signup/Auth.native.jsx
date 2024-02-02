import React, { useEffect, useState } from 'react';
import { Platform, View, StyleSheet, Text, TouchableOpacity, Image, SafeAreaView, ImageBackground, Dimensions, Button } from "react-native";
import * as AppleAuthentication from "expo-apple-authentication";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import Svg, { Path } from "react-native-svg";
import * as Google from 'expo-auth-session/providers/google';
import { ResponseType } from 'expo-auth-session';
// import { GoogleSignin, GoogleSigninButton } from "@react-native-google-signin/google-signin"
import * as AuthSession from 'expo-auth-session';
import * as WebBrowser from 'expo-web-browser'

//989750258747-r1petnv7s8qqpk0l30v8ue180kdi8nar.apps.googleusercontent.com
//989750258747-tvpria9dp3e4m2ganife5ru162d3tepc.apps.googleusercontent.com
//989750258747-j26jh5mljiir86rsq2c1hhrk7f6ipvm4.apps.googleusercontent.com

WebBrowser.maybeCompleteAuthSession()

const backgroundLogin = require("../../../public/login.jpg");
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export function Auth() {
  const [accessToken, setAccessToken] = React.useState(null)
  const [user, setUser] = React.useState(null)

  const redirectUri = 'https://globalguide.com/oauthredirect';

  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: "989750258747-r1petnv7s8qqpk0l30v8ue180kdi8nar.apps.googleusercontent.com",
    iosClientId: "989750258747-tvpria9dp3e4m2ganife5ru162d3tepc.apps.googleusercontent.com",
    androidClientId: "989750258747-j26jh5mljiir86rsq2c1hhrk7f6ipvm4.apps.googleusercontent.com",
    redirectUri
  });
  
  React.useEffect(() => {
    if (response?.type === 'success') {
      setAccessToken(response.authentication.accessToken);
      accessToken && fetchUserInfo();
    }
  }, [response, accessToken]);

  async function fetchUserInfo() {
    let response = await fetch("https://www.googleapis.com/userinfo/v2/me", {
      headers: { Authorization: `Bearer ${accessToken}` }
    });
    const userInfo = await response.json();
    setUser(userInfo);
  }

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
      } else {
      }
    }
  };

  return (

    <SafeAreaView style={styles.safeAreaView}>
      <ImageBackground
        source={backgroundLogin}
        style={styles.backgroundLogin}
        resizeMode="cover"
      >
        <Text style={styles.first}>Discover More</Text>
        <Text style={styles.second} t>
          Wander Wisely
        </Text>
        <Text style={styles.third}> - Your GlobalGuide Awaits.</Text>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.googleButton}
            disabled={!request}
            title="Login"
            onPress={() => {
              promptAsync();
            }}
          >
            <View style={styles.iconContainer}>
              <Svg
                width={20}
                height={30}
                viewBox="0 0 48 48"
                style={styles.googleIcon}
              >
                <Path
                  fill="#4285F4"
                  d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"
                />
                <Path
                  fill="#34A853"
                  d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"
                />
                <Path
                  fill="#FBBC05"
                  d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z"
                />
                <Path
                  fill="#EA4335"
                  d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"
                />
                <Path d="M2 2h44v44H2z" fill="none" />
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
          {/* {Platform.OS === "ios" && ( */}
            <AppleAuthentication.AppleAuthenticationButton
              buttonType={
                AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN
              }
              buttonStyle={
                AppleAuthentication.AppleAuthenticationButtonStyle.BLACK
              }
              cornerRadius={5}
              style={styles.appleButton}
              onPress={handleAppleSignIn}
            />
          {/* // )}  */}
          <View style={styles.textContainer}>
            <Text style={styles.text}>Continue as Guest? Click </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Guest")}>
              <Text style={styles.here}>here</Text>
            </TouchableOpacity>
            <Text style={styles.text}>.</Text>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  backgroundLogin: {
    ...StyleSheet.absoluteFillObject,
  },
  first: {
    fontSize: screenWidth * 0.1,
    color: "gold",
    position: "absolute",
    top: screenHeight * 0.15,
    left: "5%",
  },
  second: {
    fontSize: screenWidth * 0.075,
    color: "orange",
    position: "absolute",
    top: screenHeight * 0.275,
    right: "5%",
  },
  third: {
    fontSize: screenWidth * 0.05,
    color: "red",
    position: "absolute",
    top: screenHeight * 0.4,
    alignSelf: "center",
  },
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 30,
  },
  googleButton: {
    backgroundColor: "white",
    width: screenWidth * 0.7,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 5,
    position: "absolute",
    top: screenHeight * 0.5,
  },
  googleTextContainer: {
    flexDirection: "row",
    // marginLeft: 10,
  },
  googleLetter: {
    fontWeight: "bold",
    fontSize: 22.7,
    color: "#333333",
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 5,
    paddingLeft: screenWidth * 0.03,
  },
  googleIcon: {
    // marginLeft: 0,
  },
  appleButton: {
    width: screenWidth * 0.7,
    height: 60,
    top: screenHeight * 0.5 + 60,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 7,
    backgroundColor: "white",
    padding: 5,
    borderRadius: 5,
    position: "absolute",
    top: screenHeight * 0.5 + 120,
  },
  text: {
    fontSize: screenWidth * 0.04,
    color: "black",
  },
  here: {
    fontSize: screenWidth * 0.04,
    color: "maroon",
    textDecorationLine: "underline",
  },
});

export default Auth;
