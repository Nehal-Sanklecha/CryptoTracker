import * as React from 'react';
import { CommonActions } from '@react-navigation/native';

export const isReadyRef = React.createRef();
export const navigationRef = React.createRef();

function navigate(routeName, params) {
    if (isReadyRef.current && navigationRef.current) {
        navigationRef.current.dispatch(CommonActions.navigate(routeName, params));
    }
}

function reset(actions) {
    if (isReadyRef.current && navigationRef.current) {
        navigationRef.current.dispatch(CommonActions.reset(actions));
    }
}

const dispatch = actions => {
    if (isReadyRef.current && navigationRef.current) {
        navigationRef.current.dispatch(actions);
    }
};

const goBack = () => {
    if (isReadyRef.current && navigationRef.current) {
        navigationRef.current.dispatch(CommonActions.goBack());
    }
};

const getRootState = () => {
    return navigationRef.current?.getRootState();
};

export default {
    navigate,
    reset,
    dispatch,
    goBack,
    getRootState,
};
