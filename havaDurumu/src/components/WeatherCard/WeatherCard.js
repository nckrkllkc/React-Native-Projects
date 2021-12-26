import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './WeatherCard.style';
export default function WeatherCard({data}) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.city}>Samsun</Text>
      </View>
      <View style={styles.middle}>
        <Image
          style={styles.icon}
          source={{uri: 'https:' + data.condition.icon}}
        />
        <View style={{flex: 1}} />
        <Text style={styles.time}>{data.time.substring(11)}</Text>
      </View>
      <View style={styles.hr} />
      <View style={styles.bottom}>
        <Text style={styles.status}>{data.condition.text}</Text>
        <View style={{flex: 1}} />
        <Text style={styles.temperature}>{Math.floor(data.temp_c)}°</Text>
      </View>
    </View>
  );
}
