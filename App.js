import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/Header.js';
import LoginScreen from './screens/LoginScreen.js';

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
