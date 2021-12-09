import React, {useState} from 'react';
import {TextInput, TouchableOpacity, View, Text} from 'react-native';
import styles from './Save.style';
const Save = (props) => {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder={'Yapılacak...'}
        placeholderTextColor="#808080"
        onChangeText={setText}
        value={text}
      />
      <View style={styles.hr} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.saveButton}
          disabled={!text ? true : false}
          onPress={() => {
            props.onPress(text)
            setText("")
          }}
          >
          <Text style={styles.buttonText}>Kaydet</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Save;
