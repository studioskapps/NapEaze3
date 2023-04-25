import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0F1622',
  },
  currentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  currentText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#fff',
    marginLeft: 10,
  },
  art: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginLeft: 10,
  },
  linearGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  bottomContainer: {
    borderTopColor: '#393E46',
    borderTopWidth: 1,
    width: width,
    alignItems: 'center',
    paddingVertical: 5,
  },
  bottomControls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  playerContainer: {
    width: width-30,
    alignItems: 'center',
    paddingVertical: 15,
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
    width: '90%',
  },
});
