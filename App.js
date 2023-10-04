import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './components/Header.js';
import LoginScreen from './screens/LoginScreen.js';
import ForgotPassScreen from './screens/ForgotPassScreen.js';
import RegisterScreen from './screens/RegisterScreen';

const Stack = createStackNavigator();

export default function App() {

  return (
    <View style={styles.screen}>
      <Header title="Feretta"/>
      <LoginScreen />
      
       </View>
  );
}

const styles = StyleSheet.create({
  
  screen: {
    flex: 1
  }
});
