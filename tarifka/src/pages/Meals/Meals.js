import React from 'react';
import {View, FlatList, Text} from 'react-native';
import styles from './Meals.style';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import MealCard from '../../components/MealCard';
export default function Meals({route}) {
  const url = Config.API_CATEGORY_FILTER_URL + route.params.categoryName;
  const {data, error, loading} = useFetch(url);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  const meals = data.meals;
  const renderItem = ({item}) => <MealCard meal={item} />;
  return (
    <View style={styles.container}>
      <FlatList
        data={meals}
        renderItem={renderItem}
        keyExtractor={item => item.idMeal}
      />
    </View>
  );
}
