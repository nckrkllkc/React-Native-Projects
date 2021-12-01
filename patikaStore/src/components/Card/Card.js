import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './Card.style';

const Card = ({productData}) => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={{uri: productData.imgURL}}
          resizeMode="stretch"
        />
      </View>
      <View>
        <Text style={styles.title}>{productData.title}</Text>
        <Text style={styles.price}>{productData.price}</Text>
        {productData.inStock === true ? null : (
          <Text style={styles.inStock}>STOKTA YOK</Text>
        )}
      </View>
    </View>
  );
};

export default Card;
