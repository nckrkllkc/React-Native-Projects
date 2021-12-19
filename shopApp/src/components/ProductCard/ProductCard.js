import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './ProductCard.style';
export default function ProductCard({product}) {
  return (
    <View style={styles.container}>
      <Image source={{uri: product.image}} style={styles.image} />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>{product.price} TL</Text>
      </View>
    </View>
  );
}
