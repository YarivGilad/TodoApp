import {Dimensions} from 'react-native';

export const DIMENSIONS = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width,
};

export const COLORS = {
  primary: '#ff1493',
  primaryLight: '#ff47e0',
  primaryDark: '#c20f6e',
  secondary: '#df2bffd6',
  secondaryLight: '#f7c8ff99',
  secondaryDark: '#9c25b199',
  tertiary: '#3ff432',
  tertiaryLight: '#a0ff99',
  tertiaryDark: '#2aa821',
  info: '#2cda55',
  warn: '#f2aa2e',
  error: '#ff0000',
  success: '#2ce34d',
  white: '#ffe8f8',
  greyLight: '#5a5a5a',
  greyDark: '#282526',
  black: '#230314',
  transparent: 'transparent',
};

export const RADIUS = {
  sm: 3,
  md: 5,
  lg: 8,
  xl: 15,
};

export const ELEVATION = {
  sm: 3,
  md: 5,
  lg: 8,
  xl: 15,
};
export const OPACITY = {
  hidden: 0,
  extra: 0.3,
  medium: 0.5,
  minor: 0.8,
  opaque: 1,
};

export const PADDING = {
  sm: 8,
  md: 15,
  lg: 30,
  xl: 40,
};

export const MARGIN = {
  sm: 8,
  md: 15,
  lg: 30,
  xl: 40,
};

export const FONTS = {
  size: {
    sm: 15,
    md: 18,
    lg: 21,
    xl: 28,
    xxl: 32,
  },
  family: {
    primary: 'Raleway',
    secondary: 'Oswald',
  },
  weight: {
    thin: '100',
    normal: '300',
    bold: '500',
    bolder: '700',
  },
};
