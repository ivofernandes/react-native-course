import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';

import Header from './components/Header';
import { Text, View } from './components/Themed';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title='Guess a number'></Header>
      <StartGameScreen></StartGameScreen>
    </View>
    
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }

});