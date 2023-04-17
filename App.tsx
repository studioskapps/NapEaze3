import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
// import Navbar from './src/components/NavBar';
// import ScrollViewExample from './src/components/ScrollList/index';
import MusicPlayer from './src/components/MusicPlayer';


const App = () =>{
    return (
  <View style={styles.container}>
    <StatusBar barStyle="light-content"/>

    <MusicPlayer/>

</View>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})