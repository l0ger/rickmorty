import React from 'react';
import 'react-native-gesture-handler';
import {StatusBar, useColorScheme} from 'react-native';
import {ApolloProvider} from '@apollo/client';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './src/navigation/appNavigator';
import apolloClient from './src/common/configuration/apollo-client.configuration';

export const AppShell = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppNavigator />
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <AppShell />
    </ApolloProvider>
  );
};

export default App;
