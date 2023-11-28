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
    englishWord: 'LABEL',
    hausaWord: 'SHAIDA',
    description: 'Wannan shi ne yi ma aiki ko fayil wata shaida ko ba ta alama da zata sa a shaida ta a cikin kwamfyuta da sauri da an ga alamar ta.',
    folderPath: 'LABEL',
    image: '',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    {
    englishWord: 'LAN (Local Area Network).',
    hausaWord: 'LAN (Local Area Network).',
    description: 'Wato (Local Area Network). Wannan wani mahaɗar sadarwa ne na musamman da ke haɗa kwamfyutoci a muhallin da ke da manufa ɗaya.',
    folderPath: 'LAN',
    image: 'image.jpg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    {
    englishWord: 'LAPTOP',
    hausaWord: 'KWAMFYUTAR CINYA',
    description: 'Wannan ita ce kwamfyutar tafi–da–gidan ka, girman ta daidai ɗauka. Ana iya ɗora ta a cinya lokacin yin aiki da ita ko da babu tebur.',
    folderPath: 'LAPTOP',
    image: 'image.png',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    {
    englishWord: 'LAUNCH',
    hausaWord: 'KADAMARWA',
    description: '  Wannan shi ne kadamar da, ko farkon buɗewar manhaja, ko masarrafi da ake da niyar amfani da shi a cikin kwamfyuta.',
    folderPath: 'LAUNCH',
    image: '',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    {
    englishWord: 'LAYERS',
    hausaWord: 'SHIMFIƊAR TSARA ZANE',
    description: 'A harkan yin amfani da wasu manhajojin tsara zane, dole ne mai tsara zane ya yi amfani da shimfiɗa daban-daban, ɗaya bisa ɗaya kuma kowane shimfiɗar na ɗauke da na shi gudummawa wajen samar da kamalallen tsarin zanen da ake buƙata.',
    folderPath: 'LAYERS',
    image: 'image.png',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    {
    englishWord: 'LICENSE',
    hausaWord: 'LASISI',
    description: 'Wannan shi ne izinin da masu hukuma ko asalin maƙeran wani na’ura ke ba wa waɗanda su ka yi rajista da su, samun damar yin amfani da na’uran ko abin da aka ƙirƙira.',
    folderPath: 'LICENSE',
    image: '',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    {
    englishWord: 'LIGHT PEN',
    hausaWord: 'LINZAMIN KWAMFYUTA MAI KAMA DA ALKALAMI',
    description: 'Wannan wani siririn alkalami ne da ke aikin linzamin kwamfyuta da ake amfani da shi wajen nuna abu a cikin allon kwamfyuta domin buƙatar kulawa ko gyara, a maimakon yin amfani da linzamin kwamfyuta wato mouse.',
    folderPath: 'LIGHTPEN',
    image: 'image.jpg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    {
    englishWord: 'LINE',
    hausaWord: 'LAYI A ZANE',
    description: 'Wannan shi ne layi da aka zana a cikin manhajan da ake yin aiki da shi.',
    folderPath: 'LINE',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    {
    englishWord: 'LINKS',
    hausaWord: 'MAHAƊAI',
    description: ' Wannan bayanai ko hotuna ne masu iya haɗa mutum da wasu kafofin bayanai a yanar gizo.',
    folderPath: 'LINKS',
    image: 'image.png',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    
    
    
    
    
    {
    englishWord: ' LOCK SCREEN ',
    hausaWord: ' SHAFIN MAƘARIN ALLO ',
    description: 'Wannan wani fuskar mu’amala ne da ke kulle allon kwamfyuta ko waya domin tsare yin kutse ko shishigi. Ana iya buɗe shafin allon nan ne ta hanyar shigar da wani mabuɗi na sirri kawai.',
    folderPath: ' LOCKSCREEN',
    image: 'image.jpg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    {
    englishWord: 'LOG IN',
    hausaWord: 'SHIGA DA IZINI',
    description: 'A cikin tsarin tsaron na’ura masu kwakwalwa, ko wani asusun da aka buɗe a yanar gizo, shiga da izini wato (login) shi ne aiwatar da shiga cikin na’urorin ko buɗo manhajojin aikin da aka dasa, ko shiga cikin asusun ta hanyar saka kalmomin sirri na musamman da ke tabbatar da asalin mai amfani da shi.',
    folderPath: 'LOG_IN',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    {
    englishWord: 'LOG OUT',
    hausaWord: 'FITA',
    description: 'Wannan shi ne aiwatar da kawo ƙarshen amfani da wani manhaja ko fita daga wani asusu a yanar gizo. Wannan na iya zama mai amfani da shi ne ya fita da kansa, ko kuma wani tsari ne a cikin manhajar ya fitar da shi saboda wani dalili na musamman.',
    folderPath: 'LOG_OUT',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    {
    englishWord: 'LOGO',
    hausaWord: 'TAMBARI',
    description: 'Tambari na wakiltar wata ƙungiya, kamfani, ko mutum ta hanyar zane ko hoto wanda za a iya fahimta a kuma gane cikin sauƙi.',
    folderPath: 'LOGO',
    image: 'image.png',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    {
    englishWord: 'LOOK UP',
    hausaWord: 'NEMO',
    description: '  Wannan wani umarni ne mai nemo wasu kalmomi ko bayanai da ake buƙata a cikin shafin da ake aiki a ciki.',
    folderPath: 'LOOK_UP',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    {
    englishWord: 'LOOK-AND-FEEL',
    hausaWord: 'TSARIN SIFFA NA DALLA-DALLA',
    description: 'Wannan, shi ne ƙera samfurin aiki ya yi kama da siffar da ake so ya zama a karshe domin ba da damar gano yadda kyan sa da kuma sauƙin amfani da shi zai kasance.',
    folderPath: 'LOOK_AND_FEEL',
    image: 'image.png',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
]

export default function L({ navigation }): JSX.Element {
  
 
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
              <Text style={styles.letter}>L</Text>
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

