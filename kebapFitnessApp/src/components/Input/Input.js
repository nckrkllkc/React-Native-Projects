import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './Input.style';
const Input = ({label, placeholder, secureTextEntry, onChangeText,placeholderTextColor, keyboardType}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          onChangeText={onChangeText}
          placeholderTextColor={placeholderTextColor}
          keyboardType={keyboardType}
        />
      </View>
    </View>
  );
};

export default Input;
