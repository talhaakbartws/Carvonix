import React from 'react';
import styles from './styles';
import {AppText, Layout} from '../index';
import {View, ScrollView} from 'react-native';
import {colors, images} from '../../utils/index';

const SignInSignUP = ({children}) => {
  const {Logo} = images;
  const Welcome = ({label}) => (
    <AppText
      label={label}
      FS={'italic'}
      type={'subtitle'}
      color={colors.themeblue}
    />
  );
  return (
    <View style={styles.mainContainer}>
      <Layout>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          style={styles.mainContainer}>
          <View style={styles.detailContainer}>
            <Welcome label={'Welcome'} />
            <View style={[styles.imageContainer]}>
              <Welcome label={'to '} />
              <Logo width={'80%'} height={38} />
            </View>
            <AppText
              MV={5}
              type={'detail'}
              label={
                'Document your build, find inspirational cars, and make friends in the Pit Crew!'
              }
            />
            {children}
          </View>
        </ScrollView>
      </Layout>
      <View style={styles.signin}>
        <AppText
          color={colors.darkTransparent}
          label={'Don’t have an account?'}
        />
        <AppText
          label={' Sign up'}
          type={'semidescription'}
          color={colors.btnBlue_Bg}
        />
      </View>
    </View>
  );
};
export default SignInSignUP;
