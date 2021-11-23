import React, {useEffect, useState, useRef} from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import Timer from '../components/Stopwatch/Timer';
import RoundButton from '../components/Stopwatch/RoundButton';
import LapsTable from '../components/Stopwatch/LapsTable';
import {LAYOUT} from '../layout';
import HomeButton from '../components/Home/HomeButton';
import Background from '../components/Global/Background';
import {useAppContext} from '../context/AppContext';
function ButtonsRow({children}) {
  return <View style={styles.buttonsRow}>{children}</View>;
}
const Stopwatch = ({route, navigation}) => {
  const {checkpoint, selectedPlayerIndex} = route.params;
  const {players, setPlayers} = useAppContext();
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

    // Assing Laps to current playing user
    const temp = [...players];
    temp[selectedPlayerIndex].isComplete = true;
    temp[selectedPlayerIndex].results = [firstLap + now - start, ...other];
    temp[selectedPlayerIndex].finalResult = laps.reduce((total, curr) => total + curr, 0) + timer,
    setPlayers(temp);

    // Check if players remaining
    const isPlayerRemining = temp.some(elem => elem.isComplete === false);
    if (isPlayerRemining) {
      setLaps([]);
      navigation.navigate('Home');
    } else {
      setLaps([]);
      navigation.navigate('Scoreboard', {
        lap: laps.reduce((total, curr) => total + curr, 0) + timer,
      });
    }
  };

  const timer = now - start;
  return (
    <Background>
      <View style={{alignItems: 'center'}}>
        <View style={{alignItems: 'center'}}>
          <HomeButton click={() => navigation.navigate('Home')} />
          <View style={{marginVertical: LAYOUT.WIDTH * 0.15}}>
            <Timer
              interval={laps.reduce((total, curr) => total + curr, 0) + timer}
              style={styles.timer}
            />
          </View>

          {checkpoint > 0 && laps.length === 0 ? (
            <RoundButton
              title="Start"
              color="#fff"
              background={LAYOUT.COLORS.BUTTON_COLOR}
              onPress={startTimer}
            />
          ) : null}
          {laps.length < checkpoint && start > 0 ? (
            // <ButtonsRow>
            <RoundButton
              title="Lap"
              color="#FFFFFF"
              background={LAYOUT.COLORS.BUTTON_COLOR}
              onPress={lapTimer}
            />
          ) : // </ButtonsRow>
          !checkpoint ? null : laps.length < checkpoint ? null : (
            checkpoint == checkpoint && (
              <RoundButton
                title="Stop"
                color="#fff"
                background={LAYOUT.COLORS.RED}
                onPress={stopTimer}
              />
            )
          )}
        </View>
      </View>
      <LapsTable laps={laps} timer={timer} />
    </Background>
  );
};

export default Stopwatch;

const styles = StyleSheet.create({
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
