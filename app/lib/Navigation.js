// In App.js in a new project

import * as React from 'react';
import Intro from '../screens/Intro';
import Login from '../screens/Login';
import Splash from '../screens/Splash';
import SocialSignUp from '../screens/Signup/SocialSignUp';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'Splash'}
        screenOptions={{
          cardStyle: {backgroundColor: 'white', opacity: 1},
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
          gestureDirection: 'horizontal',
          gestureEnabled: true,
          // ...TransitionPresets.SlideFromRightIOS,
          // transitionSpec:{ open:config, close:config,},
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          headerTitleStyle: {color: 'white', justifyContent: 'center'},
        }}>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Intro"
          component={Intro}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SocialSignUp"
          component={SocialSignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
