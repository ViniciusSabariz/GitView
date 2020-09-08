import React from 'react'
import { View, Text } from 'react-native'

import * as Font from 'expo-font';

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer  } from '@react-navigation/native'; 

// MyPages
import ViewRepositories from './ViewRepositories'
import Login from './Login'
import { setStatusBarTranslucent } from 'expo-status-bar';

const Stack = createStackNavigator()

export default function Navigation() {

  const [loaded] = Font.useFonts({
    Quicksand: require('../assets/Fonts/Quicksand/Quicksand-VariableFont_wght.ttf'),
  });

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: setStatusBarTranslucent}}  >
        <Stack.Screen name='LoginScreen' component={Login} />
        <Stack.Screen name='ViewRepositoriesScreen' component={ViewRepositories} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
