import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Image } from 'react-native';
import Sound from 'react-native-sound';
import categories from '../../model/data';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './styles';

const Player = () => {
  const [isPlayerReady, setIsPlayerReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState(null); // define sound in the state

  const togglePlayback = (isPlaying) => { // remove sound from the arguments
    if (isPlaying) {
      sound.pause();
    } else {
      sound.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    // Load the audio file
    const audio = new Sound(categories[0].content[0].file, Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('Error loading audio file: ', error);
        return;
      }
      console.log('Audio file loaded successfully');
      setIsPlayerReady(true);
    });

    setSound(audio); // set the audio to the state

    // Release the audio file when the component unmounts
    return () => {
      audio.release();
    };
  }, []);

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
            <View style={styles.currentContainer}>
            
              <Text style={styles.currentText}>{categories[0].content[0].title}</Text>
            </View>
            <TouchableOpacity onPress={() => togglePlayback(isPlaying)}>
              <Image
                source={isPlaying ? require('../../assets/img/button_pause.png') : require('../../assets/img/button_play.png')}
                style={{ width: 80, height: 80 }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};


export default Player;
