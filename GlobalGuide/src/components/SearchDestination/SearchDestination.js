import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Dimensions } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const SearchDestination = ({ destination, setDestination, navigation, API_KEY, BASE_URL, API_KEY_WEATHER, BASE_URL_WEATHER }) => {
  const [days, setDays] = useState('1');

  const incrementDays = () => {
    setDays(prevDays => {
      const updatedDays = parseInt(prevDays, 10) + 1;
      return (updatedDays <= 10) ? updatedDays.toString() : prevDays;
    });
  };

  const decrementDays = () => {
    setDays(prevDays => {
      const updatedDays = parseInt(prevDays, 10) - 1;
      return (updatedDays >= 1) ? updatedDays.toString() : prevDays;
    });
  };

  const searchDestination = async () => {
    if (!destination || !days) {
      alert('Please enter your destination.');
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
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Your destination:</Text>
          <TextInput
            style={styles.input}
            onChangeText={setDestination}
            value={destination}
            placeholder="Miami"
          />
        </View>
        <View style={styles.inputGroup}>
        <Text style={styles.label}>Length of stay:</Text>
        <View style={styles.stepperContainer}>
          <TouchableOpacity onPress={decrementDays} style={styles.stepperButton}>
            <MaterialIcons name="remove" size={screenWidth * 0.05} color="darkviolet" />
          </TouchableOpacity>
          <View style={styles.stepperInputContainer}>
            <Text style={styles.stepperInput}>{days}</Text>
          </View>
          <TouchableOpacity onPress={incrementDays} style={styles.stepperButton}>
            <MaterialIcons name="add" size={screenWidth * 0.05} color="darkviolet" />
          </TouchableOpacity>
        </View>
      </View>
      </View>
      <TouchableOpacity onPress={searchDestination} style={styles.button}>
        <MaterialIcons name="public" size={30} color="darkviolet" />
        <Text style={styles.buttonText}>Search Destination</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: screenWidth * 0.015,
    backgroundColor: 'gold',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 10,
    paddingVertical: screenHeight * 0.02,
  },
  label: {
    alignSelf: 'flex-start',
    fontSize: screenWidth * 0.03,
    color: 'grey',
    fontWeight: 'bold',
    marginLeft: screenWidth * 0.02,
    marginBottom: screenWidth * 0.005,
  },
  inputGroup: {
    alignItems: 'center',
    flex: 1,
    padding: 5,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    borderColor: 'blue',
    borderRadius: 5,
    backgroundColor: 'pink',
    fontSize: screenWidth * 0.045,
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '90%',
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'pink',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: '50%',
  },
  buttonText: {
    marginLeft: 2,
    fontSize: screenWidth * 0.03,
    color: 'green',
  },
  stepperContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 5,
    backgroundColor: 'pink',
    width: '100%',
  },
  stepperButton: {
    padding: screenWidth * 0.02,
    
  },
  stepperInputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 50,
    padding: screenWidth * 0.025,
  },
  stepperInput: {
    fontSize: screenWidth * 0.045,
    color: 'black',
    textAlign: 'center',
  },
});

export default SearchDestination;