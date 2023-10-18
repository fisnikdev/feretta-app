import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen.js";
import RegisterScreen from "../screens/RegisterScreen.js";
import ForgotPassScreen from "../screens/ForgotPassScreen.js";
import Produktet from "../screens/Produktet.js";
import TyScreen from "../screens/TyScreen.js";

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Kyçu" component={LoginScreen} />
            <Stack.Screen name="Regjistrohu" component={RegisterScreen} />
            <Stack.Screen name="Rikthe Fjalekalimin" component={ForgotPassScreen} />
            <Stack.Screen name="Produktet" component={Produktet} />
            <Stack.Screen name="TyScreen" component={TyScreen} />
        </Stack.Navigator>
    );
};

export default AppNavigator;


