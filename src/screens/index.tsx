import * as React from 'react';

import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



import HomeScreen from './HomeScreen';
import CandidateProfile from './CandidateProfile';

import { candidate } from '../components/candidates/CandidateList';

const fullScreenProps = { headerStyle: { height: 0 } }

export type RootStackParamList = {
  Home: undefined;
  CandidateProfile: {
     name: string 
     candidates: candidate[]
  };
};

const RootStack = createStackNavigator<RootStackParamList>();



function IndexNavigator() {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Home" >
        <RootStack.Screen  name="Home" component={HomeScreen} options={fullScreenProps} />
        <RootStack.Screen  name="CandidateProfile" component={CandidateProfile} options={fullScreenProps} />

      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default IndexNavigator;


