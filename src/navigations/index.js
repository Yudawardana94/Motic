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
import CheckoutScreen from "../screen/home/checkout"
import BookScreen from "../screen/home/book"
import BookSeatScreen from "../screen/home/bookSeat"
import MyWalletScreen from "../screen/profile/myWallet"
import HelpCenterScreen from "../screen/profile/helpCenter"
import EditProfileScreen from "../screen/profile/editProfile"
import ChangeLanguageScreen from "../screen/profile/changeLanguage"
import TopUpScreen from '../screen/service/topUp'
import SuccessScreen from '../screen/response/success'

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
            <Stack.Screen name="Checkout" component={CheckoutScreen} options={{
                title: '',
                headerTransparent: true,
                headerTintColor: 'black'
            }}/>
            <Stack.Screen name="Book" component={BookScreen} options={{
                title: '',
                headerTransparent: true,
                headerTintColor: 'black'
            }}/>
            <Stack.Screen name="BookSeat" component={BookSeatScreen} options={{
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
function visibleTabStack() {
    return (
        <Tab.Navigator initialRouteName={"Home"}>
                <Tab.Screen name="Home" component={HomeScreen} options={({ route }) => ({
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
                <Tab.Screen name="Profile"  component={ProfileScreen} options={({ route }) => ({
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
    )
}
function ProfileStack() {
    return(
        <Stack.Navigator initialRouteName={"Profile"}>
            <Stack.Screen name="MyWallet" component={MyWalletScreen} options={{
                title: '',
                headerTransparent: true,
                headerTintColor: 'black'
            }}/>
            <Stack.Screen name="EditProfile" component={EditProfileScreen} options={{
                title: '',
                headerTransparent: true,
                headerTintColor: 'black'
            }}/>
            <Stack.Screen name="Profile" component={HomeScreen} options={{
                headerShown: false
            }}/>
        </Stack.Navigator>
    )
}

const index = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"TopUp"}>
                <Stack.Screen name="Landing" component={LandingScreen}/>
                <Stack.Screen name="Detail" component={DetailScreen} options={{
                    title: '',
                    headerTransparent: true,
                    headerTintColor: 'black'
                }}/>
                <Stack.Screen name="Checkout" component={CheckoutScreen} options={{
                    title: '',
                    headerTransparent: true,
                    headerTintColor: 'black'
                }}/>
                <Stack.Screen name="Book" component={BookScreen} options={{
                    title: '',
                    headerTransparent: true,
                    headerTintColor: 'black'
                }}/>
                <Stack.Screen name="BookSeat" component={BookSeatScreen} options={{
                    title: '',
                    headerTransparent: true,
                    headerTintColor: 'black'
                }}/>
                <Stack.Screen name="Home" component={visibleTabStack} options={{
                    headerShown: false
                }}/>
                <Stack.Screen name="MyWallet" component={MyWalletScreen} options={{
                    title: '',
                    headerTransparent: true,
                    headerTintColor: 'black'
                }}/>
                <Stack.Screen name="EditProfile" component={EditProfileScreen} options={{
                    title: '',
                    headerTransparent: true,
                    headerTintColor: 'black'
                }}/>
                <Stack.Screen name="ChangeLanguage" component={ChangeLanguageScreen} options={{
                    title: '',
                    headerTransparent: true,
                    headerTintColor: 'black'
                }}/>
                <Stack.Screen name="HelpCenter" component={HelpCenterScreen} options={{
                    title: '',
                    headerTransparent: true,
                    headerTintColor: 'black'
                }}/>
                <Stack.Screen name="TopUp" component={TopUpScreen} options={{
                    title: '',
                    headerTransparent: true,
                    headerTintColor: 'black'
                }}/>
                <Stack.Screen name="Success" component={SuccessScreen} options={{
                    title: '',
                    headerTransparent: true,
                    headerTintColor: 'black'
                }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default index