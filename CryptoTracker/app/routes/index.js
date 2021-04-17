import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from '../HomePage'
import LoggerScreen from '../logger-screen';
import AddCurrency from '../AddCurrency'

const Stack = createStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator initialRouteName="CryptoTracker Pro">
            <Stack.Screen name="CryptoTracker Pro" component={HomePage} />
            <Stack.Screen name="Add Currency" component={AddCurrency} />
            <Stack.Screen name="LoggerScreen" component={LoggerScreen} />
            </Stack.Navigator>
    )
}

export default HomeStack;
