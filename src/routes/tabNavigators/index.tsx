import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {HOME_TAB, PROFILE_TAB} from '~/shared/constants/routes';

import BottomTab from '~/routes/bottomTab';

import Navigators from '~/routes/stackNavigators';

const Tab = createBottomTabNavigator();

const Tabs: React.FC = () => (
  <Tab.Navigator tabBar={(props) => <BottomTab {...props} />}>
    <Tab.Screen
      name={HOME_TAB}
      component={Navigators.Home}
      options={{headerShown: false}}
    />
    <Tab.Screen
      name={PROFILE_TAB}
      component={Navigators.Profile}
      options={{headerShown: false}}
    />
  </Tab.Navigator>
);

export default Tabs;
