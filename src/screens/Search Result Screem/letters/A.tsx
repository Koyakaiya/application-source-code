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
    englishWord: 'ACCOUNT',
    hausaWord: 'ASUSU',
    description: 'Wannan shi ne kasancewa mamba na wani kafar sadarwa, ko keɓaɓɓen muhalli a yanar gizo da ke ba wa wanda ya yi rajista izinin yin harka ko moran abubuwan da ke samuwa a wannan muhallin.',
    folderPath: 'ACCOUNT',
    image: 'image.jpg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  {
    englishWord: 'ACTIVATION',
    hausaWord: 'RAYAWA',
    description: 'Wannan shi ne mataki na farko da ake ɗauka kafin a samu damar amfani da dukan abubuwan da ke kunshe a cikin manhaja ko masarrafi da aka dasa a cikin kwamfyuta ko waya. Ana aiwatar da raya manhaja, ko masarrafi ne ta saka wani mabuɗi na sirri da kamfanin da ya ƙera ko samar da masarrafin ya zayyana.',
    folderPath: 'ACTIVATION',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  {
    englishWord: 'ACTIVE WINDOWS',
    hausaWord: 'ALƘUƘIN DA AKE AIKI A CIKI',
    description: 'Wannan shi ne manhajar da ake amfani da shi wajen rage nauyin fayil ko fayiloli domin samun damar yad’a su a sauwake. Dukan fayil da aka rage masu nauyi da wannan manhajar suna fitowa ne a wani dunƙulallen yanayi da ake kira zip file.',
    folderPath: 'ACTIVE_WINDOWS',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  {
    englishWord: 'ADDRESS BAR',
    hausaWord: 'GURBIN ADIRESHI',
    description: 'Wannan wani gurbi ne da ke samuwa a saman shafin alƙuƙin shiga yanar gizo da ake saka adireshin wani ainihin ɗaki a yanar gizo.',
    folderPath: 'ADDRESS_BAR',
    image: 'image.png',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  {
    englishWord: 'ADDRESS BOOK',
    hausaWord: 'LITTAFIN ADIRESHI',
    description: 'Wannan wani sashi ne kamar littafi da kwamfyuta ta ke adana duk adireshin akwatin imelin mutane.',
    folderPath: 'ADDRESS_BOOK',
    image: 'image.png',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  {
    englishWord: 'ALGORITHM',
    hausaWord: "KA'IDOJIN LISSAFI",
    description: 'Wannan shi ne tsarin ka’idoji na musamman da ke ba wa na’ura ko manhaja damar cika buƙatar mai amfani da shi.',
    folderPath: 'ALGORITHM',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  {
    englishWord: 'ALIGNMENT/ALIGN',
    hausaWord: "DAIDAITA TSARIN RUBUTU",
    description: 'Wannan shi ne yadda ake daidaita tsarin rubutu su jeru ta hannun hagu, dama, ko a tsakiyar shafi. Ana iya daidaita tsarin rubutu a cikin shafin alƙuƙin manhajar da ake amfani da shi ya fito a wani jerin da ake so.',
    folderPath: 'ALIGNMENT',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  {
    englishWord: 'ANALOGUE',
    hausaWord: "YANAYIN TSARIN SADARWA NA DÃff",
    description: 'Wannan shi ne yanayin tsarin sadarwa na d dã. Shi wannan fasahar yana da iyaka wajen sarrafa aiki saboda yana bukatan ana aiwatarwa da hannu akai-akai.',
    folderPath: 'ANALOGUE',
    image: '',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  {
    englishWord: 'ANDROID',
    hausaWord: "ANDROID",
    description: 'Wannan wani irin ginshikin masarrafi ne da ke ba wa yawancin wayyoyi da kwamfyutocin hannu damar yin aiki.',
    folderPath: 'ANDROID',
    image: 'image.png',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  {
    englishWord: 'ANTI-VIRUS',
    hausaWord: "RIGA-KAFI",
    description: 'Wannan wani irin ginshikin masarrafi ne da ke ba wa yawancin wayyoyi da kwamfyutocin hannu damar yin aiki.',
    folderPath: 'ANTI-VIRUS',
    image: 'image.jpg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  {
    englishWord: 'APPLE ios',
    hausaWord: "APPLE_ios",
    description: 'Wannan shi ne musamman ginshikin masarrafin da Kamfanin Apple su ka ƙera domin bawa kwamfyutocin da wayoyin su damar yin aiki.',
    folderPath: 'APPLE_ios',
    image: 'image.jpg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  {
    englishWord: 'APPLICATION PROGRAMMING INTERFACE (API)',
    hausaWord: "KA'IDOJIN SA MANHAJOJI YIN MU'AMALA",
    description: "Waɗannan su ne muhimman ka'idojin da ake amfani da su wajen tsara manhajoji da ke basu damar yin mu'amala da juna.",
    folderPath: "APPLICATION_PROGRAMMING_INTERFACE\(API\)/",
    image: 'image.png',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  {
    englishWord: 'APPLICATION SOFTWARE',
    hausaWord: "MANHAJOJIN KWAMFYUTA",
    description: "Waɗannan su ne manhajojin da aka ƙera da ke ba wa mai amfani da kwamfyuta damar yin ayyuka na musamman da su. Misalai, su ne Marubbucin Microsoft, Malissafin Microsoft da sauran su.",
    folderPath: 'APPLICATION_SOFTWARE',
    image: 'image.jpg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  {
    englishWord: 'ARCHIVE',
    hausaWord: "RUMBUN ADANA TARIHI",
    description: "A harkan amfani da kwamfyuta, wannan shi ne wani rumbun ajiya da ke ƙunshe da tsofofin ayyuka da aka ƙirƙira da kwamfyuta mai yiwuwa tun ranar da aka fara amfani da shi.",
    folderPath: 'ARCHIVE',
    image: 'image.jpg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  {
    englishWord: 'ARRANGE',
    hausaWord: "JERA, TSARA",
    description: "Wannan shi ne aiwatar da jera ko tsara bayani a kwamfyuta.",
    folderPath: 'ARRANGE',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  {
    englishWord: 'ARROW KEYS',
    hausaWord: "KIƁIYOYIN KIBODI",
    description: "Waɗansu madannai ne guda huɗu da suke a kan kibodin kwamfyuta masu nuna kiɓiyoyin sama, ƙasa, dama da hagu. Ana amfani da su domin motsar da tsinken rubutun kwamfyuta zuwa wajen da ake buƙata ko kuma motsar da fuskar kwamfyuta gabaɗaya.",
    folderPath: 'ARROW_KEYS',
    image: 'image.jpg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  {
    englishWord: 'ARTIFICIAL INTELLIGENCE',
    hausaWord: "SHIRIN KWAMFYUTA MAI BASIRA",
    description: "Wannan shi ne tsararren shirin kwamfyuta mai wakiltar basira irin na mutum. Akan ƙera su ne domin gudanar da wasu kwararrun ayyuka kamar fasara yare ko harshe a nan take, fahimtar umarnin da aka furta, ƙirƙiro hotuna da zane ta wurin amfani da rubutaccen umarni kaɗai, ba da damar yin mu'amala ta hira da na'urar kwamfyuta da sauran su.",
    folderPath: 'ARTIFICIAL_INTELLIGENCE',
    image: 'image.jpg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  {
    englishWord: 'ATTACHMENT',
    hausaWord: "BAYANI DA AKA MAƘALA",
    description: "A harkan aikawa da imeli, wannan shi ne bayani da aka maƙala a jikin imeli domin su tafi tare. Bayanin nan zai iya kasancewa hoto, bidiyo, zane, waƙa, da bayani mai haɗi wato hyperlink, da sauransu. ",
    folderPath: 'ATTACHMENT',
    image: 'image.png',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  {
    englishWord: 'AUDIO BOOK',
    hausaWord: "LITTAFI MAI MURYA",
    description: "Wannan na'ura ce da ke zuwa a yanayin littafi mai ɗauke da murya ko a karance.",
    folderPath: 'AUDIO_BOOK',
    image: 'image.jpg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  {
    englishWord: 'AUTO FILL',
    hausaWord: "CIKA RUBUTU DA KANSA",
    description: "Shi ne wani maƙalar masarrafi da ke ƙarasa maka rubuta wani abinda ka fara rubutawa tun ba ka yi nisa ba, saboda ya tuna ka taba rubuta wannan kalman kuma ya binciko shi da sauri ya ba ka.",
    folderPath: 'AUTO_FILL',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  {
    englishWord: 'AVI',
    hausaWord: "AVI",
    description: "Wannan wani ainihin yanayin fayil ɗin masilimanta ne da ke zuwa da duka bidiyo da sauti a haɗe, amma kuma za a iya raba su idan aka tashi yin aiki da su.",
    folderPath: 'AVI',
    image: 'image.png',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
]

export default function A({ navigation }): JSX.Element {


  const [isLoading, setIsLoading] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState('');
  const [modalVisible, setModalVisible] = React.useState(false); // State variable for the modal visibility
  // Define the handleAccountPress function

  return (
    <>
      <ImageBackground source={bgimg} resizeMode="stretch" style={styles.img}>
        <View style={{ height: screenHeight * 0.88, width: screenWidth * 1, alignItems: 'center' }}>
          <Text style={styles.HeaderText}>Matsa rubutu don samun bincike</Text>

          <View style={styles.SearchResult}>
            <ScrollView>
              <View style={styles.SearchLetterResult}>
                <ImageBackground source={letbgimg} style={styles.letimg}>
                  <Text style={styles.letter}>A</Text>
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

