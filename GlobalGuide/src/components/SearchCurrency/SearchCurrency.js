import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const SearchCurrency = ({ currencyFrom, setCurrencyFrom, currencyTo, setCurrencyTo, amount, setAmount }) => {
  const convertCurrency = () => {
    alert(`Convert ${amount} from ${currencyFrom} to ${currencyTo}`);
  };

  return (
    <View style={styles.container}>
        <View style={styles.row}>
      <TextInput
        style={styles.input}
        onChangeText={setCurrencyFrom
}
value={currencyFrom}
placeholder="From USD"
/>
<TextInput
     style={styles.input}
     onChangeText={setCurrencyTo}
     value={currencyTo}
     placeholder="To EUR"
   />
    </View>
<TextInput
     style={styles.input}
     onChangeText={setAmount}
     value={amount}
     placeholder="50 USD"
     keyboardType="numeric"
   />
<Button
     title="Convert"
     onPress={convertCurrency}
   />
</View>
);
};

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 20,
      flexDirection: 'column',
      backgroundColor: 'white',
      width: '90%',
      left: '5%',
      height: '30%'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    // minHeight: '10vh'
    // marginTop: '5%',
  },
  input: {
    // height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '30%',
    borderColor: 'blue',
    borderRadius: 5,
    backgroundColor: 'yellow',
    maxWidth: '180px'
    },
    });

export default SearchCurrency;