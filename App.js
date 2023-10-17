import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import 'react-native-gesture-handler';
import { ApplicationProvider, Layout, Text } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import Header from './components/Header.js';
import AppNavigator from './navigator/AppNavigator.js';
import TyScreen from './screens/TyScreen.js';
import { default as theme } from "./custom-theme.json";

const Stack = createStackNavigator();

export default function App() {

  return (
    <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
      <Layout style={styles.screen}>
        <Header />
        <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
      </Layout>
    </ApplicationProvider>
  );

}

const styles = StyleSheet.create({

  screen: {
    flex: 1
  }
});
