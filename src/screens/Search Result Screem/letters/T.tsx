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
    englishWord: "TAB KEY",
    hausaWord: "MASAWA ALAWUS",
    description: "Ita ce wata gurbi da ke kwance a kasar fuskar allon kwamfyuta. Ta na sanar da mai amfani da kwamfyuta abin da ke faruwa game da manhajojin da ake aiki da su a lokacin, da kuma kwanan wata, ƙarfin batir, yanayin kasancewa a yanar gizo, da sauransu.",
    folderPath: "TAB_KEY",
    image:"image.jpg",
audio1:"audio1",
    audio2: "audio2",
    audio3: "audio3"
  },
  {
    englishWord: "TABLE",
    hausaWord: "JADAWALI",
    description: "Wannan shi ne wani shiryayyen bayanai bisa tsari. Tsarin bayanan zai iya kasancewa an yi su ne da layuka masu iyakoki da suka samar da guraben saka bayanai da ke ba da sauƙin karatu da fahimta.",
    folderPath: "TABLE",
    image:"image.jpg",
audio1:"audio1",
    audio2: "audio2",
    audio3: "audio3"
  },
  {
    englishWord: "TABS",
    hausaWord: "DAN GURBI MAI WAKILTA",
    description: "Wannan wani ɗan gurbi ne da ke bayyana a sama ko kasan fuskar allon kwamfyuta wanda ya ke wakiltar wani manhaja da ake amfani da shi. Idan an danna shi, zai buɗo shafin alƙuƙin da ya ke wakilta.",
    folderPath: "TABS",
    image:"image.jpg",
audio1:"audio1",
    audio2: "audio2",
    audio3: "audio3"
  },
  {
    englishWord: "TAG (S0CIAL MEDIA)",
    hausaWord: "TAG (A KAOFIN SADA ZUMUNTA)",
    description: "Wannan shi ne aiwatar da jawo hankalin wani, ko wasu ga saƙon da aka aika a kafofin sa da zumunta.",
    folderPath: "TAG_ON_SOCIAL_MEDIA",
    image:"image.gif",
audio1:"audio1",
    audio2: "audio2",
    audio3: "audio3"
  },
  {
    englishWord: "TASK BAR",
    hausaWord: "MANUNIN AYYUKA",
    description: "Ita ce wata gurbi da ke kwance a kasar fuskar allon kwamfyuta. Ta na sanar da mai amfani da kwamfyuta abin da ke faruwa game da manhajojin da ake aiki da su a lokacin, da kuma kwanan wata, ƙarfin batir, yanayin kasancewa a yanar gizo, da sauransu.",
    folderPath: "TASK_BAR",
    image:"image.jpg",
audio1:"audio1",
    audio2: "audio2",
    audio3: "audio3"
  },
  {
    englishWord: "TECH SUPPORT",
    hausaWord: "MASU BADA TAIMAKO",
    description: "Wannan wani sashe ne a kamfani da ainihin aikin ma’aikatan ciki shi ne bada taimako ga kostomomin da suka yi rajista, kuma suke da matsala ko tambaya game da abubuwan da suke sayarwa ko hidimar su. Ba da taimakon nan zai iya zama ta yin amfani da waya ko ta wani hanya a yanar gizo.",
    image:"image.jpg",
audio1:"audio1",
    audio2: "audio2",
    audio3: "audio3"
  },
  {
    englishWord: "TEMPLATE",
    hausaWord: "ƘIRƘIRARREN SIFFA",
    description: "Wannan siffan aiki ne da aka riga aka ƙirƙira kuma a ajiye, domin sauwaka ma mai niyyar amfani da shi, wajen rage ma shi aikin da zai ɗauke shi yi idan ya fara tun daga farko.",
    folderPath: "TEMPLATE",
    image:"image.gif",
audio1:"audio1",
    audio2: "audio2",
    audio3: "audio3"
  },
  {
    englishWord: "TERBAYTE",
    hausaWord: "TERABAYIT",
    description: "Wannan shi ne nauyin bayani mai adadin triliyan ɗaya (1,000,000,000,000 bytes)",
    folderPath: "TERABYTE",
    image:"image.jpg",
audio1:"audio1",
    audio2: "audio2",
    audio3: "audio3"
  },
  {
    englishWord: "TERMS AND CONDITIONS",
    hausaWord: "SHARUƊA DA ƘA'IDOJI:",
    description: "Su ne dokoki, tsare-tsare, da sharuɗa na yin amfani da wani manhaja ko masarrafi da aka dasa a cikin kwamfyuta.",
    folderPath: "TERMS_AND_CONDITIONS",
    image:"image.png",
audio1:"audio1",
    audio2: "audio2",
    audio3: "audio3"
  },
  {
    englishWord: "TEXTURE",
    hausaWord: "YANAYIN FUSKAR FATA",
    description: "Wannan shi ne yanayin da fuskar fatan zane yake kasancewa. Fuskar fatan zane yana iya kasancewa sumul, ko da gargada kamar yadda ya ke idan an taɓa da hannu a zahiri.",
    folderPath: "TEXTURE",
    image:"",
audio1:"audio1",
    audio2: "audio2",
    audio3: "audio3"
  },
  {
    englishWord: "THEME",
    hausaWord: "YANAYIN ƘIRƘIRARREN AIKI",
    description: "A harkan ƙirƙiran manhaja ko ɗaki a yanar gizo, wannan shi ne yanayin siffan da mai ƙirƙira ke zaɓa da aka riga aka ƙirƙira kuma aka ajiye domin ba wa aiki kamantaccen siffa daga farko zuwa karshe. A cikin yanayin siffan da aka zaɓa, mai aiki zai tarar da launuka, siffofi, salon rubutu, da sauran abubuwan da zasu ƙawata aiki.",
    folderPath: "THEME",
    image:"image.jpg",
audio1:"audio1",
    audio2: "audio2",
    audio3: "audio3"
  },
  {
    englishWord: "THESARUS",
    hausaWord: "SISARO",
    description: "Wannan shi ne ƙamus mai kawo kalmomi masu ma’ana iri ɗaya da kuma kishiyar ta a ma’ana.",
    folderPath: "THESARUS",
    image:"image.jpg",
audio1:"audio1",
    audio2: "audio2",
    audio3: "audio3"
  },
  {
    englishWord: "THUMBNAIL",
    hausaWord: "TAMBARIN HOTO",
    description: "Wannan wani tambari ne na hoto mai nuna yanayin abinda ke ɗauke a cikin fayil a kwamfyuta ko yanar gizo, irin su bidiyo, hoto, sauti, ko rubutu. A wasu lokuta kuma, tambarin hoto ya kan zo ne a matsayin bayani mai haɗi a yanar gizo wato hyperlink.",
    folderPath: "THUMBNAIL",
    image:"image.jpg",
audio1:"audio1",
    audio2: "audio2",
    audio3: "audio3"
  },
  {
    englishWord: "TIMELINE",
    hausaWord: "TSARIN LOKACI NA BIDIYO",
    description: "Wannan shi ne tsawon jeri bisa tsari na abubuwan da ke ƙunshe a cikin bidiyo ko zane mai motsi a yayinda ake sarrafawa ko ƙiƙirar ta.",
    folderPath: "TIMELINE",
    image:"image.jpg",
audio1:"audio1",
    audio2: "audio2",
    audio3: "audio3"
  },
  {
    englishWord: "TIPS",
    hausaWord: "INGANTACCEN DABARA",
    description: "Waɗannan su ne dabarun da ƙwararru ko masu koyarwa ke ba wa mai amfani da manhaja ko kwamfyuta domin sauwaƙar masu da koyo da ƙarin ilimi.",
    folderPath: "TIPS",
    image:"",
audio1:"audio1",
    audio2: "audio2",
    audio3: "audio3"
  },
  {
    englishWord: "TOOL BAR",
    hausaWord: "JERIN KAYAN AIKI",
    description: "Wannan wani gurbi ne da ke saman shafi da ke ɗauke da jerin kayan aiki a cikin manhajan da ake aiki da shi.",
    folderPath: "TOOL_BAR",
    image:"image.jpg",
audio1:"audio1",
    audio2: "audio2",
    audio3: "audio3"
  },
  {
    englishWord: "TOOLS",
    hausaWord: "KAYAN AIKI",
    description: "Waɗannan kayan aiki ne da manhajoji ke ɗauke da su na musamman domin samun daman aiwatar da wani aiki da aka tsara manhajan ya gudanar.",
    folderPath: "TOOLS",
    image:"image.png",
audio1:"audio1",
    audio2: "audio2",
    audio3: "audio3"
  },
  {
    englishWord: "TRANSITION",
    hausaWord: "YANAYIN CANJIN TSAKANIN SHAFUKA/KAI GA WANI SHAFI",
    description: "Wannan shi ne tafiyan canzuwar yanayin wani fitowa a bidiyo, hoto mai motsi, ko sauti daga wani zuwa wani. Wannan na aukuwa ne a yayinda ake sarrafa bidiyo, ko hoto mai motsi.",
    folderPath: "TRANSITION",
    image:"image.gif",
audio1:"audio1",
    audio2: "audio2",
    audio3: "audio3"
  },
  {
    englishWord: "TRIM",
    hausaWord: "RAGE TSAWO",
    description: "Wannan shi ne aiwatar da yanke wani ɓangare na bidiyo, hoto mai motsi, ko sauti domin rage tsawon shi.",
    folderPath: "TRIM",
    image:"image.gif",
audio1:"audio1",
    audio2: "audio2",
    audio3: "audio3"
  },
  {
    englishWord: "TROUBLESHOOT",
    hausaWord: "BINCIKO MATSALA DOMIN MAGANCEWA",
    description: "Wannan shi ne aiwatar da binciko matsalar da ke damun kwamfyuta a wajen kunna ta, ko gudanar da wani aiki, domin magance ta. Misali, idan ana samun cikas wajen haɗa kwamfyuta ga yanar gizo duk da cewa komai yana aukuwa kamar babu matsala, za a iya aiwatar da binciko matsala domin magancewa, saboda cimma nasara ga wannan haɗin. Kwamfyuta za ta iya magance wannan matsalar da kan ta, ko kuma ta nuna wa mai amfani da ita abin da ya kamata ya yi domin samun sauki.",
    image:"image.gif",
audio1:"audio1",
    audio2: "audio2",
    audio3: "audio3"
  },
  {
    englishWord: "TUTORIAL",
    hausaWord: "DARASIN KOYARWA",
    description: "Wannan shi ne darasin da za a koyar wa mutane ko ɗalibai.",
    folderPath: "TUTORIAL",
    image:"image.jpg",
audio1:"audio1",
    audio2: "audio2",
    audio3: "audio3"
  },
  {
    englishWord: "TYPOGRAPHY",
    hausaWord: "AIKI DA HARRUFA",
    description: "Wannan ita ce fasahar tsara harrufa da ke cikin shafin da ake aiki da su domin haɓaka karantawa ko ƙawata su.",
    folderPath: "TYPOGRAPHY",
    image:"image.jpg",
audio1:"audio1",
    audio2: "audio2",
    audio3: "audio3"
  },
]

export default function T({ navigation }): JSX.Element {
  
 
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
              <Text style={styles.letter}>T</Text>
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
























































































































