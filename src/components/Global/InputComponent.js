import React from 'react';
import {ImageBackground, StyleSheet, Text, TextInput, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {LAYOUT} from '../../layout';

const InputComponent = ({placeholder, secureTextEntry, value, onChangeText}) => {
  return (
    <View>
      <LinearGradient
        colors={['#FF8270', '#821100']}
        style={styles.linearGradientStyle}>
        <TextInput
          placeholder={placeholder}
          style={styles.inputStyle}
          placeholderTextColor="#fff"
          secureTextEntry={secureTextEntry}
          value={value}
          onChangeText={onChangeText}
        />
      </LinearGradient>
    </View>
  );
};

export default InputComponent;

const styles = StyleSheet.create({
  linearGradientStyle: {
    borderRadius: 14,
    width: LAYOUT.WIDTH * 0.93,
  },
  inputStyle: {
    width: LAYOUT.WIDTH * 0.9,
    paddingLeft: 10,
    marginVertical: 5,
    marginHorizontal: 5,
    borderRadius: 10,
    backgroundColor: LAYOUT.COLORS.RED,
    fontSize: 20,
    color: '#fff',
    fontFamily: LAYOUT.FONTS.BOLD,
  },
});
