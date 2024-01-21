import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function SettingsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.logoutContainer}>
        <Text onPress={() => navigation.navigate("Landing")}>
          <Text style={styles.logoutText}>Log Out </Text>
          <MaterialIcons name="logout" size={26} color="black" />
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "pink",
  },
  logoutContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  logoutText: {
    fontSize: 35,
    fontWeight: "bold",
    // fontFamily: '',
    // paddingRight: 10,
  },
});
