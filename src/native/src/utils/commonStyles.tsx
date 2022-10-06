import { StyleSheet, Platform, PixelRatio, Dimensions, } from 'react-native';

const scale = Dimensions.get("screen").width / 320;

export function normalize(size: number) {
  const newSize = size * scale
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
  }
}