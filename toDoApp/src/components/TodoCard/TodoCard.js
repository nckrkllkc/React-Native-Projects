import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './TodoCard.style';

const TodoCard = ({item, onClick,removeTodo}) => {
  const [active, setActive] = React.useState(null);

  // const handlerClick = () => {
  //   setActive(onClick ? (onClick = false) : (onClick = true));
  // };

  return (
    <TouchableOpacity onPress={() => removeTodo(item)}>
      <View
        style={[
          styles.container,
          active ? {backgroundColor: 'red'} : {backgroundColor: 'green'},
        ]}>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TodoCard;
