import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const SearchDestination = ({ destination, setDestination, days, setDays, navigation, API_KEY, BASE_URL, API_KEY_WEATHER, BASE_URL_WEATHER }) => {
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
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          onChangeText={setDestination}
          value={destination}
          placeholder="Miami"
        />
        <TextInput
          style={styles.input}
          onChangeText={setDays}
          value={days}
          placeholder="5"
          keyboardType="numeric"
        />
      </View>
      <Button
        title="Search destination"
        onPress={searchDestination}
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
    backgroundColor: 'gold',
    width: '90%',
    left: '5%',
    height: '30%'
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
});

export default SearchDestination;
