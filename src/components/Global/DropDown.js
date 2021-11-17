import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DropDownPicker from 'react-native-dropdown-picker';
import LinearGradient from 'react-native-linear-gradient';
import {LAYOUT} from '../../layout';

const DropDown = ({
  theme,
  open,
  value,
  items,
  setOpen,
  setValue,
  setItems,
  placeholder,
}) => {
  return (
    <LinearGradient colors={['#FF8270', '#821100']} style={{borderRadius: 14, paddingHorizontal: 5}}>
      <DropDownPicker
        theme={'DARK'}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholder={placeholder}
        ArrowDownIconComponent={() => (
          <MaterialIcons name="arrow-drop-down" size={40} color="#fff" />
        )}
        ArrowUpIconComponent={() => (
          <MaterialIcons name="arrow-drop-up" size={40} color="#fff" />
        )}
        dropDownContainerStyle={{backgroundColor: LAYOUT.COLORS.RED}}
        textStyle={{fontFamily: LAYOUT.FONTS.BOLD, color: '#fff', fontSize: 18}}
        style={{
          width: LAYOUT.WIDTH * 0.915,
          alignSelf: 'center',
          marginVertical: 5,
          backgroundColor: LAYOUT.COLORS.RED,
          borderWidth: 0,
        }}
      />
    </LinearGradient>
  );
};

export default DropDown;

const styles = StyleSheet.create({});
