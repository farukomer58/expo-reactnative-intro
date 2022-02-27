import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading';

import Header from './components/Header';
import MainScreen from './screens/MainScreen';

import TitleText from './components/TitleText';
import BodyText from './components/BodyText';

// Define All Custom Fonts AND require them
const fetchFonts = () => {
  return Font.loadAsync({
    // "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    // "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    // "chocolatte": require("./assets/fonts/Chocolatte.otf"),
    // "questrial": require("./assets/fonts/Questrial-Regular.ttf"),
    "balsamiq-regular": require("./assets/fonts/BalsamiqSans-Regular.ttf"), // Primary, good practice set this in js object
    "balsamiq-bold": require("./assets/fonts/BalsamiqSans-Bold.ttf"),       // Secondary
  })
}

export default function App() {

  // Before Loading the app inject fonts used first
  const [dataLoaded, setDataLoaded] = useState(false)
  if (!dataLoaded) { return <AppLoading startAsync={fetchFonts} onFinish={() => setDataLoaded(true)} onError={(err) => console.log(err)} />; }

  return (
    <View style={styles.container}>
      <Header title="Introduction" />
      <MainScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});
