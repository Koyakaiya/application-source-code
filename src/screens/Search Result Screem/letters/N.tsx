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
    englishWord: 'NAVIGATION',
    hausaWord: 'ZIRGA-ZIRGA',
    description: 'Wannan shi ne aiwatar da samun kai ga amfani da kayan aikin da ke ƙunshe a cikin duk wani manhaja, ko yanar gizo. A takaice, yin amfani da manunin linzamin kwamfyuta a cikin alƙuƙi ko shafin masarrafi da ake aiki da shi a yayinda ake danna madannai domin gudanar da ayyuka, shi ne zirga-zirga.',
    folderPath: 'NAVIGATION',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    {
    englishWord: 'NETWORK',
    hausaWord: 'CIBIYAR SADARWA',
    description: 'Wannan shi ne mahaɗar hanyoyin sadarwa inda ake haɗa kwamfyutoci da junansu ko da wasu ƙafofin bayanai daban-daban.',
    folderPath: 'NETWORK',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    {
    englishWord: 'NETWORK CABLE',
    hausaWord: 'WAYAR HAƊA SADARWA',
    description: 'Wata waya ce ta musamman da ake amfani da ita domin haɗa wasu kwamfyutoci a cikin wani muhallin sadarwa da ke basu damar karɓa ko bayar da bayanai da saƙƙoni.',
    folderPath: 'NETWORK_CABLE',
    image: 'image.jpg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    {
    englishWord: 'NEW',
    hausaWord: 'SABO',
    description: 'Wannan wata alama ce da ke samuwa a cikin dukan manhajoji da idan aka latsa ta, kwamfyuta za ta buɗo sabuwar shafin aiki da ba komai a ciki.',
    folderPath: 'NEW',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    {
    englishWord: 'NEWSLETTER',
    hausaWord: 'WASIƘAR BADA BAYANAI',
    description: 'Wannan wasiƙa ce wanda kamfanoni da ƙungiyoyi ke aika wa kostomomin su da waɗanda suka yi rajista da su da ke ɗauke da muhimman bayyanai game da ayyukan su, da kuma rahotannin da ya shafi kasuwancin su. A yawancin lokaci, akan tura wasiƙar nan ne ta saƙon imeli.',
    folderPath: 'NEWSLETTER',
    image: 'image.jpg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    {
      englishWord: 'NIGHT MODE',
      hausaWord: 'YANAYI NA DUHU',
      description: 'A harkan yin aiki da kwamfyuta ko waya, wannan shi ne yanayi da ake sa wa allon fuskar manhaja ta dawo baki kuma rubutun da suke ciki su dawo fari, maimakon yadda aka fi sabawa da su wato farin fuska da baƙin rubutu.',
      folderPath: 'NIGHT_MODE',
      image: 'image.gif',
      audio1: 'audio1',
      audio2: 'audio2',
      audio3: 'audio3',
      },
      {
        englishWord: 'NEWSLETTER',
        hausaWord: 'WASIƘAR BADA BAYANAI',
        description: 'Wannan wasiƙa ce wanda kamfanoni da ƙungiyoyi ke aika wa kostomomin su da waɗanda suka yi rajista da su da ke ɗauke da muhimman bayyanai game da ayyukan su, da kuma rahotannin da ya shafi kasuwancin su. A yawancin lokaci, akan tura wasiƙar nan ne ta saƙon imeli.',
        folderPath: 'NEWSLETTER',
        image: 'image.jpg',
        audio1: 'audio1',
        audio2: 'audio2',
        audio3: 'audio3',
        },
        {
          englishWord: 'NO-CODE DESIGN TOOLS',
          hausaWord: "SAUWAƘAƘƘUN NA'URORIN ƘIRƘIRAN MANHAJOJI",
          description: 'Waɗannan su ne ire-iren masarrafan fasahar sadarwa masu burgewa da ake amfani da su wurin tsara manhajojin kwamfyuta ko na waya a cikin sauki. Ana iya amfani da su ne ba tare da kai ga ƙwarewa a fannin ƙrƙiran ruhin kwamfyuta ba, wato coding.',
          folderPath: 'NO_CODE_DESIGN_TOOLS',
          image: 'image.png',
          audio1: 'audio1',
          audio2: 'audio2',
          audio3: 'audio3',
          },
          {
            englishWord: 'NOTEBOOK/PALM TOP',
            hausaWord: 'KWAMFYUTAR HANNU',
            description: 'Wannan wata ƙaramar kwamfyuta ce mai aiki da batir.Girman ta bai wuce a riƙe ta a tafin hannu ba. Kammaninta kamar kalkuleta.',
            folderPath: 'NOTEBOOK_PALM_TOP',
            image: 'image.jpeg',
            audio1: 'audio1',
            audio2: 'audio2',
            audio3: 'audio3',
            },
            {
              englishWord: 'NOTIFICATION',
              hausaWord: 'SANARWA',
              description: 'Wannan saƙo ne da masarrafi ko manhaja ke aika wa mai amfani da kwamfyuta ko waya wanda ba shi da alaƙa da aikin da ya ke yi a lokacin. Saƙon nan zai iya zuwa ne a saƙon kan-ta-kifta, ko ya ɓullo a fuskar kwamfyuta ko waya a yayinda ake cikin aiki da shi.',
              folderPath: 'NOTIFICATION',
              image: 'image.gIF',
              audio1: 'audio1',
              audio2: 'audio2',
              audio3: 'audio3',
              },
]

export default function N({ navigation }): JSX.Element {
  
 
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
              <Text style={styles.letter}>N</Text>
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
























































































































