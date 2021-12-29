import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from './MealCard.style';
export default function MealCard({meal, onSelect}) {
  let mealName = meal.strMeal;
  if (meal.strMeal.length > 22) {
    mealName = meal.strMeal.substring(0, 22) + '...';
  }
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <ImageBackground
          source={{uri: meal.strMealThumb}}
          resizeMode="cover"
          style={styles.image}>
          <View style={styles.top} />
          <Text style={styles.text}>{mealName}</Text>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}
