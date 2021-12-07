import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import styles from './style';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Hello Music App!</Text>
    </SafeAreaView>
  );
};

export default App;
