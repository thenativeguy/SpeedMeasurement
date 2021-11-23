import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { LAYOUT } from '../../layout';

const Header = ({title, subTitle, scoreboard, register, playerName}) => {
  const myStyle = styles(scoreboard, register)
  return (
    <View style={myStyle.main}>
      <Text style={myStyle.firstHeading}>{title}</Text>
      {playerName && <Text style={myStyle.secondHeading}>{playerName}</Text>}
      <Text style={myStyle.secondHeading}>{subTitle}</Text>
    </View>
  );
};

export default Header;
 
const styles = (scoreboard, register)=> StyleSheet.create({
    main: {
      alignItems: 'center',
      marginVertical: register? LAYOUT.HEIGHT * 0.01 :  LAYOUT.HEIGHT * 0.04,
    },
    firstHeading: {
        fontFamily: LAYOUT.FONTS.BOLD,
        color: '#fff',
        fontSize: 42,
      },
      secondHeading: {
        fontFamily: LAYOUT.FONTS.BOLD,
        color: '#000',
        fontSize: 34,
        textAlign: scoreboard && 'center' 
      },
});
