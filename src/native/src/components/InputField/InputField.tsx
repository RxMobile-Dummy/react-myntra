import React from 'react';
import {TextInput, View} from 'react-native';
import {normalize} from '../../utils/commonStyles';

export type Props = {
  value: any;
  onChange: any;
  top?: number;
  isProduct?: boolean;
  placeholder?: string;
  placeholderColor?: string;
  isMultiline?: boolean;
};

const InputField = (props: Props) => {
  return (
    <View style={{flex: 1}}>
      <TextInput
        value={props.value}
        onChangeText={val => props.onChange(val)}
        placeholder={props.placeholder}
        placeholderTextColor={props.placeholderColor}
        multiline={props.isMultiline}
        style={{
          width: '100%',
          height: props.isMultiline ? normalize(80) : normalize(40),
          backgroundColor: props.isProduct ? 'rgb(229,229,229)' : '#FFF',
          borderWidth: 0.6,
          borderColor: props.isProduct ? '#FFF' : '#585757',
          borderRadius: normalize(4),
          marginTop: props.top,
          padding: normalize(10),
          fontSize: normalize(14),
        }}
      />
    </View>
  );
};

export default InputField;
