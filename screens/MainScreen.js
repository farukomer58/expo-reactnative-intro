import React from 'react';
import { View, StyleSheet, Image, ScrollView } from 'react-native';
import {
    Ionicons,
    AntDesign,
    FontAwesome
} from '@expo/vector-icons';
import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';

import TitleText from '../components/TitleText'
import BodyText from '../components/BodyText'
import CustomButton from '../components/CustomButton'
import IconButton from '../components/IconButton';

import Values from '../constants/Values'
import Styles from '../constants/Styles'

// Function for opening URL
const handleBrowse = (url) => {
    Linking.openURL(url);
    this.props.onPress && this.props.onPress();
}
const handleBrowseWithWebBrowser = (url) => {
    WebBrowser.openBrowserAsync(url);
};

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
                    <BodyText style={Styles.paragraph}>

                        I am Omer Citik, 20 years old and I am currently in my third year of the HBO-ICT: Software Engineering course at
                        the Hogeschool van Amsterdam (HVA). I am very interested and passionate about developing software in general
                        and programming. This since a young age. During my education, I participated in various software projects, and
                        gained a lot of theoretical knowledge.
                        I cannot wait to apply my knowledge in real world and further improve my competencies and skills in software
                        development. My profession is mainly in Java, JavaScript, React, Java Spring .

                    </BodyText>

                </View>

                <View style={styles.buttonContainer}>
                    {/* Here apply some functionality  */}
                    <CustomButton title='Change Color' />
                    <CustomButton style={styles.button} title='Change Color' />
                </View>


                {/* Icons for social */}
                <View style={styles.iconContainer}>
                    <IconButton component={AntDesign} icon={"github"} size={50} color="black" onPress={() => { handleBrowse("https://github.com/farukomer58") }} />
                    <IconButton component={AntDesign} icon={"linkedin-square"} size={50} color="black" onPress={() => { handleBrowse("https://www.linkedin.com/in/omercitik/") }} />
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

    iconButton: {
        paddingRight: 0,
        fontSize: 30,
    }


})