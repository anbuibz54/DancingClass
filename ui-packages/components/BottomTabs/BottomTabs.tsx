import * as React from 'react';
import {BottomNavigation,useTheme} from 'react-native-paper';
import {CommonActions} from '@react-navigation/native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
export default function BottomTabs({
  navigation,
  state,
  descriptors,
  insets,
}: BottomTabBarProps) {
  const theme = useTheme();
  return (
    <BottomNavigation.Bar
    activeIndicatorStyle={{backgroundColor:theme.colors.secondary,borderRadius:100,aspectRatio:1}}
    activeColor={'#FFFFFF'}
    style={{backgroundColor:theme.colors.background}}
      navigationState={state}
      safeAreaInsets={insets}
      onTabPress={({route, preventDefault}) => {
        const event = navigation.emit({
          type: 'tabPress',
          target: route.key,
          canPreventDefault: true,
        });

        if (event.defaultPrevented) {
          preventDefault();
        } else {
          navigation.dispatch({
            ...CommonActions.navigate(route.name, route.params),
            target: state.key,
          });
        }
      }}
      renderIcon={({route, focused, color}) => {
        const {options} = descriptors[route.key];
        if (options.tabBarIcon) {
          return options.tabBarIcon({focused, color, size: 24});
        }

        return null;
      }}
      labeled={false}
    />
  );
}