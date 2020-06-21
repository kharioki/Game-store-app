import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import HomeScreen from './components/screens/HomeScreen';

const App = () => {
  return <HomeScreen />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
