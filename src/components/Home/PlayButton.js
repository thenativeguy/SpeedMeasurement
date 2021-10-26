import React from 'react'
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { LAYOUT } from '../../layout'
const PlayButton = ({pressHanlder}) => {
    return (
        <View>
            <TouchableOpacity onPress={pressHanlder}>
                <ImageBackground source={require('../../assets/images/icons/play-button.png')} style={{width: LAYOUT.WIDTH*0.4, height: LAYOUT.WIDTH*0.4}} />
                <Text style={{color:'#fff', fontSize: 25, position: 'absolute', alignSelf: 'center',top:LAYOUT.WIDTH*0.22, fontFamily: LAYOUT.FONTS.BOLD}}>Play</Text>
            </TouchableOpacity>
        </View>
    )
}

export default PlayButton

const styles = StyleSheet.create({})
