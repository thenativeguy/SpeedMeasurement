import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './AuthStack';
import AppContext from '../context/AppContext';

const Routes = () => {
  return (
    <AppContext>
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
    </AppContext>
  );
};

export default Routes;
