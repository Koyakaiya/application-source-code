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
    englishWord: 'ICON',
    hausaWord: 'ALAMA',
    description: 'Wannan wani tambari ne da ke wakiltar abin da ke ƙunshe cikin manhaja ko tsarin fayil mai bayanai. Zaɓan wannan alamar zai buɗo maka wannan manhaja ko fayil.',
    folderPath: 'ICON',
    image: 'image.png',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    {
    englishWord: 'IDE',
    hausaWord: 'IDE',
    description: 'Wato Integrated Development Environment. Wannan wani manhaja ne da ke taimaka wa masu ƙirƙiran manhajojin kwamfyuta da inganci.',
    folderPath: 'IDE',
    image: 'image.png',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    {
    englishWord: 'ILLUSTRATION',
    hausaWord: 'BAYANI A SIFFA',
    description: 'Wannan shi ne ƙara wa bayani inganci ta hanyar zane, hoto, ko giraf.',
    folderPath: 'ILLUSTRATION',
    image: '',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    {
    englishWord: 'IMAGE',
    hausaWord: 'HOTO',
    description: 'Wannan shi ne hoto da aka ɗauka da kyamara, ko zane da aka canza ma shi yanayi ya dawo hoto ta hanyar amfani da manhajar zane ko na tsara hoto.',
    folderPath: 'IMAGE',
    image: 'image.jpg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    {
    englishWord: 'IMPORT',
    hausaWord: 'SHIGO DA',
    description: 'Wannan shi ne shigo da wani fayil kamar hoto, bidiyo ko sauti zuwa cikin manhajan da ake aiki da shi da niyyar sarrafa shi ko yin amfani da shi a cikin aikin da ake yi. Manhajoji dayawa suna iya yin wannan domin gudanar da wani ainihin aiki.',
    folderPath: 'IMPORT',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    {
    englishWord: 'INBOX',
    hausaWord: 'AKWATIN SAƙONNIN DA SUKA SHIGO',
    description: 'Wannan wani gurbi ne a cikin asusun imeli da sakonnin da aka aiko ma ka suke a ajiye.',
    folderPath: 'INBOX',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    {
    englishWord: 'INITIALIZE',
    hausaWord: 'SOMAWA',
    description: 'Wannan shi ne aiwatar da fara ko soma wani abu a yayin da ake aiki da kwamfyuta.',
    folderPath: 'INITIALIZE',
    image: '',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    {
    englishWord: 'INK CARTRIDGE',
    hausaWord: 'KURTUN TAWADA',
    description: 'Wannan shi ne kurtun tawada mai ɗauke da garin tawada a cikinsa. Ana sa shine a cikin mabugiya wato firinta.',
    folderPath: 'INK_CARTRIDGE',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    {
    englishWord: 'INPUT',
    hausaWord: 'SHIGARWA',
    description: 'Wannan shi ne aiwatar da shigar da bayani cikin kwamfyuta',
    folderPath: 'INPUT',
    image: '',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    {
    englishWord: 'INPUT DEVICE',
    hausaWord: 'NA’URAR SHIGAR DA BAYANI',
    description: "A harkan yin amfani da kwamfyuta, wannan shi ne kowane na'ura da ake amfani da shi wajen shigar da bayani ko ba da umarni zuwa cikin kwamfyuta. Misalai, Linzamin kwamfyuta wato Mouse, Farantin Harrufa ko Kibodi wato Keybaord, Alƙalamin Kwamfyuta wato Lightpen, Sikana ko Makwafiya wato Scanner, Amsa Kuwa ko Makirfo wato Microphone, da sauran su.",
    folderPath: 'INPUT_DEVICE',
    image: 'image.jpg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    
    {
    englishWord: 'INSERT',
    hausaWord: 'SHIGAR',
    description: 'Wannan ya na nufi a ratsa ko a shigar da wani ɗan bayani cikin shafin da ake aiki a kan sa.',
    folderPath: 'INSERT',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    {
    englishWord: 'INSTALL',
    hausaWord: 'DASA',
    description: 'Wannan shi ne aiwatar da dasa wani manhaja ko masarrafi zuwa cikin kwamfyuta ko waya ta hanyar amfani da madashin manhaja.',
    folderPath: 'INSTALL',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    {
    englishWord: 'INSTALLATION FILE',
    hausaWord: 'MADASHIN MANHAJA',
    description: 'Wannan wani nau’ra ne da ke dasa ma ka manhaja ko masarrafi a cikin Kwamfyuta ko waya.',
    folderPath: 'INSTALLATION_FILE',
    image: 'image.png',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    {
    englishWord: 'INTERACTIVE',
    hausaWord: "MU'AMALA DA NA'URA",
    description: "Wannan shi ne yanayin da na'ura ko tsarraren manhaja ke ba da damar karɓan umarni kuma ta mayar da martanin da ake buƙata. Alal misali, masarrafan rubutu, ko na lissafi.",
    folderPath: 'INTERACTIVE',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    
    
    
    {
    englishWord: 'INTERFACE',
    hausaWord: "FUSKAR MU'AMALA",
    description: 'Wannan shi ne tsarin fuskar kwamfyuta ko waya da ke ba da dammar yin mu’amala da gudanar da ayyuka.',
    folderPath: 'INTERFACE',
    image: 'image.png',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    {
    englishWord: 'INTERNET',
    hausaWord: 'YANAR GIZO',
    description: 'Wannan ita ce yanar gizo ta sadarawa. A zahiri, ita ce babbar mahaɗar sadarwa wadda ta haɗe duk ƙananan mahaɗan sadarwa ta duniya domin samun damar yaɗa da musanya bayanai.',
    folderPath: 'INTERNET',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    {
    englishWord: 'INTRANET',
    hausaWord: 'ƘARAMIN GIZON SADARWA',
    description: 'Wannan shi ne ƙaramin tashar sadarwa da ke haɗa kwamfyutocin da ake amfani dasu a cikin muhalli guda ɗaya ko cikin gida ɗaya.',
    folderPath: 'INTRANET',
    image: 'image.png',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    {
    englishWord: 'IP ADDRESS (INTERNET PROTOCOL)',
    hausaWord: 'ADIRESHIN KWAMFYUTA A YANAR GIZO',
    description: "Wannan shi ne wani tsarin lambobi da ke waƙiltar kowane na'ura da ke harka a yanar gizo. A san da cewa, da waɗannan lambobin ake gano asalin tushen bayanai da aka yaɗa.",
    folderPath: 'IP_ADDRESS',
    image: 'image.png',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    {
    englishWord: 'ITALIC',
    hausaWord: 'RUBUTU MAI TAFIYAR TSUTSA',
    description: 'Wannan wani salon rubutu na watsal-watsal ko tafiyar tsutsa ne da ake bawa wani kalma ko jerin kalmomi su fito daban domin nuna ƙarfafawa ko muhimmanci.',
    folderPath: 'ITALIC',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
]

export default function I({ navigation }): JSX.Element {
  
 
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
              <Text style={styles.letter}>I</Text>
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
























































































































