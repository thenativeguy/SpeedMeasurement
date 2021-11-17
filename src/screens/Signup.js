import React, { useContext, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {LAYOUT} from '../layout';
import InputComponent from '../components/Global/InputComponent';
import LoginButton from '../components/Login/LoginButton';
import Background from '../components/Global/Background';
import Header from '../components/Global/Header';

const Signup = ({navigation}) => {
  return (
    //Main View
    <Background>
       <Header register title="New user?" subTitle="Register" />
       
        <InputComponent
        label="Username"
        icon={LAYOUT.ICONS.USER}
        placeholder={'alexhiggins'} />
        {/* Email */}
         <InputComponent
          label="Email"
          icon={LAYOUT.ICONS.EMAIL}
          placeholder={'alexhiggins@abc.com'}
        />
        {/* Password */}
        <InputComponent
          label="Password"
          pwd
          icon={LAYOUT.ICONS.PASSWORD}
          placeholder={'Password'}
          secureTextEntry={true}
        />
        <InputComponent
          label="Confirm Password"
          pwd
          icon={LAYOUT.ICONS.PASSWORD}
          placeholder={'Password'}
          secureTextEntry={true}
        />
       
        {/* Login link */}
        <View style={{marginTop: LAYOUT.HEIGHT * 0.02, flexDirection: 'row'}}>
          <Text style={styles.LoginLinkStyle}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.LoginLinkStyle}> Login here</Text>
          </TouchableOpacity>
        </View>
        {/* Login Button */}
        <View>
          <LoginButton
            title={'Register'}
            pressHandler={() => navigation.navigate('Home Stack')}
          />
        </View>
      
    </Background>
  );
};

export default Signup;

const styles = StyleSheet.create({
  LoginLinkStyle: {
    fontFamily: LAYOUT.FONTS.BOLD,
    fontSize: 16,
    color: '#000',
  },
});