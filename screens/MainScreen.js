import React from 'react'
import { View, StyleSheet, Image, Button } from 'react-native'

import TitleText from '../components/TitleText'
import BodyText from '../components/BodyText'
import CustomButton from '../components/CustomButton'

import Values from '../constants/Values'
import Styles from '../constants/Styles'

export default function MainScreen(props) {
    return (
        <View style={styles.container}>

            <View style={styles.imageContainer}>
                <Image
                    source={require("../assets/images/profile.jpg")}
                    style={styles.profileImage}
                />
                <TitleText style={styles.title}>I am Omer Faruk</TitleText>
                <BodyText style={Styles.paragraph}>Lorem    Lorem    Lorem    Lorem    Lorem    Lorem    Lorem    Lorem    Lorem    Lorem    Lorem    </BodyText>

            </View>

            <View style={styles.buttonContainer}>
                {/* Here apply some functionality  */}
                <CustomButton title='Change Color' />
                <CustomButton style={styles.button} title='Change Color' />
            </View>


            {/* Icons for social */}
        

        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        marginHorizontal: 20,
        marginVertical: 50,
    },

    // Image Styling
    imageContainer: {
        justifyContent: "center",
        alignItems: "center"
    },

    profileImage: {
        width: 250,
        height: 250,
    },

    title: {
    },

    buttonContainer: {
        flexDirection:"row",
        justifyContent:"center",
        marginTop:20,
    },

    button:{
        backgroundColor: Values.secondaryColor,
    }


})