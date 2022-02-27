import React from 'react'
import { View, StyleSheet } from 'react-native'

import TitleText from './TitleText'

import Values from '../constants/Values'

export default function Header(props) {
    return (
        <View style={styles.header}>
            <TitleText style={styles.title}>{props.title}</TitleText>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: Values.primaryColor,
        width: "100%",
        alignItems:"center",
        paddingTop:20,
    },

    title:{
        fontSize:40,
    }
})