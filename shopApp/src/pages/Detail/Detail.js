import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import Config from 'react-native-config';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import useFetch from '../../hooks/useFetch';
import styles from './Detail.style';
export default function Detail({route}) {
  const {loading, data, error} = useFetch(
    Config.API_PRODUCT_URL + '/' + route.params.id.toString(),
  );
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  console.log(data);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: data.image}} />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.description}>{data.description}</Text>
        <Text style={styles.price}>{data.price} TL</Text>
      </View>
    </ScrollView>
  );
}
