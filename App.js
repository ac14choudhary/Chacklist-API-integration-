import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Home from './Screens/Home';
import Add from './Screens/Add';
import Update from './Screens/Update';

function homeScreen() {
  return <Home />;
}

function addScreen() {
  return <Add />;
}

function updateScreen() {
  return <Update />;
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={homeScreen} />
        <Stack.Screen name="Add" component={addScreen} />
        <Stack.Screen name="Update" component={updateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
