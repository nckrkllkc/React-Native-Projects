import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Products from './src/pages/Products';
import Detail from './src/pages/Detail';
export default function Router() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
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
    </NavigationContainer>
  );
}
