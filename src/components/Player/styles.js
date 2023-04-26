import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0F1622',
  },
  currentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 2,
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  currentText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#dddddd',
    marginLeft: 4,
  },
  currentImg: {
    width: 80,
    height: 80,
    borderRadius: 5,
  },
  linearGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  playerContainer: {
    width: width-20,
    alignItems: 'center',
    paddingVertical: 7,
    marginRight: 50,
    marginBottom: 20,
    borderBottomRightRadius: 100,
    borderTopRightRadius: 100,
    overflow: 'hidden',
    marginLeft: 0,
  },
  playerControls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '97%',
  },
});
