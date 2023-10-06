import React from 'react';
import { View, StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './components/Header.js';
import AppNavigator from './navigator/AppNavigator.js';

const Stack = createStackNavigator();

export default function App() {
 
  return (
    <View style={styles.screen}>
    <Header />
    <NavigationContainer>
    <AppNavigator />
  </NavigationContainer>
  </View>
  );
  
}

const styles = StyleSheet.create({
  
  screen: {
    flex: 1
  }
});
