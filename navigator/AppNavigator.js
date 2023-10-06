import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import Colors from "../constants/Colors";

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Kyçu"
                component={LoginScreen}
                options={{
                    headerStyle: {
                        backgroundColor: Colors.feretta
                    },
                    headerTintColor: 'white'
                }} />
            <Stack.Screen name="Regjistrohu" component={RegisterScreen} />
        </Stack.Navigator>
    );
};

export default AppNavigator;


