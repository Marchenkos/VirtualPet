/* eslint-disable react-hooks/exhaustive-deps */
import React, {useCallback, useEffect} from 'react';
import {View} from 'react-native';
import Orientation from 'react-native-orientation';
import {CONSTANTS} from '../../constants';
import HeaderState from '../components/HeaderState';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider as PaperProvider} from 'react-native-paper';
import Home from './Home';
import Registration from './Registration';
import LoginContainer from '../containers/LoginContainer';
import ShopPage from './ShopPage';

const Stack = createStackNavigator();

export default function MainPage({
  currentUser,
  sleepLevel,
  foodLevel,
  wcLevel,
  enjoyLevel,
  changeFoodLevel,
  changeSleepLevel,
  changeWCLevel,
  changeEnjoyLevel,
}) {
  useEffect(() => {
    Orientation.lockToLandscapeLeft();
  });

  const changeDesires = useCallback(() => {
    changeFoodLevel(10, CONSTANTS.ACTION_OPERATIONS.decrease);
    changeEnjoyLevel(5, CONSTANTS.ACTION_OPERATIONS.decrease);
    changeSleepLevel(5, CONSTANTS.ACTION_OPERATIONS.decrease);
    changeWCLevel(10, CONSTANTS.ACTION_OPERATIONS.decrease);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ShopPage"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          options={{headerShown: true}}
          name="Registration"
          component={Registration}
        />
        <Stack.Screen
          options={{headerShown: true}}
          name="Login"
          component={LoginContainer}
        />
        <Stack.Screen name="ShopPage" component={ShopPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
