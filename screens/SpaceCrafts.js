import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import axios from 'axios';

export default class SpaceCraftsScreen extends Component {
    constructor() {
        super();
        this.state = {
            aircrafts: {}
        }
    }

    getData=()=> {
        axios.get("https://ll.thespacedevs.com/2.0.0/config/spacecraft/").then(response => {
            this.setState({ aircrafts: response.data.results })
        })
        .catch(error => {
            console.log(error.message)
        })
    }

    componentDidMount() {
        this.getData();
    }

    renderItem = ({item}) => {
        if (item.agency.image_url === null) {
            item.agency.image_url = "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/orbiter_images/apollo2520command2fservice2520module_image_20190207032507.jpeg"
        }
        return (
            <View style={styles.container}>
                <Image
                    source={{uri: item.agency.image_url}} style={styles.image}
                ></Image>

                <Text style={{fontWeight:'bold', fontSize:20}}>{item.name}</Text>
                <Text style={{color:'#696969'}}>{item.agency.name}</Text>
                <Text>DESCRIPTION</Text>
                <Text style={{color:'#A9A9A9'}}>{item.agency.description}</Text>
            </View>
        )
        
    }

    keyExtractor = ({item}, index) => {
        index.toString();
    }

    render() {
        return (
            <View 
                style={{
                    flex:1,
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                <View style={{flex:0.25, marginTop: 20}}>
                    <Text style={{fontSize:25}}>Space Crafts</Text>
                </View>
                <View style={{flex:0.75}}>
                    <FlatList
                        keyExtractor={this.keyExtractor}
                        data={this.state.aircrafts}
                        renderItem={this.renderItem}
                    ></FlatList>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        borderWidth:1,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:10,
        elevation:10
    },
    image:{
        width: "100%",
        height:200,
        marginTop:15,
        marginBottom:15,
        marginRight:10
    }
})