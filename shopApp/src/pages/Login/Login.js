import React from 'react';
import {Formik} from 'formik';
import {Alert, Image, SafeAreaView, View} from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/Input';
import styles from './Login.style';
import usePost from '../../hooks/usePost';
import Config from 'react-native-config';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Login({navigation}) {
  const {data, loading, error, post} = usePost();

  function handleLogin(values) {
    post(Config.API_AUTH_URL + '/login', values);
  }
  if (error) {
    console.log(error);
    Alert.alert('StoreApp', 'Bir hata oluştu!');
  }

  if (data) {
    console.log(data);
    if (data.status === 'Error') {
      Alert.alert('ShopApp', 'Kullanıcı bulunamadı :( ');
    } else {
      AsyncStorage.setItem('@user', JSON.stringify(user));
      navigation.navigate('ProductsPage', data);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.image}
          source={require('../../../assets/login-logo.png')}
        />
      </View>
      <Formik
        initialValues={{username: '', password: ''}}
        onSubmit={formValues => handleLogin(formValues)}>
        {({handleChange, handleSubmit, values}) => (
          <View style={styles.bodyContainer}>
            <Input
              value={values.username}
              placeholder="Kullanıcı adınızı giriniz..."
              onChangeText={handleChange('username')}
              iconName={'account'}
              isSecure={false}
            />
            <Input
              value={values.password}
              placeholder="Şifrenizi giriniz..."
              onChangeText={handleChange('password')}
              iconName={'key'}
              isSecure={true}
            />
            <Button
              text={'Giriş Yap'}
              onPress={handleSubmit}
              loading={loading}
            />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
}

const user = {
  address: {
    geolocation: {
      lat: '-37.3159',
      long: '81.1496',
    },
    city: 'kilcoole',
    street: 'new road',
    number: 7682,
    zipcode: '12926-3874',
  },
  id: 1,
  email: 'john@gmail.com',
  username: 'johnd',
  password: 'm38rmF$',
  name: {
    firstname: 'john',
    lastname: 'doe',
  },
  phone: '1-570-236-7033',
  __v: 0,
};
