import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {screenOptions} from './navigationConfigs';
import Screens from './screens/index';
import {RouteParamsType} from '../common/types/navigation.types';

const RootNavigator = createStackNavigator<RouteParamsType | any>();

const AppNavigator = () => {
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
export default AppNavigator;
