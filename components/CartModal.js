import React from "react";
import { StyleSheet } from "react-native";
import { Text, Modal, Button } from "@ui-kitten/components"

const CartModal = ({ isVisible, closeCartModal, cartItems }) => {
  return (
    <Modal 
    backdropStyle={styles.backdrop} 
    visible={isVisible}
    onBackdropPress={() => setVisible(false)}>
      {cartItems && cartItems.length > 0 ? (
        cartItems.map((item, index) => (
          <Text key={index}>{item.productName}</Text>
        ))
      ) : (
        <Text category="s1" style={{color: 'white'}}>Shporta juaj eshte e zbrazet.</Text>
      )}
      <Button style={styles.buttonContainer} onPress={closeCartModal}>Mbylle</Button>
    </Modal>
  );
};

export default CartModal;


const styles = StyleSheet.create({
  screen: {
    flex: 1
  },

  buttonContainer: {
    alignSelf: 'center',
    width: 'auto',
    marginTop: 8
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },

})
