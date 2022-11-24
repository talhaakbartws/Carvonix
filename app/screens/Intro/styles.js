import {StyleSheet} from 'react-native';
import {colors} from '../../utils/index';
import {
  fullHeight,
  fullWidth,
  widthRef,
  heightRef,
} from '../../utils/Dimensions';

const styles = StyleSheet.create({
  backgroundImage: {width: fullWidth, height: fullHeight},
  itemContainer: {flex: 1},
  textContainer: {flex: 0.35, marginHorizontal: 20 * widthRef},
  emptyContainer: {flex: 0.65},
  textStyle: {marginVertical: 6 * heightRef},
  dotStyle: {backgroundColor: 'transparent'},
  nextButton: {backgroundColor: colors.lightDark, borderRadius: 10},
});
export default styles;
