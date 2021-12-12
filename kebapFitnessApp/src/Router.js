import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from './pages/WelcomeScreen';
import MemberSignScreen from './pages/MemberSignScreen';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="MemberSign" component={MemberSignScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
