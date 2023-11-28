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
    englishWord: 'DASHBOARD',
    hausaWord: 'MANUNIN JERIN BAYANAI',
    description: "Wannan wani gurbi ne a cikin manhajoji da ke nuna jerin bayanai ko kayan aiki ta siffan alamomi. Wannan manunin jerin bayannan zai iya kasancewa ga mai amfani da ya yi rajista ne, ko kuma ga kowa da ke da niyyar amfani da shi.",
    folderPath: 'DASHBOARD',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    
    {
    englishWord: 'DATA',
    hausaWord: 'BAYANI',
    description: 'Wannan shi ne bayanai, tsare-tsare, ko umarnai, wanda ake sadarwa da su',
    folderPath: 'DATA',
    image: 'image.jpg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    {
    englishWord: 'DATA BASE',
    hausaWord: 'TARARRUN BAYANAI',
    description: 'Wannan shi ne bayanai da aka tattara domin sauƙin samu a cikin kwamfyuta. A san da cewa, bayanan nan zasu iya zama tatattu ko kuma ɗanye.',
    folderPath: 'DATA_BASE',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    
    
    
    
    {
    englishWord: 'DATA SURVEY',
    hausaWord: 'BITAR BAYANAI',
    description: 'Wannan shi ne tattaro da samo bayanai, daga wasu kayaddadun rukunin mutane game da ra’ayoyin su, halayen su, ko fahimtar su. Ire-iren hanyar tattaro bayanai da aka fi amfani dasu su ne rubutaccen tambayoyi, fuska-da-fuska, ko intabiyu ta kafar tarho, kungiyoyi na musamman, da tattaro bayanai ta kafofin sadarwa irin su (saƙon imeli ko kan-ta-kifta ko shafin yanar gizo). ',
    folderPath: 'DATA_SURVEY',
    image: 'image.jpg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    {
    englishWord: 'DATE AND TIME',
    hausaWord: 'KWANAN WATA DA LOKACI',
    description: 'Wannan shi ne kwanan wata da lokaci.',
    folderPath: 'DATE_AND_TIME',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    {
    englishWord: 'DEBUGGING',
    hausaWord: 'WARAKA',
    description: 'Wannan wani yanayi ne da ke nuna waraka daga duk wani abu da ya sa kwamfyuta ta daina yin aikin ta daidai.',
    folderPath: 'DEBUGGING',
    image: 'image.jpg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    
    
    
    
    
    
    
    
    {
    englishWord: 'DEFAULT SETTINGS',
    hausaWord: 'SAITUNA NA ASALI',
    description: 'Wannan shi ne asalin saitin gudanar da aiki da na’urori ke zuwa da su daga kamfanonin da aka ƙera su. Ana iya barin su a haka ko kuma a canza su kafin a fara amfani da na’urar.',
    folderPath: 'DEFAULT_SETTINGS',
    image: '',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    {
    englishWord: 'DESKTOP',
    hausaWord: 'BANGON FUSKAR ALLON KWAMFYUTA',
    description: 'Wannan shi ne shafin farko da za’a gani idan an samu nasara wajen kunna kwamfyuta. Shafin nan na nuna wasu alamomi na manhajoji da wasu bayanai da ke ƙunshe cikin kwamfyuta.',
    folderPath: 'DESKTOP',
    image: 'image.png',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    {
    englishWord: 'DESKTOP COMPUTER',
    hausaWord: 'KWAMFYUTAR KAN TEBUR',
    description: "Wannan ita ce nau'in kwamfyutar da ake ajiye ta a kan tebur.",
    folderPath: 'DESKTOP_COMPUTER',
    image: 'image.jpeg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    {
    englishWord: 'DIALOG BOX',
    hausaWord: 'AKWATIN BA DA UMARNI',
    description: 'Wannan wani ɗan shafi ne na wucin gadi da a ke fitowa da shi idan ana aiki da kwamfyuta domin ba da umarni game da aikin da ake yi a lokacin.',
    folderPath: 'DIALOG_BOX',
    image: 'image.png',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    {
    englishWord: 'DICTIONARY',
    hausaWord: 'KAMUS',
    description: 'Wannan wani sashi ne a kwamfyuta mai bayar da ma’anar kalmomi gwargwadon buƙata',
    folderPath: 'DICTIONARY',
    image: 'image.jpg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    {
    englishWord: 'DIGITAL',
    hausaWord: 'YANAYIN TSARIN SADARWA NA ZAMANI',
    description: 'Wannan shi ne ainihin yanayin tsari ko shiri da aka ƙirƙiro musamman domin a iya kai ga samuwa, gani, sarrafa, da adanawa a cikin na’urorin fasahar sadarwa na zamani. A yau, kusan kowane fannin aiki na rayuwa ya dangana ne ga amfani da wannan tsarin.',
    folderPath: 'DIGITAL',
    image: '',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    {
    englishWord: 'DIGITAL CAMERA',
    hausaWord: 'KYAMARA',
    description: 'Wannan ita ce kyamara na ɗaukar hoton da za’a iya sarrafawa da kuma adanawa a cikin kwamfyuta',
    folderPath: 'DIGITAL_CAMERA',
    image: 'image.png',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    
    
    
    
    
    
    
    
    
    
    {
    englishWord: 'DIGITAL DESIGN',
    hausaWord: 'TSARA KO ƘIRƘIRA A KWAMFYUTA',
    description: 'Wannan wani fasaha ne da ake aiwatarwa ta hanyar amfani da wasu ainihin manhajojin ƙirƙiran kayan masilimanta kamar su zane, hoto, bidiyo, hoto mai motsi, sauti ko waƙa, ƙawata rubutu, shafin yanar gizo, da manhajoji, domin wallafawa, yaɗawa, ko sadarwa. Misalan ire-iren manhajojin ƙirƙiran nan su ne: Adobe Photoshop, Corel Draw, Filmora, Adobe Premier, Wordpress, SquareSpace, Bubble io, Figma, da sauran su.',
    folderPath: 'DIGITAL_DESIGN',
    image: 'image.jpg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    {
    englishWord: 'DIGITAL FILE',
    hausaWord: 'FAYIL ƊIN CIKIN KWAMFYUTA',
    description: 'Wannan, tsararren bayani ko rukunin bayanai da aka ƙirƙira ne da wani masarrafin kwamfyuta kuma aka adana shi da wani suna na musamman.',
    folderPath: 'DIGITAL_FILE',
    image: 'image.png',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    {
    englishWord: 'DIMENSION',
    hausaWord: 'AUNI',
    description: 'Wannan shi ne aunin tsawo da faɗin shafi, hoto, ko zane. A san da cewa, kowane daga cikin abubuwan nan da aka lissafa na da nasu ainihin irin aunin su.',
    folderPath: 'DIMENSION',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    
    
    
    
    
    
    {
    englishWord: 'DIRECTORY',
    hausaWord: 'GAFAKAN FALDODIN KWAMFYUTA',
    description: 'Wannan shi ne rumbun da ke riƙe da jerin faldodi ko jerin bayanai da aka adana a cikin kwamfyuta ko rumbun ajiya.',
    folderPath: 'DIRECTORY',
    image: 'image.jpg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    {
    englishWord: 'DM (Direct Message)/PM (Private Message)',
    hausaWord: 'SAƘON KAI TSAYE/SAƘON SIRRI',
    description: 'A yayinda ake yin mu’amula a ɗakin hira a yanar gizo, ana iya aika kaɗaittacen saƙo ga mutum ɗaya kawai a cikin ɗakin hiran. Wannan shi ake kira DM ko PM wato Saƙon Kai Tsaye ko Saƙon Sirri',
    folderPath: 'DM-PM',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    {
    englishWord: 'DOCUMENT',
    hausaWord: 'AIKI',
    description: 'Wannan shi ne aikin da aka riga aka tsara shi kuma za a iya ma fito da shi daga cikin kwamfyuta',
    folderPath: 'DOCUMENT',
    image: 'image.jpeg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    {
    englishWord: 'DOCUMENT NAME',
    hausaWord: 'SUNAN AIKI',
    description: 'Wanna shi ne sunan da ake bawa duk wani bayani ko aikin da aka adana a cikin kwamfyuta domin ganewa cikin sauri',
    folderPath: 'DOCUMENT_NAME',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    {
    englishWord: 'DOMAIN NAME',
    hausaWord: 'SUNAN MUHALLI A YANAR GIZO',
    description: 'Wannan shi ne musamman sunan da ake ba wa muhalli ko ɗaki a yanar gizo na duniya',
    folderPath: 'DOMAIN_NAME',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    {
    englishWord: 'DOMAIN PREFIXES',
    hausaWord: 'HARRUFA NA FARKO A SUNAN GIDA A YANAR GIZO',
    description: 'Waɗannan su ne karɓaɓun jerin harrufa guda uku da ke ƙarasawa da ɗigo, da ake sakawa wa a gaban dukan sunan da aka ba wa ɗaki a yanar gizo, wato www dot.',
    folderPath: 'DOMAIN_PREFIXES',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    {
    englishWord: 'DOMAIN SUFFIXES',
    hausaWord: 'HARRUFA NA KARSHE A SUNAN GIDA A YANAR GIZO. KO TLD wato (Top Level Domain)',
    description: "Waɗannan su ne harrufa guda biyu ko uku da ake sa wa a bayan sunan da aka ba wa gida a yanar gizo da ke wakiltar irin harkan da ake yi ko kuma kasar da ita wannan gidan ta ke. Harrufan na farawa da ɗigo, sa'annan harrufa biyu ko uku. Misali: .com na wakiltar harkan kasuwanci, .org harkan taimako da agaji, .edu harkan koyo da koyarwa, .gov harkokin gwamnati, .net harkokin fasahar sadarwa, .ng a kasar Nigeria, .uk a Ingila, .za a Afirka ta kudu, .ae a Haɗaɗiyar Daular Larabawa, .sa a Saudiya, da sauransu.",
    folderPath: 'DOMAIN_SUFFIXES',
    image: 'image.png',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    {
    englishWord: 'DOMICILE',
    hausaWord: 'AINIHIN INDA AKE AJIYA',
    description: 'Wannan ita ce kalmar da ke wakiltar mazaunin bayanin fayil ko fayiloli. Zai iya zama a cikin kwamfyuta ko a matsakaitan kwamfyutoci da ke a yanar gizo, wato (SERVER)',
    folderPath: 'DOMICILE',
    image: '',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    {
    englishWord: 'DOWNLOAD',
    hausaWord: 'SAUKE BAYANI',
    description: 'Wannan shi ne yanayin sauke wani bayani ko ɓangare na bayanai kamar rubutu, bidiyo, hoto, sauti, madashin manhaja, daga yanar gizo ko wani na’urar sadarwa zuwa cikin kwamfyuta ko waya.',
    folderPath: 'DOWNLOAD',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    {
    englishWord: 'DRAFT',
    hausaWord: 'AKWATIN SAƘONNIN DA BA A GAMA RUBUTAWA BA',
    description: 'A harkan aikawa da imeli, wannan shi ne wani gurbi na wucin-gadi da ake ajiye saƙonnin da ba a gama rubutawa ba. A wani lokaci a gaba, za a iya buɗe su a ƙarasar da rubutawa a kuma aika su.',
    folderPath: 'DRAFT',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    {
    englishWord: 'DRAG-AND-DROP',
    hausaWord: 'ƊAUKA-KA-AJIYE',
    description: "A harkan amfani da kwamfyuta, wannan shi ne aiwatar da ɗago alamar fayil, ko zane, ko hoto ko bayanan da aka haskaka dake cikin shafin alƙuƙi daga wani wuri zuwa wani wuri daban, ta hanyar amfani da linzamin kwamfyuta. Aiwatar da wannan aikin na bukatar mai amfani da kwamfyuta ya zaɓi abinda ya ke so ya motsa ba tare da sake madannin linzamin ba, sai ya kai manunin linzamin zuwa sabon wurin da ya ke so ya ajiye, sa'annan ya sake madannin",
    folderPath: 'DRAG_AND_DROP',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    {
    englishWord: 'DRAW',
    hausaWord: 'ZANA',
    description: 'Wannan shi ne aiwatar da zane',
    folderPath: 'DRAW',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    {
    englishWord: 'DVD',
    hausaWord: 'DVD',
    description: 'Wannan, wani faifai ne mai zagaye wanda ake adana sauti, waƙoƙi, da hoton bidiyo domin kallo ko adana bayanai. A san da cewa iyakar ƙarfin rike bayanai na faifan DVD shi ne 4.5GB (wato gigabayit huɗu da rabi)',
    folderPath: 'DVD',
    image: 'image.jpg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
]

export default function D({ navigation }): JSX.Element {
  
 
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
              <Text style={styles.letter}>D</Text>
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