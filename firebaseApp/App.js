import React from 'react';
import {View, Text, Button, StyleSheet, Alert} from 'react-native';
//import database from '@react-native-firebase/database'; //us central kullanım için
import {firebase} from '@react-native-firebase/database';

export default function App() {
  const checkDB = () => {
    const reference = firebase
      .app()
      .database(
        'https://patika-adf00-default-rtdb.europe-west1.firebasedatabase.app/',
      )
      .ref('/books');
    reference.once('value').then(snapshot => {
      const response = snapshot.val();
      console.log(response);
    });
  };

  const listenDB = () => {
    firebase
      .app()
      .database(
        'https://patika-adf00-default-rtdb.europe-west1.firebasedatabase.app/',
      )
      .ref('/books')
      .on('value', snapshot => {
        //on event listener
        console.log('User data: ', snapshot.val());
      });
  };

  const setDB = () => {
    firebase
      .app()
      .database(
        'https://patika-adf00-default-rtdb.europe-west1.firebasedatabase.app/',
      )
      .ref('/books')
      .set({
        0: {
          name: 'Elveda Buhara',
          writer: 'Yavuz Bahadıroğlu',
        },
      })
      .then(() => console.log('Data set.'));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello Firebase!</Text>
      <Button title="Check DB" onPress={checkDB} />
      <Button title="Listen DB" onPress={listenDB} />
      <Button title="Set DB" onPress={setDB} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: 'lightgrey',
  },
  text: {
    fontSize: 50,
    textAlign: 'center',
  },
});
