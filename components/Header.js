import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/Colors';



const Header = props => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    header: {
        maxWidth: '100%',
        height: 60,
        padding: 10,
        backgroundColor: Colors.feretta,
        alignItems: 'center',
        justifyContent: 'center'
    },

    headerTitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'

    }
});

export default Header;