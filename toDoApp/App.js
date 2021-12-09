import React, {useState, useEffect} from 'react';
import {FlatList, SafeAreaView, View, KeyboardAvoidingView} from 'react-native';
import styles from './style';
import Save from './src/components/Save';
import TodoListHeader from './src/components/TodoListHeader';
import TodoCard from './src/components/TodoCard';

const App = () => {
  const [count, setCount] = useState(0);
  const [list, setList] = useState([]);

  //En az 1 kere çalışır.
  useEffect(() => {
    const listLength = list.length;
    setCount(listLength);
  }, [list]); //list içerisindeki her değişiklikte de çalışacak.

  const removeTodo = item => {
    setList(list.filter(todo => todo.id !== item.id))
  };

  const renderList = ({item}) => (
    <TodoCard onClick={item.complete} removeTodo={removeTodo} item={item} />
  );

  const saveTodo = text => {
    setList(list => [{id: list.length + 1, text: text}, ...list]);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TodoListHeader count={count} />
      </View>
      <View style={styles.list}>
        <FlatList
          data={list}
          renderItem={renderList}
          keyExtractor={item => item.id.toString()}
        />
      </View>
      <View style={styles.save}>
        <Save onPress={saveTodo} />
      </View>
    </SafeAreaView>
  );
};

export default App;
