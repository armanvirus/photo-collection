import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import About from "../pages/About";
import Staffs from "../pages/Staffs";
import Students from "../pages/Students";
import Individual from "../pages/Individual";
import Photo from "../pages/Photo";


const Tab = createTabNavigator();
const HomeStack = createNativeStackNavigator();
const AboutStack = createNativeStackNavigator();
const StaffsStack = createNativeStackNavigator();


function HomeStackScreen() {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen
          name="Home"
          component={Students}
          options={{ tabBarLabel: 'Home!' }}
        />
        <HomeStack.Screen
          name="Student"
          component={Individual}
          options={{ tabBarLabel: 'Home!' }}
        />
        <HomeStack.Screen
          name="Photo"
          component={Photo}
          options={{ tabBarLabel: 'Home!' }}
        />
      </HomeStack.Navigator>
    );
  }
  
  function StaffsStackScreen() {
    return (
      <StaffsStack.Navigator>
        <StaffsStack.Screen
          name="teachers"
          component={Staffs}
          options={{ tabBarLabel: 'Staffs' }}
        />
      </StaffsStack.Navigator>
    );
  }

  function AboutStackScreen() {
    return (
      <AbouStack.Navigator>
        <AboutStack.Screen
          name="About"
          component={About}
          options={{ tabBarLabel: 'About' }}
        />
      </AbouStack.Navigator>
    );
  }

const NavigationContainer = ()=>{
    return(
        <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Staffs" component={StaffsStackScreen} />
        <Tab.Screen name="About" component={AboutStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
    )
}

export default NavigationContainer;
