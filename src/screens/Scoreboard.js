import React, {useContext} from 'react';
import {StyleSheet, Text, View, ImageBackground, Image} from 'react-native';
import LogInOut from '../components/Global/LogInOut';
import HomeButton from '../components/Home/HomeButton';
import Timer from '../components/Stopwatch/Timer';
import {ContextAuth} from '../context/AuthContext';
import {LAYOUT} from '../layout';

const Scoreboard = ({route, navigation}) => {
  const {user, logout} = useContext(ContextAuth);
  const lap = route.params ? route.params.lap : null;
  return (
    <View style={styles.mainViewActive}>
      <ImageBackground
        source={require('../assets/images/Background.png')}
        style={styles.backgroundImageStyle}
      />
      <View style={{alignItems: 'center'}}>
        <View style={{alignItems: 'center', marginBottom: LAYOUT.WIDTH * 0.15}}>
          <View style={{flexDirection: 'row'}}>
            <HomeButton click={() => navigation.navigate('Home')} />
            <LogInOut click={() => logout()} />
          </View>
          {lap < 20000 ? (
            <View style={{marginVertical: LAYOUT.HEIGHT * 0.017}}>
              <Text style={styles.firstHeading}>Awesome!</Text>
              <Text style={[styles.secondHeading, {textAlign: 'center'}]}>
                You were fast like a rabbit
              </Text>
            </View>
          ) : (
            // style={{marginVertical: LAYOUT.HEIGHT * 0.1}}
            <View style={{marginVertical: LAYOUT.HEIGHT * 0.017}}>
              <Text style={styles.firstHeading}>Good!</Text>
              <Text style={[styles.secondHeading, {textAlign: 'center'}]}>
                You were fast like a turtle
              </Text>
            </View>
          )}
        </View>
        <View style={{marginBottom: LAYOUT.HEIGHT * 0.05}}>
          <Timer
            interval={lap}
            style={
              lap < 20000
                ? styles.timerTextStyle
                : [styles.timerTextStyle, {color: LAYOUT.COLORS.RED}]
            }
          />
        </View>
        <View>
          {lap < 20000 ? (
            <Image
              source={require('../assets/images/character-rabbit.png')}
              style={styles.characterImageStyle}
            />
          ) : (
            <Image
              source={require('../assets/images/character2.png')}
              style={styles.characterImageStyle}
            />
          )}
        </View>
      </View>
    </View>
  );
};

export default Scoreboard;

const styles = StyleSheet.create({
  mainViewActive: {
    flex: 1,
    height: LAYOUT.HEIGHT * 1,
  },
  backgroundImageStyle: {
    flex: 1,
    width: LAYOUT.WIDTH * 1,
    height: LAYOUT.HEIGHT * 1.1,
  },
  timer: {
    fontFamily: LAYOUT.FONTS.BLACK,
    color: LAYOUT.COLORS.BUTTON_BORDER,
    fontSize: 60,
    fontWeight: '200',
    width: 110,
    textAlign: 'center',
    textShadowColor: '#fff',
    textShadowRadius: 1,
    textShadowOffset: {
      width: 2,
      height: 2,
    },
  },
  firstHeading: {
    fontFamily: LAYOUT.FONTS.BOLD,
    color: '#fff',
    fontSize: 35,
    marginTop: 10,
    alignSelf: 'center',
  },
  secondHeading: {
    fontFamily: LAYOUT.FONTS.BOLD,
    color: '#000',
    fontSize: 34,
  },
  timerTextStyle: {
    fontSize: 65,
    fontFamily: LAYOUT.FONTS.BLACK,
    color: LAYOUT.COLORS.GREEN,
    textShadowColor: '#fff',
    textShadowRadius: 1,
    textShadowOffset: {
      width: 2,
      height: 2,
    },
  },
  characterImageStyle: {
    width: LAYOUT.WIDTH,
    height: LAYOUT.HEIGHT * 0.3,
    resizeMode: 'contain',
    // position: 'absolute',
    // bottom: 0,
  },
});
