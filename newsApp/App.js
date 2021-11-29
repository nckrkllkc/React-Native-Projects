import React from 'react';
import {SafeAreaView, FlatList, Text} from 'react-native';
import {styles} from './style';
import NewsCard from './src/components/NewsCard';
import newsData from './news_data.json';
import newsBannerData from './news_banner_data.json';
import Banner from './src/components/Banner';
const App = () => {
  const renderNews = ({item}) => <NewsCard news={item} />;
  const getIndex = (item, index) => item.u_id.toString();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>News</Text>
      <FlatList
        data={newsData} //ileride api ile çekilecek.
        renderItem={renderNews} //NewsCard içerisine gelen datayı news olarak göndermiş olduk. Card komponentinde
        // props. olarak değil news. olarak kullanmaya olanak sağlar.
        keyExtractor={getIndex}
        ListHeaderComponent={() => <Banner newsBannerData={newsBannerData} />}
      />
    </SafeAreaView>
  );
};

export default App;
