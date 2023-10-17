import React from "react";
import { Button, StyleSheet } from "react-native";
import * as eva from "@eva-design/eva";
import { default as theme } from "../custom-theme.json";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { Layout, Text, Icon, IconRegistry, Card } from "@ui-kitten/components";
import Header from "../components/Header";


const Checkmark = (props) => {
    return <Icon name='checkmark' {...props}/>;
};

const TyScreen = () => {
    return (
        <>
            <IconRegistry icons={EvaIconsPack} />
            <Layout level='1' style={styles.screen}>
                <Header />
                <Card style={styles.cardStyling} status='primary' accessoryLeft={(props) => (
    <Checkmark {...props} width={100} height={100} />)}>
                    <Text category="label" style={{alignSelf:'center'}}>#kodiporosis</Text>
                    <Text category="h5" style={styles.text}>Porosia u be me sukses.</Text>
                    <Text category="h5" style={{marginLeft: 40}}>Ju Faleminderit!</Text>
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
    marginTop: 40,
    },
    
    cardStyling:{
        marginTop: 20
    }
});

export default TyScreen;