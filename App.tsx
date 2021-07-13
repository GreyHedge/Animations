import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStack} from './src/navigation';

const Stack = createNativeStackNavigator();

const App = () => {
  return <RootStack />;
};

const styles = StyleSheet.create({});

export default App;
