import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import Splash from '../screens/Splash/Splash';
import Intro from '../screens/Intro/Intro';
import BottomTabsVariant from './BottomTabStack';
import ROUTES from './routes';

export type RootStackParamList = {
    [ROUTES.DASH_BOARD]: BottomTabBarProps;
    [ROUTES.PROFILE]: undefined;
    [ROUTES.SPLASH_SCREEN]:undefined;
    [ROUTES.INTRO_SCREEN]:undefined;
  };
const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootStack() {
    return (
      <Stack.Navigator
        initialRouteName={ROUTES.DASH_BOARD}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={ROUTES.SPLASH_SCREEN} component={Splash} />
        {/*Variant1*/}
        <Stack.Screen name={ROUTES.INTRO_SCREEN} component={Intro} />
        <Stack.Screen name={ROUTES.DASH_BOARD} component={BottomTabsVariant} />
      </Stack.Navigator>
    );
  }


