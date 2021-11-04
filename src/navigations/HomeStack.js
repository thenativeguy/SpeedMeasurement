import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Stopwatch from '../screens/Stopwatch';
import Scoreboard from '../screens/Scoreboard';

const StackHome = createNativeStackNavigator();
const HomeStack = () => {
  
  return (
    <StackHome.Navigator>
      <StackHome.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <StackHome.Screen 
        name="Stopwatch"
        component={Stopwatch}
        options={{headerShown: false}}
        />
      <StackHome.Screen 
        name="Scoreboard"
        component={Scoreboard}
        options={{headerShown: false}}
        />
    </StackHome.Navigator>
  );
};

export default HomeStack;
