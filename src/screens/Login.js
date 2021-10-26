import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Button, StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import InputComponent from '../components/Global/InputComponent';
import LoginButton from '../components/Login/LoginButton';
import { LAYOUT } from '../layout';

const Login = ({ navigation }) => {
  return (

    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ImageBackground source={require('../assets/images/Background.png')} style={{ flex: 1, width: LAYOUT.WIDTH * 1, height: LAYOUT.HEIGHT * 1.1 }} />

      <View style={{ alignItems: 'center' }}>
        <Text style={styles.firstHeading}>Are You</Text>
        <Text style={styles.secondHeading}>fast as a rabbit?</Text>
      </View>
      <View style={{ marginVertical: 10, alignSelf: 'center' }}>
        <View style={{ flexDirection: 'row', marginBottom: 10, alignItems: 'center' }}>
          <Image source={require('../assets/images/icons/email.png')} style={{ width: 30, height: 30 }} />
          <Text style={{ fontFamily: LAYOUT.FONTS.BOLD, fontSize: 18, marginLeft: 20, color: '#000' }}>Username</Text>
        </View>
        <InputComponent
          placeholder={"alexhiggins"}

        />
      </View>
      <View style={{ alignSelf: 'center', }}>
        <View style={{ flexDirection: 'row', marginBottom: 10, alignItems: 'center' }}>
          <Image source={require('../assets/images/icons/password.png')} style={{ width: 30, height: 30 }} />
          <Text style={{ fontFamily: LAYOUT.FONTS.BOLD, fontSize: 18, marginLeft: 20, color: '#000' }}>Password</Text>
        </View>
        <InputComponent
          placeholder={"Password"}
          secureTextEntry={true}
        />
      </View>
      <View style={{ marginTop: 10, }}>
        <LoginButton pressHandler={() => navigation.navigate('Home')} />
      </View>
      <View style={{ backgroundColor: '#fff', paddingHorizontal: 30, paddingVertical: 10, borderRadius: 50, marginVertical: 20 }}>
        <Image source={require('../assets/images/logo.png')} style={{ width: LAYOUT.WIDTH * 0.3, height: LAYOUT.WIDTH * 0.1, }} />
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
  firstHeading: {
    fontFamily: LAYOUT.FONTS.BOLD,
    color: '#fff',
    fontSize: 42,
  },
  secondHeading: {
    fontFamily: LAYOUT.FONTS.BOLD,
    color: '#000',
    fontSize: 34,
  },
});
