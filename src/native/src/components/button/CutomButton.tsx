import React from 'react';
import {
  Platform,
  Text,
  StyleSheet,
  ViewStyle,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {Colors} from '../../constants/Color';

interface Props {
  text: string | number;
  disabled?: boolean;
  onPress?: () => void;
  containerStyle?: ViewStyle;
  showLoader?: boolean;
}
const CutomButton: React.FC<Props> = ({
  text,
  onPress = () => null,
  containerStyle = {},
  disabled = false,
  showLoader = false,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, containerStyle]}
      disabled={disabled}
    >
      {showLoader ? (
        <ActivityIndicator size="small" color={Colors.white} />
      ) : (
        <Text style={styles.btnTxt}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    width: '80%',
    backgroundColor: Colors.accent,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: 'transparent',
    ...Platform.select({
      ios: {
        shadowOffset: {width: 0, height: 2},
        shadowColor: Colors.white,
        shadowOpacity: 0.2,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  btnTxt: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.primary,
  },
});
export default CutomButton;
