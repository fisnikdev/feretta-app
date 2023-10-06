import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TextInput,
    Button,
    TouchableOpacity
} from 'react-native';

import LoginScreen from './LoginScreen.js';
//Libraria e kycjes
import { Formik } from 'formik';
// Ngjyrat
import Colors from '../constants/Colors.js';


// Navigacioni
import { useNavigation } from '@react-navigation/native';


const RegisterScreen = () => {
    const navigation = useNavigation();
    const handleLoginLink = () => {
        navigation.navigate('LoginScreen')
    };

    return (

        <View style={styles.screen}>
            <View style={styles.inputContainer}>
                <Text style={styles.title}>Regjistrohu:</Text>

                <Formik
                    initialValues={{ username: '', password: '', email: '', confirmPassword: '' }}
                    onSubmit={(values) => {

                        console.log(values);
                    }}
                    validate={(values) => {
                        const errors = {};
                        if (!values.username) {
                            errors.username = 'Perdoruesi eshte i domosdoshem';
                        } else if (values.username.length > 7) {
                            errors.username = 'Perdoruesi duhet te jete deri ne 7 shifra'
                        }
                        if (!values.password) {
                            errors.password = 'Fjalekalimi eshte i domosdoshem';
                        }

                        if (!values.confirmPassword) {
                            errors.confirmPassword = 'Fjalekalimi nuk eshte i njejt';
                        } else if (values.password !== values.confirmPassword) {
                            errors.confirmPassword = 'Fjalekalimet nuk jane te njejta';
                        }

                        if (!values.email) {
                            errors.email = 'Email eshte i domosdoshem';
                        } else if (!values.email.includes('@')) {
                            errors.email = 'Email jo korrekt';
                        }
                        console.log('Errors', errors)
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
                            <TextInput
                                style={styles.textInputSt}
                                onChangeText={handleChange('confirmPassword')}
                                onBlur={handleBlur('confirmPassword')}
                                value={values.confirmPassword}
                                placeholder="Konfirmo Fjalekalimin"
                                secureTextEntry
                            />
                            {touched.confirmPassword && errors.confirmPassword && <Text style={{ color: 'red' }}>{errors.confirmPassword}</Text>}
                            <TextInput
                                style={styles.textInputSt}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                placeholder="Email"
                            />
                            {touched.email && errors.email && <Text style={{ color: 'red' }}>{errors.email}</Text>}
                            <Button title="Regjistrohu"
                                onPress={handleSubmit}
                            />
                            <TouchableOpacity onPress={handleLoginLink}>
                                <Text style={{ fontWeight: 'bold', marginLeft: '5%' }}>Ke llogari te hapur? Kyçu ketu!</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </Formik>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 30,
        alignItems: 'center',
        marginRight: '10%'
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: '10%'
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

    }
});

export default RegisterScreen;