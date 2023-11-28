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
    englishWord: 'E-MAIL ADDRESS',
    hausaWord: 'ADIRESHIN IMELI',
    description: 'Wannan shi ne adireshin asusun saƙonni na musamman domin isar da kuma karɓan saƙon imeli.',
    folderPath: 'E-MAIL_ADDRESS',
    image: 'image.png',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    {
    englishWord: 'E-WALLET',
    hausaWord: 'ALJIHUN KUƊI',
    description: 'A harkan kasuwanci a yanar gizo, wannan wani sashi ne da ke samuwa a cikin asusun wanda ya yi rajista da ke rike darajar kuɗi.',
    folderPath: 'E-WALLET',
    image: 'image.jpg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    {
    englishWord: 'EDIT',
    hausaWord: 'SARRAFA',
    description: 'Wannan shi ne aiwatar da gyara, ƙari ko ragi a cikin aikin da ake yi.',
    folderPath: 'EDIT',
    image: '',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    
    
    
    
    
    {
    englishWord: 'EFFECTS',
    hausaWord: 'SIDDABARU',
    description: 'Wannan wani aiki na kawata bidiyo ko hoto ne ta yin amfani da wasu dabaru na fasaha domin ƙara wa bidiyo, hoto, ko sauti ban sha’wa ko burgewa.',
    folderPath: 'EFFECTS',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    {
    englishWord: 'EJECT',
    hausaWord: 'CIRE/FITAR',
    description: "Wannan ita ce umurtar kwamfyuta ta cire ko fitar da wani ma'ajiyar bayanai kamar: faifan CD, ko USB da aka sa a cikinta.",
    folderPath: 'EJECT',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    {
    englishWord: 'ELECTRONIC MAIL',
    hausaWord: 'IMELI/SAƘON KAN-TA-KIFTA',
    description: "Wannan shi ne saƙon kan-ta-kifta da ake aika wa mutun ɗaya ko fiye ta hanyar amfani da wani na'ura dake cikin wani mahaɗar sadarwa.",
    folderPath: 'ELECTRONIC_MAIL',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    
    
    
    
    
    
    
    
    
    
    {
    englishWord: 'ELLIPSE TOOL',
    hausaWord: 'KAYAN AIKIN ZANA ZANE MAI SIFFAR KWAI',
    description: 'Da ainihin wannan kayan aiki ne ake aiwatar da zana zane mai siffar kwai a cikin manhajar yin zane.',
    folderPath: 'ELLIPSE_TOOL',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    {
    englishWord: 'EMOJI',
    hausaWord: 'HOTON ALAMA MAI ISAR DA SAƘO',
    description: 'Wannan shi ne wani ɗan ƙaramin hoto da ke sada saƙo, ko misalta wani ra’ayi a zahiri. Ana yin amfani da shi ne domin a isar da saƙo cikin sauri ba tare da yin dogon rubutu ba.',
    folderPath: 'EMOJI',
    image: 'image.png',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    {
    englishWord: 'ENCRYPTION',
    hausaWord: 'SIRRINTA BAYANI',
    description: 'Wannan shi ne musanya bayanai daga yanayi na iya karanta su zuwa yanayi na sirrinta su. Ana iya karanta bayanan da aka sirrinta su ne kawai sa’adda aka maida su asalin yadda su ke. Sirrinta bayani shi ne ginshikin tsaron bayanai. ',
    folderPath: 'ENCRYPTION',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    
    
    
    
    
    
    
    
    {
    englishWord: 'ENDNOTES',
    hausaWord: 'ƘARIN BAYANI A ƘARSHEN SHAFI',
    description: 'Wannan wani bayani ne da ake sa a ƙarshen shafi domin ƙarin bayani akan aiki da aka gabarta a wannan ainihin shafin.',
    folderPath: 'ENDNOTES',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    {
    englishWord: 'ERROR',
    hausaWord: 'KUSKURE',
    description: "Wannan shi ne sa'anda mai amfani da wani manhaja ya aiwatar da abu ba daidai ba kwamfyuta na sanar da shi.",
    folderPath: 'ERROR',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    { 
    englishWord: 'ERROR MESSAGE',
    hausaWord: 'SANAR DA KUSKURE',
    description: 'A harkan dasa, ko yin amfani da manhaja a cikin kwamfyuta, kwamfyuta ta na nuna wata alama cewa akwai kuskure ko cikas a cikin gudanar da aiki da ita idan matsala ta taso. Wannan ake kira Error Message.',
    folderPath: 'ERROR_MESSAGE',
    image: 'image.png',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    
    
    
    
    
    
    
    
    {
    englishWord: 'ETHICAL HACKING',
    hausaWord: 'YIN KUTSE DA KYAKKYAWAR NIYYA',
    description: 'Wannan shi ne yin kutse da izini domin karfafa tsaron kai a yanar gizo. Hukumomi su kan nemi masu yin kutse domin su gano iya karfin  makari ko matacin zaɓi na yanar gizo da suka girka domin karfafa tsarin tsaron su.',
    folderPath: 'ETHICAL_HACKING',
    image: '',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    {
    englishWord: 'EXIT/QUIT',
    hausaWord: 'ASUSU',
    description: 'Wannan shi ne aiwatar da fita daga aiki da ake yi ko a daina.',
    folderPath: 'EXIT/QUIT',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    {
    englishWord: 'EXPORT',
    hausaWord: 'ADANAWA TA YADDA AKE SO',
    description: 'Wannan shi ne adana aikin da ake kan yi kamar rubutu, zane, ko bidiyo a cikin wani manhaja, zuwa wani yanayin da ake buƙatan amfani da shi a wani manhaja daban.',
    folderPath: 'EXPORT',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
]

export default function E({ navigation }): JSX.Element {
  
 
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
              <Text style={styles.letter}>E</Text>
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































