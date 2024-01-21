import React from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Platform,
  StatusBar,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const logo = require("../public/logo.png");
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const statusBarHeight =
  Platform.OS === "android" ? StatusBar.currentHeight : screenHeight * 0.05;
export default function LogoHeader() {
  const navigation = useNavigation();

  return (
    <View style={[styles.logoContainer]}>
      <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
        <Image source={logo} style={styles.logo} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    paddingLeft: screenWidth * 0.01,
    position: "absolute",
    paddingTop: statusBarHeight,
    left: 0,
    zIndex: 1,
  },
  logo: {
    height: 60,
    resizeMode: "contain",
    width: screenWidth * 0.15,
  },
});
