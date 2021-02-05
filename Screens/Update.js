import axios from 'axios';
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import snackbar from 'react-native-snackbar';

export default function Update({navigation, route}) {
  const [update, setUdate] = useState(route.params);
  const [value, setValue] = useState(0);
  const updateDetail = async () => {
    try {
      await axios.patch('https://app-api-geny.herokuapp.com/products/update', {
        uuid: uuid,
        quantity: value,
      });
      if (value) {
        navigation.navigate('Home');
      }
    } catch (error) {
      console.log(error);
    }
  };

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
        placeholder={String(update.quantity)}
        placeholderTextColor="#dddddd"
        keyboardType="number-pad"
        onChangeText={(text) => setValue(text)}></TextInput>

      <TouchableOpacity
        style={styles.updateButton}
        onPress={() => {
          if (value) {
            navigation.navigate('Home');
            snackbar.show({
              backgroundColor: '#FFCA27',
              textColor: 'black',
              duration: snackbar.LENGTH_SHORT,
              text: 'Quantity updated',
            });
          } else {
            snackbar.show({
              backgroundColor: '#ff6666',
              textColor: 'white',
              duration: snackbar.LENGTH_LONG,
              text: 'please enter new Quantity',
            });
          }
        }}>
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
