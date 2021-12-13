import React from 'react';
import {View, Text, Button} from 'react-native';

export default function MemberDetail({navigation}) {
  return (
    <View>
      <Text>Member Detail</Text>
      <Button
        title="Go Back"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
}
