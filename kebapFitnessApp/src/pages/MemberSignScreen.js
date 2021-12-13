/* eslint-disable react/jsx-no-duplicate-props */
import React, {useState} from 'react';
import {SafeAreaView, Text, StyleSheet, Alert} from 'react-native';
import Input from '../components/Input/Input';
import Button from '../components/Button';
export default function MemberSign({navigation}) {
  const [name, setName] = useState(null);
  const [surname, setSurname] = useState(null);
  const [age, setAge] = useState(null);
  const [email, setEmail] = useState(null);
  const [city, setCity] = useState(null);
  function handleSubmit() {
    if (!name || !surname || !age || !email || !city) {
      Alert.alert('Creative Fitness Club', 'Form bilgileri boş bırakılamaz!!!');
      return;
    }
    const user = {
      name,
      surname,
      age,
      email,
      city,
    };
    navigation.navigate('MemberResult', {user});
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Üyelik Oluştur</Text>
      <Input
        label="Ad:"
        placeholder={'Üyenin adını giriniz...'}
        secureTextEntry={false}
        placeholderTextColor={'white'}
        onChangeText={setName}
      />
      <Input
        label="Soyad:"
        placeholder={'Üyenin soyadını giriniz...'}
        secureTextEntry={false}
        onChangeText={null}
        placeholderTextColor={'white'}
        onChangeText={setSurname}
      />
      <Input
        label="Yaş:"
        placeholder={'Üyenin yaşını giriniz...'}
        secureTextEntry={false}
        onChangeText={null}
        placeholderTextColor={'white'}
        keyboardType={'decimal-pad'}
        onChangeText={setAge}
      />
      <Input
        label="E-Mail:"
        placeholder={'Üyenin e-mail adresini giriniz...'}
        secureTextEntry={false}
        onChangeText={null}
        placeholderTextColor={'white'}
        onChangeText={setEmail}
      />
      <Input
        label="Memleket:"
        placeholder={'Üyenin memleketini adresini giriniz...'}
        secureTextEntry={false}
        onChangeText={null}
        placeholderTextColor={'white'}
        onChangeText={setCity}
      />
      <Button text={'Kaydı Tamamla'} onPress={handleSubmit} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#29b6f6',
  },
  title: {
    justifyContent: 'center',
    textAlign: 'center',
    padding: 10,
    fontFamily: 'Roboto-Bold',
    color: 'white',
    fontSize: 22,
  },
});
