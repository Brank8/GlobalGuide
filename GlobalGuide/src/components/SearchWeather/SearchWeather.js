// import React from 'react';
// import { View, TextInput, Button, StyleSheet } from 'react-native';

// const SearchWeather = ({ weatherDestination, setWeatherDestination }) => {
//   const searchWeather = () => {
//     alert(`Search weather for: ${weatherDestination}`);
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         onChangeText={setWeatherDestination}
//         value={weatherDestination}
//         placeholder="Paris"
//       />
//       <Button
//         title="Search weather"
//         onPress={searchWeather}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//     container: {
//       alignItems: 'center',
//       justifyContent: 'center',
//       marginBottom: 20,
//       flexDirection: 'column',
//       backgroundColor: 'white',
//       width: '90%',
//       left: '5%',
//       height: '30%'
//   },
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     // minHeight: '10vh'
//     // marginTop: '5%',
//   },
//   input: {
//     // height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//     width: '30%',
//     borderColor: 'blue',
//     borderRadius: 5,
//     backgroundColor: 'green',
//     maxWidth: '180px'
//     },
//     });

// export default SearchWeather;