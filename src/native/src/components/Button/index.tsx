import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {normalize} from '../../utils/commonStyles';

export type Props = {
  bgColor: string;
  height: number;
  children: any;
  onPress: any;
};

const Button = (props: Props) => {
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        onPress={() => props.onPress()}
        style={{
          height: props.height,
          width: '100%',
          borderRadius: normalize(5),
          backgroundColor: props.bgColor,
        }}
      >
        {props.children}
      </TouchableOpacity>
    </View>
  );
};

export default Button;
