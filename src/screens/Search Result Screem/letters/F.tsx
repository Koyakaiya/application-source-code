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
      englishWord: 'FAVORITES',
      hausaWord: 'SHAFUKAN DA AKA FI SON ZIYARTA',
      description: 'Wannan shi ne adana aikin da ake kan yi kamar rubutu, zane, ko bidiyo a cikin wani manhaja, zuwa wani yanayin da ake buƙatan amfani da shi a wani manhaja daban.',
      folderPath: 'FAVORITES',
      image: 'image.gif',
      audio1: 'audio1',
      audio2: 'audio2',
      audio3: 'audio3',
      },
      
      {
      englishWord: 'FILE EXTENSION',
      hausaWord: 'YANAYIN FAYIL',
      description: 'Wannan shi ne ainihin yadda tsarin fayil ya ke ta yanayin yadda bayanin da ke ciki yake adane. Ana gano yadda aka tsara ko adana wani fayil ne da ganin alamar ɗigo, sai kuma kalma mai harrufa guda uku kacal a bayan sunan da aka ba wa wannan fayil ɗin. Misalai, .dox, .xls, .pdf, .ppx, .jpg, .mp3, .mp4, da sauran su.',
      folderPath: 'FILE_EXTENSION',
      image: 'image.png',
      audio1: 'audio1',
      audio2: 'audio2',
      audio3: 'audio3',
      },
      
      {
      englishWord: 'FILTER',
      hausaWord: 'TACEWA',
      description: 'Wannan shi ne wani sashi na kwamfyuta da ke bita da tace bayanan da aka adana domin fito da su a cikin wani tsarin da ake bukata.',
      folderPath: 'FILTER',
      image: 'image.gif',
      audio1: 'audio1',
      audio2: 'audio2',
      audio3: 'audio3',
      },
      
      
      
      
      
      
      
      
      
      {
      englishWord: 'FILTER (PHOTO/VIDEO EDITING)',
      hausaWord: 'SHIRI MAI ƘAWATAWA',
      description: 'Wannan wani shiri ne da ake amfani da shi wajen sarrafa hoto ko bidiyo da ke canza ma ta kala ko haske ko kawata ta ta hanyar amfani da wani siddabaru.',
      folderPath: 'FILTER_IN_PHOTO_AND_VIDEO_EDITING',
      image: 'image.gif',
      audio1: 'audio1',
      audio2: 'audio2',
      audio3: 'audio3',
      },
      
      // {
      // englishWord: 'FIND',
      // hausaWord: 'NEMO',
      // description: 'Wannan shi ne aiwatar da nema ko gano inda wani bayani na musamman da ake buƙata ya ke a cikin kwamfyuta ko aikin da ke a buɗe.',
      // folderPath: 'FIND',
      // image: 'image.jpg',
      // audio1: 'audio1',
      // audio2: 'audio2',
      // audio3: 'audio3',
      // },
      
      
      {
      englishWord: 'FIND AND REPLACE',
      hausaWord: 'NEMA KA MUSANYA ',
      description: 'A harkan tsara rubutu a kwamfyuta, wannan shi ne aiwatar da neman wani ainihin kalma ko jerin kalmomi domin musanya su da wani ko wasu daban.',
      folderPath: 'FIND AND REPLACE',
      image: 'image.gif',
      audio1: 'audio1',
      audio2: 'audio2',
      audio3: 'audio3',
      },
      
      
      
      
      
      
      
      
      
      
      
      
      {
      englishWord: 'FIREWALL',
      hausaWord: 'MAƘARIN ZAƁI',
      description: 'Wannan wani maƙarin tsare kowane mahaɗar yanar gizo ne da ke sa ido da kuma tace cibiyar sadarwa daga bayanai masu shigowa da masu fita. Hukumomi ko ɗaiɗaikun masu amfani da mahaɗar yanar gizo zasu iya kunna makarin nan bisa zaɓi',
      folderPath: 'FIREWALL',
      image: 'image.png',
      audio1: 'audio1',
      audio2: 'audio2',
      audio3: 'audio3',
      },
      
      {
      englishWord: 'FLIER',
      hausaWord: 'KARAMIN KASIDA',
      description: 'Wannan wata karamar bugaggiyar kasida ce ta rikewa a hannu da ke tallata ko sanar da wani abu. Yanayin kasaidar tana iya kasancewa falle ɗaya kurum, ko an ninka ta zuwa falle biyu ko uku bisa ga tsari. A san da cewa, a yayinda ake amfani da manhajojin tsara zane na biya-ka-more, ana iya zaɓan ƙirƙirarren siffofi da ke ba da damar zana kananan kasidu.',
      folderPath: 'FLIER',
      image: 'image.png',
      audio1: 'audio1',
      audio2: 'audio2',
      audio3: 'audio3',
      },
      
      {
      englishWord: 'FLIGHT MODE',
      hausaWord: 'YANAYI NA CIKIN JIRGIN SAMA',
      description: 'Wannan shi ne canza yanayin aikin na’urori (wayoyi, kwamfyutar cinya ko ta hannu) su hana duka hanyoyin sadarwa ba tare da an kashe su ba. Idan aka saka na’ura a wannan yanayin, ba za ta iya aika ko karbi saƙo, kira, ko kuma shiga yanar gizo ba.',
      folderPath: 'FLIGHT_MODE',
      image: 'image.jpg',
      audio1: 'audio1',
      audio2: 'audio2',
      audio3: 'audio3',
      },
      
      
      
      
      
      
      
      
      
      {
      englishWord: 'FLOPPY DISK',
      hausaWord: 'FAIFAIN FLOFI',
      description: "Wannan wani na'urar ajiyan bayanai ne da ake amfani da shi a dã, kamanin shi kamar na siririn kaset.",
      folderPath: 'FLOPPY_DISK',
      image: 'image.png',
      audio1: 'audio1',
      audio2: 'audio2',
      audio3: 'audio3',
      },
      
      {
      englishWord: 'FOLDER',
      hausaWord: 'FALDA/GAFAKAR AJIYA',
      description: 'Wannan Ita ce gafaka a cikin kwamfyuta mai ɗauke da fayilolin d dã aka adana.',
      folderPath: 'FOLDER',
      image: 'image.jpg',
      audio1: 'audio1',
      audio2: 'audio2',
      audio3: 'audio3',
      },
      
      {
      englishWord: 'FONT',
      hausaWord: 'SIGAR RUBUTU',
      description: 'Wannan shi ne yadda sigar rubutu za ta zama gwargwaɗon zaɓin marubuci. Misali, Arial, Times New Roman, Calibri, Tahoma, da sauran su.',
      folderPath: 'FONT',
      image: 'image.jpg',
      audio1: 'audio1',
      audio2: 'audio2',
      audio3: 'audio3',
      },
      
      {
      englishWord: 'FONT SIZE',
      hausaWord: 'GIRMAN RUBUTU',
      description: 'Wannan shi ne girman rubutu gwargwaɗon buƙata.',
      folderPath: 'FONT_SIZE',
      image: 'image.jpg',
      audio1: 'audio1',
      audio2: 'audio2',
      audio3: 'audio3',
      },
      
      
      
      {
      englishWord: 'FONT STYLE',
      hausaWord: 'SALON RUBUTU',
      description: 'Wannan shi ne salon sigar rubutu da mai amfani da kwamfyuta zai iya zaɓa. Misali, dalla-dalla, watsal-watsal, ko ƙaƙƙaura.',
      folderPath: 'FONT_STYLE',
      image: 'image.png',
      audio1: 'audio1',
      audio2: 'audio2',
      audio3: 'audio3',
      },
      
      {
      englishWord: 'FOOTAGE',
      hausaWord: 'BIDIYON DA BA A SARRAFA BA',
      description: 'A harkan sarrrafa bidiyo ko fim, wannan shi ne ɗanyen bidiyon da aka ɗauka amma ba a sarrafa shi ba. Za a shigo da shi cikin masarrafin tsara bidiyon da ake aiki da shi (kamar Adobe Premiere ko Filmora) domin sarrafa shi ko haɗa shi da wasu bidiyoyi a samu bidiyo ko fim ɗaya',
      folderPath: 'FOOTAGE',
      image: 'image.jpg',
      audio1: 'audio1',
      audio2: 'audio2',
      audio3: 'audio3',
      },
      
      {
      englishWord: 'FOOTER',
      hausaWord: 'KANUN ƘASA',
      description: 'Wani bayani ne mai nuna kanu a ƙasan aiki ko ƙarƙashin shafi domin shaida aikin',
      folderPath: 'FOOTER',
      image: 'image.jpg',
      audio1: 'audio1',
      audio2: 'audio2',
      audio3: 'audio3',
      },
      
      {
      englishWord: 'FOOT NOTES',
      hausaWord: 'ƘARIN BAYANI A ƘASAN SHAFI',
      description: 'Wannan wani bayani ne da ake sa a ƙasan shafi domin ƙarin bayani akan aiki da aka gabatar a wanan ainihin shafin.',
      folderPath: 'FOOT_NOTES',
      image: 'image.jpg',
      audio1: 'audio1',
      audio2: 'audio2',
      audio3: 'audio3',
      },
      
      {
      englishWord: 'FORMAT (STORAGE DEVICES)',
      hausaWord: 'SHAFEWA',
      description: "Wannan shi ne shafe bayanan cikin na'ura ko wani rumbun ajiya kafin a yi amfani da ita ko domin maida ita yadda take tun farko",
      folderPath: 'FORMAT_STORAGE_DEVICES',
      image: 'image.png',
      audio1: 'audio1',
      audio2: 'audio2',
      audio3: 'audio3',
      },
      
      {
      englishWord: 'FORMAT (TEXT ALIGNMENT)',
      hausaWord: 'TSARI',
      description: 'Wannan shi ne aiwatar da sarrafa tsarin rubutu a cikin shafin aiki',
      folderPath: 'FORMAT_TEXT_ALIGNMENT',
      image: '',
      audio1: 'audio1',
      audio2: 'audio2',
      audio3: 'audio3',
      },
      
      {
      englishWord: 'FORWARD',
      hausaWord: 'TURAWA',
      description: 'A harkan aika saƙon kan-ta-kifta ko imeli, zaɓan alamar Forward wato Turawa zai buɗo ma ka sabon shafin aika imeli da ke ɗauke da asalin sakon da aka aiko ma ka, daga nan sai ka shigar da adireshin mutum guda ko mutanen da ka ke so ka tura wa wannan saƙon',
      folderPath: 'FORWARD',
      image: 'image.gif',
      audio1: 'audio1',
      audio2: 'audio2',
      audio3: 'audio3',
      },
      
      {
      englishWord: 'FRAME (PHOTOGRAPHY)',
      hausaWord: 'TSARIN ƊAUKAN HOTO',
      description: 'A fasahar ɗaukar hoto, wannan shi ne yadda mai ɗauka hoto ke ba da muhimmanci ga ainihin abin da, ko abubuwan da ya ke so su fito a cikin hoton ta hanyar kare sauran ɓangarorin muhallin da ba a buƙata su fito a hoton.',
      folderPath: 'FRAME(PHOTOGRAPHY)',
      image: 'image.gif',
      audio1: 'audio1',
      audio2: 'audio2',
      audio3: 'audio3',
      },
      {
      englishWord: 'FRAME (VIDEO EDITING)',
      hausaWord: 'FIREM (A SARRAFA BIDIYO)',
      description: 'A fasahar sarrafa bidiyo, wannan shi ne ma’aunin ɗan ƙanƙanin yanki na fitowa a cikin hoto mai motsi ko bidiyo',
      folderPath: 'FRAME(VIDEO EDITING)',
      image: 'image.jpg',
      audio1: 'audio1',
      audio2: 'audio2',
      audio3: 'audio3',
      },
      
      
]

export default function F({ navigation }): JSX.Element {
  
 
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
              <Text style={styles.letter}>F</Text>
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
























































































































