import React from 'react'
import { StyleSheet, Text } from 'react-native'

import Values from '../constants/Values'

export default function TitleText(props) {
    return (
        <Text style={{ ...styles.text, ...props.style }}>{props.children}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: Values.fontPrimaryBold,
        fontSize:20,
        padding:10,
    },
})