import React, { useState } from 'react';
import {
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { Layout, Text, Input, Button, Icon, IconRegistry } from "@ui-kitten/components";
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

    const UserIcon = (props) => {
        return <Icon name='person' {...props} />
    };

    const LoginIcon = (props) => {
        return <Icon name='log-in' {...props} />
    }

    const PassIcon = (props) => {
        return <Icon name='eye' {...props} />
    }

    return (
        <>
        <IconRegistry icons={EvaIconsPack} />
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
                                accessoryLeft={UserIcon}
                            />
                            {touched.username && errors.username && <Text style={{ color: 'red', maxWidth: 200 }}>{errors.username}</Text>}
                            <Input
                                style={styles.textInputSt}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                                placeholder="Fjalekalimi"
                                maxLength={9}
                                secureTextEntry
                                accessoryLeft={PassIcon}
                            />
                            {touched.password && errors.password && <Text style={{ color: 'red' }}>{errors.password}</Text>}
                            <Button onPress={switchToProduktet} size="medium" accessoryLeft={LoginIcon}>Kyçu</Button>
                            <TouchableOpacity onPress={handleRegisterLink}>
                                <Text category='label' style={{ marginTop: 20 }}>Nuk ke llogari te hapur? Regjistrohu</Text>
                            </TouchableOpacity>
                        </Layout>
                    )}
                </Formik>


            </Layout>


        </Layout>
        </>
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
        padding: 10
    },

    inputContainer: {
        flex: 2,
        alignItems: 'center'
    },

    textInputSt: {
        backgroundColor: 'white',
        alignItems: 'center',
        padding: 10,
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
