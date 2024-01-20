import * as React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Button,
  ImageBackground,
} from "react-native";

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
    console.log("Weather data is not available");
    // You can handle the absence of weather data here
  }

  return (
    <View style={styles.container}>
      {hasPlans ? (
        <ScrollView>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text style={styles.header}>
            {result.key && capitalizeWords(result.key.split("-")[1])}
          </Text>
          <Text></Text>
          {result.plan.map((dayPlan, index) => (
            <View key={index}>
              <Text style={styles.day}>Day {dayPlan.day}</Text>
              {dayPlan.activities.map((activity, activityIndex) => (
                <Text key={activityIndex}>
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
          <Text style={styles.noTrips}>No trips yet...</Text>
          <Button
            title="Discover New Places"
            onPress={() => navigation.navigate("Home")}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "pink",
    justifyContent: "center",
    // marginTop: 35,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    // backgroundColor: "yellow",
    textAlign: "center",
    marginBottom: 10
  },
  day: {
    fontSize: 15,
    fontWeight: "bold",
    // backgroundColor: "yellow",
    textAlign: "center",
    marginBottom: 10,
    marginTop: 5
  },
  weatherHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 30,
    textAlign: "center",
  },
  weatherContainer: {
    backgroundColor: "grey",
    padding: 10,
    paddingLeft: "20%",
    // marginTop: 30,
    // marginVertical: 5,
  },
  noTrips: {
    fontSize: 16,
    color: "grey",
    textAlign: "center",
  },
  noTripsContainer: {
    flex: 1,
    justifyContent: "center",
  },
  image: {
    width: 50,
    height: 40,
    marginTop: 5,
  },
});

export default FavoriteTrip;
