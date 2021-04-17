
import React, { useRef, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import colors from './app/utils/colors';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { NavigationContainer } from '@react-navigation/native';
import NoInternet from './app/utils/no-internet';
import AppNavigator from './app/routes';
import NetworkLoggerTab from './app/utils/network-logger-tab'
import { navigationRef, isReadyRef } from './app/utils/navigation-service';

const App = () => {
  const routeNameRef = useRef();
  useEffect(() => {
    return () => {
        isReadyRef.current = false;
    };
}, []);
  return (
    <Provider store={store}>
      <SafeAreaView style={{ backgroundColor: 'transparent', flex: 1 }}>
        <NavigationContainer
          theme={{
            dark: false,
            colors: {
              background: colors.white,
            },
          }}
          ref={navigationRef}
            onReady={() => {
                isReadyRef.current = true;
                routeNameRef.current = navigationRef.current.getCurrentRoute().name;
            }}
            onStateChange={async () => {
                const previousRouteName = routeNameRef.current;
                const currentRouteName = navigationRef.current.getCurrentRoute().name;

                if (previousRouteName !== currentRouteName) {
                    await analytics().logScreenView({
                        screen_name: currentRouteName,
                        screen_class: currentRouteName,
                    });
                }
                routeNameRef.current = currentRouteName;
            }}
        >
          <>
            <NetworkLoggerTab />
            <AppNavigator navigation={navigationRef.current} />
          </>
        </NavigationContainer>
      </SafeAreaView>
      <NoInternet />
    </Provider>
  );
}

export default App;