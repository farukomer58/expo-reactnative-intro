import React from 'react'
import { View, StyleSheet, Image, Button } from 'react-native'

import TitleText from '../components/TitleText'
import BodyText from '../components/BodyText'

import Values from '../constants/Values'
import Styles from '../constants/Styles'

export default function MainScreen(props) {
    return (
        <View>

            <View style={styles.imageContainer}>
                <Image
                    source={require("../assets/images/profile.jpg")}
                    style={styles.profileImage}
                />
                <TitleText style={styles.title}>I am Omer Faruk</TitleText>
                <BodyText style={Styles.paragraph}>Lorem    Lorem    Lorem    Lorem    Lorem    Lorem    Lorem    Lorem    Lorem    Lorem    Lorem    </BodyText>


                <Button title='Change Color' />

                {/* Icons for social */}
            </View>

        </View>
    )
}

const styles = StyleSheet.create({

    // Image Styling
    imageContainer: {
        paddingTop: 50,
        justifyContent: "center",
        alignItems: "center"

    },

    profileImage: {
        width: 250,
        height: 250,
    },

    title: {
    }


})