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
  const [userData, setUserData] = useState([]);

  const fetchDetails = async () => {
    try {
      const dataSet = await axios.get(
        'https://app-api-geny.herokuapp.com/products/all/2',
      );
      setUserData(dataSet.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    navigation.addListener('focus', () => {
      fetchDetails();
    });
  }, []);

  const deleteDetail = async (neww) => {
    console.log(neww);
    await axios
      .delete('https://app-api-geny.herokuapp.com/products/delete', {
        data: {
          uuid: neww,
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateDetail = async () => {
    try {
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        {userData.map((idee) => (
          <View key={idee._id}>
            <View style={styles.listElements}>
              <View style={styles.Element1}>
                <Text style={styles.Text1}>{idee.name}</Text>

                <Text style={styles.Text2}>quantity : {idee.quantity}</Text>
              </View>
              <View style={styles.Element2}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('Update', {
                      no: idee.uuid,
                      name: idee.name,
                      quantity: idee.quantity,
                    })
                  }>
                  <Icon name="pencil" style={styles.UpdateIcon} />
                </TouchableOpacity>
              </View>
              <View style={styles.Element3}>
                <TouchableOpacity
                  onPress={() => {
                    deleteDetail(idee.uuid);
                  }}>
                  <Icon name="delete" style={styles.DeleteIcon} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
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
  container: {flex: 1, backgroundColor: 'white'},
  FABADD: {
    flex: 1,
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
    marginVertical: 10,
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
    color: '#242424',
  },
  Text2: {
    fontSize: 14,
    alignSelf: 'center',
    color: '#888888',
  },
});

// <View style={styles.listElements}>
// <View style={styles.Element1}>
//   <Text style={styles.Text1}>{userData[0].name}</Text>

//   <Text style={styles.Text2}>{userData[0].quantity}</Text>
// </View>
// <View style={styles.Element2}>
//   <TouchableOpacity onPress={() => navigation.navigate('Update')}>
//     <Icon name="pencil" style={styles.UpdateIcon} />
//   </TouchableOpacity>
// </View>
// <View style={styles.Element3}>
//   <TouchableOpacity onPress={() => {}}>
//     <Icon name="delete" style={styles.DeleteIcon} />
//   </TouchableOpacity>
// </View>
// </View>
