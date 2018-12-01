import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import createStore from './App/redux/store/store';
import App from './App';
import { name as appName } from './app.json';

const nativeRedux = () => (
    <Provider store={createStore}>
        <App />
    </Provider>
);

AppRegistry.registerComponent(appName, () => nativeRedux);

