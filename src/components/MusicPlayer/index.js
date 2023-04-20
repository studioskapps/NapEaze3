import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, Dimensions, Image, FlatList } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import songs from '../../model/data';
import LinearGradient from 'react-native-linear-gradient';



const { width, height } = Dimensions.get('window');
const MusicPlayer = () => {
   const handleAlbumPress = () => {
        // Here you can implement the logic to open the song list
        console.log('Album pressed');
    }
    const renderSongs = ({ item }) => {
        return (
            <TouchableOpacity onPress={handleAlbumPress}>
            <View style={styles.albumContainer}>
                <Image source={item.image} style={styles.albumCover} />
                <Text style={styles.albumTitle}>{item.title}</Text>
                <Text style={styles.albumItemCount}>{`${item.itemcount} songs`}</Text>
            </View>
        </TouchableOpacity>
        );
    };
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.mainContainer}>
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


                <View style={styles.container}>
                    <FlatList
                        data={songs}
                        renderItem={renderSongs}
                        keyExtractor={(item) => item.id}
                        horizontal
                        pagingEnabled
                        snapToInterval={width}
                        decelerationRate={64}
                        contentContainerStyle={styles.flatListContentContainer}
                    />

                </View>

                <View style={styles.playerContainer}>
                    <LinearGradient
                        colors={['#334173', '#5B144C']}
                        style={styles.linearGradient}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                    />
                    <View style={styles.playerControls}>
                        <TouchableOpacity onPress={() => { }}>
                            <Image source={require('../../assets/img/button_play.png')} style={{ width: 80, height: 80 }} />
                        </TouchableOpacity>
                        <Text style={styles.currentText}>Now Playing:{'\n'}Waterfall{'\n'}02:46</Text>
                        <View style={styles.currentContainer}>
                            <Image
                                style={styles.currentImg}
                                source={require('../../assets/artwork/nature.png')}
                            />
                        </View>
                    </View>
                </View>
            </View>

            <View style={styles.bottomContainer}>
                <LinearGradient
                    colors={['#334173', '#5B144C']}
                    style={styles.linearGradient}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                />
                <View style={styles.bottomControls}>
                    <TouchableOpacity onPress={() => { }}>
                        <Icon name="home-outline" size={25} color="#4FA5D2" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { }}>
                        <Icon name="airplane-outline" size={25} color="#4FA5D2" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { }}>
                        <Icon name="heart-outline" size={25} color="#4FA5D2" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { }}>
                        <Icon name="ellipsis-horizontal" size={25} color="#4FA5D2" />
                    </TouchableOpacity>

                </View>
            </View>
        </SafeAreaView>
    );
};

export default MusicPlayer;

const styles = StyleSheet.create({
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
    bannerArea: {
        width: '100%',
        height: 100,
        borderBottomLeftRadius: 50,
        overflow: 'hidden',
    },
    logoContainer: {
        marginLeft: 20,
        marginTop: 'auto',
        marginBottom: 'auto',
    },
    logoImg: {
        width: 185 / 1.2,
        height: 72 / 1.2,
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
