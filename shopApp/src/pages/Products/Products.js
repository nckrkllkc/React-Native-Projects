import React from 'react';
import {FlatList, Button, View} from 'react-native';
import Config from 'react-native-config';
import ProductCard from '../../components/ProductCard';
import useFetch from '../../hooks/useFetch/useFetch';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import {useDispatch} from 'react-redux';

export default function Products({navigation}) {
  const {loading, data, error} = useFetch(Config.API_PRODUCT_URL);
  const dispatch = useDispatch();
  const handleSelectProduct = id => {
    navigation.navigate('DetailPage', {id});
  };
  const renderProduct = ({item}) => (
    <ProductCard product={item} onSelect={() => handleSelectProduct(item.id)} />
  );
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <View>
      <Button
        title="Logout"
        onPress={() => dispatch({type: 'SET_USER', payload: {user: null}})}
      />
      <FlatList
        data={data}
        renderItem={renderProduct}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}
