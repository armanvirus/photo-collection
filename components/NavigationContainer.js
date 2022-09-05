import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import About from "../pages/About";
import Staffs from "../pages/Staffs";
import Students from "../pages/Students";
import Individual from "../pages/Individual";
import Photo from "../pages/Photo";
import {Fonts} from "../Store/Fonts"
import Header from "../components/Header"
import { MaterialCommunityIcons,MaterialIcons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const AboutStack = createStackNavigator();
const StaffsStack = createStackNavigator();


function HomeStackScreen() {
    return (
      <HomeStack.Navigator screenOptions={{}}>
        <HomeStack.Screen
          name="Home"
          component={Students}
          options={{ 
            tabBarLabel: 'Home!',
            headerTitle:()=> (<Header/>),
          headerStyle:{
            height:100,
          } }}

        />
        <HomeStack.Screen
          name="Student"
          component={Individual}
          options={{ 
            tabBarLabel: 'Student',
            
           }}
        />
        <HomeStack.Screen
          name="Photo"
          component={Photo}
          options={{ tabBarLabel: 'Photo' }}
        />
      </HomeStack.Navigator>
    );
  }
  
  function StaffsStackScreen() {
    return (
      <StaffsStack.Navigator>
        <StaffsStack.Screen
          name="Staffs"
          component={Staffs}
          options={{ tabBarLabel: 'Staffs' }}
        />
      </StaffsStack.Navigator>
    );
  }

  function AboutStackScreen() {
    return (
      <AboutStack.Navigator>
        <AboutStack.Screen
          name="About"
          component={About}
          options={{ tabBarLabel: 'About' }}
        />
      </AboutStack.Navigator>
    );
  }

const NavContainer = ()=>{
    return(
        <NavigationContainer>
      <Tab.Navigator screenOptions={{
        headerShown:false,
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: Fonts.primaryColor2,
        tabBarStyle:{
          paddingVertical: 8,
          height:50
        }
      }}>
        <Tab.Screen 
        name="Explore"
        component={HomeStackScreen}
        options={{tabBarIcon:()=>(<MaterialCommunityIcons name="select-group" size={28} color={Fonts.primaryColor1} />)}} />
        <Tab.Screen 
        name="Staffs" 
        component={StaffsStackScreen}
        options={{
          tabBarIcon:()=>(<MaterialIcons name="work-outline" size={24} color={Fonts.primaryColor1} />)
        }} />
        <Tab.Screen 
        name="About" 
        component={AboutStackScreen}
        options={{
          tabBarIcon:()=>(<MaterialCommunityIcons name="text-box-multiple-outline" size={24} color={Fonts.primaryColor1} />)
        }}
         />
      </Tab.Navigator>
    </NavigationContainer>
    )
}

export default NavContainer;
