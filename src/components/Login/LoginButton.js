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
      <TouchableOpacity
        style={styles.btnStyle}
        onPress={pressHandler}>
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
    marginVertical: 20,
    borderRadius: 13,
    borderWidth: 4,
    borderColor: LAYOUT.COLORS.BUTTON_BORDER,
  },
  btnStyleDisabled: {
    backgroundColor: '#098ebf',
    paddingVertical: 12,
    backgroundColor: LAYOUT.COLORS.BUTTON_COLOR,
    marginVertical: 20,
    borderRadius: 13,
    borderWidth: 4,
    borderColor: LAYOUT.COLORS.BUTTON_BORDER,
  },
  btnTextStyle: {
    color: '#fff',
    fontFamily: LAYOUT.FONTS.BOLD,
    fontSize: 20,
    textAlign: 'center',
  },
});
