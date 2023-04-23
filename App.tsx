import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import NavBar from './src/components/NavBar';
import Player from './src/components/Player';
import CategoryContainer from './src/components/CategoryContainer/index'
import BottomNavigation from './src/components/BottomNavigation';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
      <NavBar />
      <NavigationContainer>

      <CategoryContainer/>
    </NavigationContainer>

      <Player />
      <BottomNavigation/>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F1622',
  },
});
