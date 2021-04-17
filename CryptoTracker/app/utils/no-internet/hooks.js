import { useState, useEffect } from 'react';
import NetInfo from '@react-native-community/netinfo';

export const useCheckInternetConnection = () => {
    const [isInternetConnected, setIsInternetConnected] = useState(true);

    useEffect(() => {
        const onInternetConnectionChange = state => {
            if (state.isInternetReachable === null) return;
            setIsInternetConnected(state.isInternetReachable);
        };

        NetInfo.fetch().then(onInternetConnectionChange);

        const unsubscribe = NetInfo.addEventListener(onInternetConnectionChange);

        return () => {
            if (unsubscribe) {
                unsubscribe();
            }
        };
    }, []);

    const handleTryAgainPress = () => {
        NetInfo.fetch().then(state => {
            setIsInternetConnected(state.isInternetReachable);
        });
    };

    return {
        isInternetConnected,
        handleTryAgainPress,
    };
};
