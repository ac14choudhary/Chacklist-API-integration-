import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import axios from 'axios';

export default function Home({navigation}) {
  const [userData, setUserData] = useState();

  const fetchDetails = async () => {
    try {
      const dataSet = await axios.get(
        'https://app-api-geny.herokuapp.com/products/all/2',
      );
      setUserData(dataSet.data);
      console.log(dataSet.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchDetails();
  }, []);

  const deleteDetail = async () => {};

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.listElements}>
        <View style={styles.Element1}>
          <Text style={styles.Text1}>Paracitamol</Text>

          <Text style={styles.Text2}>quantity : 20</Text>
        </View>
        <View style={styles.Element2}>
          <TouchableOpacity onPress={() => navigation.navigate('Update')}>
            <Icon name="pencil" style={styles.UpdateIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.Element3}>
          <TouchableOpacity onPress={() => {}}>
            <Icon name="delete" style={styles.DeleteIcon} />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        style={styles.FABADD}
        onPress={() => navigation.navigate('Add')}>
        <Icon name="plus" style={styles.FABIcon} />
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  FABADD: {
    position: 'absolute',
    height: 80,
    width: 80,
    borderRadius: 100,
    backgroundColor: '#ff6666',
    justifyContent: 'center',
    bottom: 20,
    right: 20,
    elevation: 10,
  },
  FABIcon: {
    color: 'black',
    alignSelf: 'center',
    fontSize: 30,
  },

  listElements: {
    width: '85%',
    marginTop: 25,
    height: 75,
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  Element1: {flex: 4, justifyContent: 'center'},
  Text1: {
    fontSize: 25,
    alignSelf: 'center',
  },
  Element2: {flex: 1, justifyContent: 'center'},
  UpdateIcon: {
    color: '#FFCA27',
    alignSelf: 'center',
    fontSize: 30,
  },
  Element3: {flex: 1, justifyContent: 'center'},
  DeleteIcon: {
    color: '#ff6666',
    alignSelf: 'center',
    fontSize: 30,
  },
  Text1: {
    fontSize: 22,
    alignSelf: 'center',
  },
  Text2: {
    fontSize: 14,
    alignSelf: 'center',
    color: '#888888',
  },
});
