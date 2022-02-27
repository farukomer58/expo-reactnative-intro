import React from 'react'
import { View, StyleSheet, Text, TouchableHighlight, TouchableOpacity } from 'react-native'

import BodyText from './BodyText';


export default function IconButton(props) {
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.btnClickContain} activeOpacity={0.6}>
            <View style={styles.btnContainer}>
                {/* Icon */}
                <props.component
                    name={props.icon}
                    size={props.size}
                    color={props.color}
                    style={{ ...styles.btnIcon, ...props.style }} />
                <BodyText style={styles.btnText}>{props.text}</BodyText>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btnClickContain: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'stretch',
        // alignSelf: 'stretch',
        // // backgroundColor: generalProp.backgroundColor,
        // borderRadius: 5,
        // padding: 5,
        // marginTop: 5,
        // marginBottom: 5,
        marginHorizontal: 5
    },
    btnContainer: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        borderRadius: 10,
    },
    btnIcon: {
        // height: 25,
        // width: 25,
    },
    btnText: {
        fontSize: 18,
        color: "black",
        marginLeft: 10,
        marginTop: 2,
    }
})