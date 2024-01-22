import * as React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Button,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from "react-native";

const background = require("../../../public/background.png");
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const FavoriteTrip = ({ route, navigation }) => {
  const { result, weather } = route.params ?? {};

  function capitalizeWords(string) {
    return string
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  console.log(result, "HELLO");
  console.log(weather, "WEATHER");

  // Check if there are plans, activities, and weather data to display
  const hasPlans = result && result.plan && result.plan.length > 0;
  const hasWeather =
    weather &&
    weather.forecast &&
    weather.forecast.forecastday &&
    weather.forecast.forecastday.length > 0;

  if (!weather) {
  }

  return (
    <View style={styles.container}>
      {hasPlans ? (
        <ScrollView style={styles.top}>
          <Text style={styles.header}>
            {result.key && capitalizeWords(result.key.split("-")[1])}
          </Text>
          {result.plan.map((dayPlan, index) => (
            <View key={index}>
              <Text style={styles.day}>Day {dayPlan.day}</Text>
              {dayPlan.activities.map((activity, activityIndex) => (
                <Text style={styles.paragraph} key={activityIndex}>
                  {activity.time} - {activity.description}.
                </Text>
              ))}
              <Text></Text>
            </View>
          ))}

          {hasWeather && (
            <View>
              <Text style={styles.weatherHeader}>
                Weather Forecast for{" "}
                {result.key && capitalizeWords(result.key.split("-")[1])}:
              </Text>
              <Text></Text>
              {weather.forecast.forecastday.map((day, index) => (
                <View key={index} style={styles.weatherContainer}>
                  <Text>Date: {day.date}</Text>
                  <Text>
                    Max Temp: {day.day.maxtemp_c}°C | {day.day.maxtemp_f}°F
                  </Text>
                  <Text>
                    Min Temp: {day.day.mintemp_c}°C | {day.day.mintemp_f}°F
                  </Text>
                  <Text>Condition: {day.day.condition.text}.</Text>
                  <ImageBackground
                    source={{ uri: `https:${day.day.condition.icon}` }}
                    style={styles.image}
                  ></ImageBackground>
                </View>
              ))}
            </View>
          )}
        </ScrollView>
      ) : (
        <View style={styles.noTripsContainer}>
          <ImageBackground
            source={background}
            style={styles.background}
            resizeMode="cover"
          ></ImageBackground>
          <View style={styles.white}>
            <Text style={styles.noTrips}>No trips yet...</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("Home")}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Discover New Places</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  top: {
    padding: screenWidth * 0.025,
  },
  header: {
    fontSize: screenWidth * 0.1,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: screenHeight * 0.02,
    marginTop: screenHeight * 0.15,
    color: 'darkviolet'
  },
  day: {
    fontSize: screenWidth * 0.05,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    marginTop: 5,
  },
  paragraph: {
    paddingLeft: screenWidth * 0.1,
    paddingRight: screenWidth * 0.1,
    paddingBottom: screenHeight * 0.01,
    fontSize: screenWidth * 0.04,
  },
  weatherHeader: {
    fontSize: screenWidth * 0.05,
    fontWeight: "bold",
    marginTop: 30,
    textAlign: "center",
    color: 'crimson'
  },
  weatherContainer: {
    padding: screenHeight * 0.007,
    paddingLeft: screenWidth * 0.25,
    paddingBottom: screenHeight * 0.03,
    // marginTop: 30,
    // marginVertical: 5,
  },
  noTrips: {
    fontSize: screenWidth * 0.06,
    color: "white",
    textAlign: "center",
  },
  noTripsContainer: {
    flex: 1,
    justifyContent: "center",
  },
  image: {
    width: 60,
    height: 40,
    marginTop: screenHeight * 0.003,
  },
  background: {
    ...StyleSheet.absoluteFillObject,
  },
  white: {
    backgroundColor: "darkviolet",
    width: "60%",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    position: "absolute",
    bottom: screenHeight * 0.08,
    borderRadius: 10,
  },
  buttonText: {
    color: "lime",
    textAlign: "center",
    fontSize: screenWidth * 0.05,
    fontWeight: "bold",
  },
});

export default FavoriteTrip;
