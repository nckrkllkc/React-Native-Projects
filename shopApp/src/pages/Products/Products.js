import React from 'react';
import {FlatList} from 'react-native';
import styles from './Products.style';
import Config from 'react-native-config';
import ProductCard from '../../components/ProductCard';
import {SafeAreaView} from 'react-native-safe-area-context';
import useFetch from '../../hooks/useFetch/useFetch';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';

export default function Products() {
  const {loading, data, error} = useFetch(Config.API_URL);
  const renderProduct = ({item}) => <ProductCard product={item} />;
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderProduct}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
}
