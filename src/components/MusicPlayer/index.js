import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import Slider from '@react-native-community/slider';

const { width, height } = Dimensions.get('window');
const MusicPlayer = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.mainContainer}>
                <View style={styles.artworkWrapper}>
                    <Image source={require('../../assets/artwork/noises.jpg')}
                        style={styles.artworkImage} />
                </View>
                <View>
                    <Text style={styles.soundTitle}>SONG TITLE</Text>
                    <Text style={styles.soundCategories}>Sound Category</Text>
                </View>

                <View>
                    <Slider style={styles.progressContainer}
                        value={10}
                        minimumValue={0}
                        maximumValue={100}
                        thumbTintColor='#ffffff'
                        minimumTrackTintColor='#FFD369'
                        maximumTrackTintColor='#FFF'
                        onSlidingComplete={() => { }}
                    />
                    <View style={styles.progressLabelContainer}>
                        <Text style={styles.progressLabelTxt}>0:00</Text>
                        <Text style={styles.progressLabelTxt}>3:57</Text>
                    </View>
                </View>
                <View style={styles.playerContainer}>
                <View style={styles.playerControls}>
                <TouchableOpacity onPress={() => { }}>
                        <Icon name="play-skip-back-outline" size={35} color="#FFD369" style={{marginTop:25}}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { }}>
                        <Icon name="ios-pause-circle" size={80} color="#FFD369" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { }}>
                        <Icon name="play-skip-forward-outline" size={35} color="#FFD369" style={{marginTop:25}}/>
                    </TouchableOpacity>
                </View>
                </View>
            </View>
            <View style={styles.bottomContainer}>
                <View style={styles.bottomControls}>
                    <TouchableOpacity onPress={() => { }}>
                        <Icon name="heart-outline" size={30} color="#777777" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { }}>
                        <Icon name="repeat" size={30} color="#777777" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { }}>
                        <Icon name="share-outline" size={30} color="#777777" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { }}>
                        <Icon name="ellipsis-horizontal" size={30} color="#777777" />
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
        backgroundColor: '#222831',
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
        paddingVertical: 15,
        position: 'absolute',
        bottom: 0,
    },
    bottomControls: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
    },
    artworkWrapper: {
        width: 300,
        height: 300,
        marginBottom: 25,
        //ios    
        shadowOpacity: 0.3,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0
        },
        //android
        elevation: 3

    },
    artworkImage: {
        width: '100%',
        height: '100%',
        borderRadius: 35,
    },
    soundTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
    },
    progressContainer: {
        width: 330,
        height: 40,
        marginTop: 25,
        flexDirection: 'row',
    },
    progressLabelContainer: {
        width: 340,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    progressLabelTxt: {
        color: '#fff'
    },
    soundCategories: {
        fontSize: 18,
        fontWeight: '400',
        textAlign: 'center',
        color: '#ddd',
    },
playerContainer: {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  backgroundColor: '#a7a7a7',
  bottom: 0,
},
playerControls: {
  flexDirection: 'row',
  width: '60%',
  justifyContent: 'space-between',
},

});
