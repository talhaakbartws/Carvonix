import {Dimensions} from 'react-native';
const fullHeight = Dimensions.get('window').height;
const fullWidth = Dimensions.get('window').width;
const heightRef = fullHeight / 820;
const fontRef = fullWidth / 420;
const widthRef = fullWidth / 375;
export {fullWidth, fullHeight, heightRef, widthRef, fontRef};
