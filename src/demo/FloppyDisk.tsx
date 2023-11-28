import React = require('react');
import {
    Button,
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
import bgimg from '../assets/Landing.png';
import dings from '../audio/FLOPPYDISK/FLOPPYDISK1.mp3';
import dings2 from '../audio/FLOPPYDISK/FLOPPYDISK2.mp3';
import dings3 from '../audio/FLOPPYDISK/FLOPPYDISK3.mp3';
import floppydisk from '../audio/FLOPPYDISK/floppydisk.png';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useEffect } from 'react';

var Sound = require('react-native-sound');



export default function FloppyDisk({ navigation }): JSX.Element {
  var ding = new Sound(dings, error => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
    // if loaded successfully
    console.log(
      'duration in seconds: ' +
        ding.getDuration() +
        'number of channels: ' +
        ding.getNumberOfChannels(),
    );
  });
  useEffect(() => {
    ding.setVolume(1);
    return () => {
      ding.release();
    };
  }, []);
      const playPause = () => {
        ding.play(success => {
          if (success) {
            console.log('successfully finished playing');
          } else {
            console.log('playback failed due to audio decoding errors');
          }
        });
      };
      //Second audio
      var ding2 = new Sound(dings2, error => {
        if (error) {
          console.log('failed to load the sound', error);
          return;
        }
        // if loaded successfully
        console.log(
          'duration in seconds: ' +
            ding2.getDuration() +
            'number of channels: ' +
            ding2.getNumberOfChannels(),
        );
      });
      useEffect(() => {
        ding2.setVolume(1);
        return () => {
          ding2.release();
        };
      }, []);
          const playorPause = () => {
            ding2.play(success => {
              if (success) {
                console.log('successfully finished playing');
              } else {
                console.log('playback failed due to audio decoding errors');
              }
            });
          };
          //Third audio
          var ding3 = new Sound(dings3, error => {
            if (error) {
              console.log('failed to load the sound', error);
              return;
            }
            // if loaded successfully
            console.log(
              'duration in seconds: ' +
                ding3.getDuration() +
                'number of channels: ' +
                ding3.getNumberOfChannels(),
            );
          });
          useEffect(() => {
            ding3.setVolume(1);
            return () => {
              ding3.release();
            };
          }, []);
              const playtoPause = () => {
                ding3.play(success => {
                  if (success) {
                    console.log('successfully finished playing');
                  } else {
                    console.log('playback failed due to audio decoding errors');
                  }
                });
              };
  return (
    <>
      <ImageBackground source={bgimg} resizeMode="stretch" style={styles.img}>
        <View style={styles.SBFcontainer}>
          <View style={styles.HeaderContainer}>
          <TouchableOpacity 
          onPress={() => navigation.goBack()}
          style={styles.BackIcon}>
              <Ionicons
                name="arrow-back-circle-outline"
                color="white"
                size={43}
                style={styles.BackIcon}/>
            </TouchableOpacity>
            <View style={styles.HeaderText}>
            <Text style={styles.SBFirstText}>Ga Sakamakon Bincike</Text>
            </View>
          </View>
          <View style={styles.audiodetailsContainer}>
            <View style={styles.detailsname}>
              <Text style={styles.hautranslationtext}>Turanci</Text>
              <Text style={styles.engtranslationtext}>Floppy Disk</Text>
            </View>
            {/* Audio */}
            <View style={styles.audioContainer}>
            <TouchableOpacity
            style={{flexDirection:'row'}}
            onPress={playPause}>
            <Ionicons name="caret-forward-outline" color="#1B4D90" size={25}></Ionicons>
            <Text style={{marginTop:'2%', marginLeft:'2%'}}>0:00/0:00</Text>
            <Ionicons name="volume-low-outline" color="#1B4D90" size={25} style={{marginLeft:'24%'}}></Ionicons>
            </TouchableOpacity>
            </View>
          </View>
          {/* Hausa Pronounciation */}
          <View style={styles.audiodetailsContainer}>
            <View style={styles.detailsname}>
              <Text style={styles.hautranslationtext}>Hausa</Text>
              <Text style={styles.engtranslationtext}>Faifain Flofi</Text>
            </View>
            {/* Audio */}
            <View style={styles.audioContainer}>
            <TouchableOpacity
            style={{flexDirection:'row'}}
            onPress={playorPause}>
            <Ionicons name="caret-forward-outline" color="#1B4D90" size={25}></Ionicons>
            <Text style={{marginTop:'2%', marginLeft:'2%'}}>0:00/0:00</Text>
            <Ionicons name="volume-low-outline" color="#1B4D90" size={25} style={{marginLeft:'24%'}}></Ionicons>
            </TouchableOpacity>
            </View>
          </View>
          {/* Explanation   */}
          <View style={styles.explanation}>
            <View style={styles.audioexplanationContainer}>
              <View style={styles.detailsname}>
                <Text style={styles.exptranslationtext}>Fasara da Bayani</Text>
              </View>
              {/* Audio */}
              <View style={{width: '50%',
                justifyContent: 'center',
                marginVertical:'5%',
                marginRight: '5%',
                }}>
              <TouchableOpacity
            style={{flexDirection:'row'}}
            onPress={playtoPause}>
            <Ionicons name="caret-forward-outline" color="#1B4D90" size={25}></Ionicons>
            <Text style={{marginTop:'2%', marginLeft:'2%'}}>0:00/0:00</Text>
            <Ionicons name="volume-low-outline" color="#1B4D90" size={25} style={{marginLeft:'24%'}}></Ionicons>
            </TouchableOpacity>
              </View>
            </View>
            <View style={styles.description}>
              <Text style={styles.descriptiontext}>
              Wannan wani na'urar ajiyan bayanai ne da ake amfani da shi a dã, kamanin shi kamar na siririn kaset.
              </Text>
            </View>
          </View>
          {/* GIF, Images, Video */}
          <View style={styles.givcontainer}>
            <Text style={styles.giftexts}>Hoto ko GIF Mai Kara Bayani</Text>
            <View style={styles.diagramcontainer}>
                <Image source={floppydisk} style={styles.imgorgif}/>
            </View>
          </View>
        </View>
      </ImageBackground>
    </>
  );
}
const styles = StyleSheet.create({
  img: {
    height: screenHeight,
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  SBFcontainer: {
    height: screenHeight,
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  SBFirstText: {
    color: 'white',
    fontWeight: '700',
    fontFamily: 'Inter-Regular',
    fontSize: 19,
  },
  audiodetailsContainer: {
    width: '80%',
    height: '7%',
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '4%',
  },
  detailsname: {
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    width: '50%',
  },
  hautranslationtext: {
    fontFamily: 'Inter-Regular',
    fontSize: 13,
    marginLeft: '9%',
  },
  engtranslationtext: {
    fontFamily: 'Inter-Regular',
    fontSize: 15,
    color: '#1B4D90',
    width: '100%',
    fontWeight: '700',
    marginLeft: '9%',
  },
  audioexplanationContainer: {
    width: '100%',
    flexDirection: 'row',
  },
  explanation: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: '6%',
    marginHorizontal:'5%'
  },
  description: {},
  exptranslationtext: {
    fontFamily: 'Inter-Regular',
    fontSize: 15,
    color: '#1B4D90',
    width: '100%',
    fontWeight: '700',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '0%',
    marginLeft: '10%',
  },
  audioContainer: {
    width: '50%',
    justifyContent: 'center',
    textAlign: 'center',
    marginVertical:'5%',
    marginRight: '5%',
  },
  descriptiontext: {
    color: '#1B4D90',
    marginHorizontal:'5%',
    marginTop:'1%',
    marginBottom:'4%'
  },
  diagramcontainer: {
    width: '100%',
    justifyContent: 'center',
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 5,
  },
  givcontainer: {
    width: '80%',
    height: '25%',
  },
  giftexts: {
    color: 'white',
    fontFamily: 'Inter-Regular',
    fontSize: 15,
    marginLeft: '6%',
    marginTop: '6%',
  },
  BackIcon: {
    marginRight:'1%',
    justifyContent: 'center',
  },
  HeaderContainer:{
    width:'100%',
    height:'8%',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    alignContent:'center',
  },
  HeaderText:{
    width:'50%',
    marginLeft:'3%',
    marginRight:'7%',
  },
  imgorgif:{
    height:'100%',
    width:'100%',
    borderRadius:10
  }
});
