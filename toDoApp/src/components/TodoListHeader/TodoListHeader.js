import React from 'react';
import {View, Text} from 'react-native';
import styles from './TodoListHeader.style';
const TodoListHeader = ({count}) => {
  return (
    <View style={styles.container}>
     <Text style={styles.title}>Yapılacaklar</Text>
     <Text style={styles.countText}>{count}</Text>
    </View>
  );
};

export default TodoListHeader;
