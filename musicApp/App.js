import React, {useState} from 'react';
import {SafeAreaView, FlatList, View} from 'react-native';
import styles from './style';
import musicData from './data/music-data.json';
import MusicCard from './src/components/MusicCard';
import SearchBar from './src/components/SearchBar';
const App = () => {
  const renderMusicData = ({item}) => <MusicCard song={item} />;
  const renderSeperator = () => <View style={styles.separator} />;
  const handleSearch = text => {
    const filteredList = musicData.filter(
      song => song.title.toLowerCase().indexOf(text.toLowerCase()) > -1,
    );
    setSongList(filteredList);
  };

  const [songList, setSongList] = useState(musicData);
  return (
    <SafeAreaView style={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <FlatList
        data={songList}
        keyExtractor={item => item.id}
        renderItem={renderMusicData}
        ItemSeparatorComponent={renderSeperator}
      />
    </SafeAreaView>
  );
};

export default App;
