import React from 'react';
import { StyleSheet } from 'react-native';
import { Formik } from 'formik';
import { Layout, Input, Text, Button, Icon, IconRegistry } from "@ui-kitten/components"
import { useNavigation } from '@react-navigation/native';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

const ForgotPassScreen = () => {
    const handleForgotPassword = (values) => {

        console.log('Forgot Password Form Values:', values);
    };

    const navigation = useNavigation();
    const handleLoginDirect = () => {
        navigation.navigate('Kyçu')
    };
    
    const linkIcon = (props) => {
        return <Icon name='link' {...props} />
    }

    return (
        <>
        <IconRegistry icons={EvaIconsPack} />
        <Layout style={styles.screen}>
            <Text category='s1' style={styles.titleStyling}>Ju lutem shkruani e-mail tuaj</Text>
            <Formik
                initialValues={{ email: '' }}
                onSubmit={handleForgotPassword}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <Layout>
                        <Input
                            style={styles.inputStyling}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            placeholder="Email"
                        />
                        <Button onPress={handleLoginDirect} accessoryLeft={linkIcon}>Dergo Linkun</Button>
                    </Layout>
                )}
            </Formik>
        </Layout>
        </>
    );
};



const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },

    titleStyling: {
        marginTop: 20
    },

    inputStyling: {
        padding: 10,
        width: 250
    }
});

export default ForgotPassScreen;