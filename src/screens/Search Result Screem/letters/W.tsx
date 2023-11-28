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
    englishWord: "WALLPAPER",
    hausaWord: "HOTON SHAFIN MONITA wato (Allon Kwamfyuta ko Waya)",
    description: "Hoton shafin monita shi ne hoton da ke bayan allon farko na na'ura. Ana iya canza wannan hoton shafin monitan bisa zaɓi ko ra’ayin mai amfani da kwamfyutar ko waya.",
    folderPath: "WALLPAPER",
    image:"image.jpg",
    audio1:"audio1",
    audio2: "audio2",
    audio3: "audio3"
  },
  {
    englishWord: "WAN (WIDE AREA NETWORK)",
    hausaWord: "ƘWARARREN MAƘERIN GIDA A YANAR GIZO",
    description: "Wato (Wide Area Network). Wannan babban mahaɗar sadarwa ce da ke haɗa kwamfyutoci da ke nesa da juna, kamar jiha da jiha, ko kasa da kasa. Misali, bankunan da ke da rassa a jihohi dayawa, suna amfani da WAN domin samun damar biyan bukatan kostomomi ko da a wane jiha suka buɗe asusun su.",
    folderPath: "WAN(WIDE_AREA_NETWORK)",
    image:"image.gif",
audio1:"audio1",
    audio2: "audio2",
    audio3: "audio3"
  },
