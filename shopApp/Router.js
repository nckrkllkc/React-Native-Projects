import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Products from './src/pages/Products';
import Detail from './src/pages/Detail';
export default function Router() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="ProductsPage" component={Products} />
        <Stack.Screen name="DetailPage" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
