import React, {useContext, useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Background from '../components/Global/Background';
import DropDown from '../components/Global/DropDown';
import Header from '../components/Global/Header';
import PlayButton from '../components/Home/PlayButton';
import AppContext, {useAppContext} from '../context/AppContext';
import {LAYOUT} from '../layout';

const Home = ({navigation, route}) => {
  // const {playerName} = route.params;
  const {players, setPlayers} = useAppContext();
  const [playBtn, setplayBtn] = useState(true);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: '1 Checkpoint run', value: 1},
    {label: '2 Checkpoint run', value: 2},
    {label: '4 Checkpoint run', value: 4},
    {label: '6 Checkpoint run', value: 6},
    {label: '12 Checkpoint run', value: 12},
  ]);
  const [open1, setOpen1] = useState(false);
  const [value1, setValue1] = useState(null);
  useEffect(() => {
    const result = players.map((user, index) => {
      return {label: user.name, value: index + 1};
    });
    setValue1(result);
    console.log(result);
  }, []);

  // if (!value) return <View />;
  return (
    <Background>
      <Header title="Are You" subTitle="fast as a rabbit?" />
      <View style={styles.inputTitleMainView}>
        <View style={styles.inputTitleSecondaryView}>
          <Image
            source={LAYOUT.ICONS.ANIMAL_TRACK}
            style={styles.headingIconsStyle}
          />
          <Text style={styles.inputTitleTextStyle}>Player Name</Text>
        </View>
        {/* <DropDown
            theme={'DARK'}
            open={open1}
            value={value1}
            items={items}
            setOpen={setOpen1}
            setValue={setValue1}
            setItems={setItems1}
            placeholder="Select Checkpoint"
          /> */}
        {/* <LinearGradient
          colors={['#FF8270', '#821100']}
          style={styles.linearGradientStyle}> */}
          {/* <Text style={styles.playerNameStyle}>{playerName}</Text> */}
        {/* </LinearGradient> */}
        {/* <InputComponent placeholder={'Rudolph Ingram'} /> */}
        <View style={{alignSelf: 'center'}}>
          <View style={styles.inputTitleSecondaryView}>
            <Image
              source={LAYOUT.ICONS.HARE}
              style={styles.headingIconsStyle}
            />
            <Text style={styles.inputTitleTextStyle}>Game Mode</Text>
          </View>
          <DropDown
            theme={'DARK'}
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            placeholder="Select Checkpoint"
          />
        </View>
      </View>
      {/* Play Button */}
      <View>
        <View style={{marginBottom: 20, alignSelf: 'center'}}>
          <PlayButton click={() => navigation.navigate('Stopwatch', {value})} />
        </View>
      </View>
    </Background>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainViewActive: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  backgroundImageStyle: {
    flex: 1,
    width: LAYOUT.WIDTH * 1,
    height: LAYOUT.HEIGHT * 1.1,
  },
  inputTitleMainView: {
    marginVertical: 5,
    alignSelf: 'center',
    marginBottom: LAYOUT.HEIGHT * 0.1,
  },
  inputTitleMainViewActive: {
    marginTop: 5,
  },
  inputTitleSecondaryView: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
  },
  linearGradientStyle: {
    borderRadius: 14,
    width: LAYOUT.WIDTH * 0.93,
  },
  playerNameStyle: {
    width: LAYOUT.WIDTH * 0.9,
    paddingLeft: 10,
    marginVertical: 5,
    marginHorizontal: 5,
    borderRadius: 10,
    paddingVertical: 10,
    backgroundColor: LAYOUT.COLORS.RED,
    fontSize: 20,
    color: '#fff',
    fontFamily: LAYOUT.FONTS.BOLD,
  },
  headingIconsStyle: {
    width: 25,
    height: 25,
  },
  inputTitleTextStyle: {
    fontFamily: LAYOUT.FONTS.BOLD,
    fontSize: 16,
    marginLeft: 20,
    color: '#000',
  },
  LoginText: {
    color: 'red',
    fontSize: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  firstHeading: {
    fontFamily: LAYOUT.FONTS.BOLD,
    color: '#fff',
    fontSize: 35,
    marginTop: 10,
  },
  secondHeading: {
    fontFamily: LAYOUT.FONTS.BOLD,
    color: '#000',
    fontSize: 34,
  },
  characterImageStyle: {
    width: LAYOUT.WIDTH * 0.4,
    height: LAYOUT.HEIGHT * 0.3,
    resizeMode: 'contain',
  },
});
