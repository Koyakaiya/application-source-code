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
   englishWord: 'BACK UP',
   hausaWord: 'TANADI/GIDA BIYU',
   description: 'Wannan shi ne kasancewa mamba na wani kafar sadarwa, ko keɓaɓɓen muhalli a yanar gizo da ke ba wa wanda ya yi rajista izinin yin harka ko moran abubuwan da ke samuwa a wannan muhallin.',
   folderPath: 'BACKUP',
   image: 'image.gif',
   audio1: 'audio1',
   audio2: 'audio2',
   audio3: 'audio3',
 },
 {
   englishWord: 'BANDWIDTH',
   hausaWord: 'ADADIN ƘARFIN HAƊI',
   description: 'Wannan shi ne ma’aunin ƙarfin haɗin sadarwa da aka haɗa da ke ba wa kwamfyuta ko waya izinin shiga yanar gizo a cikin wani lokaci na musamman. A kan gudanar da aunin ƙarfin gudun haɗi nan ne ta yawan bayit (bytes), kilobayit (KB), megabayit (MB), ko gigabayit (GB) da za a iya aika su, ko sauke su a cikin daƙiƙa ɗaya. Kamfanonin da ke bada izinin shiga yanar gizo ne ke kayyade ƙarfin jonin nan.',
   folderPath: 'BANDWIDTH',
   image: 'image.png',
   audio1: 'audio1',
   audio2: 'audio2',
   audio3: 'audio3',
 },
 {
  englishWord: 'BAR CODE',
  hausaWord: 'BAR CODE',
  description: "Wannan alama ce mai kunshe da bayanai da aka tsara ta da layuka na tsaye masu ƙauri daban-daban da kuma jerin lambobi. Akan yi amfani da su ne a harkokin kasuwanci da masana'antu wajen kulawa da adana kayan da aka samar. A yawancin lokuta, bayanan da ake sa wa a cikin wannan alamar su ne kamar ranar ƙirƙira, sashin ƙirƙira, da kuma farashi.",
  folderPath: 'BAR_CODE',
  image: 'image.png',
  audio1: 'audio1',
  audio2: 'audio2',
  audio3: 'audio3',
},
{
  englishWord: 'BLIND COPY (BCC)',
  hausaWord: 'AIKA WA WASU IMELI A ASIRCE',
  description: 'A harkan aikawa da imeli, shigar da adireshin mutum ko mutane a cikin wannan gurbin umarnin a cikin shafin imeli zai aika ma su saƙon da aka rubuta, amma shi ainihin wanda aka aika wa saƙon ba zai san an yi hakan ba.',
  folderPath: 'BLIND_COPY_(BCC)',
  image: 'image.gif',
  audio1: 'audio1',
  audio2: 'audio2',
  audio3: 'audio3',
},
{
  englishWord: 'BLOCK CHAIN',
  hausaWord: 'BLOCK CHAIN',
  description: "Wannan wata tsararren fasahar lissafi ce da ake amfani da ita wajen tattara, da adana hada-hadan kuɗaɗe a cikin wani jadawalin cinikaiyya mai tsaro da kuma bayana gaskiya wanda ba a iya canza su sam. Jadawalan nan suna ajiye ne a cikin wasu dunƙulallun ma'ajiyoyi na musamman a wani muhalli a yanar gizo da ke harhaɗe da juna.",
  folderPath: 'BLOCK_CHAIN',
  image: 'image.jpg',
  audio1: 'audio1',
  audio2: 'audio2',
  audio3: 'audio3',
},
{
  englishWord: 'BLUEPRINT',
  hausaWord: "ZANEN TSARIN AIKI",
  description: 'Wasu tarin zane-zane ne da ya ƙunshi tsarin aiki, ayukan gudanarwa, kasafi, da wasu harkokin da suka danganci wani shiri. Wannan zanen tsara shafi ya kan ƙunso salontawa, kalar shafi da kuma hotuna da ake niyyar amfani da su a cikin aikin.',
  folderPath: 'BLUEPRINT',
  image: '',
  audio1: 'audio1',
  audio2: 'audio2',
  audio3: 'audio3',
},
{
  englishWord: 'BLUETOOTH',
  hausaWord: "MAHAƊAR BLUETOOTH",
  description: "Wannan wani tsararren shiri ne da ake amfani da shi wajen musanya bayanai ko fayiloli ta iska daga cikin wani na'ura zuwa wani daban. Misali, tura waƙa, hoto, ko bidiyo daga cikin Kwamfyuta zuwa waya. A san da cewa, sai fa duka na'urorin na da wannan tsarin a cikin su kafin su samu damar musanya bayanai. A wani yanayi kuma, ana amfani da wannan tsari wajen buga sauti ta lasfika da ke ɗauke da wannan fasahar.",
  folderPath: 'BLUETOOTH',
  image: 'image.jpg',
  audio1: 'audio1',
  audio2: 'audio2',
  audio3: 'audio3',
},
{
  englishWord: 'BLUR',
  hausaWord: "DUSASA",
  description: 'Wannan shi ne dusasa hoto ko zane domin rage wa shi hoton gaba-ɗaya inganci ko kuma wani ɓangare a cikin hoton.',
  folderPath: 'BLUR',
  image: 'image.gif',
  audio1: 'audio1',
  audio2: 'audio2',
  audio3: 'audio3',
},
{
  englishWord: 'BOLD',
  hausaWord: "ƘAURARA",
  description: 'Aiwatar da ƙarawa wani kalma ko jerin kalmomi duhu domin nuna ƙarfafawa ko muhimmanci.',
  folderPath: 'BOLD',
  image: 'image.gif',
  audio1: 'audio1',
  audio2: 'audio2',
  audio3: 'audio3',
},
{
  englishWord: 'BOOKMARK',
  hausaWord: "ALAMTARWA",
  description: 'Wannan shi ne aiwatar da adana adireshin wani ɗaki a yanar gizo a cikin kwamfyuta.',
  folderPath: 'BOOKMARK',
  image: 'image.gif',
  audio1: 'audio1',
  audio2: 'audio2',
  audio3: 'audio3',
},
{
  englishWord: 'BORDER',
  hausaWord: "IYAKA",
  description: 'Idan ana amfani da masarrafin Malissafin Microsoft, wato MS Excel, ana iya sa wa rubutun da ke a cikin jadawalli layi mai iyaka. Za a iya kewaye rubutun da ke cikin jadawallin da ire-iren layuka daban.',
  folderPath: 'BORDER',
  image: 'image.gif',
  audio1: 'audio1',
  audio2: 'audio2',
  audio3: 'audio3',
},
{
  englishWord: 'BRANDING',
  hausaWord: "ƘIRƘIRAN TSARIN KASANCEWA",
  description: "Wannnan ita ce fasahar tsara abubuwan da wata Kamfani, Hukuma, ko Mutum ke son bayana matsayin su ga al'uma ta wurin tambarin su, kalolin su, tsarin su na talla, taken su, ko tsarin kayan aikin rubutun su, da duk daftarin aiki da ke wakiltar su.",
  folderPath: "BRANDING",
  image: 'image.gif',
  audio1: 'audio1',
  audio2: 'audio2',
  audio3: 'audio3',
},
{
  englishWord: 'BREAK',
  hausaWord: "DAKATAWA",
  description: "Shi ne ɗan dakatawa na wucin-gadi har sai an warkar da wata matsala da ta gamu da kwamfyuta yayin aikin ta.",
  folderPath: 'BREAK',
  image: '',
  audio1: 'audio1',
  audio2: 'audio2',
  audio3: 'audio3',
},
{
  englishWord: 'BROCHURE',
  hausaWord: "RUMBUN ADANA TARIHI",
  description: "Wannan wani ɗan littafi ne da Kamfanoni da Hukukomi su ke bugawa domin tallata hajarsu, ko kuma ba da karin bayani akan tsarin ayyukansu ga al'uma. Kasidun nan zasu iya fitowa sau ɗaya tak, ko kuma mako-mako, ko wata-wata. Bugu da kari, a yanayin sadarwa na zamani, waɗansu Kamfanoni suna tsara kasidunsu ne a ɗanyen yanayi wato (soft copy) a cikin kwamfyuta da suke yaɗawa ta saƙon imeli. Wannan na rage masu kuɗin da ya kamata su kashe wajen bugawa a takarda.",
  folderPath: 'BROCHURE',
  image: 'image.png',
  audio1: 'audio1',
  audio2: 'audio2',
  audio3: 'audio3',
},
{
  englishWord: 'BROWSER WINDOW',
  hausaWord: "ALƘUƘIN SHIGA YANAR GIZO",
  description: "Wannan shi ne alƙuƙin da ake buɗewa idan ana amfani da manhajar shiga yanar gizo",
  folderPath: 'BROWSER_WINDOW',
  image: 'image.png',
  audio1: 'audio1',
  audio2: 'audio2',
  audio3: 'audio3',
},
{
  englishWord: 'BUG',
  hausaWord: "MATSALA NA BA-ZATA",
  description: "Wannan shi ne duk wani tuntuɓe na aikin kwamfyuta da zai sa ta daina aikin ta daidai.",
  folderPath: 'BUG',
  image: 'image.jpg',
  audio1: 'audio1',
  audio2: 'audio2',
  audio3: 'audio3',
},
{
  englishWord: 'BULLETIN BOARD',
  hausaWord: "SHAFIN SANARWA",
  description: "Wannan wani muhalli ne da mutum zai iya yaɗa sanarwai, shawarwari, ko ba da taimako ta wurin saƙon rubutu. Wannan ya banbanta da ɗakin hira domin ba kai tsaye ake gudanar da aika saƙon ba, kuma, kowa da ke harka a cikin wannan muhalli na iya ganin saƙon da aka sanar ko aka yaɗa, a kowane lokaci.",
  folderPath: 'BULLETIN_BOARD',
  image: 'image.jpg',
  audio1: 'audio1',
  audio2: 'audio2',
  audio3: 'audio3',
},
{
  englishWord: 'BURN',
  hausaWord: "KWAFAN BAYANAI ZUWA FAIFAN CD",
  description: "Wannan shi ne aiwatar da kwafan bayanai (waƙa ko bidiyo) daga cikin kwamfyuta zuwa faifan CD ko DVD.",
  folderPath: 'BURN',
  image: 'image.jpg',
  audio1: 'audio1',
  audio2: 'audio2',
  audio3: 'audio3',
},
{
  englishWord: 'BYTE',
  hausaWord: "LITTAFI MAI MURYABYTE/BAYIT",
  description: "Wannan shi ne sahihin ma’aunin nauyin bayani.",
  folderPath: 'BYTE',
  image: 'image.gif',
  audio1: 'audio1',
  audio2: 'audio2',
  audio3: 'audio3',
},
]

export default function B({ navigation }): JSX.Element {
  
 
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
              <Text style={styles.letter}>B</Text>
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