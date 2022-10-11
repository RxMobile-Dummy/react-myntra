import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, ViewStyle} from 'react-native';
import {TextInput} from 'react-native-paper';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {Colors} from '../../constants/Color';

interface TextFieldProps {
  placeholder: string;
  isSecure?: boolean;
  onTextChange: Function;
  onBlur: Function;
  value: string;
  disabled?: boolean;
  inputStyle?: ViewStyle;
}

export const TextInputField: React.FC<TextFieldProps> = ({
  placeholder,
  isSecure = false,
  onTextChange,
  onBlur,
  value,
  disabled = false,
  inputStyle = {},
}) => {
  const [isPassword, setIsPassword] = useState(false);

  useEffect(() => {
    setIsPassword(isSecure);
  }, []);

  return (
    <TextInput
      disabled={disabled}
      autoCapitalize="none"
      label={<Text style={{fontSize: 18}}>{placeholder}</Text>}
      mode="outlined"
      secureTextEntry={isPassword}
      onChangeText={text => onTextChange(text)}
      onBlur={text => onBlur(text)}
      value={value}
      style={[styles.textInput, inputStyle]}
      theme={{
        colors: {
          primary: Colors.accent,
          text: Colors.black,
          placeholder: Colors.lightGrey,
        },
      }}
      right={
        isSecure ? (
          <TextInput.Icon
            onPress={() => setIsPassword(!isPassword)}
            // name={isPassword ? 'eye' : 'eye-off'}
            // color={Colors.black}
            // name={<FontAwesome name="eye" color={Colors.black} size={24} />}
            name={() => <FontAwesome name={'eye'} size={24} color="black" />}
          />
        ) : undefined
      }
      selectionColor={Colors.accent}
      outlineColor={Colors.grey}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    fontSize: hp('2%'),
    // color: "#000",
    backgroundColor: Colors.primary,
    width: '80%',
    marginVertical: 10,
  },
});
