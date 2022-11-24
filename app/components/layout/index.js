import React from 'react';
import {View, Dimensions, StatusBar} from 'react-native';
import {images} from '../../utils/index.js';
import styles from './styles';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
const {Layout} = images;

const Layout_Bg = ({children, style}) => {
  return (
    <View style={[styles.container, style]}>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.background}>
        <Layout height={height} width={width} />
      </View>
      <View style={styles.childrenContainer}>{children}</View>
    </View>
  );
};
export default Layout_Bg;
