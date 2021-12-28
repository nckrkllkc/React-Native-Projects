import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Categories from './src/pages/Categories';
import Meals from './src/pages/Meals';
import Detail from './src/pages/Detail';
import styles from './style';
const Stack = createStackNavigator();
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerBackTitleVisible: true,
          }}>
          <Stack.Screen
            name="Categories"
            component={Categories}
            options={{
              headerTitleAlign: 'center',
              headerTitleStyle: {color: '#FFA500'},
              headerTintColor: '#FFA500',
            }}
          />
          <Stack.Screen
            name="Meals"
            component={Meals}
            options={{
              headerTitleAlign: 'center',
              headerTitleStyle: {color: '#FFA500'},
              headerTintColor: '#FFA500',
              headerBackTitle: 'Categories',
            }}
          />
          <Stack.Screen
            name="Detail"
            component={Detail}
            options={{
              headerTitleAlign: 'center',
              headerTitleStyle: {color: '#FFA500'},
              headerTintColor: '#FFA500',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
