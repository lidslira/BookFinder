import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import {SafeAreaView} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import Tabs from './tabNavigators';
import Login from '~/shared/views/Login';

import {LOGIN_SCREEN, TABS_SCREEN} from '~/shared/constants/routes';
import Header from '~/shared/components/AccessibilityHeader';

import {createTheme} from '~/shared/utils/theme';
import {ApplicationState} from '~/shared/store';

const Stack = createStackNavigator();

const RootStack: React.FC = () => {
  const {theme} = useSelector((state: ApplicationState) => state.theme);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <ThemeProvider theme={createTheme(theme)}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName={LOGIN_SCREEN}
            screenOptions={{
              gestureEnabled: false,
              animationEnabled: false,
            }}>
            <Stack.Screen
              name={LOGIN_SCREEN}
              component={Login}
              options={{header: () => <Header />}}
            />
            <Stack.Screen
              name={TABS_SCREEN}
              component={Tabs}
              options={{header: () => <Header />}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaView>
  );
};

export default RootStack;
