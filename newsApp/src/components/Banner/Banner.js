import React from 'react';
import {ScrollView, Image} from 'react-native';
import styles from './Banner.style';
const Banner = ({newsBannerData}) => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {newsBannerData.map(newsBanner => (
        <Image style={styles.bannerImage} source={{uri: newsBanner.imageUrl}} />
      ))}
    </ScrollView>
  );
};
export default Banner;