//   {
//     englishWord: "WATCHLIST",
//     hausaWord: "GURBIN AJIYA DOMIN KALLO",
//     description: null,
//     folderPath: "WATCHLIST",
//     image:"image.png",
// audio1:"audio1",
//     audio2: "audio2",
//     audio3: "audio3"
//   },
  {
    englishWord: "WATERMARK",
    hausaWord: "DUSASSHEN TAMBARI",
    description: "Wannan wani irin alama ce da ke kasancewa a dushashen yanayi da ake sakawa a fuskar shafi mai ɗauke da hoto ko tsararren rubutu domin yi mata shaida ga ainihin wanda ya ƙirƙire ta.",
    folderPath: "WATERMARK",
    image:"image.png",
audio1:"audio1",
    audio2: "audio2",
    audio3: "audio3"
  },
  {
    englishWord: "WEB DEVELOPER",
    hausaWord: "ƘWARARREN MAƘERIN GIDA A YANAR GIZO ",
    description: "Wannan shi ne kwararren mai ƙirƙiran gida a yanar gizo.",
    folderPath: "WEB_DEVELOPER",
    image:"image.png",
audio1:"audio1",
    audio2: "audio2",
    audio3: "audio3"
  },
  {
    englishWord: "WEB HOSTING",
    hausaWord: "GUDANAR DA AJIYAR GIDA A YANAR GIZO",
    description: "Wannan wata hidima ce da kamfanoni ke bayarwa ta rike da ajiye ƙirƙirarrun gidaje a yanar gizo. Duk mai niyar sa gidan shi a yanar gizo dole ne sai ya yayi rajista da Kamfani mai bada wannan hidima, ya kuma biya bisa ga nauyin bayanan da suke kunshe a wannan gidan, da iya shekarun da ya ke niyar gidan ta kasance a yanar gizo.",
    folderPath: "WEB_HOSTING",
    image:"image.png",
audio1:"audio1",
    audio2: "audio2",
    audio3: "audio3"
  },
  {
    englishWord: "WEBCAM",
    hausaWord: "KYAMARAN KWAMFYUTA",
    description: "Hoton shafin monita shi ne hoton da ke bayan allon farko na na'ura. Ana iya canza wannan hoton shafin monitan bisa zaɓi ko ra’ayin mai amfani da kwamfyutar ko waya.",
    folderPath: "WEBCAM",
    image:"image.png",
audio1:"audio1",
    audio2: "audio2",
    audio3: "audio3"
  },
  {
    englishWord: "WEBPAGE",
    hausaWord: "SHAFI A YANAR GIZO",
    description: "Wannan sahfi ne a yanar gizo da ke ɗauke da umarnai da bayanan amfani da moriyar maziyarta.",
    folderPath: "WEBPAGE",
    image:"image.png",
audio1:"audio1",
    audio2: "audio2",
    audio3: "audio3"
  },
  {
    englishWord: "WEBSITE",
    hausaWord: "GIDA A YANAR GIZO",
    description: "Wannan ita ce tsararren gida a yanar gizo da ke ba wa masu ziyarta damar cika wani buƙata, kamar yin bincike, samum bayani, yin kasuwanci, koyo, aika saƙonni, yin nishaɗi, gudanar da aiki da wani manhaja, da sauransu.",
    folderPath: "WEBSITE",
    image:"image.jpg",
audio1:"audio1",
    audio2: "audio2",
    audio3: "audio3"
  },
  {
    englishWord: "Wi-Fi (WIRELESS FIDELITY)",
    hausaWord: "Wi-Fi",
    description: "Wato, Wireless Fidelity. Wata irin fasaha ce ta haɗa kwamfyutoci, wayoyi, da wasu na’urori da yanar gizo ta iska ba tare da an haɗa ta da igiyar waya ba.",
    folderPath: "Wi-Fi(WIRELESS_FIDELITY)",
    image:"image.png",
audio1:"audio1",
    audio2: "audio2",
    audio3: "audio3"
  },
  {
    englishWord: "WINDOW",
    hausaWord: "WUNDO/ALƘUƘI",
    description: "Wannan shi ne alƙuƙi ko shafi wanda ta ke buɗewa a cikin kwamfyuta domin mai amfani da shi ya samu damar yin aikinsa.",
    folderPath: "WINDOW",
    image:"image.png",
audio1:"audio1",
    audio2: "audio2",
    audio3: "audio3"
  },
  {
    englishWord: "WINDOW EXPLORER",
    hausaWord: "ALƘUƘIN GINSHIKIN MASARRAFIN WINDOWS",
    description: "Wannan wani shashi ne da ke samuwa a cikin ginshikin masarrafin Windows da ke ba da damar ganin tarin fayiloli da faldodi da ke a ajiye a cikin kowane rumbun ajiya a cikin kwamfyuta.",
    folderPath: "WINDOW_EXPLORER",
    image:"image.png",
audio1:"audio1",
    audio2: "audio2",
    audio3: "audio3"
  },
  {
    englishWord: "WIRE FRAME/STORY BOARD",
    hausaWord: "TSARI GINA AIKI",
    description: "Wannan shi ne ainihin zanen da ke baiyana niyar yadda ake so wata na’ura ko manhaja ta gudanar da aikin da ake so ta yi.",
    folderPath: "WIREFRAME",
    image:"image.png",
audio1:"audio1",
    audio2: "audio2",
    audio3: "audio3"
  },
  {
    englishWord: "WMV (Windows Media Video)",
    hausaWord: "WMV",
    description: "Wato Windows Media Video. Wannan shi ne yanayin fayil ɗin bidiyo na musamman da Kamfanin Microsoft suka ƙirƙira kuma za a iya kallon su ne kurum a kan na’urorin sadarwar su.",
    folderPath: "WMV(Windows_Media_Video)",
    image:"image.png",
audio1:"audio1",
    audio2: "audio2",
    audio3: "audio3"
  },
  {
    englishWord: "WORD ART",
    hausaWord: "RUBUTU A SIFFAR ZANE",
    description: "Wannan wani salo ne a cikin tsarin rubutun kalomomi wanda ke bawa mai amfani da kwamfyuta damar iya zayyana rubutunsa.",
    folderPath: "WORD_ART",
    image:"image.png",
audio1:"audio1",
    audio2: "audio2",
    audio3: "audio3"
  },
  {
    englishWord: "WORD COUNT",
    hausaWord: "ƘIRGEN KALMOMI",
    description: "A harkan yin amfani da masarrafin marubucin Microsoft, wannan wani sashi ne na ɗin-ɗin-ɗin mai nuna, ko ƙirga iya adadin kalmonin da suke a cikin aikin da ake yi ko wani bayani da aka rubuta.",
    folderPath: "WORD_COUNT",
    image:"image.gif",
audio1:"audio1",
    audio2: "audio2",
    audio3: "audio3"
  },
  {
    englishWord: "WORKBOOK",
    hausaWord: "TARIN JADAWALAI",
    description: "A harkan tsara bayanai ta hanyar amfani da Masarafin Malissafin Microsoft, wato (Microsoft Excel) wannan shi ne tarin jadawali ɗaya ko fiye domin aiwatar da bitar bayanai ko lissafi.",
    folderPath: "WORKBOOK",
    image:"image.gif",
audio1:"audio1",
    audio2: "audio2",
    audio3: "audio3"
  },
  {
    englishWord: "WORKSPACE",
    hausaWord: "SARARIN AIKI",
    description: "A aiki da kowane manhaja, sararin aiki shi ne ainihin shafin alƙuƙi da yake buɗewa a fuskar allon kwamfyuta da za a yi aiki a ciki. ",
    folderPath: "WORKSPACE",
    image:"image.jpg",
audio1:"audio1",
    audio2: "audio2",
    audio3: "audio3"
  },
  {
    englishWord: "WWW (World Wide Web)",
    hausaWord: "WWW (World Wide Web)",
    description: "Wannan shi ne takaitacen sunan World Wide Web, wato cibiyar mahaɗar yanar gizo ta duniya. ",
    folderPath: "WWW(World_Wide_Web)",
    image:"image.gif",
audio1:"audio1",
    audio2: "audio2",
    audio3: "audio3"
  }
]

export default function W({ navigation }): JSX.Element {
  
 
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
              <Text style={styles.letter}>W</Text>
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
























































































































