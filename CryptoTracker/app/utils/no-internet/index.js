import React from 'react';
import { View, Dimensions, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { scale } from '../../utils/scale';
import { useCheckInternetConnection } from './hooks';
import colors from '../colors';

const NoInternet = () => {
    const { isInternetConnected, handleTryAgainPress } = useCheckInternetConnection();

    return !isInternetConnected ? (
        <View
            style={styles.container}
        >
            <Text style={styles.heading}>Whoops!</Text>
            <Text style={styles.subHeadingText}>Slow or No Internet Connection!Please check your internet settings.</Text>
            <TouchableOpacity

                onPress={handleTryAgainPress}
                style={styles.button}
            >

                <Text
                    style={styles.buttonText}
                >
                    Try Again
          </Text>
            </TouchableOpacity>
        </View>
    ) : null;
};

export default NoInternet;



const Window = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex:1,
        height:'100%',
        zIndex: 1000,
        width:'100%',
        position: 'absolute',
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        paddingVertical: scale(10),
        paddingHorizontal: scale(30),
        borderRadius: 6,
        alignItems: 'center',
        backgroundColor: colors.brand,
        marginHorizontal: scale(10),
    },
    buttonText: {
        fontSize: 14,
        textTransform: 'uppercase' ,
        color: colors.white,
      },
      heading: {
        marginTop: scale(38),
        textAlign: 'center',
        fontSize: 14
    },
    subHeadingText: {
        marginVertical: scale(20),
        textAlign: 'center',
        fontSize: 14
    },
});
