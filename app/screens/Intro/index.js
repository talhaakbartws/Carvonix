import React from 'react';
import styles from './styles';
import {AppText} from '../../components';
import {heightRef} from '../../utils/Dimensions';
import {View, ImageBackground} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const Intro = ({navigation}) => {
  const slides = [
    {
      key: 1,
      title: 'Document Your \nCar Build!',
      text: 'With State of the art documentation features, you can organize and share your car with the world!',
      image: require('../../../assets/car.png'),
      backgroundColor: '#59b2ab',
    },
    {
      key: 2,
      title: 'Be Social Make Friends!',
      text: 'Friends can be found through various discussion boards, races or even on your team',
      image: require('../../../assets/car.png'),
      backgroundColor: '#febe29',
    },
    {
      key: 3,
      title: 'Race Anyone Anywhere!',
      text: 'Our GEO LOCATION racing allows users to compete with anyone, anywhere at anytime.',
      image: require('../../../assets/car.png'),
      backgroundColor: '#22bcb5',
    },
    {
      key: 4,
      title: 'Climb Your Way To The Top!',
      text: 'With ranking going from Rookie all the way to VONIX top 200, race to best others on the leaderboard',
      image: require('../../../assets/car.png'),
      backgroundColor: '#22bcb5',
    },
  ];
  const onDone = () => {
    navigation.replace('SocialSignUp');
  };
  const RenderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <ImageBackground style={styles.backgroundImage} source={item.image}>
        <View style={styles.emptyContainer} />
        <View style={styles.textContainer}>
          <AppText label={item.title} type={'title'} />
          <AppText label={item.text} type={'heading'} />
        </View>
      </ImageBackground>
    </View>
  );
  const renderNextButton = () => (
    <AppText
      PH={'18%'}
      label={'Next'}
      PV={15 * heightRef}
      type={'semibutton'}
      containerStyle={styles.nextButton}
    />
  );
  const renderSkipButton = () => (
    <AppText
      PH={'18%'}
      label={'Skip'}
      PV={15 * heightRef}
      type={'semibutton'}
    />
  );
  return (
    <AppIntroSlider
      data={slides}
      onDone={onDone}
      showDoneButton={true}
      showNextButton={true}
      showSkipButton={true}
      dotClickEnabled={false}
      renderItem={RenderItem}
      renderNextButton={renderNextButton}
      renderDoneButton={renderNextButton}
      renderSkipButton={renderSkipButton}
      dotStyle={styles.dotStyle}
      activeDotStyle={styles.dotStyle}
    />
  );
};
export default Intro;
