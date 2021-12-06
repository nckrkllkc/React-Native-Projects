import React, {useState} from 'react';
import {Button, FlatList, SafeAreaView, Switch, Text, View} from 'react-native';
import styles from './style';
const data = [
  {id: 0, name: 'cafe.exe', isFavorite: true},
  {id: 1, name: 'KafaKafe', isFavorite: false},
  {id: 2, name: 'BugG', isFavorite: false},
  {id: 3, name: "Rock'n Code", isFavorite: true},
  {id: 4, name: 'do(drink)', isFavorite: false},
  {id: 5, name: 'esc', isFavorite: false},
];
const App = () => {
  const renderCafes = ({item}) => (
    <Text style={styles.cafe_list}>{item.name}</Text>
  );
  const getIndex = (item, index) => item.id.toString();
  const [cafeList, setCafeList] = useState(data);
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

  function OnFavoritesChange(isFavoritesChecked) {
    setShowOnlyFavorites(isFavoritesChecked);
    isFavoritesChecked
      ? setCafeList(cafeList.filter(cafe => cafe.isFavorite === true))
      : setCafeList(data);
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flexDirection: 'row', marginTop: 30}}>
        <Text>Show Only Favorites</Text>
        <Switch
          value={showOnlyFavorites}
          onValueChange={value => OnFavoritesChange(value)}
        />
      </View>
      <View>
        <FlatList
          data={cafeList}
          renderItem={renderCafes}
          keyExtractor={getIndex}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
