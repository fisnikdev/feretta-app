import React from "react";
import { StyleSheet } from "react-native";
import * as eva from "@eva-design/eva";
import { default as theme } from "../custom-theme.json";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { Layout, Text, Icon, IconRegistry, Card, Button } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";


const Checkmark = (props) => {
    return <Icon name='checkmark' {...props} />;
};

const TyScreen = () => {

    const navigation = useNavigation();
    const handleMainLink = () => {
        navigation.navigate('Produktet')
    };

    return (
        <>
            <IconRegistry icons={EvaIconsPack} />
            <Layout level='1' style={styles.screen}>

                <Card style={styles.cardStyling} status='primary' accessoryLeft={(props) => (
                    <Checkmark {...props} width={100} height={100} />)}>
                    <Text category="label" style={{ alignSelf: 'center' }}>#kodiporosis</Text>
                    <Text category="h5" style={styles.text}>Porosia u be me sukses.</Text>
                    <Button onPress={handleMainLink} accessoryLeft={Checkmark}>Rikthehu</Button>
                </Card>
            </Layout>
        </>
    )

};


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },

    text: {
        marginTop: 20,
        marginBottom: 20
    },

    cardStyling: {
        marginTop: 20
    }
});

export default TyScreen;