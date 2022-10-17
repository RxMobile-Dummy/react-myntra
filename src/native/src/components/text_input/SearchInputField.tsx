import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, ViewStyle} from 'react-native';
import {TextInput} from 'react-native-paper';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {Colors} from '../../constants/Color';

interface TextFieldProps {
  placeholder: string;
  onTextChange: Function;
  onBlur: Function;
  value: string;
  disabled?: boolean;
  inputStyle?: ViewStyle;
}

export const SearchInputField: React.FC<TextFieldProps> = ({
  placeholder,
  onTextChange,
  onBlur,
  value,
  disabled = false,
  inputStyle = {},
}) => {
  return (
    <TextInput
      disabled={disabled}
      autoCapitalize="none"
      label={<Text style={{fontSize: 18}}>{placeholder}</Text>}
      mode="outlined"
      onChangeText={text => onTextChange(text)}
      onBlur={text => onBlur(text)}
      value={value}
      style={[styles.textInput, inputStyle]}
      theme={{
        colors: {
          primary: Colors.black,
          text: Colors.black,
          placeholder: Colors.lightGrey,
        },
      }}
      right={
        value ? (
          <TextInput.Icon
            onPress={() => {}}
            // name={'ios-close-circle-outline'}
            // color={Colors.black}
            // name={<FontAwesome name="eye" color={Colors.black} size={24} />}
            // <Ionicons name="ios-close-circle-outline" size={24} color="black" />
            name={() => (
              <Ionicons
                name="ios-close-circle-outline"
                size={24}
                color="black"
              />
            )}
          />
        ) : undefined
      }
      left={
        <TextInput.Icon
          name={() => (
            <Ionicons name="search-outline" size={24} color="black" />
          )}
        />
      }
      selectionColor={Colors.black}
      outlineColor={Colors.grey}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    fontSize: hp('2%'),
    // color: "#000",
    backgroundColor: Colors.primary,
    width: '75%',
  },
});
