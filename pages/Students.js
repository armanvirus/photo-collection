import React from 'react';
import {
    View,StyleSheet,
    Text,ScrollView, 
    TouchableOpacity,
    Image,
} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import MasonryList from '@react-native-seoul/masonry-list';
import {StudentsDetails} from '../Store/Details';
import CardItem from "../components/CardItem";
import {Fonts} from "../Store/Fonts"
import { useFonts } from 'expo-font';

const Students = ()=>{
    const [fontsLoaded] = useFonts({
        'Lato-Regular': require('../assets/FontFamilies/Lato-Regular.ttf'),
        'RobotoCondensed-Regular': require('../assets/FontFamilies/RobotoCondensed-Regular.ttf'),
        'JosefinSans-Regular': require('../assets/FontFamilies/JosefinSans-Regular.ttf'),
        'JosefinSans-SemiBold': require('../assets/FontFamilies/JosefinSans-SemiBold.ttf'),
        'RobotoCondensed-Bold': require('../assets/FontFamilies/RobotoCondensed-Bold.ttf')
      });
    return(
        <ScrollView style={{
            paddingVertical:5
        }}>
        <View style={styles.heading}>
        <Ionicons 
        name="ios-grid" 
        size={25} 
        color={Fonts.primaryColor1} />
            <Text style={[
                styles.headingText,
                {fontFamily: 'RobotoCondensed-Bold',}
            ]}
            >Explore <Text style={{color:Fonts.primaryColor2}}>Alumni</Text></Text>
        </View>
        <MasonryList
        style={{
            paddingVertical:3,
            backgroundColor:Fonts.white
        }}
        data={StudentsDetails}
        keyExtractor={(item)=> item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <CardItem details={item} />}
//   refreshing={isLoadingNext}
//   onRefresh={() => refetch({first: ITEM_CNT})}
//   onEndReachedThreshold={0.1}
//   onEndReached={() => loadNext(ITEM_CNT)}
/>
        </ScrollView>
    )
}

export default Students;

const styles = StyleSheet.create({
    heading:{
        flexDirection:"row",
        alignItems:"center",
        marginVertical:10,
        height:40,
        paddingHorizontal:15,
        paddingVertical:5
    },
    headingText:{
        fontSize:18,
        marginLeft:10,
        color:Fonts.primaryColor1
    
    }
})