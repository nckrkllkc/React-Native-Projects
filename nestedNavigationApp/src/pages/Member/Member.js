import React from 'react';
import {View, Text, Button} from 'react-native';

export default function Member({navigation}) {
  return (
    <View>
      <Text>Member Tab</Text>
      <Button
        title="Detail"
        onPress={() => {
          navigation.navigate('MemberDetailScreen');
        }}
      />
    </View>
  );
}
