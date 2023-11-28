import  * as React from 'react';
import { View, Text, Button } from 'react-native';
const Sound = require('react-native-sound');

interface AudioPlayerProps {
  audioFile: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioFile }) => {
    const [sound, setSound] = React.useState(null);
  
    React.useEffect(() => {
      // Initialize react-native-sound
      Sound.setCategory('Playback');
  
      // Load the audio file when the component mounts
      const initSound = new Sound(audioFile, Sound.MAIN_BUNDLE, (error) => {
        if (error) {
          console.error('Error loading audio:', error);
          return;
        }
        setSound(initSound);
      });
  
      // Release the audio resource when the component unmounts
      return () => {
        if (sound) {
          sound.release();
        }
      };
    }, [audioFile]);
  
  const playSound = () => {
    if (sound) {
      sound.play((success) => {
        if (success) {
          console.log('Audio played successfully');
        } else {
          console.log('Audio playback failed');
        }
      });
    }
  };

  return (
    <View>
      <Text>Audio Player</Text>
      <Button title="Play Audio" onPress={playSound} />
    </View>
  );
};

export default AudioPlayer;
