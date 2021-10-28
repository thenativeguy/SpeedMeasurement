import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';

const StackHome = createNativeStackNavigator();
const HomeStack = () => {
  return (
    <StackHome.Navigator>
      <StackHome.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
    </StackHome.Navigator>
  );
};

export default HomeStack;
