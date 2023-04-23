import React from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, SafeAreaView } from 'react-native';

import songs from '../../model/data';
import { styles } from './styles';

const CategoryContainer = () => {
    const handleAlbumPress = () => {
        // Here you can implement the logic to open the song list
        console.log('Album pressed');
    };

    const renderSongs = ({ item }) => {
        return (

            <SafeAreaView>
                <TouchableOpacity onPress={handleAlbumPress}>
                    <View style={styles.albumContainer}>
                        <Image source={item.image} style={styles.albumCover} />
                        <Text style={styles.albumTitle}>{item.title}</Text>
                        <Text style={styles.albumItemCount}>{`${item.itemcount} songs`}</Text>
                    </View>
                </TouchableOpacity>
            </SafeAreaView>
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
            </View>
        </SafeAreaView>
    );
};

export default CategoryContainer;
