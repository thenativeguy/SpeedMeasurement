import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';

export const ContextAuth = createContext();
const AuthContext = ({children}) => {
  const [user, setuser] = useState(null);
  const [name, setname] = useState();
  // Login Method
  const login = async (email, password) => {
    try {
      await auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };
  // Signup Method
  const register = async (email, password) => {
    try {
      await auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };
  //Signout Method
  const logout = async () => {
    try {
      await auth().signOut();
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  const value = {
    user,
    setuser,
    register,
    login,
    logout,
  };
  return <ContextAuth.Provider value={value}>{children}</ContextAuth.Provider>;
};

export default AuthContext;
