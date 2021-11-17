import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import HomeStack from './HomeStack';

const StackAuth = createNativeStackNavigator();
const AuthStack = () => {
  return (
    <StackAuth.Navigator>
      <StackAuth.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <StackAuth.Screen
        name="Signup"
        component={Signup}
        options={{headerShown: false}}
      />
      <StackAuth.Screen
        name="Home Stack"
        component={HomeStack}
        options={{headerShown: false}}
      />
    </StackAuth.Navigator>
  );
};

export default AuthStack;
