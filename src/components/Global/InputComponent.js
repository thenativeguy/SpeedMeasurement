import React from 'react';
import {ImageBackground, StyleSheet, Text, TextInput, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {LAYOUT} from '../../layout';

const InputComponent = ({placeholder, secureTextEntry}) => {
  return (
    <View>
      {secureTextEntry ? (
        <LinearGradient colors={['#FF8270', '#821100']} style={{borderRadius: 14, width: LAYOUT.WIDTH*.93}} >
          <TextInput
            placeholder={placeholder}
            style={styles.inputStyle}
            placeholderTextColor="#fff"
            secureTextEntry
          />
        </LinearGradient>
      ) : (
        <LinearGradient colors={['#FF8270', '#821100']} style={{borderRadius: 14,width: LAYOUT.WIDTH*.93}} >
          <TextInput
            placeholder={placeholder}
            style={styles.inputStyle}
            placeholderTextColor="#fff"
          />
        </LinearGradient>
      )}
    </View>
  );
};

export default InputComponent;

const styles = StyleSheet.create({
  inputStyle: {
    width: LAYOUT.WIDTH * 0.9,
    paddingLeft: 10,
    marginVertical: 5,
    marginHorizontal:5,
    borderRadius: 10,
    backgroundColor: LAYOUT.COLORS.RED
  },
});
