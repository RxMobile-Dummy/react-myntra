import {StyleSheet, Platform, PixelRatio, Dimensions, NativeModules} from 'react-native';

const scale = Dimensions.get('screen').width / 320;

export function normalize(size: number) {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

const { StatusBarManager } = NativeModules;

const STATUSBAR_HEIGHT = StatusBarManager.HEIGHT;

export const APPBAR_HEIGHT = Platform.OS === 'ios' ? STATUSBAR_HEIGHT + 40 : STATUSBAR_HEIGHT;

export const commonStyles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  }
})
