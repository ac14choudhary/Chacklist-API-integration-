import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function Update({navigation, route}) {
  const [update, setUdate] = useState(route.params);

  return (
    <View style={styles.container}>
      {console.log(update)}
      <TextInput
        style={styles.input}
        value={update.name}
        editable={false}
        color="#242424"
        placeholderTextColor="#dddddd"
        keyboardType="default"></TextInput>
      <TextInput
        style={styles.input}
        placeholder="Enter Quantity"
        placeholderTextColor="#dddddd"
        keyboardType="number-pad"></TextInput>

      <TouchableOpacity
        style={styles.updateButton}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.updateButtonText}>Update to List</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    marginTop: '5%',
    paddingLeft: 20,
    fontSize: 20,
    width: '80%',
    height: 60,
    borderRadius: 10,
    backgroundColor: 'white',
    alignSelf: 'center',
  },
  updateButton: {
    marginTop: '8%',
    width: '60%',
    height: 60,
    borderRadius: 10,
    backgroundColor: '#FFCA27',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  updateButtonText: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'white',
  },
});
