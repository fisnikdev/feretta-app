import React from 'react';
import { StyleSheet, Image } from 'react-native';
import * as eva from "@eva-design/eva";
import { default as theme } from "../custom-theme.json";
import { Card, ButtonGroup, Button, Input, Text } from '@ui-kitten/components';

const ProductCard = ({ index, quantity, handleChange, handleIncrement, handleDecrement, price, product
}) => {

  return (
    <Card
      index={index}
      key={index}
      style={styles.cardInput}
      status="primary"
    >
      <Image
        source={require('../images/image.jpg')}
        style={{ width: 200, height: 150 }}
      />
      <ButtonGroup style={styles.buttonContainer} status="primary" size="small">
        <Button onPress={() => handleIncrement(index)}>+</Button>
        <Button onPress={() => handleDecrement(index)}>-</Button>
      </ButtonGroup>
      <Input
        style={styles.inputStyle}
        size="small"
        value={quantity[index].toString()}
        maxLength={2}
        onChangeText={(text) => handleChange(index, text)}
      />
      <Text category="s2" appearance="hint" style={styles.smalltextSt}>
        Sasia
      </Text>
      <Text category="s2" style={styles.smalltextSt}>
        Çmimi: ${product.price}
      </Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardInput: {
    padding: 20,
    marginBottom: 40
  },

  buttonContainer: {
    marginRight: 15,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  smalltextSt: {
    marginLeft: 50
  },

  inputStyle: {
    padding: 2,
    maxWidth: 55,
    marginLeft: 50
  },

  productName: {
    alignSelf: 'center',
    marginTop: 10
  },

})

export default ProductCard;