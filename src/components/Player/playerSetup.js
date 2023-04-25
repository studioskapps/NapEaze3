// playerSetup.js

import TrackPlayer from 'react-native-track-player';
import categories from '../../../src/model/data';

const setupPlayer = async () => {
  try {
    await TrackPlayer.setupPlayer();
    const tracks = Object.values(categories);
    await TrackPlayer.add(tracks);
  } catch (error) {
    console.error(error);
  }
};

export default setupPlayer;
