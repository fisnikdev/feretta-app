import React, { useState } from "react";
import { StyleSheet, ScrollView } from "react-native";
import * as eva from "@eva-design/eva";
import { Layout, IconRegistry, Button } from "@ui-kitten/components";
import { default as theme } from "../custom-theme.json";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { useNavigation } from "@react-navigation/native";
import BagIcon from "../icons/BagIcon";
import ProductCard from "../components/ProductCard";
import CartIcon from "../icons/CartIcon";
import CartModal from "../components/CartModal";

const ShoppingScreen = () => {
    const [quantity, setQuantity] = useState(['0', '0', '0']);
    const product = [
        { id: 0, name: "Miell 5 KG", price: 4 },
        { id: 1, name: "Miell 10 KG", price: 7 },
        { id: 2, name: "Miell 15 KG", price: 10 }
    ];

    const handleChange = (index, value) => {
        const newQuantity = [...quantity];
        newQuantity[index] = value;
        setQuantity(newQuantity);
    };

    const handleIncrement = (index) => {
        const newQuantity = [...quantity];
        newQuantity[index] = (parseInt(newQuantity[index]) + 1).toString();
        setQuantity(newQuantity);
    };

    const handleDecrement = (index) => {
        if (quantity[index] > 0) {
            const newQuantity = [...quantity];
            newQuantity[index] = (parseInt(newQuantity[index]) - 1).toString();
            setQuantity(newQuantity);
        }
    };

    const totalPrice = quantity.reduce((acc, current, index) => {
        return acc + current * product[index].price;
    }, 0);

    const hasValueGreaterThanZero = quantity.some((qty) => parseInt(qty) > 0);

    const [cart, setCart] = useState([]);

    const handleAddToCart = () => {
        const selectedProducts = [];

        product.forEach((productItem, index) => {
            const quantityValue = parseInt(quantity[index]);
            if (quantityValue > 0) {
                // Add the selected product to the array
                selectedProducts.push({
                    name: productItem.name,
                    quantity: quantityValue,
                    price: productItem.price,
                });
            }
        });

        const updatedCart = [...cart, ...selectedProducts];
        setCart(updatedCart);
        console.log("Added to cart!", selectedProducts);
    };

    const navigation = useNavigation();

    const handleCartButton = () => {
        navigation.navigate("Shporta");
    };

    return (
        <ScrollView style={{ flex: 1 }}>
            <>
                <IconRegistry icons={EvaIconsPack} />
                <Layout>
                    <Button
                        appearance='ghost'
                        style={styles.buttonCo}
                        accessoryLeft={CartIcon}  // Cart button
                        size="medium"
                        onPress={handleCartButton}></Button>
                </Layout>
                <Layout level="1" style={styles.container}>
                    {product.map((productItem, index) => (
                        <ProductCard
                            key={index}
                            index={index}
                            quantity={quantity}
                            handleChange={handleChange}
                            handleIncrement={handleIncrement}
                            handleDecrement={handleDecrement}
                            price={totalPrice}
                            product={productItem}  // Product card
                        />
                    ))}
                    {hasValueGreaterThanZero && (
                        <Button
                            style={{ marginBottom: 20 }}
                            onPress={handleAddToCart}  // Add to cart button
                            accessoryLeft={BagIcon}
                            status="primary">
                            Shto ne shporte
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

    buttonCo: {
        width: 50,
        alignSelf: 'flex-end',
        borderColor: '#E9B200',
        borderRadius: 50,
        margin: 10
    }
});

export default ShoppingScreen;
