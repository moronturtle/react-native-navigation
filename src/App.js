import React from 'react';

import {NavigationCOntainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';

import RegisterScreen from './screens/RegistrationScreen';

const RootStack = createStackNavigator();

const App = ({params}) => <RegisterScreen />;

export default App;
