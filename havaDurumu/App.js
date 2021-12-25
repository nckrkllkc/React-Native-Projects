import React from 'react';
import {View, FlatList} from 'react-native';
import useFetch from './src/hooks/useFetch/useFetch';
import styles from './style';
import WeatherCard from './src/components/WeatherCard';
export default function App() {
  const {loading, data, error} = useFetch(
    'http://api.weatherapi.com/v1/forecast.json?key=5b5efcddd3454033878122215212412&q=Samsun&aqi=no&lang=tr',
  );
  if (loading) {
    console.log('Yükleniyor.');
  }
  if (error) {
    console.log('Hata alındı!');
  }
  const renderItem = ({item}) => <WeatherCard data={item} />;
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => data.indexOf(item).toString()}
      />
    </View>
  );
}
