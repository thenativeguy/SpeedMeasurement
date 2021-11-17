import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {LAYOUT} from '../../layout';
const PlayButton = ({click}) => {
  return (
    <View>
      <TouchableOpacity onPress={click}>
        <ImageBackground
          source={LAYOUT.ICONS.PLAY_BUTTON}
          style={styles.btnImageStyle}
        />
        <Text style={styles.btnTextStyle}>Play</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PlayButton;

const styles = StyleSheet.create({
  btnImageStyle: {
    width: LAYOUT.WIDTH * 0.4,
    height: LAYOUT.WIDTH * 0.4,
  },
  btnTextStyle: {
    color: '#fff',
    fontSize: 25,
    position: 'absolute',
    alignSelf: 'center',
    top: LAYOUT.WIDTH * 0.22,
    fontFamily: LAYOUT.FONTS.BOLD,
  },
});
