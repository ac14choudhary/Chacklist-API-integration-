import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Home from './Screens/Home';
import Add from './Screens/Add';
import Update from './Screens/Update';

const Stack = createStackNavigator();

export default function App({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Add" component={Add} />
        <Stack.Screen name="Update" component={Update} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
