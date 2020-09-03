import * as React from 'react';

import { View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';

const fullScreenProps = { headerStyle: { height: 0 } }


const Stack = createStackNavigator();

<Stack.Screen name="home" component={HomeScreen}  />

function IndexNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={HomeScreen} options={fullScreenProps}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default IndexNavigator;