import React, {useContext, useState, useEffect} from 'react'
import auth from '@react-native-firebase/auth';
import { ContextAuth } from '../context/AuthContext';
import { NavigationContainer } from '@react-navigation/native'
import AuthStack from './AuthStack'
import HomeStack from './HomeStack';

const Routes = () => {
    const {user, setuser} = useContext(ContextAuth)
    const [initializing, setInitializing] = useState(true);

    const onAuthStateChanged =(user) => {
        setuser(user);
        if (initializing) setInitializing(false);
      }

      useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
      }, []);

      if (initializing) return null;
    return (
       <NavigationContainer>
           {user? <HomeStack /> : <AuthStack />}
       </NavigationContainer>
    )
}

export default Routes
