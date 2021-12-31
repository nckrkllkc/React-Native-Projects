import React from 'react';
import {Formik} from 'formik';
import {Alert, Image, SafeAreaView, View} from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/Input';
import styles from './Login.style';
import usePost from '../../hooks/usePost';
import Config from 'react-native-config';
export default function Login({navigation}) {
  const {data, loading, error, post} = usePost();

  function handleLogin(values) {
    post(Config.API_AUTH_URL + '/login', values);
  }
  if (error) {
    Alert.alert('StoreApp', 'Bir hata oluştu!');
  }

  if (data) {
    console.log(data);
    if (data.status === 'Error') {
      Alert.alert('ShopApp', 'Kullanıcı bulunamadı :( ');
    } else {
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
