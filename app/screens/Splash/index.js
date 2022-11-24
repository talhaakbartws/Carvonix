import React, {useEffect} from 'react';
import styles from './styles';
import Layout from '../../components/layout';
import AppText from '../../components/text';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(async () => {
      await navigation.replace('Intro');
    }, 1000);
  }, [navigation]);

  return (
    <Layout style={styles.backgroundContainer}>
      <AppText label={'Splash'} type={'detail'} />
    </Layout>
  );
};
export default Splash;
