import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import snackbar from 'react-native-snackbar';
import Home from './Home';
import axios from 'axios';

export default function Add({navigation}) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');

  const sendToList = async () => {
    try {
      if (!name || !quantity) {
        snackbar.show({
          backgroundColor: '#ff6666',
          textColor: '#ffffff',
          duration: snackbar.LENGTH_SHORT,
          text: 'please enter both the values',
        });
      } else {
        axios.post('https://app-api-geny.herokuapp.com/products/add', {
          name: {setName},
          quantity: {setQuantity},
          group: 2,
        });

        snackbar.show({
          backgroundColor: '#8BC34A',
          textColor: '#ffffff',
          duration: snackbar.LENGTH_SHORT,
          text: 'Item added to the list',
        });

        navigation.navigate(Home);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter Product"
        placeholderTextColor="#dddddd"
        keyboardType="default"
        value={name}
        onChangeText={(text) => setName(text)}></TextInput>
      <TextInput
        style={styles.input}
        placeholder="Enter Quantity"
        placeholderTextColor="#dddddd"
        keyboardType="number-pad"
        value={quantity}
        onChangeText={(text) => setQuantity(text)}></TextInput>

      <TouchableOpacity style={styles.addButton} onPress={sendToList}>
        <Text style={styles.addButtonText}>Add to List</Text>
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
  addButton: {
    marginTop: '8%',
    width: '60%',
    height: 60,
    borderRadius: 10,
    backgroundColor: '#3CA88A',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'white',
  },
});
