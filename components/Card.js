import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Card = props => {
    console.log(props.style.width);
    return (
    <View style={{...styles.card, ...props.style}}>
        {props.children}
    </View>
    );
};

const styles = StyleSheet.create({
    card: {
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8,
        backgroundColor: 'white',
        padding: 20
    }
});

export default Card;