import React from 'react';
import {Text, SafeAreaView, StyleSheet} from 'react-native';
import Button from '../components/Button';

export default function WelcomeScreen(props) {
  function goToMemberSignPage() {
      props.navigation.navigate('MemberSign')
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Creative Fitness Club</Text>
      <Button text="Üye Kaydı Oluştur" onPress={goToMemberSignPage} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    margin: 10,
  },
  header: {
    textAlign: 'center',
    margin: 10,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#212121',
  },
});
