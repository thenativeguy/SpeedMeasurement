import {NavigationContainer} from '@react-navigation/native';
import React, {useContext, useState} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import InputComponent from '../components/Global/InputComponent';
import LoginButton from '../components/Login/LoginButton';
import {LAYOUT} from '../layout';
import Background from '../components/Global/Background';
import Header from '../components/Global/Header';
import {useAuthContext} from '../context/AuthContext';

const Login = ({navigation}) => {
  return (
    <Background>
     <View style={{flex:10}}>
     <Header title="Are You" subTitle="fast as a rabbit?" />
      {/* Input form fields View */}
      <View style={styles.inputTitleMainView}>
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

        {/* Registeration link */}
        <View style={styles.registerLinkView}>
          <Text style={styles.registerLinkStyle}>No account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.registerLinkStyle}> Register here</Text>
          </TouchableOpacity>
        </View>
        {/* Login Button */}
        <View>
          <LoginButton
            value
            title={'Login'}
            pressHandler={() => navigation.navigate('Home Stack')}
          />
        </View>
      </View>
      {/* Logo */}
      <View style={styles.logoView}>
        <Image source={LAYOUT.LOGO} style={styles.logoStyle} />
      </View>
     </View>
    </Background>
  );
};

export default Login;

const styles = StyleSheet.create({
  inputTitleMainView: {
    marginVertical: 10,
    marginHorizontal: 10,
    // alignSelf: 'center',
    // marginBottom: LAYOUT.HEIGHT*0.08
  },
  inputTitleSecondaryView: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
  },
  headingIconsStyle: {
    width: 30,
    height: 30,
  },
  inputTitleTextStyle: {
    fontFamily: LAYOUT.FONTS.BOLD,
    fontSize: 18,
    marginLeft: 20,
    color: '#000',
  },
  LoginText: {
    color: 'red',
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logoView: {
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 50,
    marginBottom: LAYOUT.HEIGHT * 0.07,
    width: LAYOUT.WIDTH * 0.5,
    alignSelf: 'center',
  },
  logoStyle: {
    width: LAYOUT.WIDTH * 0.3,
    height: LAYOUT.WIDTH * 0.1,
  },
  registerLinkView:{
    marginTop: LAYOUT.HEIGHT * 0.02,
    flexDirection: 'row',
    },
  registerLinkStyle: {
    fontFamily: LAYOUT.FONTS.BOLD,
    fontSize: 16,
    color: '#000',
  },
});
