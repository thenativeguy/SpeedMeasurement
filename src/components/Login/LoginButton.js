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

const LoginButton = ({pressHandler, title}) => {
  return (
    <View>
      <TouchableOpacity style={styles.btnStyle} onPress={pressHandler}>
        <Text style={styles.btnTextStyle}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginButton;

const styles = StyleSheet.create({
  btnStyle: {
    paddingVertical: 12,
    backgroundColor: LAYOUT.COLORS.BUTTON_COLOR,
    width: LAYOUT.WIDTH * 0.9,
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 20,
    borderRadius: 13,
    borderWidth: 4,
    borderColor: LAYOUT.COLORS.BUTTON_BORDER,
  },
  btnTextStyle:{
    color: '#fff',
    fontFamily: LAYOUT.FONTS.BOLD,
    fontSize: 20,
  }
});
