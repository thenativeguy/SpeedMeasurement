import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {LAYOUT} from '../../layout';
import Ionicons from 'react-native-vector-icons/Ionicons';
// ios-power-sharp
const LogInOut = ({click}) => {
  return (
    <TouchableOpacity onPress={click}
      style={{
        backgroundColor: LAYOUT.COLORS.SKY_BLUE,
        padding: 10,
        borderRadius: 15,
         marginHorizontal: 20,
      }}>
      <Ionicons name="ios-power-sharp" size={25} style={styles.powerBtn} />
    </TouchableOpacity>
  );
};

export default LogInOut;

const styles = StyleSheet.create({
  powerBtn: {
    width: LAYOUT.WIDTH * 0.07,
    height: LAYOUT.WIDTH * 0.07,
  },
});
