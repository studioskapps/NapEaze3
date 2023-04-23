import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './styles';




const Player = () => {


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.mainContainer}>

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

        </SafeAreaView>
    );
};

export default Player;

