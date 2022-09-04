import React from 'react';
import {View,Dimensions,Text, StyleSheet, TouchableOpacity,Image} from "react-native"
import {Fonts} from "../Store/Fonts"
import { Ionicons } from '@expo/vector-icons';
const {height:HEIGHT,width:WIDTH} = Dimensions.get('window');

const CardItem = ({details})=>{
    // console.log(pickHeight)
    const pickHeight = ()=>{
        let random = Math.floor(Math.random() *31);
        return(
            (HEIGHT/3) - random
        )
    }

    console.log(pickHeight())
    return(
        <TouchableOpacity style={styles.masonryContainer}>
            <View>
                <Image style={{
                    height:pickHeight(),
                    width:(WIDTH/2)-20,
                    borderRadius:10
                }} 
                source={details.uri}/>
            </View>
            <View style={styles.heart}>
            <Ionicons name="md-heart-outline" size={24} color="#ff4d4d" />
            </View>
        </TouchableOpacity>
    )
}

export default CardItem;

const styles = StyleSheet.create({
    masonryContainer:{
        paddingHorizontal:5,
        marginHorizontal:2,
        marginVertical:3,
        paddingVertical:15,
        borderRadius:8,
        backgroundColor:Fonts.white2,
        justifyContent:"center",
        alignItems:"center"
    },
    heart:{
        position:"absolute",
        top:5,
        right:10,
        // backgroundColor:Fonts.white,
        padding:5,
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center"
    }
})