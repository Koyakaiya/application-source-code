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
    englishWord: 'OFFLINE',
    hausaWord: 'RASHIN HAƊI GA YANAR GIZO',
    description: 'Wannan shi ne rashin kasancewar kwamfyuta, waya, ko wani na’ura a haɗe da cibiyar sadarwar yanar gizo.',
    folderPath: 'OFFLINE',
    image: '',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    {
    englishWord: 'ONLINE',
    hausaWord: 'HAƊI GA YANAR GIZO',
    description: 'Wannan shi ne yanayin kwamfyuta, waya, ko wani na’ura, ya kasance a haɗe da cibiyar sadarwa ta yanar gizo.',
    folderPath: 'ONLINE',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },

    {
    englishWord: 'ONLINE PAYMENT',
    hausaWord: 'BIYAN KUƊI A YANAR GIZO',
    description: 'Wannan shi ne aiwatar da biyan kuɗin kaya, ko ayyuka da aka yi cinikin su, ko aka mora ta wata hanyar sadarwa a yanar gizo',
    folderPath: 'ONLINE_PAYMENT',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    {
    englishWord: 'OPEN',
    hausaWord: 'BUƊE',
    description: 'Wannan wata alama ce da ke samuwa a cikin dukan manhajoji da idan aka latsa ta, za ta buɗo wani bayani ko fayil da ke ajiye a cikin kwamfyuta.',
    folderPath: 'OPEN',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    {
      englishWord: 'OPERATING SYSTEM',
      hausaWord: 'GINSHIKIN MASARRAFIN KWAMFYUTA',
      description: "Wannan shi ne ginshikin tsararren masarrafin da ake fara sakawa a cikin kwamfyuta ko waya da ke ba wa duk wani manhajan da za a dasa damar yin mu'amala da na'urar. Misalan su: Windows OS da Mac OS su ne ginshikan masarrafai na kwamfyuta, sai kuma Android da Apple iOS su ne na waya.",
      folderPath: 'OPERATING_SYSTEM',
      image: 'image.jpg',
      audio1: 'audio1',
      audio2: 'audio2',
      audio3: 'audio3',
      },
      {
        englishWord: 'ORIENTATION',
        hausaWord: 'FASALIN BAYYANA',
        description: 'Wannan shi ne tsarin yadda zane ko hoto ke bayyana a shafin alƙuƙi. Yanayin nan zai iya kasancewa a tsaye ko kuma a kwance.',
        folderPath: 'ORIENTATION',
        image: 'image.gif',
        audio1: 'audio1',
        audio2: 'audio2',
        audio3: 'audio3',
        },
        {
          englishWord: 'OUTBOX',
          hausaWord: 'BUƊE',
          description: 'A harkan aika imeli, wannan shi ne wani gurbi na wucin gadi da ke rike saƙonnin da ba a samu nasarar aikawa ba, saboda matsala na rashin samun damar shiga yanar gizo ko wani dalili daban.',
          folderPath: 'OUTBOX',
          image: 'image.gif',
          audio1: 'audio1',
          audio2: 'audio2',
          audio3: 'audio3',
          },
          {
            englishWord: 'OUTPUT DEVICE',
            hausaWord: "NA'URAR FITAR DA BAYANI",
            description: "Wannan shi ne kowane na'ura da ake amfani da shi wajen fito da, ko nuna bayani daga cikin kwamfyuta da mutum zai iya gani, ko ji. Misalai, Allon Kwamfyuta ko Monita wato Monitor, Mabugiya ko Firinta wato Printer, Masaurari ko Hedifo wato Head Phone, Lasifika wato LoudSpeaker, Furojekta wato Projector, da sauran su.",
            folderPath: 'OUTPUT_DEVICE',
            image: 'image.jpg',
            audio1: 'audio1',
            audio2: 'audio2',
            audio3: 'audio3',
            },
  

]

export default function O({ navigation }): JSX.Element {
  
 
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
              <Text style={styles.letter}>O</Text>
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























































































































