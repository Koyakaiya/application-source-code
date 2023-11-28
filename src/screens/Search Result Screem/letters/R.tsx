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
    englishWord: "RAM",
    hausaWord: "RAM",
    description: "Wato Random Access Memory. Wannan wani ɗan na'ura ne mai taimaka wa Kwamfyuta adana bayanai na wucin-gadi da ke tanada wa kwakwalwar kwamfyuta sarrafa su. Na'urorin RAM na zuwa ne da ƙarfi ko nauyi daban-daban kamar; 4 GB, 8 GB, 16 GB har 32 GB. Yawan karfin RAM ne ke tabbatar da iya gudu ko saurin kwamfyuta.",
    folderPath: "RAM",
    image:"image.gif",
    audio1:"audio1",
    audio2: "audio2",
    audio3: "audio3"
  },
  {
    englishWord: "READ ONLY MEMORY (ROM)",
    hausaWord: "ROM",
    description: "Wato Read Only Memory. Wannan wani sashe ne a cikin kwamfyuta da ke ba da damar ganin bayani na musanman ba tare da ba da damar sarrafa su ba.",
    folderPath: "READ_ONLY_MEMORY_ROM",
    image:"image.png",
    audio1:"audio1",
    audio2: "audio2",
    audio3: "audio3"
  },
  {
    englishWord: "RECOVERY",
    hausaWord: "FARFAƊOWA",
    description: "Wannan shi ne wani gurbi a kwamfyuta da ya ke ajiye duk abin da aka goge ko aka share daga cikin rumbun ajiya har wani tsawon lokaci kafin a fitar da su gaba-ɗaya. Kamar dai kwandon sharan gaske.",
    folderPath: "RECOVERY",
    image:"image.png",
    audio1:"audio1",
    audio2: "audio2",
    audio3: "audio3"
  },
  {
    englishWord: "RECYCLE BIN",
    hausaWord: "KWANDON SHARA",
    description: "Wannan shi ne tabbatar da ingancin aiki ta hanyar ambata bayanin da ya samo wa aikin asali.",
    folderPath: "RECYCLE_BIN",
    image:"image.jpg",
    audio1:"audio1",
    audio2: "audio2",
    audio3: "audio3"
  },
  {
    englishWord: "REFERENCES",
    hausaWord: "AMBATA DOMIN TABBATARWA",
    description: "Wannan shi ne aiwatar da sake sabunta shafin da ake aiki a ciki domin fito da wasu bayanai da kwamfyuta ke jan kafa a kai wajen nuna su.",
    folderPath: "REFERENCES",
    image:"image.png",
    audio1:"audio1",
    audio2: "audio2",
    audio3: "audio3"
  },
  {
    englishWord: "REFRESH",
    hausaWord: "SAKE SABUNTAWA",
    description: "Wannan shi ne aiwatar da musanya wani bayani da wani, wato musanya tsohon bayani da sabon bayani.",
    folderPath: "REFRESH",
    image:"image.gif",
    audio1:"audio1",
    audio2: "audio2",
    audio3: "audio3"
  },
  {
    englishWord: "REPLACE",
    hausaWord: "MUSANYA",
    description: "Wannan shi ne aiwatar da musanya wani bayani da wani, wato musanya tsohon bayani da sabon bayani.",
    folderPath: "REPLACE",
    image:"image.gif",
    audio1:"audio1",
    audio2: "audio2",
    audio3: "audio3"
  },
  {
    englishWord: "REPLY",
    hausaWord: "MAIDA MARTANI",
    description: "A harkan aika sakon kan-ta-kifta ko imeli, wannan shi ne mayar da martani ga wani sak’o ko rahoto da aka aiko ma ka. A shafin alƙuƙin da ake sadarwa a ciki, zaɓan alamar Reply zai buɗo ma ka sabon shafin aika imeli mai ɗauke da adireshin wanda ya aiko maka saƙon da za ka mayar wa martani.",
    folderPath: "REPLY",
    image:"image.gif",
    audio1:"audio1",
    audio2: "audio2",
    audio3: "audio3"
  },
  {
    englishWord: "RESIZE",
    hausaWord: "SARRAFA GIRMA",
    description: "Wannan shi ne aiwatar da faɗaɗa ko tsuke yanayin girman hoto ko zane.",
    folderPath: "RESIZE",
    image:"image.gif",
    audio1:"audio1",
    audio2: "audio2",
    audio3: "audio3"
  },
  {
    englishWord: "RESOLUTION",
    hausaWord: "ƘARFIN INGANCIN HOTO KO BIDIYO",
    description: "Wannan shi ne ainihin ƙarfin ingancin hoto, bidiyo, allon kwamfyuta, waya, ko talbijin, wanda ake ganowa ta mizanta yawan abinda ake kira pixels. ",
    folderPath: "RESOLUTION",
    image:"image.jpg",
    audio1:"audio1",
    audio2: "audio2",
    audio3: "audio3"
  },
  {
    englishWord: "REVIEW",
    hausaWord: "BITAR AIKI",
    description: "Wannan shi ne aiwatar da ƙara duba ingancin aikin da aka gudanar da wani manhaja.",
    folderPath: "REVIEW",
    image:"image.gif",
    audio1:"audio1",
    audio2: "audio2",
    audio3: "audio3"
  },
  {
    englishWord: "RGB",
    hausaWord: "RGB (Red, Green, Blue wato Ja, Kore, Shuɗi)",
    description: "A harkan sarrafa zane ko hoto, wannan shi ne yanayin launukan da aka ƙera zane ko hoto da shi domin a kalle shi, ko a sarrafa shi a cikin allon waya ko kwamfyuta kawai. Haɗa launukan nan guda uku (Ja, Kore da Shuɗi)  a wasu ainihin auni, zai ba da duk launin da ake buƙata ya fito a cikin zane ko hoto.",
    folderPath: "RGB",
    image:"image.png",
    audio1:"audio1",
    audio2: "audio2",
    audio3: "audio3"
  },
  {
    englishWord: "RIBBON",
    hausaWord: "JERIN KAYAN AIKI",
    description: "A harkan amfani da kwamfyuta, Ribbon shi ne jerin kayan aiki da ke game da wannan manhajan da ake amfani da shi. Yawanci a kan same shi ne a saman shafin alƙuƙi.",
    folderPath: "RIBBON",
    image:"image.jpg",
    audio1:"audio1",
    audio2: "audio2",
    audio3: "audio3"
  },
  {
    englishWord: "RIBBON (IN PRINTERS)",
    hausaWord: "ƘYALLEN TAWADA",
    description: "Wannan wani ƙyallen tawada mai zuba wa mabugiya tawada lokacin da ake son fito da rubutu a jikin takarda.",
    folderPath: "RIBBON_IN_PRINTER",
    image:"image.png",
    audio1:"audio1",
    audio2: "audio2",
    audio3: "audio3"
  },
  {
    englishWord: "RIP",
    hausaWord: "KWAFAN BAYANAI DAGA FAIFAN CD",
    description: "Wannan shi ne aiwatar da kwafan bayanai (waƙa ko bidiyo) daga cikin faifan CD ko DVD zuwa cikin kwamfyutarka.",
    folderPath: "RIP",
    image:"image.jpg",
    audio1:"audio1",
    audio2: "audio2",
    audio3: "audio3"
  },
  {
    englishWord: "ROBOT",
    hausaWord: "NA'URAR MUTUM-MUTUMI MAI SARRAFA AIKI",
    description: "Wannan shi ne na'urar mutum-mutumi da aka ƙera domin gudanar da wani ainihin aiki na musamman.",
    folderPath: "ROBOT",
    image:"image.gif",
    audio1:"audio1",
    audio2: "audio2",
    audio3: "audio3"
  },
  {
    englishWord: "ROBOTICS",
    hausaWord: "FASAHAR ƘIRƘIRAN NA'URAR MUTUM-MUTUMI MAI SARRAFA AIKI",
    description: "Wannan shi ne fasahar tsara da kuma ƙirƙiran na'urar mutum-mutumi da ake bukata su gudanar da wasu ayyuka na musamman. Misali, ana amfani da irin waɗannan tsararrun na'urorin ne a kamfanonin ƙera motoci, kwamfyuta, waya, a inda yawanci ake samun maimaita yin aiki akai-akai a wajen ƙera su",
    folderPath: "ROBOTICS",
    image:"image.gif",
    audio1:"audio1",
    audio2: "audio2",
    audio3: "audio3"
  },
  {
    englishWord: "ROTATE",
    hausaWord: "JUYA",
    description: "Wannan shi ne juya yadda tsayuwar hoto ko zane ya ke a cikin shafin aiki zuwa yadda ake so. Ana iya juya shi ya zama ta dama, hagu, ko a karkata shi ya yi makaifa.",
    folderPath: "ROTATE",
    image:"image.gif",
    audio1:"audio1",
    audio2: "audio2",
    audio3: "audio3"
  },
  {
    englishWord: "ROUTER",
    hausaWord: "NA'URA MAI SADARWA A YANAR GIZO",
    description: "Wannan wani na’ura ce da ke ajiye duk abin da aka goge ko aka share daga cikin rumbun ajiya har wani tsawon lokaci kafin a fitar da su gaba-ɗaya. Kamar dai kwandon sharan gaske.",
    folderPath: "ROUTER",
    image:"image.png",
    audio1:"audio1",
    audio2: "audio2",
    audio3: "audio3"
  },
  {
    englishWord: "ROWS",
    hausaWord: "LAYUKAN KWANCE",
    description: "Waɗannan wasu layuka ne a cikin jadawalin rubutu da ake jansu a kwance da fili a tsakaninsu.",
    folderPath: "ROWS",
    image:"image.gif",
    audio1:"audio1",
    audio2: "audio2",
    audio3: "audio3"
  },
  {
    englishWord: "RULER BAR",
    hausaWord: "RULA",
    description: "Wannan wani layi ne na daidaita shafin aiki wanda a ko yaushe yana gefen shafin aikin ka. Shi kuma aikinsa nuna awo da tsawon aikin da ka yi ko ka ke yi. Ana yawan samun Ruler Bar ne a cikin yawancin manhajoji.",
    folderPath: "RULER_BAR",
    image:"image.jpg",
    audio1:"audio1",
    audio2: "audio2",
    audio3: "audio3"
  },

]

export default function R({ navigation }): JSX.Element {
  
 
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
              <Text style={styles.letter}>R</Text>
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

