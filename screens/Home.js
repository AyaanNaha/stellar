import React, { Component } from 'react';
import {
    View, 
    Text,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
    Image
} from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground 
                    source={require("../assets/stars.gif")}
                    style={styles.backgroundImage}>

                    <Image source={require("../assets/main-icon.png")} style={styles.mainIcon}></Image>

                    <View style={styles.title}>
                        <Text style={styles.titleText}>Stellar App</Text>
                    </View>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("SpaceCrafts")
                    }>
                        <Text style={styles.routeText}>Space Crafts</Text>
                        <Image source={require("../assets/space_crafts.png")}
                            style={[styles.routeImage, {width:60,height:90}]}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("StarMap")
                    }>
                        <Text style={styles.routeText}>Star Map</Text>
                        <Image source={require("../assets/star_map.png")}
                            style={[styles.routeImage, {width:88,height:80, right:-18}]}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("DailyPic")
                    }>
                        <Text style={styles.routeText}>Daily Pictures</Text>
                        <Image source={require("../assets/daily_pictures.png")}
                            style={[styles.routeImage, {width:90,height:96, right:-15}]}></Image>
                    </TouchableOpacity>
                    
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1, 
    },
    backgroundImage:{
        flex:1,
        resizeMode:'cover'
    },
    title:{
        justifyContent:'center',
        alignItems:'center',
        marginBottom:40
    },
    titleText:{
        fontSize:50,
        fontWeight:'bold',
        color:'white',
        textAlign:'center'
    },
    mainIcon:{
        width:160, 
        height:160,
        alignSelf:'center',
        marginTop:20
    },
    routeCard:{
        alignSelf:'center',
        alignItems:'center',
        width:'90%',
        backgroundColor:'white',
        height:'12%',
        borderRadius:50,
        marginTop:20
    },
    routeText:{
        color:'#df0182',
        marginTop:25,
        fontSize:25,
        fontWeight:'bold',
    },
    routeImage:{
        position:"absolute",
        right:0,
        bottom:15,
        resizeMode:'contain'
    }
})