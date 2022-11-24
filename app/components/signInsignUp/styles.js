import {StyleSheet, Platform} from 'react-native';
import {heightRef} from '../../utils/Dimensions';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  scrollContainer: {flexGrow: 1},
  signin: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    flex: Platform.OS === 'android' ? 0.08 : 0.12,
    bottom: Platform.OS === 'android' ? 0 * heightRef : 10 * heightRef,
  },
  detailContainer: {
    justifyContent: 'center',
    marginTop: '30%',
    flexGrow: 1,
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
