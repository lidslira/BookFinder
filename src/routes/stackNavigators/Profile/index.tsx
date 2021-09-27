import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Profile from '~/modules/User/Profile';

import {PROFILE} from '~/shared/constants/routes';

const Stack = createStackNavigator();

const ProfileStack: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={PROFILE}
      component={Profile}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

export default ProfileStack;
