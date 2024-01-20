import React from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const SearchCurrency = ({
  currencyFrom,
  setCurrencyFrom,
  currencyTo,
  setCurrencyTo,
  amount,
  setAmount,
}) => {
  const convertCurrency = () => {
    alert(`Convert ${amount} from ${currencyFrom} to ${currencyTo}`);
  };

  return (
    <View style={styles.container}>
      <Text>Make every penny count on your journey,</Text>
      <Text>stay updated with the latest currency rates!</Text>
      <Text></Text>
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          onChangeText={setCurrencyFrom}
          value={currencyFrom}
          placeholder="From: USD"
        />
        <FontAwesome
          style={styles.exchange}
          name="exchange"
          size={24}
          color="black"
        />
        <TextInput
          style={styles.input}
          onChangeText={setCurrencyTo}
          value={currencyTo}
          placeholder="To: EUR"
        />
      </View>
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          onChangeText={setAmount}
          value={amount}
          placeholder="50"
          keyboardType="numeric"
        />
        <Text style={styles.input} />
      </View>
      <TouchableOpacity onPress={convertCurrency} style={styles.button}>
        <Text style={styles.buttonText}>Convert</Text>
        <FontAwesome name="money" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    flexDirection: "column",
    backgroundColor: "white",
    width: "90%",
    left: "5%",
    height: "30%",
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: -3,
  },
  input: {
    // height: 40,
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 10,
    borderWidth: 1,
    padding: 10,
    width: "30%",
    borderColor: "blue",
    borderRadius: 5,
    maxWidth: "180px",
    borderColor: "blue",
    backgroundColor: "pink",
  },
  button: {
    flexDirection: "row",
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    marginRight: 5,
  },
  exchange: {
    marginTop: 5,
    margin: -12,
  },
});

export default SearchCurrency;
