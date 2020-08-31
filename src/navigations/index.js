import 'react-native-gesture-handler';
import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon2 from "react-native-vector-icons/FontAwesome";
import Icon3 from "react-native-vector-icons/Ionicons";

//init call functions
const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

//Component Imports
import LandingScreen from "../screen/landing"
import HomeScreen from "../screen/home"
import ProfileScreen from "../screen/profile"
import DetailScreen from "../screen/home/details"
import MyTicketsScreen from "../screen/myTickets"

//grouping stack
function HomeStack() {
    return (
        <Stack.Navigator initialRouteName={"Home"}>
            <Stack.Screen name="Landing" component={LandingScreen}/>
            <Stack.Screen name="Detail" component={DetailScreen} options={{
                title: '',
                headerTransparent: true,
                headerTintColor: 'black'
            }}/>
            <Stack.Screen name="Home" component={HomeScreen} options={{
                headerShown: false
            }}/>
        </Stack.Navigator>
    )
}

const index = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName={"Home"}>
                <Tab.Screen name="Home" component={HomeStack} options={({ route }) => ({
                    tabBarIcon: ({ focused }) => {
                        let iconColor;
                        
                        if (route.name === 'Home') {
                        console.log(route.name,'ini route.namenya')
                        iconColor = focused
                            ? 'skyblue'
                            : 'gray';
                        } 

                        return <Icon name='home-outline' size={30} color={iconColor}/>;
                    }
                })}/>
                <Tab.Screen name="My Tickets" component={MyTicketsScreen} options={({ route }) => ({
                    tabBarIcon: ({ focused }) => {
                        let iconColor;
                        
                        if (route.name === 'My Tickets') {
                        console.log(route.name,'ini route.namenya')
                        iconColor = focused
                            ? 'skyblue'
                            : 'gray';
                        } 

                        return <Icon name='ticket-outline' size={30} color={iconColor}/>;
                    }
                })}/>
                <Tab.Screen name="Profile" component={ProfileScreen} options={({ route }) => ({
                    tabBarIcon: ({ focused }) => {
                        let iconColor;
                        
                        if (route.name === 'Profile') {
                        iconColor = focused
                            ? 'skyblue'
                            : 'gray';
                        } 
                        return <Icon2 name='user-circle-o' size={30} color={iconColor}/>;
                    }
                })}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default index

const styles = StyleSheet.create({})
