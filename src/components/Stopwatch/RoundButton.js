import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { LAYOUT } from '../../layout';

const RoundButton = ({title, color, background, onPress, disabled}) => {
    return (
        <TouchableOpacity
          onPress={() => !disabled && onPress()}
          style={[styles.button, {backgroundColor: background}]}
          activeOpacity={disabled ? 1.0 : 0.7}>
          <View style={styles.buttonBorder}>
            <Text style={[styles.buttonTitle, {color}]}>{title}</Text>
          </View>
        </TouchableOpacity>
      );
}

export default RoundButton

const styles = StyleSheet.create({
    button: {
        width: 80,
        height: 80,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
      },
      buttonTitle: {
        fontFamily: LAYOUT.FONTS.BOLD,
        fontSize: 18,
      },
      buttonBorder: {
        width: 76,
        height: 76,
        borderRadius: 38,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
})
