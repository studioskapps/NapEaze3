import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

const Navbar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Your Logo Here</Text>
      <View style={styles.menuDots}></View>
    </View>

  );
};

export default Navbar;