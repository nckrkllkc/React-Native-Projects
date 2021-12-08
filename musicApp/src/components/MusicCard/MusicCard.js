import React from 'react';
import {Image, View, Text} from 'react-native';
import styles from './MusicCard.style';

const MusicCard = ({song}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: song.imageUrl}} />
      <View style={styles.innerContainer}>
        <Text style={styles.title}>{song.title}</Text>
        <View style={styles.contentContainer}>
          <View style={styles.infoContainer}>
            <Text style={styles.artist}>{song.artist}</Text>
            <Text style={styles.year}>{song.year}</Text>
          </View>
          {song.isSoldOut && (
            <View style={styles.soldoutContainer}>
              <Text style={styles.soldoutTitle}>TÜKENDİ</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default MusicCard;
