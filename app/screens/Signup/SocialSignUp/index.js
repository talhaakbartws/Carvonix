import React from 'react';
import {Platform} from 'react-native';
import {colors} from '../../../utils/index';
import {SignInSignUP, Button} from '../../../components';

const SocialSignUp = ({navigation}) => {
  return (
    <SignInSignUP>
      <Button
        PV={10}
        icon_Z={'email'}
        Bg_color={colors.btnDark_Bg}
        label={'Continue with Email'}
        onPress={() => navigation.navigate('Login')}
      />
      <Button
        PV={10}
        icon_E={'facebook'}
        Bg_color={colors.btnDark_Bg}
        label={'Continue With Facebook'}
        onPress={() => navigation.navigate('Login')}
      />
      <Button
        PV={10}
        icon_F={'google'}
        Bg_color={colors.btnDark_Bg}
        label={'Continue With Google'}
        onPress={() => navigation.navigate('Login')}
      />
      {Platform.OS === 'ios' && (
        <Button
          PV={10}
          icon_F={'apple'}
          Bg_color={colors.btnDark_Bg}
          label={'Continue with Email'}
          onPress={() => navigation.navigate('Login')}
        />
      )}
    </SignInSignUP>
  );
};
export default SocialSignUp;
