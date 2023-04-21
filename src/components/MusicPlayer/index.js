import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, Dimensions, Image, FlatList } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import songs from '../../model/data';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './styles';




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
           


                <View style={styles.container}>
                    <FlatList
                        data={songs}
                        renderItem={renderSongs}
                        keyExtractor={(item) => item.id}
                        horizontal
                        pagingEnabled

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

