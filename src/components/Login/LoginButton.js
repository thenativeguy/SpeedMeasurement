import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {LAYOUT} from '../../layout';

const LoginButton = () => {
  return (
    <View>
      <TouchableOpacity style={styles.btnStyle}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginButton;

const styles = StyleSheet.create({
  btnStyle: {
    paddingVertical: 10,
    backgroundColor: LAYOUT.COLORS.BUTTON_COLOR,
    width: LAYOUT.WIDTH * 0.9,
    alignItems: 'center',
  },
});
