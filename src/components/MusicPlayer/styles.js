import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0F1622',
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
    currentContainer: {
        marginLeft: 1,
        marginTop: 'auto',
        marginBottom: 'auto',
    },
    currentText: {

        fontSize: 14,
        fontWeight: '400',
        color: '#fff',
        marginTop: 'auto',
        marginBottom: 'auto',
    },
    currentImg: {
        width: 100 / 1.2,
        height: 100 / 1.2,
    },
    linearGradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },

    mainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomContainer: {
        borderTopColor: '#393E46',
        borderTopWidth: 1,
        width: width,
        alignItems: 'center',
        paddingVertical: 5
    },
    bottomControls: {
        flexDirection: 'row', justifyContent: 'space-between', width: '80%'
    },

    playerContainer: {
        width: width,
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
        flexDirection: 'row-reverse', justifyContent: 'space-between', width: '80%'
    }
});
