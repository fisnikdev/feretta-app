import React from "react"; 
import {View, Text, StyleSheet, TextInput, Button} from "react-native";

const LoginScreen = props => {
<View style={styles.screen}>
    <Text>Kyçu ne llogarinë tuaj:</Text>
    <TextInput></TextInput>
    

</View>
};

const styles = StyleSheet.create ({

    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },

    buttonContainer: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    }

});

export default LoginScreen;