import * as React from "react";
import {
  Dimensions,
  ImageBackground,
  PixelRatio,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const fontScale = PixelRatio.getFontScale();
const getFontSize = size => size / fontScale;
import bgimg from '../../../assets/Landing.png';
import Ionicons from 'react-native-vector-icons/Ionicons';
import letbgimg from '../../../assets/letimg.png';
import axios from 'axios';
import Navigation from '../../../components/BottomNavigation/Navigation';
import PreloaderModal from '../../../utils/Preloader';

 
export const words = [
  {
    englishWord: 'KERNING/TRACKING',
    hausaWord: 'TAZARA TSAKANIN KALMOMI DA HARRUFA',
    description: 'Wannan shi ne faɗaɗawa ko tsuke adadin rubutu dake cikin shafi ta hanyar faɗaɗa ko rage adadin tazara da ke tsakanin haruffa.',
    folderPath: 'KERNING_AND_TRACKING',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    {
    englishWord: 'KEY FRAME',
    hausaWord: 'ƊAN ƘANƘANIN YANKIN BIDIYO',
    description: 'Wannan shi ne ɗan ƙanƙanin yankin lokaci mai muhimmanci da ke cikin tsarin ƙirkiran bidiyo ko zane mai motsi.',
    folderPath: 'KEY_FRAME',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    {
    englishWord: 'KEYBOARD',
    hausaWord: 'FARANTIN HARRUFA KO KIBODI',
    description: 'Wannan shi ne keken rubutu da ya ke ɗauke da duk wata alama ta harafi ko rubutu da ake dannawa domin ya fito a jikin allon kwamfyuta.',
    folderPath: 'KEYBOARD',
    image: 'image.png',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    {
    englishWord: 'KILL PROCESS',
    hausaWord: 'KASHE AIKI',
    description: 'Wannan shi ne aiwatar da kashe ko tsayar da duk wata aikin da ake cikin yi da Kwanfyuta kwata-kwata.',
    folderPath: 'KILL_PROCESS',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    {
    englishWord: 'KILOBYTE (KB)',
    hausaWord: 'KILO BAYIT (KB)',
    description: 'Wannan shi ne nauyin bayani mai adadin dubu ɗaya (1,000 bytes)',
    folderPath: 'KILO_BYTE',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
]

export default function K({ navigation }): JSX.Element {
  
 
  const [isLoading, setIsLoading] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState('');
  const [modalVisible, setModalVisible] = React.useState(false); // State variable for the modal visibility
  // Define the handleAccountPress function
  
  return (
    <>
      <ImageBackground source={bgimg} resizeMode="stretch" style={styles.img}>
        <View style={{height:'93%', width:'100%', alignItems:'center'}}>
        <Text style={styles.HeaderText}>Matsa rubutu don samun bincike</Text>
        
        <View style={styles.SearchResult}>
          <ScrollView>
          <View style={styles.SearchLetterResult}>
            <ImageBackground source={letbgimg} style={styles.letimg}>
              <Text style={styles.letter}>K</Text>
            </ImageBackground>
            <TouchableOpacity onPress={() => navigation.navigate('LettersMenuScreen')} style={styles.BackIcon}>
              <Ionicons
                name="arrow-back-circle-outline"
                color="#A9A9A9"
                size={60}
                style={styles.BackIcon}></Ionicons>
            </TouchableOpacity>
          </View>
          
          <View style={styles.SearchContent}>
         {words.map((word, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => navigation.navigate('Details', { word })}
        >
          <Text style={styles.SearchResultText}>{word.englishWord}</Text>
        </TouchableOpacity>
      ))}
      
          </View>
          </ScrollView>
        </View>
      
        
        {modalVisible && <PreloaderModal visible={modalVisible} />}
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
  letimg: {
    height: screenHeight / 10.5,
    width: screenWidth * 0.18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  SBFcontainer: {
    height: screenHeight,
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  SBFbars: {
    height: screenHeight * 0.13,
    width: screenWidth * 0.027,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '3%',
  },
  WWWSBFLineargradient: {
    borderColor: 'white',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  SBFirstText: {
    color: 'white',
    fontWeight: '700',
    fontFamily: 'Inter',
    fontSize: getFontSize(18),
  },
  SearchResult: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: screenWidth * 0.7,
    height: screenHeight / 1.4
  },
  SearchContent: {
    paddingLeft: '15%',
    paddingVertical: '4%',

  },
  SearchResultText: {
    color: '#2460A7',
    paddingTop: '4%',
    fontFamily: 'Inter-Regular'
  },
  SearchLetterResult: {
    flexDirection: 'row',
    width: screenWidth * 0.5,
    justifyContent: 'space-between',
    marginTop: '8%',
    marginBottom: '4%',
    marginHorizontal: '15%'
  },
  lettercontainer: {
    backgroundColor: '#1B4D90',
    margin: '2%',
    textAlign: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: '34%',
    borderWidth: 3,
    borderColor: '#A9A9A9',
  },
  letter: {
    color: 'white',
    fontSize: getFontSize(47),
    fontFamily: 'Inter-Bold',
    alignItems: 'center',
    justifyContent: 'center',
  },
  BackIcon: {
    marginRight: '3%',
    justifyContent: 'center',
  },
  HeaderText: {
    color: 'white',
    fontFamily: 'Inter-Regular',
    fontSize: getFontSize(14),
    marginVertical: '3%'
  },

});


























































































































