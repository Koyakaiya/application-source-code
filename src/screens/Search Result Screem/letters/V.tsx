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
    englishWord: 'VACCINE',
    hausaWord: 'RIGA-KAFI',
    description: 'Wannan wani tsarin matakin riga–kafi ne da zai ƙare kwamfyuta daga kamuwa da cuta.',
    folderPath: 'VACCINE',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
},

{
    englishWord: 'VECTOR DRAWING',
    hausaWord: 'ZANE DA SIFFA',
    description: 'Wannan wani salon zane ne da aka ƙirƙira ta hanyar zana siffofi da kuma layuka kurum. Banbancinta da hoto shi ne idan an faɗaɗa, ko tsuke shi, zanen vector ba zai taɓa dushewa ba.',
    folderPath: 'VECTOR_DRAWING',
    image: 'image.jpg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
},

{
    englishWord: 'VERIFY',
    hausaWord: 'TANTANCE',
    description: 'Wannan shi ne aiwatar da tantance sahihancin bayani.',
    folderPath: 'VERIFY',
    image: '',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
},

{
    englishWord: 'VIDEO CARD',
    hausaWord: 'KATIN BIDIYO',
    description: 'Wannan wata na’ura ce da ke bawa kwamfyuta damar nuna hoton bidiyo.',
    folderPath: 'VIDEO_CARD',
    image: 'image.png',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
},

{
    englishWord: 'VIDEO GAMES',
    hausaWord: 'WASANNIN BIDIYO',
    description: "Waɗannnan su ne tsararrunn wasannin da aka ƙirƙira domin buga su a kwamfyuta ko waya, ko kuma da na'urorin buga wasannin bidiyo irin su Play Station, XBox da Nintendo Wii.",
    folderPath: 'VIDEO_GAMES',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
},

{
    englishWord: 'VIDEO LOOP',
    hausaWord: 'BIDIYO MAI MAIMAITA KANSA',
    description: 'Wannan shi ne bidiyo mai maimaita kansa akai-akai',
    folderPath: 'VIDEO_LOOP',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
},

{
    englishWord: 'VIDEO REEL (Social Media)',
    hausaWord: 'JERIN BIDIYOYI A SHAFUKAN SADA ZUMUNTA',
    description: 'Wannan shi ne jerin bidiyoyi da ke ɗauke da wani saƙo ko yaɗa bayanin da mai shafin yake so. Mai wannan shafin yana iya canza jerin bidiyoyin nan bisa ganin dama. Masu ziyartar wannan shafin ne zasu iya kallon bidiyoyin.',
    folderPath: 'VIDEO_REEL',
    image: 'image.jpg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
},

{
    englishWord: 'VIEW (IN AN APPLICATION SOFTWARE)',
    hausaWord: 'DUBA (A Harkan Amfani Da Manhajoji)',
    description: "Wannan wata alama ce a gurbin jerin zaɓi wato Ribbon, wanda idan an zaɓe ta, za ta nuna ma mai aiki iyakar faɗin sararin aiki, da kuma ba da damar faɗaɗa ko rage sararin aikin bisa ra'ayi.",
    folderPath: 'VIEW(IN_AN_APPLICATION_SOFTWARE)',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
},

{
    englishWord: 'VIEW (IN WINDOWS EXPLORER)',
    hausaWord: 'DUBA (A Masarrafin Adana Fayiloli)',
    description: 'Wannan wani madannin umarni ne da ke cikin alƙuƙin da ke nuna ainihin wani gurbin ma’ajiya, wanda idan aka zaɓa, za ta nuna ma ka ire-iren yanayoyi na zaɓuɓuka na jerin fayiloli da suke ajiye a wannan gurbin. Zaɓan ɗaya daga cikin waɗannan zaɓuɓukan zai canza tsarin yanayin yadda jerin fayilolin su ke.',
    folderPath: 'VIEW(IN WINDOWS EXPLORER)',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
},

{
    englishWord: 'VIRAL',
    hausaWord: 'YAƊUWA',
    description: 'Wannan shi ne sa’anda shafin yanar gizo, bidiyo, waƙa, ko saƙon da aka aika a kafofin sada zumunta ya samu gani ko ji ga ɗumbin mutane dayawa kamar dai yadda kwayar cuta ke yaɗuwa cikin sauri.  ',
    folderPath: 'VIRAL',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
},

{
    englishWord: 'VIRTUAL',
    hausaWord: 'KAMANTA MUHALLI TA FASAHAR ZAMANI',
    description: 'Wannan shi ne kamantattun muhallai da aka ƙera da wasu na’urorin fasahar zamani da za a iya gudanar da harkoki da ake yi a rayuwa na gaske kamar koyo, yin taron bita, kasuwanci, sada zumunta, wasanni, nishaɗantarwa, da sauransu. Suna samuwa ne a yanar gizo ko kuma wani tsari na daban. ',
    folderPath: 'VIRTUAL',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
},

{
    englishWord: 'VIRTUAL CREDITS (E-Commerce)',
    hausaWord: 'KAMANTACCEN TSABAR KUƊI',
    description: "A harkan kasuwanci a yanar gizo, waɗannan su ne Kamantattun tsabar kuɗi da ake amfani da su wajen sayayya a cikin wani manhaja ko gida a yanar gizo. Samun kamantattun tsabar kuɗaɗen nan ya dangana ne ga sai an ba da kuɗi na zahiri wadda za a musanya darajar su, sa'annan a ba ka yawan kamantattun tsabar kuɗaɗen nan.",
    folderPath: 'VIRTUAL_CREDITS',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
},

// {
//     englishWord: 'VIRTUAL REALITY',
//     hausaWord: "ZAHIRI A KAMANTACCEN YANAYI CIKIN NA'URA",
//     description: "Wannan shi ne zahiri a kamantaccen yanayi cikin na'ura kasancewar kwamfyuta, waya, ko wani na’ura a haɗe da cibiyar sadarwar yanar gizo.",
//     folderPath: 'VIRTUAL REALITY',
//     image: 'image.jpg',
//     audio1: 'audio1',
//     audio2: 'audio2',
//     audio3: 'audio3',
// },

{
    englishWord: 'VOICE NOTE',
    hausaWord: 'SAƘON MURYA',
    description: "A harkan yin mu'amala ta kafofin sada zumunta, wannan ita ce saƙon murya da ake furtawa kuma ake rikodin domin turawa ga wanda ake so ya ji.",
    folderPath: 'VOICE_NOTE',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
},

{
    englishWord: 'VOLUME',
    hausaWord: 'ƘARFIN SAUTI',
    description: 'Wannan shi ne ƙarfin sauti gwargwaɗon buƙata.',
    folderPath: 'VOLUME',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
},

{
    englishWord: 'VPN (VIRTUAL PRIVATE NETWORK)',
    hausaWord: 'VPN',
    description: "Wannan wani irin manhaja ne da ake kira “Virtual Private Network”. Ainihin aikin shi kuwa, shi ne sirinta kasancewarka a yanar gizo. Ana dasa shi ne a na'ura domin sirrinta asalin kasar da mutum yake harka daga cikin ta a yanar gizo.",
    folderPath: 'VPN(VIRTUAL PRIVATE NETWORK)',
    image: 'image.png',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
}

]

export default function V({ navigation }): JSX.Element {
  
 
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
              <Text style={styles.letter}>V</Text>
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

























































































































