import React from 'react';
import {View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './Input.style';
export default function Input({
  placeholder,
  value,
  onChangeText,
  iconName,
  isSecure,
}) {
  return (
    <View style={styles.container}>
      <Icon name={iconName} size={25} color={'grey'} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        secureTextEntry={isSecure}
      />
    </View>
  );
}
