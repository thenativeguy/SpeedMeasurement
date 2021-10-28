import React from 'react';
import {
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { LAYOUT } from '../../layout';

const HomeButton = ({click}) => {
  return (
    <TouchableOpacity onPress={click} style={{backgroundColor:LAYOUT.COLORS.SKY_BLUE, padding:10,borderRadius: 15}}>
      <ImageBackground
        source={require('../../assets/images/icons/home.png')}
        style={styles.btnImageStyle}
      />
    </TouchableOpacity>
  );
};

export default HomeButton;

const styles = StyleSheet.create({
  btnImageStyle: {
    width: LAYOUT.WIDTH * 0.07,
    height: LAYOUT.WIDTH * 0.07,
  },
  btnTextStyle: {
    color: '#fff',
    fontSize: 25,
    position: 'absolute',
    alignSelf: 'center',
    bottom: LAYOUT.WIDTH * 0.05,
    fontFamily: LAYOUT.FONTS.BOLD,
  },
});
