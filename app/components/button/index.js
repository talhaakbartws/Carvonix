import React from 'react';
import AppText from '../text';
import styles from './styles';
import {colors} from '../../utils/index';
import {heightRef} from '../../utils/Dimensions';
import Entypo from 'react-native-vector-icons/Entypo';
import Zocial from 'react-native-vector-icons/Zocial';
import {TouchableOpacity, Image, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Button = ({
  PH,
  PV,
  MH,
  AS,
  MV,
  FD,
  type,
  label,
  color,
  icon_E,
  icon_F,
  icon_Z,
  source,
  onPress,
  Bg_color,
  children,
  textAlign,
  containerStyle,
}) => {
  return (
    <TouchableOpacity
      style={[
        {
          paddingHorizontal: PH ? PH : 30 * heightRef,
          paddingVertical: PV,
          backgroundColor: Bg_color,
          shadowColor: Bg_color !== 'transparent' && colors.lightDark,
          shadowOffset: Bg_color !== 'transparent' && {width: -2, height: 5},
          shadowOpacity: Bg_color !== 'transparent' && 0.3,
          shadowRadius: Bg_color !== 'transparent' && 3,
          elevation: Bg_color !== 'transparent' && 5,
          marginHorizontal: MH,
          alignSelf: AS,
          marginVertical: MV,
          flexDirection: FD,
        },
        styles.container,
        containerStyle,
      ]}
      onPress={onPress}>
      <View style={styles.viewContainer}>
        {source && <Image source={source} style={styles.Image} />}
        {icon_E && <Entypo name={icon_E} color={colors.themewhite} size={20} />}
        {icon_F && (
          <FontAwesome name={icon_F} color={colors.themewhite} size={20} />
        )}
        {icon_Z && <Zocial name={icon_Z} color={colors.themewhite} size={20} />}
        <View style={styles.centerText}>
          {label && (
            <AppText
              label={label}
              type={type}
              paddingVertical={Bg_color !== 'transparent' && 15 * heightRef}
              t_Align={textAlign ? textAlign : 'center'}
              color={color}
            />
          )}
        </View>
      </View>
      {children}
    </TouchableOpacity>
  );
};

export default Button;
