import React, { useState } from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native'
import DropDown from '../components/Global/DropDown'
import InputComponent from '../components/Global/InputComponent'
import PlayButton from '../components/Home/PlayButton'
import LoginButton from '../components/Login/LoginButton'
import { LAYOUT } from '../layout'

const Home = () => {
    
    return (
        <View style={{ flex: .9, justifyContent: 'center', alignItems: 'center' }}>
        <ImageBackground source={require('../assets/images/Background.png')} style={{ flex: 1, width: LAYOUT.WIDTH * 1, height: LAYOUT.HEIGHT * 1.1 }} />
  
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.firstHeading}>Are You</Text>
          <Text style={styles.secondHeading}>fast as a rabbit?</Text>
        </View>
        <View style={{ marginVertical: 10, alignSelf: 'center' }}>
          <View style={{ flexDirection: 'row', marginBottom: 10, alignItems: 'center' }}>
            <Image source={require('../assets/images/icons/animal-track.png')} style={{ width: 30, height: 30,resizeMode: 'contain' }} />
            <Text style={{ fontFamily: LAYOUT.FONTS.BOLD, fontSize: 18, marginLeft: 20, color: '#000' }}>Player Name</Text>
          </View>
          <InputComponent
            placeholder={"Rudolph Ingram"}
  
          />
        </View>
        <View style={{ alignSelf: 'center', }}>
          <View style={{ flexDirection: 'row', marginBottom: 10, alignItems: 'center' }}>
            <Image source={require('../assets/images/icons/hare1.png')} style={{ width: 30, height: 30, resizeMode: 'contain' }} />
            <Text style={{ fontFamily: LAYOUT.FONTS.BOLD, fontSize: 18, marginLeft: 20, color: '#000' }}>Game Mode</Text>
          </View>
         <DropDown />
        </View>
        <View style={{ marginTop: 10, }}>
          <PlayButton />
        </View>
       
  
      </View>
    )
}

export default Home

const styles = StyleSheet.create({
    LoginText: {
        color: 'red',
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center',
      },
      firstHeading: {
        fontFamily: LAYOUT.FONTS.BOLD,
        color: '#fff',
        fontSize: 42,
      },
      secondHeading: {
        fontFamily: LAYOUT.FONTS.BOLD,
        color: '#000',
        fontSize: 34,
      },
})
