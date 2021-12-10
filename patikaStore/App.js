import React, {useState} from 'react';
import {FlatList, SafeAreaView, Text, TextInput, View} from 'react-native';
import styles from './style';
import Card from './src/components/Card';
import products from './producst.json';

const App = () => {
  const renderProduct = ({item}) => <Card productData={item} />;
  const getIndex = (item, index) => item.id.toString();
  const [text, setText] = useState('');
  const [productList, setProductList] = useState(products);
  const handleSearch = text => {
    const filteredList = products.filter(
      product => product.title.toLowerCase().indexOf(text.toLowerCase()) > -1,
    );
    setProductList(filteredList);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.brand}>PATIKASTORE</Text>
      <TextInput
        style={styles.search}
        placeholder={'Ara...'}
        onChangeText={handleSearch}
      />
      <View style={styles.productContainer}>
        <FlatList
          data={productList}
          renderItem={renderProduct}
          keyExtractor={getIndex}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
};
export default App;
