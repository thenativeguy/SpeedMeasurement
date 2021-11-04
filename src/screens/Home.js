import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, Alert} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import DropDown from '../components/Global/DropDown';
import InputComponent from '../components/Global/InputComponent';
import HomeButton from '../components/Home/HomeButton';
import PlayButton from '../components/Home/PlayButton';
import { ContextUser } from '../context/UserContext';
import {LAYOUT} from '../layout';

const Home = ({navigation}) => {
  const {user} = useContext(ContextUser)
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
          <LinearGradient
           colors={['#FF8270', '#821100']}
           style={styles.linearGradientStyle}>
          <Text style={styles.playerNameStyle}>{user?user.username: <Text>No user</Text>}</Text>
          </LinearGradient>
        {/* <InputComponent placeholder={'Rudolph Ingram'} /> */}
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
  playerNameStyle:{
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
