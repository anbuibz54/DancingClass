/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { PaperProvider, adaptNavigationTheme } from 'react-native-paper';
import lightTheme from './ui-packages/theme/light-theme.json';
import darkTheme from './ui-packages/theme/dark-theme.json';
import {
  StatusBar,
  useColorScheme,
} from 'react-native';

import { RootStack } from './navigation/RootStack';

export default function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const NavigationLightTheme = adaptNavigationTheme({
    reactNavigationLight: DefaultTheme,
  });
  const NavigationDarkTheme = adaptNavigationTheme({
    reactNavigationDark: DefaultTheme,
  });

  return (
    <PaperProvider theme={!isDarkMode ? lightTheme : darkTheme}>
      <NavigationContainer
      theme={
        !isDarkMode
          ? NavigationLightTheme.LightTheme
          : NavigationDarkTheme.DarkTheme
      }>
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          />
          <RootStack />
      </NavigationContainer>
    </PaperProvider>

  );
}

