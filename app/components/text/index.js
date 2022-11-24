import React from 'react';
import {View} from 'react-native';
import fonts from '../../utils/Fonts';
import colors from '../../utils/Colors';
import {Text} from 'react-native-paper';

const AppText = ({
  PH,
  PV,
  MH,
  MV,
  FS,
  type,
  label,
  color,
  t_Align,
  children,
  containerStyle,
}) => {
  const SelectedFont = value => {
    switch (value) {
      case 'title':
        return fonts.style.title;
      case 'subtitle':
        return fonts.style.subtitle;
      case 'semidetail':
        return fonts.style.semiDetail;
      case 'detail':
        return fonts.style.detail;
      case 'heading':
        return fonts.style.heading;
      case 'semibutton':
        return fonts.style.semiButton;
      case 'input':
        return fonts.style.input;
      case 'semidescription':
        return fonts.style.semiDescription;
      default:
        break;
    }
  };
  return (
    <View style={containerStyle}>
      <Text
        style={[
          {
            paddingHorizontal: PH,
            paddingVertical: PV,
            marginHorizontal: MH,
            marginVertical: MV,
            textAlign: t_Align,
            color: color ? color : colors.white,
            fontStyle: FS,
          },
          SelectedFont(type),
        ]}>
        {label}
        {children}
      </Text>
    </View>
  );
};
export default AppText;
