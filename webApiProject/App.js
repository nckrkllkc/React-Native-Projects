import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, Button, ActivityIndicator} from 'react-native';
import styles from './style';
import UserCard from './src/components/UserCard';
export default function App() {
  const URL = 'https://jsonplaceholder.typicode.com/users';
  const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(true);

  // async function getData() {
  //   const response = await axios.get(URL);
  //   setLoading(false);
  //   setUsersData(response.data);
  // }

  axios
    .get(URL)
    .then(response => {
      setUsersData(response.data);
      setLoading(false);
    })
    .catch(error => console.log(error.data));

  const renderItem = ({item}) => <UserCard user={item} />;

  //useEffect uygulama mount olduğunda 1 kere çalıştığı için, ilk veri yükleme
  //işini burada yapıyoruz.
  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <View style={styles.container}>
      <View style={styles.dataContainer}>
        {loading ? (
          <ActivityIndicator style={styles.indicator} size={'large'} />
        ) : (
          <FlatList
            data={usersData}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
          />
        )}
      </View>
    </View>
  );
}
