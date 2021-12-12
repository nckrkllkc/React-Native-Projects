import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './Input.style';
const Input = ({label, placeholder}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder={placeholder}/>
      </View>
    </View>
  );
};

export default Input;
