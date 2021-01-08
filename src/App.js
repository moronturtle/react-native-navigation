import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';

import AuthStackNavigator from './navigators/AuthStackNavigator';

const RootStack = createStackNavigator();

const App = ({params}) => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <RootStack.Screen
          name="AuthStack"
          component={AuthStackNavigator}></RootStack.Screen>
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
