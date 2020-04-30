import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createStore} from 'redux';

import ShopScreen from './app/screens/ShopScreen';
import RegistrationScreen from './app/screens/RegistrationScreen';
import LoginContainer from './app/containers/LoginContainer';
import HomeScreen from './app/screens/HomeScreen';

import rootReducer from './app/reducers/rootReducer';

const store = createStore(rootReducer);
const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="ShopScreen"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen
            options={{headerShown: true}}
            name="Registration"
            component={RegistrationScreen}
          />
          <Stack.Screen
            options={{headerShown: true}}
            name="Login"
            component={LoginContainer}
          />
          <Stack.Screen name="ShopScreen" component={ShopScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
