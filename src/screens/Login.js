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
import {ContextAuth} from '../context/AuthContext';

const Login = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const {login} = useContext(ContextAuth);
  return (
    //Main View
    <View style={styles.mainView}>
      {/* Bacground Image */}
      <ImageBackground
        source={require('../assets/images/Background.png')}
        style={styles.backgroundImageStyle}
      />
      {/* Main Heading */}
      <View style={{alignItems: 'center', marginBottom: LAYOUT.HEIGHT * 0.05}}>
        <Text style={styles.firstHeading}>Are You</Text>
        <Text style={styles.secondHeading}>fast as a rabbit?</Text>
      </View>
      {/* Input form fields View */}
      <View style={styles.inputTitleMainView}>
        {/* Username */}
        {/* <View style={styles.inputTitleSecondaryView}>
          <Image
            source={require('../assets/images/icons/user.png')}
            style={styles.headingIconsStyle}
          />
          <Text style={styles.inputTitleTextStyle}>Username</Text>
        </View>
        <InputComponent placeholder={'alexhiggins'} /> */}
        {/* Email */}
        <View style={styles.inputTitleSecondaryView}>
          <Image
            source={require('../assets/images/icons/email.png')}
            style={styles.headingIconsStyle}
          />
          <Text style={styles.inputTitleTextStyle}>Email</Text>
        </View>
        <InputComponent
          value={email}
          onChangeText={userEmail => setEmail(userEmail)}
          placeholder={'alexhiggins@abc.com'}
        />
        {/* Password */}
        <View style={{alignSelf: 'center'}}>
          <View style={styles.inputTitleSecondaryView}>
            <Image
              source={require('../assets/images/icons/password.png')}
              style={styles.headingIconsStyle}
            />
            <Text style={styles.inputTitleTextStyle}>Password</Text>
          </View>

          <InputComponent
            value={password}
            onChangeText={userPassword => setPassword(userPassword)}
            placeholder={'Password'}
            secureTextEntry={true}
          />
        </View>
        {/* Registeration link */}
        <View style={{marginTop: LAYOUT.HEIGHT * 0.02, flexDirection: 'row'}}>
          <Text style={styles.registerLinkStyle}>No account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.registerLinkStyle}> Register here</Text>
          </TouchableOpacity>
        </View>
        {/* Login Button */}
        <View>
          <LoginButton
            title={'Login'}
            pressHandler={() => login(email, password)}
          />
        </View>
      </View>
      {/* Logo */}
      <View style={styles.logoView}>
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.logoStyle}
        />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    height:LAYOUT.HEIGHT*1
  },
  backgroundImageStyle: {
    flex: 1,
    width: LAYOUT.WIDTH * 1,
    height: LAYOUT.HEIGHT * 1.1,
  },
  inputTitleMainView: {
    marginVertical: 10,
    alignSelf: 'center',
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
  logoView: {
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 50,
    marginBottom: LAYOUT.HEIGHT * 0.07,
  },
  logoStyle: {
    width: LAYOUT.WIDTH * 0.3,
    height: LAYOUT.WIDTH * 0.1,
  },
  registerLinkStyle: {
    fontFamily: LAYOUT.FONTS.BOLD,
    fontSize: 16,
    color: '#000',
  },
});
