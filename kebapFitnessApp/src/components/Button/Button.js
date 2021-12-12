import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './Button.style';
export default function Button({text, onPress}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}
