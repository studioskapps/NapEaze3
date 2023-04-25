// app.tsx
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import NavBar from './src/components/NavBar';
import Player from './src/components/Player';
import CategoryContainer from './src/components/CategoryContainer';
import BottomNavigation from './src/components/BottomNavigation';


const App = () => {
  
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#2c2a33" barStyle="light-content" />
      <NavBar />
      <CategoryContainer />
<Player/>
      <BottomNavigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F1622',
  },
});

export default App;