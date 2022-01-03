import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Products from './src/pages/Products';
import Detail from './src/pages/Detail';
import Login from './src/pages/Login/Login';
import {useSelector} from 'react-redux';
import Loading from './src/components/Loading';

const Stack = createNativeStackNavigator();

export default function Router() {
  const userSession = useSelector(s => s.user);
  const isAuthLoading = useSelector(s => s.isAuthLoading);
  console.log(userSession);
  console.log(isAuthLoading);
  return (
    <NavigationContainer>
      {isAuthLoading ? (
        <Loading />
      ) : !userSession ? (
        <Stack.Navigator>
          <Stack.Screen
            name="LoginPage"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="LoginPage"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="ProductsPage"
            component={Products}
            options={{
              title: 'Ürünler',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#64b5f6',
              },
              headerTitleStyle: {
                color: 'white',
              },
            }}
          />
          <Stack.Screen
            name="DetailPage"
            component={Detail}
            options={{
              title: 'Ürün Detayı',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#64b5f6',
              },
              headerTitleStyle: {
                color: 'white',
              },
              headerTintColor: 'white',
            }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
