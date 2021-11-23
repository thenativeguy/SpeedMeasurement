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
import {GAME_MODE_OPTIONS} from '../constants';
import AppContext, {useAppContext} from '../context/AppContext';
import {LAYOUT} from '../layout';

const Home = ({navigation, route}) => {
  const {players, gameMode, setGameMode} = useAppContext();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  const [playerNameOptions, setPlayerNameOptions] = useState(null);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [openNameDropdown, setOpenNameDropdown] = useState(false);

  useEffect(() => {
    setPlayerNameOptions(null);
    const unsubscribe = navigation.addListener('focus', () => {
      const result = players.map((user, index) => {
        return !user.isComplete && {label: user.name, value: index};
      });
      setPlayerNameOptions(result);
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);

  const navigateTo = () => {
    if (!value || !selectedPlayer) {
    } else {
      setGameMode(value);
      navigation.navigate('Stopwatch', {
        checkpoint: value,
        selectedPlayerIndex: selectedPlayer,
      });
    }
  };

  if (!playerNameOptions) return <View />;
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
        <DropDown
          theme={'DARK'}
          open={openNameDropdown}
          setOpen={setOpenNameDropdown}
          value={selectedPlayer}
          items={playerNameOptions}
          setValue={setSelectedPlayer}
          placeholder="Select Player"
          zIndex={1000000000}
        />

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
            value={gameMode ? gameMode : value}
            items={GAME_MODE_OPTIONS}
            setOpen={setOpen}
            setValue={setValue}
            placeholder="Select Checkpoint"
            disabled={gameMode !== null}
          />
        </View>
      </View>
      {/* Play Button */}
      <View>
        <View style={{marginBottom: 20, alignSelf: 'center'}}>
          <PlayButton click={navigateTo} />
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
