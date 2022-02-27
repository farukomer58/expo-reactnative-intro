import React from 'react'
import { View, StyleSheet } from 'react-native'

import TitleText from './TitleText'

import Values from '../constants/Values'

export default function Header(props) {
    return (
        <View style={styles.header}>
            <TitleText>{props.title}</TitleText>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: Values.primaryColor,
        width: "100%",
        alignItems:"center",
    },
})