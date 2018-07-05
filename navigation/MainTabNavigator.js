import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '$components/TabBarIcon';
import {
  HomeScreen,
  RoutinesScreen,
  ProgressScreen,
  SettingsScreen
} from '$screens';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused
            ? ''
            : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const RoutinesStack = createStackNavigator({
  Routines: RoutinesScreen,
});

RoutinesStack.navigationOptions = {
  tabBarLabel: 'Routines',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios'
        ? `ios-link${focused
          ? ''
          : '-outline'}`
        : 'md-link'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios'
        ? `ios-options${focused
          ? ''
          : '-outline'}`
        : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  RoutinesStack,
  SettingsStack,
});
