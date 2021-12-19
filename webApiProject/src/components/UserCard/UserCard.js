import React from 'react';
import {View, Text} from 'react-native';
import styles from './UserCard.style';
export default function UserCard({user}) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{user.name}</Text>
      <View style={styles.info}>
        <Text style={styles.phone}>{user.phone}</Text>
        <Text style={styles.web}>{user.website}</Text>
      </View>
    </View>
  );
}
