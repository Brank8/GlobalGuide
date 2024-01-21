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

const { width: screenWidth } = Dimensions.get("window");

const SearchCurrency = ({
  currencyFrom,
  setCurrencyFrom,
  currencyTo,
  setCurrencyTo,
  amount,
  setAmount,
}) => {
  const [conversionResult, setConversionResult] = useState("Result");

  const convertCurrency = async () => {
    const API_KEY_CURRENCY =
      "95999f7bccmshfaa9d39676a1b3bp119261jsn0b5421b99e82";
    const BASE_URL_CURRENCY = "https://currency-converter241.p.rapidapi.com/";

    const headers = {
      "X-RapidAPI-Key": API_KEY_CURRENCY,
      "X-RapidAPI-Host": "currency-converter241.p.rapidapi.com",
    };

    const url = `${BASE_URL_CURRENCY}conversion_rate?from=${currencyFrom}&to=${currencyTo}`;

    try {
      const response = await fetch(url, { method: "GET", headers: headers });
      const data = await response.json();

      if (!data.rate) {
        setConversionResult("Enter valid data");
        return;
      }

      const rate = data.rate;
      const convertedAmount = (rate * parseFloat(amount)).toFixed(2);

      setConversionResult(`${convertedAmount} ${currencyTo.toUpperCase()}`);
    } catch (error) {
      // console.error('There was an error converting the currency:', error);
      setConversionResult("Error: Try again");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Make every penny count on your journey,</Text>
      <Text style={styles.subtitle}>
        stay updated with the latest currency rates!
      </Text>
      <View style={styles.fromTo}>
        <Text style={styles.label}>From:</Text>
        <Text style={styles.label}>‎ ‎ ‎ To:</Text>
        <Text style={styles.label}>Amount:</Text>
      </View>
      <View style={styles.row}>
        <TextInput
          style={[styles.input, styles.inputThird]}
          onChangeText={setCurrencyFrom}
          value={currencyFrom}
          placeholder="USD"
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
          placeholder="EUR"
        />
        <TextInput
          style={[styles.input, styles.inputThird]}
          onChangeText={setAmount}
          value={amount}
          placeholder="20"
          keyboardType="numeric"
        />
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={convertCurrency}
          style={[styles.input, styles.convertButton]}
        >
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
    color: "black",
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
  fromTo: {
    flexDirection: "row",
    gap: screenWidth * 0.19,
    marginLeft: screenWidth * 0.06,
    width: "100%",
  },
  label: {
    flexDirection: "row",
    marginBottom: screenWidth * -0.018,
    fontSize: screenWidth * 0.035,
    color: "grey",
    fontWeight: "bold",
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
    fontSize: screenWidth * 0.045,
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
    justifyContent: "center",
    alignItems: "center",
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
