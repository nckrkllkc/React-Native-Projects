import React from 'react';
import {FlatList, SafeAreaView, Text, TextInput, View, Dimensions} from 'react-native';
import styles from './style';
import Card from './src/components/Card';
import products from './producst.json';

const App = () => {
  let temp = '';
  const renderProduct = ({item}) => <Card productData={item} />;
  const getIndex = (item, index) => item.id.toString();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.brand}>PATIKASTORE</Text>
      <TextInput style={styles.search} value={temp} placeholder={'Ara...'} />
      <View style={styles.flatList}>
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={getIndex}
        numColumns={2}
      />
      </View>
    </SafeAreaView>
  );
};
export default App;
