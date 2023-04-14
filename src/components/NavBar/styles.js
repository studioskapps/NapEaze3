import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: 413,
    height: 101,
    left: 0,
    top: 0,
    backgroundColor: '#a7a7a7',
    zIndex: 1000,
    borderBottomRightRadius: 50,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  logo: {
    color: 'red',
    fontSize: 24,
    fontWeight: 'bold',
  },
  menuDots: {
    width: 3,
    height: 3,
    backgroundColor: 'white',
    borderRadius: 15,
  },
});