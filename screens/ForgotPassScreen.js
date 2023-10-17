import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Formik } from 'formik';


const ForgotPassScreen = () => {
    const handleForgotPassword = (values) => {

        console.log('Forgot Password Form Values:', values);
    };

    return (
        <View>
            <Text>Keni harruar fjalekalimin?</Text>
            <Formik
                initialValues={{ email: '' }}
                onSubmit={handleForgotPassword}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <View>
                        <TextInput
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            placeholder="Email"
                        />
                        <Button title="Reset Password" onPress={handleSubmit} />
                    </View>
                )}
            </Formik>
        </View>
    );
};
      


const styles = StyleSheet.create({});

export default ForgotPassScreen;