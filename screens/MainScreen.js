import React from 'react';
import { View, StyleSheet, Image, ScrollView } from 'react-native';
import {
    Ionicons,
    AntDesign,
    FontAwesome
} from '@expo/vector-icons';

import TitleText from '../components/TitleText'
import BodyText from '../components/BodyText'
import CustomButton from '../components/CustomButton'
import IconButton from '../components/IconButton';

import Values from '../constants/Values'
import Styles from '../constants/Styles'

export default function MainScreen(props) {
    return (
        <ScrollView>
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
                <View style={styles.iconContainer}>
                    <Ionicons name="md-checkmark-circle" size={32} color="green" />
                    <AntDesign name="github" size={50} color="black" />
                    <FontAwesome.Button style={styles.iconButton} name="facebook" backgroundColor="#3b5998" onPress={() => { }}>
                    </FontAwesome.Button>
                    <IconButton component={AntDesign} icon={"github"} size={50} color="black" onPress={()=>{}} />
                </View>

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({

    container: {
        marginHorizontal: 20,
        marginVertical: 50,
    },

    // Image Styling / Headerr
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

    // Buttons 
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 20,
    },

    button: {
        backgroundColor: Values.secondaryColor,
    },

    // Icons
    iconContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20
    },

    iconButton:{
        paddingRight:0,
        fontSize:30,
    }


})