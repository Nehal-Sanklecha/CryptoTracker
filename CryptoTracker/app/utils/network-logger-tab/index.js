import React, { useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { startNetworkLogging } from 'react-native-network-logger';
import colors from '../../utils/colors';
import { scale } from '../../utils/scale';
import { createLogger } from '../../utils/network-logger-tab/logger';
import navigationService from '../../utils/navigation-service';

const logger = createLogger('network-logger-tab');
const STORAGE_KEY = 'diagnosticskey';

const NetworkLoggerTab = () => {
    const [status, setStatus] = React.useState('ON');
    const [networkLoggerVisible, setNetworkLoggerVisible] = React.useState('ON');
    useEffect(() => {
        const readDiagnosticData = async () => {
            try {
                const diagStatus = await AsyncStorage.getItem(STORAGE_KEY);
                if (diagStatus !== 'OFF') {
                    startNetworkLogging();
                }
            } catch (e) {
                logger.log('Failed to fetch the data from storage');
            }
        };

        const checkNetworkLoggerDeveloperOption = async () => {
            const setting = await AsyncStorage.getItem('DEVELOPER_OPTIONS:NETWORK_LOGGER');
            if (!setting) {
                return;
            }
            setNetworkLoggerVisible(setting);
        };

        checkNetworkLoggerDeveloperOption();
        readDiagnosticData();
        readData();
    }, []);

    const onTabPress = () => {
        navigationService.navigate('LoggerScreen', {});
    };

    const readData = async () => {
        try {
            const diagStatus = await AsyncStorage.getItem(STORAGE_KEY);
            if (diagStatus !== null) {
                setStatus(diagStatus);
            }
            if (diagStatus === null) {
                try {
                    await AsyncStorage.setItem(STORAGE_KEY, 'ON');
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
    return (
        status === 'ON' &&
        networkLoggerVisible === 'ON' &&
            <TouchableOpacity
                onPress={() => onTabPress()}
                testID="containers-network-logger-tab-index-touchableopacity-0"
                accessibilityLabel="containers-network-logger-tab-index-touchableopacity-0">
                <View
                    style={{ backgroundColor: colors.activeGreen, paddingVertical: 4 }}
                    testID="containers-network-logger-tab-index-view-1"
                    accessibilityLabel="containers-network-logger-tab-index-view-1">
                    <Text
                        style={{
                            fontSize: 13,
                            paddingLeft: scale(20),
                            color: colors.colorWhite,
                        }}
                        testID="containers-network-logger-tab-index-text-2"
                        accessibilityLabel="containers-network-logger-tab-index-text-2">
                        Logger Active Now • : Tap to view
                    </Text>
                </View>
            </TouchableOpacity>
    );
};

export default NetworkLoggerTab;