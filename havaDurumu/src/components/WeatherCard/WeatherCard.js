import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './WeatherCard.style';
export default function WeatherCard({data}) {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={{uri: 'https:' + data.condition.icon}}
          style={styles.icon}
        />
      </View>
      <View style={styles.rightContainer}>
        {/* <Text style={styles.time}>{data.time.substring(0, 10)}</Text> */}
        <Text style={styles.time}>{data.time.substring(10)}</Text>
        <Text style={styles.temperature}>{Math.floor(data.temp_c)}°</Text>
        <Text style={styles.status}>{data.condition.text}</Text>
      </View>
    </View>
  );
}
