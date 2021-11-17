import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {LAYOUT} from '../../layout';

const Background = ({children}) => {
  return (
    <View style={styles.mainView}>
      {/* Bacground Image */}
      <ImageBackground
        source={LAYOUT.BACKGROUND.BACKGROUND_IMG}
        style={styles.backgroundImageStyle}
      />
      {children}
    </View>
  );
};

export default Background;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    height: LAYOUT.HEIGHT * 1,
  },
  backgroundImageStyle: {
    flex: 1,
    width: LAYOUT.WIDTH * 1,
    height: LAYOUT.HEIGHT * 1,
  },
});
