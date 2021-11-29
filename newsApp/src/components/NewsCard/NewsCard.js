import React from 'react';
import {SafeAreaView, Text, View, Image} from 'react-native';
import styles from './NewsCard.style'; // styles bizim verdiğimiz takma ad olur. istediğinizi verebilirsiniz.

const NewsCard = ({news}) => {
  //(news) olarak kullanırsak, aşağıda news.news.title olarak yazmak zorundayız.
  //(App.js içerisinde news olarak yolladığımız için).
  //Fakat gelen json objesinden {news} ile direkt news değerlerini çekebiliriz. 2 kere news.news yazmaya gerek yok.
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: news.imageUrl}} />
      <View style = {styles.innerContainer}>
        <Text style={styles.title}>{news.title}</Text>
        <Text style={styles.description}>{news.description}</Text>
        <Text style = {styles.author}>{news.author}</Text>
      </View>
    </View>
  );
};

export default NewsCard;
