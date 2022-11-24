import {Dimensions} from 'react-native';

// // const type = {base: 'Avenir', bold: 'Avenir-Medium'};

const size = {
  h0: (40 * Dimensions.get('window').width) / 375,
  h1: (36 * Dimensions.get('window').width) / 375,
  h2: (34 * Dimensions.get('window').width) / 375,
  h3: (30 * Dimensions.get('window').width) / 375,
  h4: (28 * Dimensions.get('window').width) / 375,
  h5: (24 * Dimensions.get('window').width) / 375,
  h6: (20 * Dimensions.get('window').width) / 375,
  heading: (18 * Dimensions.get('window').width) / 375,
  large: (17 * Dimensions.get('window').width) / 375,
  regular: (16 * Dimensions.get('window').width) / 375,
  default: (15 * Dimensions.get('window').width) / 375,
  medium: (13 * Dimensions.get('window').width) / 375,
  small: (12 * Dimensions.get('window').width) / 375,
  // tiny: (8.5 * Dimensions.get('window').width) / 375,
};
const fontsFamilies = {
  bold: 'Inter-Bold',
  regular: 'Inter-Regular',
  extraBold: 'Inter-ExtraBold',
  extraLight: 'Inter-ExtraLight',
  light: 'Inter-Light',
  medium: 'Inter-Medium',
  semiBold: 'Inter-SemiBold',
  thin: 'Inter-Thin',
  black: 'Inter-Black',
};
const style = {
  title: {
    fontFamily: fontsFamilies.extraBold,
    fontSize: size.h0,
    fontWeight: '700',
  },
  heading: {
    fontFamily: fontsFamilies.bold,
    fontSize: size.heading,
    fontWeight: '600',
  },
  subtitle: {
    fontFamily: fontsFamilies.bold,
    fontSize: size.h2,
    fontWeight: '700',
  },
  semiDetail: {fontFamily: fontsFamilies.semiBold, fontSize: size.regular},
  detail: {
    fontFamily: fontsFamilies.regular,
    fontSize: size.regular,
    fontWeight: '400',
  },
  semiButton: {fontFamily: fontsFamilies.semiBold, fontSize: size.large},
  input: {fontFamily: fontsFamilies.regular, fontSize: size.large},
  semiDescription: {fontFamily: fontsFamilies.semiBold, fontSize: size.medium},
  // caption: {fontFamily: type.base, fontSize: 13},
  // description: {fontFamily: type.base, fontSize: size.small},
  // productName: {fontFamily: type.bold, fontSize: size.large},
  // subHeading: {fontFamily: type.base, fontSize: size.medium},
};

export default {size, fontsFamilies, style};
