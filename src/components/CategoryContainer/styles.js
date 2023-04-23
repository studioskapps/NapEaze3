import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {

        flex: 1,
        backgroundColor: '#0F1622',
    },
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
  
    flatListContentContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,

    },
    albumContainer: {
        alignItems: 'center',
    },
    albumCover: {
        width: width,
        height: width,
        marginTop: 20,
        alignItems: 'center',
        borderRadius: 40,
    },
    albumTitle: {
        marginTop: 10,
        fontSize: 25,
        color: '#8629D0',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    albumItemCount: {
        marginTop: 1,
        fontSize: 18,
        color: '#888',
        textAlign: 'center',
    },
});
