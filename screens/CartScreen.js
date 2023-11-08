import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Layout, Button, Text, Input, Card, Icon, IconRegistry } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import { default as theme } from "../custom-theme.json";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import PayIcon from "../icons/PayIcon";
import CartModal from "../components/CartModal";
import BagIcon from "../icons/BagIcon";

const CartScreen = ({ cart, removeFromCart }) => {

    const [isCartModalVisible, setCartModalVisible] = useState(false);
    const openCartModal = () => {
        setCartModalVisible(true);
    };
    const closeCartModal = () => {
        setCartModalVisible(false);
    };

    return (
        <>
            <IconRegistry icons={EvaIconsPack} />
            <Layout style={styles.screen}>
                <Button 
                style={styles.buttonContainer} 
                accessoryLeft={BagIcon} 
                size='medium' 
                onPress={openCartModal}>Produktet ne shporte</Button>
                <CartModal
                    isVisible={isCartModalVisible}
                    closeCartModal={closeCartModal}
                    cartItems={cart}
                />
            </Layout>
        </>
    );
};


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10
    },

    buttonContainer: {
        width: 'auto',
        alignSelf: 'center',
        borderColor: 'white',
        borderRadius: 120
    }
});

export default CartScreen