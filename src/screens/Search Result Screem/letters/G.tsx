import * as React from "react";
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  PixelRatio
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
    englishWord: 'GIF',
    hausaWord: 'GIF',
    description: 'Wannan yanayin hoto ne wanda aka rage ma sa nauyi domin ba da damar yaɗa shi cikin sauƙi da kuma sauri. Yana iya kasancewa hoton mai motsi ne ko mara motsi. ',
    folderPath: 'GIF',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    {
    englishWord: 'GIGABYTE',
    hausaWord: 'GIGABAYIT',
    description: 'Wannan shi ne nauyin bayani mai addadin miliyan ɗaya, (1,000,000.00)',
    folderPath: 'GIGABYTE',
    image: 'image.jpg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    {
    englishWord: 'GO TO',
    hausaWord: 'A TAFI',
    description: 'Wannan shi ne aiwatar da fita daga wani zango zuwa wani aikin.',
    folderPath: 'GO_TO',
    image: '',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    {
    englishWord: 'GRAPH PLOTTER',
    hausaWord: 'NA’URAR ZANE',
    description: 'Wannan na’ura ce da ake haɗa ta da kwamfyuta domin yin kalolin zayyana iri daban-daban.',
    folderPath: 'GRAPH_PLOTTER',
    image: 'image.png',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    {
    englishWord: 'GRAPHIC DESIGN',
    hausaWord: 'TSARA ZANE',
    description: 'Wannan wani fasaha ne da ke aiwatar da sadarwa ta hanyar yin amfani da zane ko hoto domin isar da wani manufa ga wani al’umma masu ra’ayi ɗaya.',
    folderPath: 'GRAPHIC_DESIGN',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    {
    englishWord: 'GRID',
    hausaWord: 'LAYUKA MASU TAIMAKO',
    description: 'Waɗanna layuka ne masu taimaka wa mai zane daidaita aikin sa. A yawancin lokuta, ana samun su ne a cikin manhajojin yin zane.',
    folderPath: 'GRID',
    image: 'image.png',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
]

export default function G({ navigation }): JSX.Element {
  
 
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
              <Text style={styles.letter}>G</Text>
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
























































































































