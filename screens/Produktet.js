import React, { useState } from "react";
import { StyleSheet, Image, ScrollView } from "react-native";
import * as eva from "@eva-design/eva";
import { Text, Layout, Card, Icon, IconRegistry, Button, ButtonGroup, Input } from "@ui-kitten/components";
import { default as theme } from "../custom-theme.json";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
    return (
        <Layout>
            <Text style={styles.productName} category="label">Produkti</Text>
        </Layout>
    )
};

const Produktet = () => {
    const [values, setValues] = useState(['0', '0', '0']);

    const handleChange = (text, index) => {
        const newValues = [...values];
        newValues[index] = text;
        setValues(newValues);
    };

    const handleIncrement = (index) => {
        const newValues = [...values];
        newValues[index] = (parseInt(newValues[index]) + 1).toString();
        setValues(newValues);
    };

    const handleDecrement = (index) => {
        const newValues = [...values];
        newValues[index] = (parseInt(newValues[index]) - 1).toString();
        setValues(newValues);
    };

    const hasValueGreaterThanZero = values.some((value) => parseInt(value) > 0);

    const navigation = useNavigation();
    const handleSubmit = () => {
        navigation.navigate('TyScreen')
    };

    const BagIcon = (props) => {
        return <Icon name='shopping-bag' {...props} />
    }

    return (
        <ScrollView style={{ flex: 1 }}>
            <>
                <IconRegistry icons={EvaIconsPack} />
                <Layout
                    level="1"
                    style={styles.container}
                >
                    {values.map((value, index) => (
                        <Card
                            key={index}
                            style={styles.cardInput}
                            status="primary"
                            header={Header}
                        >
                            <Image source={require('../images/image.jpg')} style={{ width: 200, height: 150 }} />
                            <Text category="p2">5 KG - 4.00$</Text>
                            <ButtonGroup style={styles.buttonContainer} status='primary'>
                                <Button onPress={() => handleIncrement(index)}>+</Button>
                                <Button onPress={() => handleDecrement(index)}>-</Button>
                            </ButtonGroup>
                            <Input
                                style={styles.inputStyle}
                                size='small'
                                keyboardType="numeric"
                                value={value}
                                onChangeText={(text) => handleChange(text, index)}
                            />
                            <Text category="s2"
                                appearance="hint"
                                style={styles.smalltextSt}>Sasia</Text>
                        </Card>
                    ))}
                    {hasValueGreaterThanZero && (
                        <Button style={{ marginBottom: 20 }} onPress={handleSubmit} accessoryLeft={BagIcon} status="primary">
                            Porosit
                        </Button>
                    )}
                </Layout>
            </>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 10,
    },

    cardInput: {
        padding: 20,
        marginBottom: 40
    },

    headerTitle: {
        padding: 10
    },

    inputStyle: {
        padding: 2,
        maxWidth: 55,
        marginLeft: 50
    },

    buttonContainer: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    productName: {
        alignSelf: 'center',
        marginTop: 10,
    },

    smalltextSt: {
        marginLeft: 50
    },

});

export default Produktet;
