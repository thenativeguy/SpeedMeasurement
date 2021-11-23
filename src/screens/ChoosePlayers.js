import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Background from '../components/Global/Background';
import DropDown from '../components/Global/DropDown';
import LoginButton from '../components/Login/LoginButton';
import { PLAYER_NUMERS } from '../constants';
import {useAppContext} from '../context/AppContext';
import {LAYOUT} from '../layout';

const ChoosePlayers = ({navigation}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
 

  const {setPlayers, players} = useAppContext();

  const navigateTo = () => {
    let tempObj = {
      name: '',
      results: [],
      isComplete: false,
    };
    let tempArray = [...players];
    for (let index = 0; index < value; index++) {
      tempArray.push(tempObj);
    }
    setValue(null);
    setPlayers(tempArray);
    if(!value){
      
    }
    else{
      navigation.navigate('Player Details');
    }
  };

  return (
    <Background>
      <View style={{flex: 3, marginHorizontal: 10}}>
        <Text style={styles.inputTitleTextStyle}>Choose Players</Text>
        <DropDown
          theme={'DARK'}
          open={open}
          value={value}
          items={PLAYER_NUMERS}
          setOpen={setOpen}
          setValue={setValue}
          placeholder="Select No. of players"
        />
        <View>
          <LoginButton title={'Next'} pressHandler={navigateTo} />
        </View>
      </View>
      {/* <LoginButton /> */}
    </Background>
  );
};

export default ChoosePlayers;

const styles = StyleSheet.create({
  inputTitleTextStyle: {
    fontFamily: LAYOUT.FONTS.BOLD,
    fontSize: 16,
    marginLeft: 10,
    color: '#000',
    marginBottom: 20,
  },
});
