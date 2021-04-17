import React from 'react';
import { View, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
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
            <Text style={styles.subHeadingText}>Slow or No Internet Connection!\nPlease check your internet settings.</Text>
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
        height: '100%',
        width: Window.width,
        zIndex: 1000,
        position: 'absolute',
        backgroundColor: colors.white,
    },
    button: {
        paddingVertical: scale(10),
        borderRadius: 6,
        width: '100%',
        alignItems: 'center',
        backgroundColor: colors.brand
    },
    buttonText: {
        fontSize: 14,
        textTransform: 'uppercase' ,
        color: colors.white
      },
      heading: {
        marginTop: scale(38),
        textAlign: 'center',
    },
    subHeadingText: {
        marginTop: scale(10),
    },
});
