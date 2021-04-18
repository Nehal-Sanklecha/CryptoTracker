import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import NetworkLogger from 'react-native-network-logger';
import AsyncStorage from '@react-native-community/async-storage';
import colors from '../utils/colors';
import { createLogger } from '../utils/network-logger-tab/logger';
import { scale } from '../utils/scale';

const STORAGE_KEY = 'diagnosticskey';
const logger = createLogger('Logger Screen');
const LoggerScreen = () => {
    const [status, setStatus] = React.useState('ON');
    useEffect(() => {
        readData();
    }, []);
    const readData = async () => {
        try {
            const diagStatus = await AsyncStorage.getItem(STORAGE_KEY);
            if (diagStatus !== null) {
                setStatus(diagStatus);
            }
            if (diagStatus === null) {
                try {
                    await AsyncStorage.setItem(STORAGE_KEY, status === 'ON');
                    logger.log('First Data successfully saved');
                    setStatus('ON');
                } catch (e) {
                    logger.log('Failed to save the data to the storage');
                }
            }
        } catch (e) {
            logger.log('Failed to fetch the data from storage');
        }
    };
    const saveData = async () => {
        try {
            await AsyncStorage.setItem(STORAGE_KEY, status === 'ON' ? 'OFF' : 'ON');
            logger.log('Data successfully saved');
        } catch (e) {
            logger.log('Failed to save the data to the storage');
        }
        readData();
    };

    return (
        <>
            <View
                style={styles.topContainer}
            >
                <TouchableOpacity
                    onPress={saveData}
                    style={styles.startLoggingButton}
                >
                    <Text
                        style={styles.startLoggingButtonText}
                    >
                        {status === 'OFF' ? 'Start' : 'Stop'}Logging
                    </Text>
                </TouchableOpacity>
                <View
                    style={styles.statusContainer}
                    >
                    <Text
                        style={styles.statusStaticText}
                    >
                        Status :
                    </Text>
                    <Text
                        style={{
                            color: status === 'ON' ? colors.activeGreen : colors.errorRed,
                            paddingTop: 10,
                        }}
                    >
                        {status}
                    </Text>
                </View>
            </View>
            <NetworkLogger theme="dark" />
        </>
    );
};

LoggerScreen.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
    }).isRequired,
};

export default LoggerScreen;

export const styles = StyleSheet.create({
    topContainer: {
        paddingTop: scale(10),
        backgroundColor: '#2e2a28',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: scale(20),
    },
    startLoggingButton: {
        borderColor: colors.white,
        borderWidth: 1,
        padding: 10,
        borderRadius: 20,
    },
    startLoggingButtonText: {
        color: colors.white,
    },
    statusContainer: { flexDirection: 'row' },
    statusStaticText: { color: colors.white, paddingTop: 10 },
});
