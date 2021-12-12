import React from 'react';
import {SafeAreaView, Text, Button} from 'react-native';

export default function Second(props) {
    function backToFirst() {
        props.navigation.goBack()
    }
  return (
    <SafeAreaView style={{flex: 1, justifyContent : 'center',alignItems :'center'}}>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 24,
          color: 'black',
        }}>
        {`Merhaba ${props.route.params.username}`}
      </Text>
      <Button title="Geri git" onPress={backToFirst}/>
    </SafeAreaView>
  );
}
