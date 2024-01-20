import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const { width: screenWidth } = Dimensions.get('window');

const SearchCurrency = ({
  currencyFrom,
  setCurrencyFrom,
  currencyTo,
  setCurrencyTo,
  amount,
  setAmount,
}) => {
  const [conversionResult, setConversionResult] = useState('Result');

  const convertCurrency = () => {
    setConversionResult(`Converted amount: XYZ ${currencyTo}`);
    alert(`Convert ${amount} from ${currencyFrom} to ${currencyTo}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Make every penny count on your journey,</Text>
      <Text style={styles.subtitle}>stay updated with the latest currency rates!</Text>
      <View style={styles.row}>
        <TextInput
          style={[styles.input, styles.inputThird]}
          onChangeText={setCurrencyFrom}
          value={currencyFrom}
          placeholder="From:"
        />
        <FontAwesome
          name="exchange"
          size={24}
          color="black"
          style={styles.icon}
        />
        <TextInput
          style={[styles.input, styles.inputThird]}
          onChangeText={setCurrencyTo}
          value={currencyTo}
          placeholder="To:"
        />
        <TextInput
          style={[styles.input, styles.inputThird]}
          onChangeText={setAmount}
          value={amount}
          placeholder="Amount"
          keyboardType="numeric"
        />
      </View>
      <View style={styles.row}>
        <TouchableOpacity onPress={convertCurrency} style={[styles.input, styles.convertButton]}>
          <Text style={styles.buttonText}>Convert</Text>
          <FontAwesome name="money" size={20} color="white" />
        </TouchableOpacity>
        <View style={[styles.input, styles.resultContainer]}>
          <Text style={styles.resultText}>{conversionResult}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: screenWidth * 0.05,
    backgroundColor: "white",
    width: "90%",
    alignSelf: "center",
    borderRadius: 10,
    marginTop: 20,
  },
  resultText: {
    fontSize: screenWidth * 0.04,
    color: 'black',
  },
  title: {
    fontSize: screenWidth * 0.04,
    textAlign: "center",
    color: "black",
  },
  subtitle: {
    fontSize: screenWidth * 0.035,
    textAlign: "center",
    color: "black",
    marginBottom: screenWidth * 0.03,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginVertical: screenWidth * 0.02,
  },
  input: {
    borderWidth: 1,
    padding: screenWidth * 0.03,
    borderColor: "blue",
    borderRadius: 5,
    backgroundColor: "pink",
    fontSize: screenWidth * 0.04,
    flex: 1,
    marginHorizontal: screenWidth * 0.01,
  },
  inputThird: {
    marginHorizontal: screenWidth * 0.01,
  },
  convertButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "purple",
    padding: screenWidth * 0.03,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: screenWidth * 0.01,
  },
  resultContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "lightgrey",
    padding: screenWidth * 0.03,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: screenWidth * 0.01,
  },
  buttonText: {
    color: "white",
    fontSize: screenWidth * 0.045,
    marginRight: 10,
  },
  icon: {
    marginHorizontal: screenWidth * 0.01,
  },
});

export default SearchCurrency;