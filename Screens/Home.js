import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  button,
} from 'react-native';

export default function Home({navigation}) {
  return (
    <View>
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => navigation.navigate('Update')}>
        <Text> Go to Update </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => navigation.navigate('Add')}>
        <Text> Go to Add</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
