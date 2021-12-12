import React from 'react';
import {Button, SafeAreaView, Text} from 'react-native';

export default function First(props) {
    console.log(props)
function navigateToPage() {
    props.navigation.navigate('SecondScreen',{username:'Sevda Kaçak'})
}

  return (
    <SafeAreaView style={{flex: 1, justifyContent : 'center',alignItems :'center'}}>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 24,
          color: 'black',
        }}>
        Hello First Screen!
      </Text>
      <Button title="İkinci Sayfaya Git" onPress={navigateToPage}/>
    </SafeAreaView>
  );
}
