import React from 'react';
import { View, Image } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import { styles } from './styles';

const NavBar = () => {
  return (
    <View style={styles.bannerArea}>
      <LinearGradient
        colors={['#334173', '#5B144C']}
        style={styles.linearGradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      />
      <View style={styles.logoContainer}>
        <Image
          style={styles.logoImg}
          source={require('../../assets/img/logo.png')}
        />
      </View>
    </View>
  );
};

export default NavBar;
