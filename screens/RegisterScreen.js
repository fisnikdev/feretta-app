import React from 'react';
import {
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { Layout, Text, Input, Button, Icon, IconRegistry } from "@ui-kitten/components"
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import PassIcon from '../icons/PassIcon.js'
import EmailIcon from '../icons/EmailIcon.js'
import RegIcon from '../icons/RegIcon.js'
import UserIcon from '../icons/UserIcon.js'

//Libraria e kycjes
import { Formik } from 'formik';

// Ngjyrat
import Colors from '../constants/Colors.js';

// Navigacioni
import { useNavigation } from '@react-navigation/native';


const RegisterScreen = () => {
    const navigation = useNavigation();
    const handleLoginLink = () => {
        navigation.navigate('Kyçu')
    };


    return (
        <>
        <IconRegistry icons={EvaIconsPack} />
        <Layout style={styles.screen}>
            <Layout style={styles.inputContainer}>
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
                            {touched.username && errors.username && <Text style={{ color: 'red' }}>{errors.username}</Text>}
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
                            <Input
                                style={styles.textInputSt}
                                onChangeText={handleChange('confirmPassword')}
                                onBlur={handleBlur('confirmPassword')}
                                value={values.confirmPassword}
                                placeholder="Konfirmo Fjalekalimin"
                                maxLength={9}
                                secureTextEntry
                                accessoryLeft={PassIcon}
                            />
                            {touched.confirmPassword && errors.confirmPassword && <Text style={{ color: 'red' }}>{errors.confirmPassword}</Text>}
                            <Input
                                style={styles.textInputSt}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                placeholder="Email"
                                accessoryLeft={EmailIcon}
                            />
                            {touched.email && errors.email && <Text style={{ color: 'red' }}>{errors.email}</Text>}
                            <Button onPress={handleSubmit} accessoryLeft={RegIcon}>Regjistrohu</Button>
                            <TouchableOpacity onPress={handleLoginLink}>
                                <Text style={{ fontWeight: 'bold', marginLeft: 25, marginTop: 10 }} appearance='hint'>Ke llogari te hapur? Kyçu</Text>
                            </TouchableOpacity>
                        </Layout>
                    )}
                </Formik>
            </Layout>
        </Layout>
        </>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 30,
        alignItems: 'center',
    },

    title: {
        fontSize: 20,
        padding: 10
    },

    inputContainer: {
        flex: 1,
        alignItems: 'center',
    },

    textInputSt: {
        backgroundColor: 'white',
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        borderColor: Colors.blackJet,
        borderWidth: 0.5

    }
});

export default RegisterScreen;