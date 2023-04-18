import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, Dimensions, Image, FlatList } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import songs from '../../model/data';
import LinearGradient from 'react-native-linear-gradient';



const { width, height } = Dimensions.get('window');
const MusicPlayer = () => {

    const renderSongs = ({ index, item }) => {
        return (
            <View style={{
                width: width,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <View style={styles.artworkWrapper}>
                    <Image source={item.image} style={styles.artworkImage} />
                </View>
            </View>
        )
    }
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


                <FlatList style={{marginBottom:0}}
                    data={songs}
                    renderItem={renderSongs}
                    keyExtractor={(item) => item.id}
                    horizontal
                    pagingEnabled
                    showsVerticalScrollIndicator={false}
                    scrollEventThrottle={64}
                ></FlatList>


                <View style={styles.infotextContainer}>
                    <Text style={styles.soundTitle}>SONG TITLE</Text>
                    <Text style={styles.soundCategories}>Sound Category</Text>
                </View>

                {/* <View>
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
                </View> */}
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
    artworkWrapper: {
        width: 350,
        height: 350,
        marginBottom: 0,

    },
    artworkImage: {
        width: '100%',
        height: '100%',
        borderRadius: 35,
    },

    // progressContainer: {
    //     width: 330,
    //     height: 40,
    //     marginTop: 25,
    //     flexDirection: 'row',
    // },
    // progressLabelContainer: {
    //     width: 340,
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    // },
    // progressLabelTxt: {
    //     color: '#fff'
    // },
    infotextContainer: {
marginBottom: 50,
marginTop:0,
    },
    soundTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#8628D0',
        marginTop:0,
    },
    soundCategories: {
        fontSize: 18,
        fontWeight: '400',
        textAlign: 'center',
        color: '#4894BE',
    },
    playerContainer: {
        width: width,
        alignItems: 'center',
        paddingVertical: 15,
        marginRight:50,
        marginBottom:20,
        borderBottomRightRadius: 100,
        borderTopRightRadius: 100,
        overflow: 'hidden',
        marginLeft: 0,
    },
      playerControls: {
        flexDirection: 'row-reverse', justifyContent: 'space-between', width: '80%'
      }
});
