import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
    TouchableOpacity
} from 'react-native';

import RegisterScreen from './RegisterScreen.js';
import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/native';
import Colors from '../constants/Colors.js';

const LoginScreen = () => {
    const navigation = useNavigation();
    const handleRegisterLink = () => {
        navigation.navigate('RegisterScreen')
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
                            errors.username = 'Perdoruesi eshte i domosdoshem';
                        }
                        if (!values.password) {
                            errors.password = 'Fjalekalimi eshte i domosdoshem';
                        }
                        return errors;
                    }}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                        <View>
                            <TextInput
                                style={styles.textInputSt}
                                onChangeText={handleChange('username')}
                                onBlur={handleBlur('username')}
                                value={values.username}
                                placeholder="Perdoruesi"
                            />
                            {touched.username && errors.username && <Text style={{ color: 'red' }}>{errors.username}</Text>}
                            <TextInput
                                style={styles.textInputSt}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                                placeholder="Fjalekalimi"
                                secureTextEntry
                            />
                            {touched.password && errors.password && <Text style={{ color: 'red' }}>{errors.password}</Text>}
                            <Button title="Kyçu"
                                onPress={handleSubmit}
                            />
                            <TouchableOpacity onPress={handleRegisterLink}>
                                <Text style={{ fontWeight: 'bold' }}>Nuk ke llogari te hapur? Regjistrohu</Text>
                            </TouchableOpacity>
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
        alignItems: 'center',
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: '5%'
    },

    inputContainer: {
        flex: 1,
        alignItems: 'center',
        marginTop: '15%',
        marginLeft: '10%'
    },

    textInputSt: {
        backgroundColor: 'white',
        alignItems: 'center',
        width: 200,
        padding: 10,
        marginTop: '5%',
        marginBottom: '5%',
        marginLeft: '10%',
        borderRadius: 10,
        borderColor: Colors.blackJet,
        borderWidth: 0.5

    },

    signupStyle: {
        fontWeight: 'bold',
        color: Colors.blackJet
    }
});

export default LoginScreen;
