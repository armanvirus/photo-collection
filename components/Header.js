import React from 'react';
import {View, Text,TextInput, StyleSheet, Dimensions} from 'react-native';
import {Fonts} from "../Store/Fonts"
import { EvilIcons } from '@expo/vector-icons';

const {height:HEIGHT,width:WIDTH} = Dimensions.get('window')
const Header = ({ navigation, route, options, back })=>{
    return(
        <View style={[styles.header,{fontFamily: 'RobotoCondensed-Bold',}]}>
            <TextInput  placeholderTextColor="rgb(0,0,30)" style={styles.searchInput} placeholder="Search Alumni Here..."/>
            <View style={styles.searchIcon}>
            <EvilIcons name="search" size={24} color={Fonts.white} />
            </View>
        </View>

    )
}


export default Header;

const styles = StyleSheet.create({
    header:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        width:"100%",
    },
    searchInput:{
        backgroundColor:Fonts.white,
        width:"85%",
        color:"rgb(10,10,20)",
        paddingHorizontal:15,
        paddingVertical:8,
        borderTopLeftRadius:15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5
    },
    searchIcon:{
        width:"14%",
        paddingVertical:13,
        backgroundColor:Fonts.primaryColor1,
        borderTopRightRadius:15,
        borderBottomRightRadius:15,
        justifyContent:"center",
        alignItems:"center",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5

    }
})