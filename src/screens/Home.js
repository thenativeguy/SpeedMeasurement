import React, {useContext, useState} from 'react';
import {StyleSheet, Text, View, ImageBackground, Image} from 'react-native';
import DropDown from '../components/Global/DropDown';
import InputComponent from '../components/Global/InputComponent';
import HomeButton from '../components/Home/HomeButton';
import PlayButton from '../components/Home/PlayButton';
import {ContextAuth} from '../context/AuthContext';
import {LAYOUT} from '../layout';

const Home = ({navigation}) => {
  const [playBtn, setplayBtn] = useState(true);
  const {user, logout} = useContext(ContextAuth);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: '1 Checkpoint run', value: 1},
    {label: '2 Checkpoint run', value: 2},
    {label: '4 Checkpoint run', value: 4},
    {label: '6 Checkpoint run', value: 6},
    {label: '12 Checkpoint run', value: 12},
  ]);

  return (
    // Main View
    <View style={playBtn ? styles.mainViewActive : styles.mainView}>
      {/* Background Image */}
      <ImageBackground
        source={require('../assets/images/Background.png')}
        style={styles.backgroundImageStyle}
      />

      {/* Main Heading View */}
      <View style={{alignItems: 'center'}}>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.firstHeading}>Are You</Text>
          <Text style={styles.secondHeading}>fast as a rabbit?</Text>
        </View>
      </View>

      {/* Input form field View */}

      <View style={styles.inputTitleMainView}>
        <View style={styles.inputTitleSecondaryView}>
          <Image
            source={require('../assets/images/icons/animal-track.png')}
            style={styles.headingIconsStyle}
          />
          <Text style={styles.inputTitleTextStyle}>Player Name</Text>
        </View>
        <InputComponent placeholder={'Rudolph Ingram'} />
        <View style={{alignSelf: 'center'}}>
          <View style={styles.inputTitleSecondaryView}>
            <Image
              source={require('../assets/images/icons/hare1.png')}
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
          />
        </View>
      </View>
      {/* Play Button */}
      <View>
        <View style={{marginBottom: 20}}>
          <PlayButton click={() => navigation.navigate('Stopwatch', {value})} />
        </View>
      </View>
    </View>
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
  timerTextStyle: {
    fontSize: 40,
    fontFamily: LAYOUT.FONTS.BLACK,
    color: LAYOUT.COLORS.GREEN,
    textShadowColor: '#fff',
    textShadowRadius: 1,
    textShadowOffset: {
      width: 2,
      height: 2,
    },
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
    // alignSelf: 'center',
  },
  inputTitleSecondaryView: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
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
