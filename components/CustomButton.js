import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'


import BodyText from './BodyText'

import Values from '../constants/Values'

export default function CustomButton(props) {
    return (
        <TouchableOpacity onPress={props.onPress} activeOpacity={0.6}>
            <View style={{ ...styles.button, ...props.style }}>
                <BodyText style={styles.buttonText}>{props.title}</BodyText>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: Values.primaryColor,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25,
        marginHorizontal:5,
    },
    buttonText: {
        color: "black",
        fontSize: 16,
    },
})