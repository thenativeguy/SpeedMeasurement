import React, {useEffect, useState, useRef} from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import Timer from '../components/Stopwatch/Timer';
import RoundButton from '../components/Stopwatch/RoundButton';
import LapsTable from '../components/Stopwatch/LapsTable';
import {LAYOUT} from '../layout';

function ButtonsRow({children}) {
  return <View style={styles.buttonsRow}>{children}</View>;
}
const Stopwatch = ({route, navigation}) => {
  const {value} = route.params;
  const [start, setStart] = useState(0);
  const [now, setNow] = useState(0);
  const [laps, setLaps] = useState([]);
  // const [lastLap, setLastLap] = useState(laps[0])
  let timerInterval = useRef(null);
  useEffect(() => {
    return () => {
      clearInterval(timerInterval.current);
    };
  }, []);

  const startTimer = () => {
    const cnow = new Date().getTime();
    setStart(cnow);
    setNow(cnow);
    setLaps([0]);

    timerInterval.current = setInterval(() => {
      setNow(new Date().getTime());
    }, 100);
  };

  const lapTimer = () => {
    const timestamp = new Date().getTime();
    const [firstLap, ...other] = laps;
    setLaps([0, firstLap + now - start, ...other]);
    setStart(timestamp);
    setNow(timestamp);
  };

  const stopTimer = () => {
    clearInterval(timerInterval.current);
    const [firstLap, ...other] = laps;
    setLaps([firstLap + now - start, ...other]);
    setStart(0);
    setNow(0);
    // navigation.navigate('Home',[laps])
  };

  const resetTimer = () => {
    setLaps([]);
    setStart(0);
    setNow(0);
  };

  const resumeTimer = () => {
    const cnow = new Date().getTime();
    setStart(cnow);
    setNow(cnow);

    timerInterval.current = setInterval(() => {
      setNow(new Date().getTime());
    }, 100);
  };

  const timer = now - start;
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/images/Background.png')}
        style={styles.backgroundImageStyle}
      />
      <Text> Checkpoint: {value} </Text>
      <Timer
        interval={laps.reduce((total, curr) => total + curr, 0) + timer}
        style={styles.timer}
      />
      {value > 0 && laps.length === 0 ? (
        <RoundButton
          title="Start"
          color="#fff"
          background={LAYOUT.COLORS.BUTTON_COLOR}
          onPress={startTimer}
        />
      ) : null}
      {laps.length < value && start > 0 ? (
        // <ButtonsRow>
        <RoundButton
          title="Lap"
          color="#FFFFFF"
          background={LAYOUT.COLORS.BUTTON_COLOR}
          onPress={lapTimer}
        />
      ) : // </ButtonsRow>
      !value ? null : laps.length < value ? null : (
        value == value && (
          <RoundButton
            title="Stop"
            color="#fff"
            background={LAYOUT.COLORS.RED}
            onPress={stopTimer}
            />
            )
            )}
            
          {/* <Text>{laps.pop()} </Text> */}
      {/* {laps.length > 0 && start === 0 && (
        <ButtonsRow>
          <RoundButton
            title="Reset"
            color="#FFFFFF"
            background={LAYOUT.COLORS.BUTTON_COLOR}
            onPress={resetTimer}
          />
          <RoundButton
            title="Start"
            color="#fff"
            background={LAYOUT.COLORS.BUTTON_COLOR}
            onPress={resumeTimer}
          />
        </ButtonsRow>
      )} */}
      {/* {<RoundButton
            title="Stop"
            color="#fff"
            background={LAYOUT.COLORS.RED}
            onPress={stopTimer}
          />&&<Text> {laps[laps.length-1]} </Text>} */}
         
          <Text>{laps[0]} </Text>
        
      <LapsTable laps={laps} timer={timer} />
    </View>
  );
};

export default Stopwatch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: LAYOUT.WIDTH * 0.02,
  },
  backgroundImageStyle: {
    flex: 1,
    width: LAYOUT.WIDTH * 1,
    height: LAYOUT.HEIGHT * 1.1,
    paddingTop: LAYOUT.HEIGHT * 0.16,
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
  buttonsRow: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    marginTop: LAYOUT.HEIGHT * 0.05,
    marginBottom: LAYOUT.HEIGHT * 0.04,
  },
});
