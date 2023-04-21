import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import NavBar from './src/components/NavBar';
import MusicPlayer from './src/components/MusicPlayer';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
      <NavBar />
      <MusicPlayer />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
