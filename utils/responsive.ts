import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export function scale(size: number) {
  return (width / 375) * size;
}

export function verticalScale(size: number) {
  return (height / 812) * size;
}

export function moderateScale(size: number, factor = 0.5) {
  return size + (scale(size) - size) * factor;
}

export const Screen = { width, height }; 