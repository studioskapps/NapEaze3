import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, SafeAreaView, ScrollView } from 'react-native';
import categories from '../../model/data';
import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from './styles';

const CategoryContainer = () => {
  const [showList, setShowList] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleAlbumPress = (item) => {
    setSelectedCategory(item);
    setShowList(true);
  };

  const handleBackButton = () => {
    setShowList(false);
    setSelectedCategory(null);
  };

  const renderSongs = ({ item }) => {
    return (
      <SafeAreaView>
        <TouchableOpacity onPress={() => handleAlbumPress(item)}>
          <View style={styles.albumContainer}>
            <Image source={item.image} style={styles.albumCover} />
            <Text style={styles.albumTitle}>{item.title}</Text>
            <Text style={styles.albumItemCount}>{`${item.itemcount} songs`}</Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    );
  };

  const renderSongList = ({ item }) => {
    return (
      <SafeAreaView>
        <View style={styles.navigationContainer}>
          <TouchableOpacity onPress={handleBackButton} style={styles.backButtonContainer}>
            <View style={styles.backButtonContent}>
              <Icon name="arrow-back" size={30} color="#8629D0"  />
              <Text style={styles.backButtonText}>Back</Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={handleBackButton}>
          <View style={styles.songListContainer}>
            {selectedCategory && (
              <>
                <Text style={styles.songListTitle}>{selectedCategory.title}</Text>
                <ScrollView>
                  {selectedCategory.content.map((song) => (
                    <TouchableOpacity key={song.id}>
                      <Text style={styles.songListItemTitle}>{song.title}</Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </>
            )}
            {!selectedCategory && (
              <Text style={styles.songListTitle}>No category selected</Text>
            )}
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    );
  };
  
  

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        {showList ? (
          <FlatList
            data={[selectedCategory]}
            renderItem={renderSongList}
            keyExtractor={(item) => item.id}
            horizontal={false}
            contentContainerStyle={styles.flatListContentContainer}
          />
        ) : (
<ScrollView 
  horizontal 
  pagingEnabled 
>
  {categories.map((item) => (
    <TouchableOpacity key={item.id} onPress={() => handleAlbumPress(item)}>
      <View style={styles.albumContainer}>
        <Image source={item.image} style={styles.albumCover} />
        <View style={styles.albumTitleContainer}>
          <Text style={styles.albumTitle}>{item.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  ))}
</ScrollView>

        )}
      </View>
    </SafeAreaView>
  );
};

export default CategoryContainer;
