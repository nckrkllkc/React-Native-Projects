import React from 'react';
import {SafeAreaView, Text} from 'react-native';

export default function MemberResult({route}) {
  const {user} = route.params;
  return (
    <SafeAreaView>
      <Text>Kayıt Tamamlandı!</Text>
      <Text>Ad:{user.name}</Text>
      <Text>Soyad:{user.surname}</Text>
      <Text>Yaş:{user.age}</Text>
      <Text>E-posta:{user.email}</Text>
      <Text>Memleket:{user.city}</Text>
    </SafeAreaView>
  );
}
