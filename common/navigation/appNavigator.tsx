import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {screenOptions} from './navigationConfigs';
import Screens from '../../screens';

export type RouteParams = {
  Home: undefined;
  Profile: {userId: string};
};

const RootNavigator = createStackNavigator<RouteParams | any>();

export const AppNavigator = () => {
  return (
    <RootNavigator.Navigator
      initialRouteName="Home"
      screenOptions={screenOptions}>
      {Screens.map(screen => (
        <RootNavigator.Screen
          key={screen.name}
          name={screen.name}
          component={screen.screen}
          options={screen.options}
        />
      ))}
    </RootNavigator.Navigator>
  );
};
