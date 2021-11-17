import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {LAYOUT} from '../../layout';

const InputComponent = ({
  placeholder,
  secureTextEntry,
  value,
  onChangeText,
  label,
  icon,
  pwd,
}) => {
  const iconStyle = styles(pwd);
  return (
    <View>
      <View style={iconStyle.inputTitleSecondaryView}>
        {icon && <Image source={icon} style={iconStyle.headingIconsStyle} />}
        <Text style={iconStyle.inputTitleTextStyle}>{label}</Text>
      </View>
      <LinearGradient
        colors={['#FF8270', '#821100']}
        style={iconStyle.linearGradientStyle}>
        <TextInput
          placeholder={placeholder}
          style={iconStyle.inputStyle}
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

const styles = pwd =>
  StyleSheet.create({
    linearGradientStyle: {
      borderRadius: 14,
      // width: LAYOUT.WIDTH * 0.93,
    },
    inputStyle: {
      // width: LAYOUT.WIDTH * 0.9,
      paddingLeft: 10,
      marginVertical: 5,
      marginHorizontal: 5,
      borderRadius: 10,
      backgroundColor: LAYOUT.COLORS.RED,
      fontSize: 20,
      color: '#fff',
      fontFamily: LAYOUT.FONTS.BOLD,
    },
    inputTitleSecondaryView: {
      flexDirection: 'row',
      marginVertical: 5,
      alignItems: 'center',
    },
    headingIconsStyle: {
      width: 30,
      height: 30,
      backgroundColor: pwd ? 'transparent' : '#fff',
      borderRadius: 50,
    },
    inputTitleTextStyle: {
      fontFamily: LAYOUT.FONTS.BOLD,
      fontSize: 18,
      marginLeft: 20,
      color: '#000',
    },
  });
