import React, {useEffect, useState} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import Background from '../components/Global/Background';
import InputComponent from '../components/Global/InputComponent';
import LoginButton from '../components/Login/LoginButton';
import {useAppContext} from '../context/AppContext';

const PlayerDetails = ({route, navigation}) => {
  var numInputs = [];
  const {players, setPlayers} = useAppContext();

  const [tempPlayer, setTempPlayer] = useState(null);

  useEffect(() => {
    let temp = [];
    for (let index = 0; index < players.length; index++) {
      temp.push({name: '', results: [], isComplete: false});
    }
    setTempPlayer(temp);
  }, []);

  const onTextChange = (index, value) => {
    let temp = [...tempPlayer];
    temp[index].name = value;
    setTempPlayer(temp);
  };

  const navigateTo = () => {
    if (tempPlayer===null) {
    } else {
      let temp = [...players];
      temp = tempPlayer;
      setPlayers(temp);

      navigation.navigate('Home');
    }
  };

  if (!tempPlayer) return <View />;

  return (
    <Background>
      {/* <KeyboardAvoidingView> */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flex: 1, marginHorizontal: 10}}>
          {tempPlayer &&
            tempPlayer.map((el, i) => (
              <View key={i.toString()}>
                <InputComponent
                  label={`Player ${i + 1}`}
                  placeholder={'Player Name'}
                  value={el.name}
                  onChangeText={value => onTextChange(i, value)}
                />
              </View>
            ))}
          <LoginButton title={'Next'} pressHandler={navigateTo} />
        </View>
      </ScrollView>
      {/* </KeyboardAvoidingView> */}
    </Background>
  );
};

export default PlayerDetails;

const styles = StyleSheet.create({});
