import React from 'react';
import {Button, StyleSheet, Text, View, ImageBackground} from 'react-native';
import InputComponent from '../components/Global/InputComponent';
import LoginButton from '../components/Login/LoginButton';
import { LAYOUT } from '../layout';

const Login = () => {
  return (
    
      <View>
          <ImageBackground source={require('../assets/images/Background.png')} style={{flex:1,width: LAYOUT.WIDTH*1, height: LAYOUT.HEIGHT*1.1}} />
        <Text style={styles.LoginText}>Login Page</Text>
        <View style={{marginVertical:20, alignSelf: 'center'}}>
        <InputComponent
        placeholder={"alexhiggins"}
        />
        </View>
       <View style={{alignSelf: 'center'}}>
       <InputComponent
        placeholder={"Password"}
        secureTextEntry={true}
        />
       </View>
       <View>
       <LoginButton />
       </View>
      </View>
     
   
  );
};

export default Login;

const styles = StyleSheet.create({
  LoginText: {
    color: 'red',
    fontSize: 20,
    justifyContent: 'center', 
    alignItems: 'center',
  },
});
