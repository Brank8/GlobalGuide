import * as React from 'react'
import MainContainer from './src/MainContainer'
import { SafeAreaView, StyleSheet } from 'react-native'

function App() {
  return(
    <SafeAreaView style={styles.container}>
    <MainContainer />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 25,
    fontWeight: '500',
  },
});

export default App;