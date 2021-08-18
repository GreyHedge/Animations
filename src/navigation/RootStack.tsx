import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {
  FlatListScrollAnimationScreen,
  TwistCardScreen,
  MainScreen,
} from '@screens';
import {RootStackParamList, EScreens, EScreensTitle} from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootStack: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerBackTitleVisible: false,
          headerTintColor: '#555152',
        }}>
        <Stack.Screen
          options={{title: EScreensTitle.MAIN_SCREEN}}
          name={EScreens.MAIN_SCREEN}
          component={MainScreen}
        />
        <Stack.Screen
          options={{title: EScreensTitle.FLATLIST_SCROLL_ANIMATION_SCREEN}}
          name={EScreens.FLATLIST_SCROLL_ANIMATION_SCREEN}
          component={FlatListScrollAnimationScreen}
        />
        <Stack.Screen
          options={{title: EScreensTitle.TWIST_CARD_SCREEN}}
          name={EScreens.TWIST_CARD_SCREEN}
          component={TwistCardScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
