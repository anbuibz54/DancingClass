import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'react-native-paper';
import Home from '../screens/Home/Home';
import Profile from '../screens/Profile/Profile';
import BottomTabs from '../ui-packages/components/BottomTabs/BottomTabs';
import TabBarIcon from '../ui-packages/components/TabBarIcon/TabBarIcon';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import ROUTES from './routes';

export type RootBottomTabsParamList = {
  [ROUTES.HOME]: undefined;
  [ROUTES.PROFILE]: undefined;
};
export default function BottomTabsVariant() {
  const Tab = createBottomTabNavigator<RootBottomTabsParamList>();
  const theme = useTheme();
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: theme.colors.background,
      }}
      screenOptions={{ headerShown: false }}
      tabBar={(props: BottomTabBarProps) => <BottomTabs {...props} />}>
      <Tab.Screen
        name={ROUTES.HOME}
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: TabBarIcon,
        }}
      />
      <Tab.Screen
        name={ROUTES.PROFILE}
        component={Profile}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: TabBarIcon,
        }}
      />
    </Tab.Navigator>
  );
}
