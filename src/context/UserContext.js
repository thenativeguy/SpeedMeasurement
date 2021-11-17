import React, {createContext, useContext, useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {ActivityIndicator, Alert} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Login from '../screens/Login';

export const ContextUser = createContext();
export const useUserContext = () => useContext(ContextUser);
const UserContext = ({children}) => {
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(false)

  const {uid} = auth().currentUser ? auth().currentUser: <Login />

  useEffect(() => {
      getUser();
      console.log(user)
  }, []);

  const getUser = async () => {
    try {
      const documentSnapshot = await firestore()
        .collection('users')
        .doc(uid)
        .get();
      const userData = documentSnapshot.data();
      setUser(userData);
    } catch (error) {
      Alert.alert('error', error.message);
    }
  };
  
  const values = {
    user,
    setUser,
    getUser,
  };
  return <ContextUser.Provider value={values}>{children}</ContextUser.Provider>;
};

export default UserContext;
