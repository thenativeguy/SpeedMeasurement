import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Background from '../components/Global/Background';
import DropDown from '../components/Global/DropDown';
import LoginButton from '../components/Login/LoginButton';
import {useAppContext} from '../context/AppContext';
import {LAYOUT} from '../layout';

const ChoosePlayers = ({navigation}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 1, value: 1, name: 'Khan'},
    {label: 2, value: 2},
    {label: 4, value: 4},
    {label: 6, value: 6},
    {label: 12, value: 12},
  ]);

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
    setPlayers(tempArray);
    navigation.navigate('Player Details');
  };

  return (
    <Background>
      <View style={{flex: 3, marginHorizontal: 10}}>
        <Text style={styles.inputTitleTextStyle}>Choose Players</Text>
        <DropDown
          theme={'DARK'}
          open={open}
          value={value}
          items={items}
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
    marginLeft: 20,
    color: '#000',
  },
});
