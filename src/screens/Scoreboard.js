import React, {useEffect} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import Background from '../components/Global/Background';
import Header from '../components/Global/Header';
import LogInOut from '../components/Global/LogInOut';
import HomeButton from '../components/Home/HomeButton';
import Timer from '../components/Stopwatch/Timer';
import {useAppContext} from '../context/AppContext';
import {LAYOUT} from '../layout';

const Scoreboard = ({route, navigation}) => {
  const lap = route.params ? route.params.lap : null;
  const {players, resetState} = useAppContext();

  useEffect(() => {
    console.log(JSON.stringify(players, null, 1));
    // console.log(JSON.stringify(players.sort(), null, 1))
    players.map((pl, index) => {
      pl.results.sort().reverse()
      console.log(pl.results);
      // let fastest = []
      // fastest.push(pl.results[0])
      // fastest.sort().reverse()
      // console.log(fastest)
    });
  }, []);

  const navigateTo = screenName => {
    resetState();
    navigation.navigate(screenName);
  };

  return (
    <Background>
      <View style={styles.headerView}>
        <View style={styles.headerSubView}>
          <View style={{flexDirection: 'row'}}>
            <HomeButton click={() => navigateTo('Choose Players')} />
            <LogInOut click={() => navigateTo('Login')} />
          </View>
          {lap < 20000 ? (
            <Header
              scoreboard
              title="Awesome!"
              subTitle="You were fast like a rabbit"
            />
          ) : (
            <Header
              scoreboard
              title="Good!"
              subTitle="You were fast like a turtle"
            />
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
              source={LAYOUT.SCOREBOARD_CHARACTERS.RABBIT}
              style={styles.characterImageStyle}
            />
          ) : (
            <Image
              source={LAYOUT.SCOREBOARD_CHARACTERS.TURTLE}
              style={styles.characterImageStyle}
            />
          )}
        </View>
      </View>
    </Background>
  );
};

export default Scoreboard;

const styles = StyleSheet.create({
  headerView: {
    alignItems: 'center',
  },
  headerSubView: {
    alignItems: 'center',
    marginBottom: LAYOUT.WIDTH * 0.15,
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
// style={{marginVertical: LAYOUT.HEIGHT * 0.1}}
// <View style={{marginVertical: LAYOUT.HEIGHT * 0.017}}>
//   <Text style={styles.firstHeading}>Good!</Text>
//   <Text style={[styles.secondHeading, {textAlign: 'center'}]}>
//     You were fast like a turtle
//   </Text>
// </View>

// <View style={{marginVertical: LAYOUT.HEIGHT * 0.017}}>
//   <Text style={styles.firstHeading}>Awesome!</Text>
//   <Text style={[styles.secondHeading, {textAlign: 'center'}]}>
//     You were fast like a rabbit
//   </Text>
// </View>
