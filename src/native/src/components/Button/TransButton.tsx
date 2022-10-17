import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {String} from '../../constants/String';
import {Colors} from '../../constants/Color';

interface Props {
  text: string | number;
  disabled?: boolean;
  onPress?: () => void;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
}

const TransButton: React.FC<Props> = ({
  text,
  onPress = () => null,
  containerStyle = {},
  textStyle = {},
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.addCardbtn, containerStyle]}
      disabled={disabled}
    >
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default TransButton;

const styles = StyleSheet.create({
  addCardbtn: {
    marginTop: 15,
    borderColor: Colors.lightGrey,
    borderWidth: 1,
    borderRadius: 2,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  text: {
    color: Colors.lightBlue,
    fontWeight: '600',
    fontSize: 16,
  },
});
