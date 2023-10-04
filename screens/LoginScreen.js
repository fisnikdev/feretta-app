import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Formik } from 'formik';
import Colors from '../constants/Colors.js';

const LoginScreen = props => {
    const [password, setPassword] = useState('');
    const handlePasswordChange = (text) => {
        setPassword(text);
    };

    const [text, setText] = useState('');
    const handleTextChange = (inputText) => {
        const formattedText = inputText.replace(/\s/g, '');
        if (formattedText.length <= 6) {
            setText(formattedText); 
        }
    };

    return (
        <View style={styles.screen}>
            <View>
                <Text style={styles.title}>Kyçu ne llogarinë tuaj:</Text>

                <Formik
                    initialValues={{ username: '', password: '' }}
                    onSubmit={(values) => {
                        
                        console.log(values);
                    }}
                    validate={(values) => {
                        const errors = {};
                        if (!values.username) {
                            errors.username = 'Username is required';
                        }
                        if (!values.password) {
                            errors.password = 'Password is required';
                        }
                        return errors;
                    }}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                        <View>
                            <TextInput
                                style={styles.textInputSt}
                                onChangeText={handleChange('username')}
                                onBlur={handleBlur('username')}
                                value={values.username}
                                placeholder="Username"
                            />
                            {errors.username && <Text style={{ color: 'red' }}>{errors.username}</Text>}
                            <TextInput
                                style={styles.textInputSt}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                                placeholder="Password"
                                secureTextEntry
                            />
                            {errors.password && <Text style={{ color: 'red' }}>{errors.password}</Text>}
                            <Button title="Kyçu"
                            onPress={handleSubmit}
                             />
                        </View>
                    )}
                </Formik>
            </View>

            
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 30,
        alignItems: 'center'
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },

    inputContainer: {
        flex: 1,
        alignItems: 'center',
        marginTop: '15%'
    },

    textInputSt: {
        backgroundColor: 'white',
        width: 200,
        padding: 10,
        marginTop: '5%',
        marginBottom: '5%',
        borderRadius: 10,
        borderColor: Colors.blackJet,
        borderWidth: 0.5

    }
});

export default LoginScreen;
