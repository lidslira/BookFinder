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
const LoginStack = createStackNavigator();

const RootStack: React.FC = () => {
  const {theme} = useSelector((state: ApplicationState) => state.theme);
  const {isLoggedIn} = useSelector((state: ApplicationState) => state.user);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <ThemeProvider theme={createTheme(theme)}>
        <NavigationContainer>
          {isLoggedIn ? (
            <Stack.Navigator>
              <Stack.Screen
                name={TABS_SCREEN}
                component={Tabs}
                options={{header: () => <Header />}}
              />
            </Stack.Navigator>
          ) : (
            <LoginStack.Navigator
              initialRouteName={LOGIN_SCREEN}
              screenOptions={{
                gestureEnabled: false,
                animationEnabled: false,
              }}>
              <LoginStack.Screen
                name={LOGIN_SCREEN}
                component={Login}
                options={{header: () => <Header />}}
              />
            </LoginStack.Navigator>
          )}
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaView>
  );
};

export default RootStack;
