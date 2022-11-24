import {StyleSheet} from 'react-native';
import {heightRef, widthRef} from '../../utils/Dimensions';

const styles = StyleSheet.create({
  container: {
    borderRadius: 10 * widthRef,
    marginVertical: 5 * heightRef,
    alignItems: 'center',
    justifyContent: 'center',
    // flex: 1,
  },
  Image: {height: 12, width: 12},
  centerText: {left: 0, right: 0, flex: 1},
  viewContainer: {flexDirection: 'row', alignItems: 'center'},
});
export default styles;
