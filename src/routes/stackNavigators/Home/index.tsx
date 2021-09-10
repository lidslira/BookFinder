import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '~/shared/views/Home';

import {HOME_SCREEN} from '~/shared/constants/routes';

const Stack = createStackNavigator();

const HomeStack: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={HOME_SCREEN}
      component={Home}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

export default HomeStack;
