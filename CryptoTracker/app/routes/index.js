import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from '../HomePage'
import LoggerScreen from '../logger-screen';
import AddCurrency from '../AddCurrency'
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import Icon  from 'react-native-vector-icons/MaterialIcons';
import { scale } from '../utils/scale';
import colors from '../utils/colors';

const Stack = createStackNavigator();

const AddCurrencyIcon = () => {
    const navigation = useNavigation()
    return(
        <View style={styles.addButton}>
            <TouchableOpacity hitSlop={{top:20, bottom: 20, left: 20, right: 20}} onPress={() => {
                navigation.navigate("Add Currency")
            }}>
                <Icon name="add" size={scale(22)} color={colors.grey} />
            </TouchableOpacity>
        </View>
    )
    return null;
}

const BackIcon = () => {
    const navigation = useNavigation()
    return(
        <View style={styles.backButton}>
            <TouchableOpacity hitSlop={{top:20, bottom: 20, left: 20, right: 20}} onPress={() => {
                navigation.goBack()
            }}>
                <Icon name="arrow-back" size={scale(22)} color={colors.grey} />
            </TouchableOpacity>
        </View>
    )
}

const HomeStack = () => {
    return (
        <Stack.Navigator initialRouteName="CryptoTracker Pro">
            <Stack.Screen name="CryptoTracker Pro" component={HomePage} options={() => ({
                headerRight: () => <AddCurrencyIcon/>
            })}/>
            <Stack.Screen name="Add Currency" component={AddCurrency} options={() => ({
                headerLeft: () => <BackIcon/>
            })}/>
            <Stack.Screen name="LoggerScreen" component={LoggerScreen} options={() => ({
                headerLeft: () => <BackIcon/>
            })}/>
            </Stack.Navigator>
    )
}

export default HomeStack;

const styles = StyleSheet.create({
    addButton: {
        marginRight: scale(10)
    },
    backButton: {
        marginLeft: scale(5)
    }
})