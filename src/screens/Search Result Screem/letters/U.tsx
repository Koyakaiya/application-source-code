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
    englishWord: 'UI (USER INTERFACE)',
    hausaWord: "TSARIN YIN MU'AMALA",
    description: "Wannan shi ne yadda tsarin fuskokin yin mua’amala tsakanin mutum da kwamfyuta ko wayar sa su ke a cikin ire-iren manhajojin da ke a dashe a cikin na’urar. Waɗannan sun ƙunshi fuskar waya ko kwamfyuta, kibodi wato farantin harrufa, linzamin kwamfyuta, da ɗaukacin yanayin yadda tsarin ginin kwamfyuta ta ke.",
    folderPath: 'UI_(USER INTERFACE)',
    image: 'image.jpg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
},

{
    englishWord: 'UNCHECK A BOX',
    hausaWord: 'CIRE ALAMAR AMINCEWA',
    description: 'Wannan shi ne cire alamar amincewa a cikin gurbin zaɓin da ke kusa da rubutun da ke bayana abinda aka zaɓa.',
    folderPath: 'UNCHECK',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
},

// {
//     englishWord: 'UNDERLINE',
//     hausaWord: 'JAN LAYI',
//     description: 'A harkan tsara rubutu, wannan shi ne aiwatar da jan layi a ƙarƙashin wata kalma ko jerin kalmomi domin nuna ƙarfafawa ko muhimmanci.',
//     folderPath: 'UNDERLINE',
//     image: 'image.jpg',
//     audio1: 'audio1',
//     audio2: 'audio2',
//     audio3: 'audio3',
// },

{
    englishWord: 'UNDO',
    hausaWord: 'A MAYAR YADDA YA KE',
    description: 'Wannan shi ne aiwatar da mayar da aiki ko gyarar da aka yi wa wani aiki zuwa yadda yake kafin a taɓa shi.',
    folderPath: 'UNDO',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
},

// {
//     englishWord: 'UNSUBSCRIBE',
//     hausaWord: 'FICEWA DAGA RAJISTA NA CIKA BUƘATA',
//     description: 'Wannan shi ne fita daga rajistan da masu ba da damar yin aiki, hidima da manhajan su, ko samun sakon kan-ta-kifta, ko imeli da makamantansu daga wurin su.',
//     folderPath: 'UNSUBSCRIBE',
//     image: 'image.jpg',
//     audio1: 'audio1',
//     audio2: 'audio2',
//     audio3: 'audio3',
// },

{
    englishWord: 'UNTITLED',
    hausaWord: 'MARA SUNA',
    description: 'Wannan shi ne bayanin da aka adana mara suna, wato an bar shi ba suna.',
    folderPath: 'UNTITLED',
    image: 'image.jpg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
},

{
    englishWord: 'UPDATE',
    hausaWord: 'SABUNTA',
    description: 'Sabuntawa shi ne sabo, ingantacce, ko daidaitacen masarrafi, wanda ya maye gurbin tsohon alƙuƙi na wannan zubin. Alal misali, sabunta masarrafin kwamfyutar ka na sa ya daidaita na’urorinta da masarrafan tabbatar da tsaro da ake yayi.',
    folderPath: 'UPDATE',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
},

{
    englishWord: 'UPGRADE',
    hausaWord: 'ƘARA INGANCI',
    description: 'Wannan shi ne ƙara inganta yanayin aikin kwamfyuta ta hanyar dasa ma ta wata sabon masarrafi ko kayan aikin ta na ciki.',
    folderPath: 'UPGRADE',
    image: '',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
},

{
    englishWord: 'UPLOAD',
    hausaWord: 'ƊORA BAYANI',
    description: "Wannan ita ce aiwatar da tura bayani daga cikin na'ura ko rumbun ajiya zuwa wata na'urar da ta fi ta girma ko matsayi. Ɗora bayanin nan na iya kasancewa kai tsaye ne ko kuma ta hanyar mahaɗar sadarwa.",
    folderPath: 'UPLOAD',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
},

{
    englishWord: 'URL (Uniform Resource Locator)',
    hausaWord: 'URL',
    description: 'Wannan shi ne ginshikin manunin wajen da ake samun kowane bayani a yanar gizo. Shi ne kuma ake kira adireshi a yanar gizo. Misali kamar: http://www.koyakaiya.com/ Akan same shi ne a rubuce a cikin gurbin adireshi a cikin manhajar shiga yanar gizo. ',
    folderPath: 'URL(Uniform Resource Locator)',
    image: 'image.jpg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
},

{
    englishWord: 'USB DRIVE',
    hausaWord: 'ƘARAMIN ƘUNDI',
    description: "Wannan wata 'yar ƙaramar na'ura ce da za a iya sa ta a aljihu da ake amfani da ita wajen kwasan bayanai domin ajiya ko kuma kai bayanan zuwa wani na'ura daban",
    folderPath: 'USB_DRIVE',
    image: 'image.jpg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
},

{
    englishWord: 'USB PORT',
    hausaWord: 'GURBIN ƘARAMIN ƘUNDI',
    description: 'Wannan shi ne gurbin da ake soka ƙaramin ƙundi a ciki. Akan same shi ne ɗauke a jikin kwamfyuta.Ta wannan gurbin ne ake gani, karanta da sarrafa abubuwan da ke ɗauke a cikin ƙaramin ƙundin.',
    folderPath: 'USB_PORT',
    image: 'image.jpg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
},

{
    englishWord: 'USER EXPERIENCE',
    hausaWord: 'MORIYAR MAI YIN AMFANI',
    description: 'Wannan na nufin yanayin yadda masu amfani da wani manhaja, tsari, masarrafi, ko na’ura su ke more shi yayin da su ke yin amfani da shi wajen gudanar da aikin da na’uran ya ke yi. ',
    folderPath: 'UX_(USER EXPERIENCE)',
    image: 'image.jpg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
},

{
    englishWord: 'USER PROFILE',
    hausaWord: 'BAYANIN ASALIN MAI AMFANI DA NA’URA',
    description: 'Wannan shi ne bayanan da ke wakiltar asalin wanda ya yi rajista da niyyar buɗe asusu a wani shafin kafar sada zumunta, ko kuma a wani manhajan da ke buƙatar yin rajista domin samun izinin amfani da shi. Bayannan nan sun haɗa da suna, hoto, adireshin imeli, lambar waya, da sauran su.',
    folderPath: 'USER PROFILE',
    image: 'image.png',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
},

{
    englishWord: 'USSD',
    hausaWord: 'USSD',
    description: 'Wani tsari ne da ke ba wa wayoyin da ba su iya shiga yanar gizo damar gudanar da ayyukan bankin tafi-da-gidanka da kuma binciken wasu muhimman bayanai ta hanyar shigar da wasu rukunan umarnai a kan waya, misali, *99#. Ana iya amfani da wannan tsarin ne domin aika kuɗaɗe, duba balas, duba datan waya, duba lamban rajista na BVN, NIN, kuɗin da ya ke a asusu, da sauran su.',
    folderPath: 'USSD',
    image: 'image.png',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
}

  

]

export default function U({ navigation }): JSX.Element {
  
 
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
              <Text style={styles.letter}>U</Text>
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
























































































































