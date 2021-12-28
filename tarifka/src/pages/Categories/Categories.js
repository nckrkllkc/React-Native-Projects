import React from 'react';
import {View, FlatList} from 'react-native';
import styles from './Categories.style';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import Config from 'react-native-config';
import CategoryCard from '../../components/CategoryCard';

export default function Categories({navigation}) {
  const {data, error, loading} = useFetch(Config.API_CATEGORY_URL);
  const handleCategoryName = categoryName => {
    navigation.navigate('Meals', {categoryName});
  };
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  const categories = data.categories;
  const renderItem = ({item}) => (
    <CategoryCard
      onSelect={() => handleCategoryName(item.strCategory)}
      category={item}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatlist}
        data={categories}
        keyExtractor={item => item.idCategory.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}
