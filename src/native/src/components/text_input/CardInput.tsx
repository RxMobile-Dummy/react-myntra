import React from 'react';
import {StyleSheet, Text, ViewStyle} from 'react-native';
import {TextInput} from 'react-native-paper';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {Font} from '../../constants/Font';
import {Colors} from '../../constants/Color';

interface TextFieldProps {
  placeholder: string;
  onTextChange: Function;
  onBlur: Function;
  value: string;
  disabled?: boolean;
  containerStyle?: ViewStyle;
}

export const CardInputField: React.FC<TextFieldProps> = ({
  placeholder,
  onTextChange,
  onBlur,
  value,
  disabled = false,
  containerStyle = {},
}) => {
  return (
    <TextInput
      disabled={disabled}
      autoCapitalize="none"
      label={
        <Text style={{fontSize: 18, fontFamily: Font.MediumFont}}>
          {placeholder}
        </Text>
      }
      mode="flat"
      onChangeText={text => onTextChange(text)}
      onBlur={(text: any) => onBlur(text)}
      value={value}
      style={[styles.textInput, containerStyle]}
      theme={{
        colors: {
          primary: Colors.green,
          text: Colors.black,
          placeholder: Colors.grey,
        },
        roundness: 10,
      }}
      selectionColor={Colors.black}
      outlineColor={Colors.grey}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    fontSize: hp('2%'),
    backgroundColor: 'transparent',
    marginVertical: 10,
    height: 55,
    fontFamily: Font.MediumFont,
    marginHorizontal: 10,
  },
});
