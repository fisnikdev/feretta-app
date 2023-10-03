import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

import Colors from '../constants/Colors.js';

const LoginScreen = props => {

    const [password, setPassword] = useState ('')
    const handlePasswordChange = (text) => {
        setPassword(text);
    };
    const [text, setText] = useState ('')
    const handleTextChange = (inputText) => {
        const formattedText = inputText.replace(/\s/g, '');
        if (formattedText.length <= 6) {
            setText=(formattedText);
        }
    };
    return (
            <View style={styles.screen}>
                <View>
                    <Text style={styles.title}>Kyçu ne llogarinë tuaj:</Text>
                
                <View style={styles.inputContainer}>
                    <Text style={styles.title}>Perdoruesi</Text>
                    <TextInput 
                    style={styles.textInputSt}
                    />
                
                <View style={styles.inputContainer}>
                    <Text style={styles.title}>Fjalekalimi</Text>
                    <TextInput 
                    style={styles.textInputSt}
                    secureTextEntry={true}
                    value={password}
                    maxLength={6}
                    autoCapitalize='none'
                    onChangeText={handlePasswordChange}
                    />

                <View style={styles.buttonContainer}>
                <Button title='Kycu' onPress={() => {}} />

                </View>
                </View>
                </View>
                </View>
                </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },

    buttonContainer: {
    marginTop: '30%',
    paddingHorizontal: 20,
    backgroundColor: '#e4e2e0'

    },

    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },

    inputContainer: {
        maxWidth: '100%',
        alignItems: 'center',
        marginTop: '15%',
        padding: 10,
        justifyContent: 'center'
    },

    textInputSt: {
        backgroundColor: '#e4e2e0',
        marginTop: '5%',
        maxWidth: '100%',
        paddingHorizontal: 80,
        paddingVertical: 10,
        borderRadius: 20,
        borderColor: Colors.blackJet,
        borderWidth: 1
        
    }
});

export default LoginScreen;