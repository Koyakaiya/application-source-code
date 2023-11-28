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
    englishWord: 'PAGE',
    hausaWord: 'SHAFI',
    description: 'Wannan shi ne shafi a cikin aikin da ake yi a kan kwamfyuta.',
    folderPath: 'PAGE',
    image: 'image.png',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },

  {
    englishWord: 'PAGE BREAK',
    hausaWord: 'RABA SHAFI',
    description: 'Wannan manuni ne da ke raba shafi ya kuma nuna adadinsa a yadda ya dace idan ana so a bugo bayani daga mabugiya, wato firinta.',
    folderPath: 'PAGE_BREAK',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },

  {
    englishWord: 'PAGE ELEMENTS',
    hausaWord: 'GURBI MARA IYAKA',
    description: 'A harkan ƙirƙiran shafi a yanar gizo, wannan shi ne gurbi mara iyaka mai ba wa mai kirkira damar saka hoto, bidiyo, rubutu, ko mahaɗa a cikin shafin.',
    folderPath: 'PAGE_ELEMENTS',
    image: 'image.jpg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  {
    englishWord: 'PAGE LAYOUT',
    hausaWord: 'TSARIN SHAFIN AIKI KO ALƘUƘI',
    description: 'Wannan shi ne yadda jerin mazaɓin ayyuka, rula, girman shafi ko sararin aiki suke a cikin shafin alƙuƙin manhaja.',
    folderPath: 'PAGE_LAYOUT',
    image: 'image.jpg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  {
    englishWord: 'PAGE NUMBER',
    hausaWord: 'LAMBAR SHAFI',
    description: "Wannan shi ne tsarin sa wa kowane shafin aiki lamba daga na farko har zuwa na ƙarshe.",
    folderPath: 'PAGE_NUMBER',
    image: 'image.jpg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  {
    englishWord: 'PAGE SETUP',
    hausaWord: 'TSARIN SHAFI',
    description: 'Wannan shi ne allon da ke bada umarni a kan yadda tsarin shafin da za a buga zai kasance.',
    folderPath: 'PAGE_SETUP',
    image: 'image.jpg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  {
    englishWord: 'PAGINATE',
    hausaWord: 'SHAFINTA',
    description: 'Wannan umarni ne da ya ke sa kwamfyuta ta yi wa aiki ko shaffufukan bayani lamba ma kowane daga cikinsu.',
    folderPath: 'PAGINATE',
    image: 'image.jpg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  {
    englishWord: 'PAINT',
    hausaWord: "SHAFA FENTI",
    description: "A harkan yin amfani da kwamfyuta, wannan wani asalin gurbi ne da ke ba da damar gani, ko yin mu’amula da wani ɓangare daban a cikin ainihin manhajan da ake amfani da shi. ",
    folderPath: 'PAINT',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  {
    englishWord: 'PANE',
    hausaWord: "ƊAN GURBIN MU'AMALA A ALƘUƘI",
    description: "A harkan yin amfani da kwamfyuta, wannan wani asalin gurbi ne da ke ba da damar gani, ko yin mu’amula da wani ɓangare daban a cikin ainihin manhajan da ake amfani da shi. ",
    folderPath: 'PANE',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  {
    englishWord: 'PARAGRAPH',
    hausaWord: "SAKIN LAYI",
    description: "Wannan wata ƙa'idar rubutu ce wadda ta ke nuna cewa an rarrabe bayanai. Wato da ita ake fara wata sabuwar layin rubutu idan ana tsara bayani a cikin shafi.",
    folderPath: 'PARAGRAPH',
    image: 'image.jpg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  {
    englishWord: 'Parts of a URL (Uniform Resource Locators)',
    hausaWord: "ƁANGARORIN URL",
    description: "URL na wani bayani yana iya kasancewa a wannan yanayin - http://www.koyakaiya.com/index.hoto3 Za a iya warware wannan misali na URL zuwa ɓangare uku kamar haka: 1. (http), Dokokin yaɗa bayanai  2. (hostname) Sunan Masaukin muhalli a yanar gizo 3. (index.hoto3). Ainihin sunan da aka ba wa wani bayani da ke cikin wani shafi a yanar gizo.  ",
    folderPath: 'PARTS_OF_A_URL',
    image: 'image.png',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  {
    englishWord: 'PASSWORD',
    hausaWord: "MABUƊIYAR SIRRI",
    description: "Wannan wata kalma ce ko jerin kalmomi wanda mai kwamfyuta ko asusu ne kawai ya san ta, kuma sai lallai an shigar da kalmar nan kafin a iya amfani da kwamfyuta bayan an kunna ta, ko samun shiga cikin asusun, ko kuma buɗe wata bayani da aka ɓoye.",
    folderPath: 'PASSWORD',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  {
    englishWord: 'PASTE',
    hausaWord: 'MANNA',
    description: 'Wannan shi ne aiwatar da saka wani bayani da aka kwafo a madadin wani, kuma a iya saka bayanin a wurare daban-daban gwargwadon buƙata.',
    folderPath: 'PASTE',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  {
    englishWord: 'PDF (Portable Document Format)',
    hausaWord: 'PDF',
    description: 'Wato (Portable Document Format). Wannan rubutu ne ko hoto da aka adana shi a wannan yanayin, domin ana iya buɗe shi a cikin kowane irin na’uran sadarwa ba tare da samun canjin yanayin yadda aka tsara shi ba.',
    folderPath: 'PDF',
    image: 'image.png',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  {
    englishWord: 'PHONE JACK',
    hausaWord: 'KAFAR TARHO',
    description: 'Wanan wata kofa ce a jikin kwamfyuta ta inda ake haɗa tarho a jikin ta.',
    folderPath: 'PHONE_JACK',
    image: 'image.jpg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  {
    englishWord: 'PIN (Personal Identification Number)',
    hausaWord: 'LAMBAN SHAIDA NA SIRRI',
    description: 'Wannan jerin lambobi ne na sirri da ke tabbatar da asalin mutum domin ba da damar gudanar da wasu ayyuka ko a banki ko kuma a wani yanayi mai tsaro na daban.',
    folderPath: 'PIN',
    image: 'image.jpg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  {
    englishWord: 'PIXEL',
    hausaWord: 'PIXEL',
    description: 'Wannan shi ne ainihin ɗigon kala mafi ƙanƙanta da ke cikin hoto. Kowane hoto yana ƙunshe ne da miliyoyin ɗigogin nan da suke ba shi kala ko launi.',
    folderPath: 'PIXEL',
    image: 'image.jpg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  {
    englishWord: 'PIXELATE',
    hausaWord: 'RAGE INGANCIN LAUNUKA A HOTO',
    description: 'Wannan shi ne sa hoto ya dushe ko ya rage inganci ta wurin ja ko faɗaɗa hoton fiye da yadda ya kamata.',
    folderPath: 'PIXELATE',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  {
    englishWord: 'PLATFORM',
    hausaWord: 'DANDAMALIN AIKI',
    description: 'A harkan yin amfani da kwamfyuta, wannan wani asalin gurbi ne da ke ba da damar gani, ko yin mu’amula da wani ɓangare daban a cikin ainihin manhajan da ake amfani da shi.',
    folderPath: 'PLATFORM',
    image: '',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  {
    englishWord: 'PNG (Portable Network Graphics)',
    hausaWord: 'PNG (Portable Network Graphics)',
    description: 'Wannan shi ne dasashen na’ura ko masarrafi da ke bada damar gudanar da wani aiki ko ayyuka a cikin kwamfyuta ko a yanar gizo.',
    folderPath: 'PNG',
    image: 'image.jpg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  {
    englishWord: 'PODCAST',
    hausaWord: 'FODKAS',
    description: "Wannan wata ƙaramar tasha ce da mutum ɗaya kacal ko fiye da zai iya gabatar da wani shiri na musamman domin yaɗawa ta yana yanar gizo ga waɗaanda suka yi rajista da wanan tashar. Misalan ire-iren waɗannnan shirye-shiryen zasu iya zama Intabiyu, zance, tattaunawa, koyarwa, karanta labarai da tatsuniya, bada shawara da gargaɗi, da sauransu. A san da cewa, shirye-shiryen nan da ake yaɗawa, zasu iya zama na kai tsaye ne ko an riga an yi rikodin ɗin su sa'annan a yaɗa.",
    folderPath: 'PODCAST',
    image: 'image.jpg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  {
    englishWord: 'PORTAL',
    hausaWord: 'MASHIGI',
    description: 'Wannan wani shafi ne ko masauki a yanar gizo da ke ba da damar shiga wasu ɗakuna da ke cikin farfajiyar yanar gizo.',
    folderPath: 'PORTAL',
    image: 'image.jpg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  {
    englishWord: 'POST',
    hausaWord: 'YAƊA SAƘO',
    description: 'Wannan shi ne saƙon, ko aiwatar da aika saƙo irin su rubutu, ko hotuna wanda mai amfani da yanar gizo ya wallafa. Ana danganta wannan ne da abinda ya shafi isar da saƙo, yin sanarwa, yin hasashe, ko sada zumunta.',
    folderPath: 'POST',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  {
    englishWord: 'POSTER',
    hausaWord: 'FOSTA',
    description: "Wannan ita ce bugaggiyar shafi da ke baiyana, sanar, ko tallata wani abu ko haja. Fosta na da girma kuma ana liƙa su ne a wuraren da jama'a ke yawan taruwa. A san da cewa, a yayinda ake amfani da manhajojin tsara zane na biya-ka-more, ana iya zaɓan ƙirƙirarren siffofi da ke ba da damar zana fosta.",
    folderPath: 'POSTER',
    image: 'image.png',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  {
    englishWord: 'PRESET',
    hausaWord: "SAITIN NA'URA NA ASALI",
    description: 'Not Available',
    folderPath: 'PRESET',
    image: 'image.png',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  {
    englishWord: 'PRESS',
    hausaWord: 'A MATSA/A DANNA',
    description: 'Wannan shi ne a danna ko a matsa wani madanni a jikin farantin harrufa ko kibodi na kwamfyuta.',
    folderPath: 'PRESS',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  {
    englishWord: 'PRINT',
    hausaWord: 'BUGA/DAƁI',
    description: 'Wannan shi ne aiwatar da buga aikin da aka yi a mabugiya ko firinta domin ta fito a kan takarda ko wani irin shafi kamar zani ko riga.',
    folderPath: 'PRINT',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  {
    englishWord: 'PRINT PREVIEW',
    hausaWord: 'DUBA KASANCEWAR BUGU/DAƁI',
    description: 'Wannan shi ne allon da ke bada umarnin nuna yadda bugun ko daɓin aiki zai kasance idan an fitar da shi daga mabugiya ko Firinta.',
    folderPath: 'PRINT_PREVIEW',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  {
    englishWord: 'PRINTER',
    hausaWord: 'MABUGIYA/FIRINTA',
    description: 'Wannan wata na’ura ce da ake haɗa ta da kwamfyuta domin fitar da duk wani rubutu ko hoto a jikin takarda ko kan fuskar wata allo. Akwai ire-iren firintoci daban-daban amma an kasa su zuwa rukuni biyu, wato masu bugu cikin kala, da kuma baƙi da fari.',
    folderPath: 'PRINTER',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  {
    englishWord: 'PROFILE PICTURE',
    hausaWord: 'HOTON MAI ASUSU',
    description: 'Wannan shi ne hoton da ake sakawa a bayanan mai asusu bayan an yi rajista da ya ke tabbatar da mai mallakan wannan asusun.',
    folderPath: 'PROFILE_PICTURE',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  {
    englishWord: 'PROGRAM',
    hausaWord: 'TSARI/SHIRI',
    description: 'Wannan shi ne tsari ko shiri wanda aka ƙirƙira wa kwamfyuta da ke ba ta damar gudanar da aikin ta.',
    folderPath: 'PROGRAM',
    image: '',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  {
    englishWord: 'PROGRAMMING LANGUAGE',
    hausaWord: 'HANYOYIN TSARA RUHIN KWAMFYUTA',
    description: 'Waɗannan su ne ire-iren hanyoyin da ake amfani da su wurin tsara ruhin kwamfyuta. Misalansu su ne: Java Script, Python, JAVA, SQL. C++ da sauran su. ',
    folderPath: 'PROGRAMMING_LANGUAGE',
    image: 'image.jpg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  {
    englishWord: 'PROGRAMMING/CODING',
    hausaWord: 'TSARA RUHIN KWAMFYUTA',
    description: 'Wannan shi ne tsara ko ƙirƙiran wasu ruƙunin umarni wanda idan aka dasa a cikin na’ura mai kwakwalwa, zai ba shi ikon aiwatar da wasu ayyuka na musamman. Masu aikin tsara ruhin kwamfyuta kuwa tabbas ne sai da suka koya, su ka kuma ƙware a wannan fannin.',
    folderPath: 'PROGRAMMING_OR_CODING',
    image: 'image.png',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  {
    englishWord: 'PROJECTOR',
    hausaWord: 'FUROJEKTA/DODON BANGO',
    description: 'Wannan wani na’ura ne da ke haska hoto ko bidiyo daga cikin kwamfyuta ko wani na’ura zuwa kan wani babban allo, bango, ko wasu shimfiɗaɗun wurare.',
    folderPath: 'PROJECTOR',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  {
    englishWord: 'PROPERTIES',
    hausaWord: 'YANAYI NA HALAYE',
    description: 'Waɗannan su ne wasu ‘yan bayanai game da wani fayil ko gurbin ajiya a cikin kwamfyuta kamar nauyi, yawa, ainihin inda ya ke a dashe, ranar ƙirƙira, da alamar da ke wakiltar sa da sauran su. Bugu da ƙari, a cikin yin amfani da manhajar tsara zane, Properties su ne bayanai game da yanayin halayen zanen da ake aiki a kai kamar: ƙaurin launin hoton, ƙaurin layin zanen, faɗin hoton ko zanen, da sauran su.',
    folderPath: 'PROPERTIES',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  {
    englishWord: 'PROTOCOL',
    hausaWord: "ƘA 'IDOJIN HANYAR SADARWA",
    description: "Waɗanan wasu tsarin dokoki ne da ke bada damar yaɗa bayanai tsakanin na'urori daban-daban da ke cikin farfajiyar sadarwa ɗaya.",
    folderPath: 'PROTOCOL',
    image: '',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  {
    englishWord: 'PROTOTYPE',
    hausaWord: 'SAMFUR NA DALLA-DALLA',
    description: 'Wani daftari ne da ke nuna yanayin yadda tsarin manhaja, masarrafi, da ma kowane abin da ake so a ƙirƙira zai kasance dalla-dalla. Haka kuma Prototype zai iya zama samfur na wani na’ura da aka ƙirƙira na farko da ke aiki daidai kamar yadda wad’anda za a yi su dayawa domin sa su a kasuwa zasu yi.',
    folderPath: 'PROTOTYPE',
    image: '',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  }
]

export default function P({ navigation }): JSX.Element {


  const [isLoading, setIsLoading] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState('');
  const [modalVisible, setModalVisible] = React.useState(false); // State variable for the modal visibility
  // Define the handleAccountPress function

  return (
    <>
      <ImageBackground source={bgimg} resizeMode="stretch" style={styles.img}>
        <View style={{ height: '93%', width: '100%', alignItems: 'center' }}>
          <Text style={styles.HeaderText}>Matsa rubutu don samun bincike</Text>

          <View style={styles.SearchResult}>
            <ScrollView>
              <View style={styles.SearchLetterResult}>
                <ImageBackground source={letbgimg} style={styles.letimg}>
                  <Text style={styles.letter}>P</Text>
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














































































