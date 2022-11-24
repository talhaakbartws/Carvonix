import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
  container: {flex: 1},
  background: {left: 0, right: 0, bottom: 0, position: 'absolute'},
  childrenContainer: {
    marginHorizontal: 20,
    marginTop: Platform.OS === 'ios' ? 40 : 0,
    flex: 1,
  },
});

export default styles;
