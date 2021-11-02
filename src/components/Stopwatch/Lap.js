import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { LAYOUT } from '../../layout';
import Timer from './Timer';

const Lap = ({number, interval, fastest, slowest}) => {
    const lapStyle = [
        styles.lapText,
        fastest && styles.fastest,
        slowest && styles.slowest,
      ];
      return (
        <View style={styles.lap}>
          <Text style={lapStyle}>Lap {number}</Text>
          <Timer style={[lapStyle, styles.lapTimer]} interval={interval} />
        </View>
      );
}

export default Lap

const styles = StyleSheet.create({
    lapText: {
      fontFamily: LAYOUT.FONTS.BOLD,
        color: LAYOUT.COLORS.BUTTON_COLOR,
        fontSize: 18,
      },
    lap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // borderColor: '#151515',
        // borderTopWidth: 1,
        paddingVertical: 10,
      },
      lapTimer: {
        width: 30,
      },
     fastest: {
        color: LAYOUT.COLORS.GREEN,
      },
      slowest: {
        color: LAYOUT.COLORS.RED,
      },
})
