import React from 'react';
import {StyleSheet, Text, TouchableOpacity, ViewStyle} from 'react-native';
import {TextInput} from 'react-native-paper';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {Colors} from '../../constants/Color';

interface TextFieldProps {
  placeholder: string;
  onPressButton: Function;
  value: string;
  disabled?: boolean;
  inputStyle?: ViewStyle;
}

export const PressableInputField: React.FC<TextFieldProps> = ({
  placeholder,
  onPressButton,
  value,
  disabled = true,
  inputStyle = {},
}) => {
  return (
    <TouchableOpacity onPress={onPressButton}>
      <TextInput
        disabled={disabled}
        autoCapitalize="none"
        label={<Text style={{fontSize: 18}}>{placeholder}</Text>}
        mode="outlined"
        value={value}
        style={[styles.textInput, inputStyle]}
        theme={{
          colors: {
            primary: Colors.accent,
            text: Colors.black,
            placeholder: Colors.lightGrey,
          },
        }}
        selectionColor={Colors.accent}
        outlineColor={Colors.grey}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textInput: {
    fontSize: hp('2%'),
    backgroundColor: Colors.primary,
    marginVertical: 10,
  },
});
