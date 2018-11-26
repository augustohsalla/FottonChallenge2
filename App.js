import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol
} from 'react-native-responsive-screen';
import Home from './App/Components/Home';
import List from './App/Components/List';
import Detail from './App/Components/Detail';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const AppNavigator = createStackNavigator(
  {
    Home: { screen: Home },
    List: { screen: List },
    Detail: { screen: Detail }
  },
  {
    headerLayoutPreset: 'center'
  }, {
    headerMode: 'none',
  }
);

export default createAppContainer(AppNavigator);