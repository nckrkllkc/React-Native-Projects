import React from 'react';
import {TextInput, View} from 'react-native';
import styles from './SearchBar.style';

const SearchBar = ({onSearch}) => {
  return (
    <View style={styles.container}>
     <TextInput onChangeText={onSearch} placeholder={"Ara..."} style={styles.search}/>
    </View>
  );
};

export default SearchBar;
