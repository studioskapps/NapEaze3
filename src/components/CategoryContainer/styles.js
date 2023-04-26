import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0F1622',
        marginVertical: 0,
    },
    // mainContainer: {
    //     flex: 1,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // },
    // flatListContentContainer: {
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     flexGrow: 1,
    // },

    albumCover: {
        // width: width - 80,
        // height: width - 80,
        // marginTop: 10,
        // marginLeft: 40,
        // marginRight: 40,
        // alignItems: 'center',
        // borderRadius: 40,
        width: width,
        height: width,
        marginTop: 10,
        alignItems: 'center',
    },
    albumTitle: {
        marginTop: 0,
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
    songListContainer: {
        backgroundColor: 'rgba(167, 167, 167, 0.8)',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
        marginTop: 20,
        width: width - 60, 
        marginLeft: 30,
        marginRight: 30,
      },
      songListTitle: {
        color: '#8629D0',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      songListItemTitle: {
        color: '#FFFFFF',
        fontSize: 20,
        marginBottom: 10,
      },
      flatListContentContainer: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        width: width,
      },
      backButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
      },
      backButtonContent: {
        flexDirection: 'row',
        alignItems: 'center',
      },

      navigationContainer: {
        flexDirection: 'row',
        justifyContent:'flex-end',
        height: 40,
        marginTop: 10,
        alignItems: 'center',
      },
      backButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,
      },
      backButtonText: {
        color: '#8629D0',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 5,
      },
});
