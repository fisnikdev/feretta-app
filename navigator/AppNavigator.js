import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen.js";
import RegisterScreen from "../screens/RegisterScreen.js";
import ForgotPassScreen from "../screens/ForgotPassScreen.js";
import ShoppingScreen from "../screens/ShoppingScreen.js";
import CartScreen from "../screens/CartScreen.js";
import TyScreen from "../screens/TyScreen.js";
import Colors from "../constants/Colors.js";


const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: Colors.feretta },
                headerTintColor: 'white'
            }}>
            <Stack.Screen name="Kyçu" component={LoginScreen} />
            <Stack.Screen name="Regjistrohu" component={RegisterScreen} />
            <Stack.Screen name="Rikthe Fjalekalimin" component={ForgotPassScreen} />
            <Stack.Screen name="Produktet" component={ShoppingScreen} />
            <Stack.Screen name="Shporta" component={CartScreen} />
            <Stack.Screen name="TyScreen" component={TyScreen} />
        </Stack.Navigator>
    );
};

export default AppNavigator;


