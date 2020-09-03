import React from 'react';
import 'react-native-gesture-handler';

import {View} from 'react-native'
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import HomeScreen from './src/screens/HomeScreen'
import IndexNavigator from './src/screens';

import { SafeAreaView } from 'react-native';



export default () => (
  <View style={{flex:1}}>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.light}>
      <IndexNavigator />
      
    </ApplicationProvider>
  </View>
);