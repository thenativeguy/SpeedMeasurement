import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {Alert} from 'react-native';

export const ContextAuth = createContext();
const AuthContext = ({children}) => {
  const [user, setuser] = useState(null);
  const [name, setname] = useState();
  // Login Method
  const login = async (email, password) => {
    try {
      // setuser(null)
      await auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };
  // Signup Method
  const register = async (username, email, password) => {
    try {
      if (!username || !email || !password )
        return Alert.alert(
          'Warning',
          'All Fields are Required Empty or Invalid Credential',
        );
      const res = await auth().createUserWithEmailAndPassword(email, password);
      const user = res.user;
      if (user) {
        await firestore().collection("users").doc(user.uid).set({
          uid: user.uid,
          username,
          email,
        })
        // Alert.alert('User Created Successfully');
      } else {
        Alert.alert('User Not Created Successfully');
      }
    } catch (error) {
      Alert.alert('error', error.message);
    }
  };
  //Signout Method
  const logout = async () => {
    try {
      // setuser(null)
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
