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
import { ContextAuth } from '../context/AuthContext';

const Signup = ({navigation}) => {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [username, setUsername] = useState()

  const {register} = useContext(ContextAuth)
  return (
    //Main View
    <View style={styles.mainView}>
      {/* Bacground Image */}
      <ImageBackground
        source={require('../assets/images/Background.png')}
        style={styles.backgroundImageStyle}
      />
      {/* Main Heading */}
      <View style={{alignItems: 'center', marginTop: LAYOUT.HEIGHT * 0.06}}>
        <Text style={styles.firstHeading}>New User?</Text>
        <Text style={styles.secondHeading}>Register</Text>
      </View>
      {/* Input form fields View */}
      <View style={styles.inputTitleMainView}>
        {/* Username */}
        <View style={styles.inputTitleSecondaryView}>
          <Image
            source={require('../assets/images/icons/user.png')}
            style={[
              styles.headingIconsStyle,
              {backgroundColor: '#fff', borderRadius: 50},
            ]}
          />
          <Text style={styles.inputTitleTextStyle}>Username</Text>
        </View>
        <InputComponent
        value={username}
        onChangeText={userName => setUsername(userName)}
        placeholder={'alexhiggins'} />
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
          onChangeText={userEmail => setemail(userEmail)}
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
          <InputComponent value={password} onChangeText={userPassword => setpassword(userPassword)} placeholder={'Password'} secureTextEntry={true} />
        </View>
        {/*Confirm Password */}
        {/* <View style={{alignSelf: 'center'}}>
          <View style={styles.inputTitleSecondaryView}>
            <Image
              source={require('../assets/images/icons/password.png')}
              style={styles.headingIconsStyle}
            />
            <Text style={styles.inputTitleTextStyle}>Confirm Password</Text>
          </View>
          <InputComponent
            placeholder={'Confirm Password'}
            secureTextEntry={true}
          />
        </View> */}
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
            pressHandler={() => register(username,email, password)}
          />
        </View>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
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
    marginVertical: 5,
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
    fontSize: 34,
  },
  secondHeading: {
    fontFamily: LAYOUT.FONTS.BOLD,
    color: '#000',
    fontSize: 30,
  },
  LoginLinkStyle: {
    fontFamily: LAYOUT.FONTS.BOLD,
    fontSize: 16,
    color: '#000',
  },
});
