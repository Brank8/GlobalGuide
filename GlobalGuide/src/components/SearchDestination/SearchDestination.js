import React from 'react';
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const SearchDestination = ({ destination, setDestination, days, setDays, navigation, API_KEY, BASE_URL, API_KEY_WEATHER, BASE_URL_WEATHER, onPress }) => {
  const searchDestination = async () => {
    if (!destination || !days) {
      alert('Please fill in both fields.');
      return;
    }
    const url = `${BASE_URL}?days=${days}&destination=${encodeURIComponent(destination)}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': 'ai-trip-planner.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      
      const urlWeather = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY_WEATHER}&q=${encodeURIComponent(destination)}&days=7`;
      const responseWeather = await fetch(urlWeather);
      const weather = await responseWeather.json();

      navigation.navigate('My Favorite Trips', { result, weather });
    } catch (error) {
      console.error(error);
      alert('Failed to fetch destination details.');
    }
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.labels}><Text style={styles.label}>Your destination:</Text><Text style={styles.label}>Length of stay:</Text></View>
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          onChangeText={setDestination}
          value={destination}
          placeholder="Miami"
        />
        {/* <Text style={styles.label}>How many days?</Text> */}
        <TextInput
          style={styles.input}
          onChangeText={setDays}
          value={days}
          placeholder="5"
          keyboardType="numeric"
        />
      </View>
      <TouchableOpacity onPress={onPress} style={styles.button}>
      <MaterialIcons name="public" size={30} color="black" />
      <Text style={styles.buttonText}>Search Destination</Text>
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    flexDirection: 'column',
    backgroundColor: 'gold',
    width: '90%',
    left: '5%',
    height: '30%'
  },
  label: {
    // marginLeft: 12,
    fontSize: 10.5,
    color: 'grey',
    fontWeight: 'bold',
    marginRight: 25,
    marginLeft: 18,
  },
  labels: {
    flexDirection: 'row',
    marginBottom: -10
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  input: {
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '30%',
    borderColor: 'blue',
    borderRadius: 5,
    backgroundColor: 'pink',
    maxWidth: '180px',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'pink',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    marginLeft: 2,
    fontSize: 15,
    color: 'green'
  },
});

export default SearchDestination;
