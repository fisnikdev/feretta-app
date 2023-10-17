import React, { useState } from 'react';
import {
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { Layout, Text, Input, Button } from "@ui-kitten/components";
import * as eva from "@eva-design/eva"
import { default as theme } from "../custom-theme.json";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import RegisterScreen from './RegisterScreen';
import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/native';
import Colors from '../constants/Colors.js';
import Produktet from './Produktet'

const LoginScreen = () => {
    const navigation = useNavigation();
    const handleRegisterLink = () => {
        navigation.navigate('Regjistrohu')
    };
    const switchToProduktet = () => {
        navigation.navigate('Produktet')
    };

    const alphanumericRegex = /^[a-zA-Z0-9]+$/;


    return (
        <Layout style={styles.screen}>
            <Layout>
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
                        } else if (!alphanumericRegex.test(values.username)) {
                            errors.username = 'Lejohen vetem shkronja dhe numra';
                        }
                        if (!values.password) {
                            errors.password = 'Fjalekalimi eshte i domosdoshem';
                        }
                        return errors;
                    }}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                        <Layout>
                            <Input
                                style={styles.textInputSt}
                                onChangeText={handleChange('username')}
                                onBlur={handleBlur('username')}
                                value={values.username}
                                placeholder="Perdoruesi"
                                maxLength={9}
                            />
                            {touched.username && errors.username && <Text style={{ color: 'red' }}>{errors.username}</Text>}
                            <Input
                                style={styles.textInputSt}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                                placeholder="Fjalekalimi"
                                maxLength={9}
                                secureTextEntry
                            />
                            {touched.password && errors.password && <Text style={{ color: 'red' }}>{errors.password}</Text>}
                            <Button onPress={switchToProduktet} size="medium">Kyçu</Button>
                            <TouchableOpacity onPress={handleRegisterLink}>
                                <Text category='label' style={{ marginTop: 20 }}>Nuk ke llogari te hapur? Regjistrohu</Text>
                            </TouchableOpacity>
                        </Layout>
                    )}
                </Formik>


            </Layout>


        </Layout>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 2,
        padding: 20,
        alignItems: 'center'
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
        marginBottom: 10
    },

    inputContainer: {
        flex: 1,
        alignItems: 'center',
        marginTop: 20,
        marginLeft: 10
    },

    textInputSt: {
        backgroundColor: 'white',
        alignItems: 'center',
        width: 200,
        padding: 10,
        marginLeft: 10,
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
