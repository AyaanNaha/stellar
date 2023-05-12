import React, { Component } from 'react';
import { View, Text, Alert, StyleSheet, ImageBackground, TouchableOpacity, Image, Linking } from 'react-native';
import Axios from 'axios';

export default class DailyPicScreen extends Component {
    constructor() {
        super();
        this.state = {
            apod: {}
        }
    }

    getAPOD = () => {
        Axios.get("https://api.nasa.gov/planetary/apod?api_key=baMfIyEDI5Cfq6rIAnJTqm8j64PDpMFivVGhDUgb")
            .then(response => {
                this.setState({ apod: response.data })
            })
            .catch(erros => {
                Alert.alert(error.message)
            })
    }

    componentDidMount() {
        this.getAPOD();
    }

    render() {
        if (Object.keys(this.state.apod).length === 0) {
            return (
                <View style={{ justifyContent: 'center', flex: 1 }}>
                    <Text style={{ fontSize: 25, textAlign: 'center' }}>Loading...</Text>
                </View>
            )
        } else {
            return (
                <View style={styles.container}>
                    <ImageBackground source={require('../assets/stars.gif')} style={styles.backgroundImage}>
                        <Text style={styles.routeText}>Astronomy Picture of the Day</Text>
                        <Text style={styles.titleText}>{this.state.apod.title}</Text>

                        <TouchableOpacity style={styles.listContainer}
                            onPress={() => Linking.openURL(this.state.apod.url).catch(err => console.error("Couldn't load page", err))}>
                            <View style={styles.iconContainer}>
                                <Image source={require("../assets/play-video.png")} style={{ width: 50, height: 50 }}></Image>
                            </View>
                        </TouchableOpacity>

                        <Text style={styles.explanationText}>{this.state.apod.explanation}</Text>
                    </ImageBackground>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        width: '100%',
        
        alignItems:'center'
    },
    routeText:{
        textAlign:'center',
        marginTop:20,
        color:'white',
        fontSize:30,
        fontWeight:'bold'
    },
    titleText:{
        textAlign:'center',
        marginTop:20,
        color:'magenta',
        fontSize:25,
        fontWeight:'bold'
    },
    explanationText:{
        margin: 20,
        color:'white',
        
    }
})