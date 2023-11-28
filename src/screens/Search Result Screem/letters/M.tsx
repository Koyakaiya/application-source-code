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
    englishWord: 'M.A.K.K.S',
    hausaWord: 'M.A.K.K.S',
    description: 'Wannan shi ne takaitaccen sunan manhajan Mataimakin Amfani da Koyon Kwamfyuta a Sauwake da kamfanin Koya Ka Iya ta ƙirƙiro saboda taimaka wa mutane da ɗalibai su koyi ilimin fasahar sadarwa cikin harshen Hausa a sauwake.',
    folderPath: 'M.A.K.K.S',
    image: 'image.jpg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    {
    englishWord: 'MAIN FRAME',
    hausaWord: 'GINGIMARIN KWAMFYUTA',
    description: 'Wanna ita ce irin gingimarin kwamfyuta, wato babbar kwamfyuta wadda ta ke iya ɗaukar manyan bayanai domin manyan hukumomi.',
    folderPath: 'MAIN_FRAME',
    image: 'image.jpg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    {
    englishWord: 'MARGIN',
    hausaWord: 'SARARIN DAIDAITA RUBUTU',
    description: 'Wannan shi ne wani sarari da akan bari a gefe, sama, da kuma ƙasan shafin aiki domin daidaita tsarin rubutu.',
    folderPath: 'MARGIN',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    {
    englishWord: 'MASKS',
    hausaWord: 'LABULE A TSARA ZANE',
    description: 'A harkan amfani da manhajan tsara zane, wannan shi ne sa labule a wani ɓangare a fuskar hoto ko zane da ake aiki akai, domin ɓoye wannan ɓangaren saboda samun damar yin wani aiki akan hoton ba tare da taba inda aka sa labulen ba.',
    folderPath: 'MASKS',
    image: 'image.jpg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    {
    englishWord: 'MAXIMIZE',
    hausaWord: 'FAƊAƊAWA',
    description: 'Wannan shi ne aiwatar da faɗaɗa alƙuƙi ko shafin aiki ya maye fuskar allon kwamfyuta gaba-ɗaya.',
    folderPath: 'MAXIMIZE',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    {
    englishWord: 'MEGABYTE',
    hausaWord: 'MEGABAYIT',
    description: 'Wanan shi ne nauyin bayani mai adadin miliyan ɗaya. (1,000.000 Byte).',
    folderPath: 'MEGA_BYTE',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    {
    englishWord: 'MEME',
    hausaWord: 'HOTO MAI BAN DARIYA',
    description: "A harkan sada zumunta a yanar gizo, wannan shi ne wani hoto ko gajeren bidiyo mai ban dariya da ya riga ya yaɗu kuma ana yawan amfani da shi wajen yin mu'amala da aika saƙo.",
    folderPath: 'MEME',
    image: 'image.png',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    
    {
    englishWord: 'MEMORY',
    hausaWord: 'ƘARFIN MAHAƊƊATA',
    description: "Wannan shi ne ƙoƙarin na'ura mai kwakwalwa na rike bayanai da kuma tuno su duk lokacin da aka nema. Ana auna karfin wannan mahaɗɗatan ne ta yawan adadin Bayit, Kilobayit, ko Megabayit da ya ke da shi.",
    folderPath: 'MEMORY',
    image: '',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    {
    englishWord: 'MENU',
    hausaWord: 'MAZAƁA',
    description: 'Wannan shi ne jerin ayyuka da za a iya zaɓa a wajen gudanar da aiki.',
    folderPath: 'MENU',
    image: 'image.jpg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    {
    englishWord: 'MENU BAR/RIBBON',
    hausaWord: 'JERIN ZAƁI',
    description: 'Wannan, shi ne gurbin da ke saman shafi na kwamfyuta mai nuna jerin kayan ayyukan da za a iya amfani da su a cikin manhajan da ke buɗe a wannan lokacin.',
    folderPath: 'MENU_BAR_OR_RIBBON',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    
    {
      englishWord: 'MERGE',
      hausaWord: 'HAƊEWA',
      description: 'Wannan shi ne aiwatar da haɗa wani siffa, ko zane da wani daban domin a samu wani sabon siffa na ainihi da ake buƙata.',
      folderPath: 'MERGE',
      image: 'image.gif',
      audio1: 'audio1',
      audio2: 'audio2',
      audio3: 'audio3',
    },
    
    {
      englishWord: 'Mi-fi',
      hausaWord: 'Mi-fi',
      description: 'Wannan wani ƙaramin na’ura na tafi-da-gidanka ne mai amfani da batir wanda ya ke aiki da hanyar sadarwa na waya. Kamfanoni kamar MTN, GLO, Airtel, da sauransu ke badawa wurin haɗa mai amfani da shi zuwa yanar gizo.',
      folderPath: 'MIFI',
      image: 'image.jpg',
      audio1: 'audio1',
      audio2: 'audio2',
      audio3: 'audio3',
    },
    
    {
      englishWord: 'MICROPHONE',
      hausaWord: 'AMSA KUWA/MAKIRFO',
      description: 'Wannan shi ne na\'ura mai shigar da sauti zuwa cikin kwamfyuta.',
      folderPath: 'MICROPHONE',
      image: 'image.jpg',
      audio1: 'audio1',
      audio2: 'audio2',
      audio3: 'audio3',
    },
    
    {
      englishWord: 'MICROSOFT ACCESS',
      hausaWord: 'MASARRAFIN MANEMIN MICROSOFT',
      description: 'Wannan shi ne masarrafin da kamfanin Microsoft suka ƙera da ake amfani da shi wajen adana zayyananen bayanai.',
      folderPath: 'MICROSOFT_ACCESS',
      image: 'image.png',
      audio1: 'audio1',
      audio2: 'audio2',
      audio3: 'audio3',
    },
    
    {
      englishWord: 'MICROSOFT EXCEL',
      hausaWord: 'MASARRAFIN MALISSAFIN MICROSOFT',
      description: 'Wannan shi ne masarrafin da kamfanin Microsoft suka ƙera musamman domin aiwatar da lissafi a kan kwamfyuta.',
      folderPath: 'MICROSOFT_EXCEL',
      image: 'image.png',
      audio1: 'audio1',
      audio2: 'audio2',
      audio3: 'audio3',
    },
    
    {
      englishWord: 'MICROSOFT POWERPOINT',
      hausaWord: 'MASARRAFIN TSARA GABATARWA NA MICROSOFT',
      description: 'Wannan shi ne masarrafin da kamfanin Microsoft suka ƙera da ake amfani da shi wajen gabatar da bayanai ta hanyar amfani da hotuna, zane, da rubutu mai motsi.',
      folderPath: 'MICROSOFT_POWERPOINT',
      image: 'image.png',
      audio1: 'audio1',
      audio2: 'audio2',
      audio3: 'audio3',
    },
    
    {
      englishWord: 'MICROSOFT WORD',
      hausaWord: 'MASARRAFIN MARUBUCIN MICROSOFT',
      description: 'Wannan shi ne masarrafin da kamfanin Microsoft suka ƙera da ake amfani da shi wajen sarrafa rubutu.',
      folderPath: 'MICROSOFT_WORD',
      image: 'image.png',
      audio1: 'audio1',
      audio2: 'audio2',
      audio3: 'audio3',
    },
  
    {
      englishWord: 'MINIMIZE',
      hausaWord: 'TSUKE',
      description: 'Wannan shi ne tsuke ko rage faɗin shafi ko alƙuƙin kwamfyuta zuwa ɗan kaɗan.',
      folderPath: 'MINIMIZE',
      image: 'image.gif',
      audio1: 'audio1',
      audio2: 'audio2',
      audio3: 'audio3',
    },
    
    {
      englishWord: 'MOBILE BANKING',
      hausaWord: 'BANKIN TAFI-DA-GIDANKA',
      description: 'Wannan shi ne wani hidima ta musamman da bankuna ke bawa kostomomin su damar yin harkoki ta amfani da waya ko kwamfyuta, ko da a ina suke, ba sai sun je cikin banki ba.',
      folderPath: 'MOBILE_BANKING',
      image: 'image.jpg',
      audio1: 'audio1',
      audio2: 'audio2',
      audio3: 'audio3',
    },
    
    {
      englishWord: 'MOBILE DATA',
      hausaWord: "MA'AUNIN IZININ SHIGA YANAR GIZO",
      description: 'Wannan shi ne adadin Kilobayit, Megabayit, Gigabayit, ko Terabayit da ke ba wa mai amfani da kwamfyuta ko waya izinin shiga yanar gizo. ƙari kuma, yawan adadin nan suna zuwa ne da farashi daban-daban bisa ga yawan da ake buƙata. Misali, za a iya sayan 25MB (Megabayit 25) a Naira ɗari (N100), 2.5G (Gigabayit 2.5) a Naira dubu ɗaya da ɗari biyar (N1,500), 25G (Gigabayit 25G) a Naira dubu shida (N6,000).',
      folderPath: 'MOBILE_DATA',
      image: 'image.png',
      audio1: 'audio1',
      audio2: 'audio2',
      audio3: 'audio3',
    },
    
    {
      englishWord: 'MOCKUP',
      hausaWord: 'TSARIN SIFFA NA DALLA-DALLA',
      description: 'Wannan wani daftari ne da ke wakiltar yanayin yadda tsarin manhaja, masarrafi, da ma kowane abin da ake so a ƙirƙira zai kasance dalla-dalla.',
      folderPath: 'MOCK_UP',
      image: 'image.jpg',
      audio1: 'audio1',
      audio2: 'audio2',
      audio3: 'audio3',
    },
    
    {
      englishWord: 'MODEM',
      hausaWord: "NA'URAR SHIGA YANAR GIZO",
      description: "Wannan wani na'ura ne da ke bada damar shiga wata hanyar sadarwa a yanar gizo. A san da cewa, a dã, da wannan fasahar ake shiga yanar gizo kafin na\'urorin shiga yanar gizo mafiya inganci kamar su MiFi da Router su fito.",
      folderPath: 'MODEM',
      image: 'image.jpg',
      audio1: 'audio1',
      audio2: 'audio2',
      audio3: 'audio3',
    },
    {
      englishWord: 'MODULE',
      hausaWord: 'ƁANGAREN SHIRI',
      description: 'Wannan shi ne ɓangare na wani shiri wadda ya ƙunshi ɗaya ko wasu jerin tsare-tsare. ƙari kuma, kowane ɓangaren shirin na yin hidima ga wani aiki na musamman.',
      folderPath: 'MODULE',
      image: 'image.jpg',
      audio1: 'audio1',
      audio2: 'audio2',
      audio3: 'audio3',
    },
    
    {
      englishWord: 'MONITOR',
      hausaWord: 'ALLON KWAMFYUTA',
      description: 'Wannan shi ne allon kwamfyuta mai kama da talbijin. A nan ake ganin duk abin da ake aiwatarwa a cikin kwamfyuta.',
      folderPath: 'MONITOR',
      image: 'image.jpg',
      audio1: 'audio1',
      audio2: 'audio2',
      audio3: 'audio3',
    },
    
    {
      englishWord: 'MONTAGE',
      hausaWord: 'BIDIYON DA AKA HARHAƊA',
      description: 'Wannan wani irin bidiyo ne da ake ƙirƙira ta fasahar tattaro, sarrafa, da harhad’a ɓangarorin wasu bidiyoyin domin samar da wani bidiyo guda d’aya da ake buƙata.',
      folderPath: 'MONTAGE',
      image: 'image.gif',
      audio1: 'audio1',
      audio2: 'audio2',
      audio3: 'audio3',
    },
    
    {
      englishWord: 'MOTHER BOARD',
      hausaWord: 'UWAR GARKE',
      description: 'Wannan shi ne uwar garke (wato mother board) mai ɗauke da duk \'yan na\'urori da kayan aiki na cikin kwamfyuta da ke ba ta damar aiki.',
      folderPath: 'MOTHER_BOARD',
      image: 'image.gif',
      audio1: 'audio1',
      audio2: 'audio2',
      audio3: 'audio3',
    },
    {
      englishWord: 'MOTION GRAPHICS',
      hausaWord: 'ZANE MAI MOTSI',
      description: 'Wannan zai iya zama zane, ko alamar da aka ƙirƙira da damar yin motsi. Ana kuma iya saka ma shi sauti domin ƙara ma shi daɗin kallo ko inganci.',
      folderPath: 'MOTION_GRAPHICS',
      image: 'image.gif',
      audio1: 'audio1',
      audio2: 'audio2',
      audio3: 'audio3',
    },
    
    {
      englishWord: 'MOUSE',
      hausaWord: 'LINZAMIN KWAMFYUTA',
      description: 'Wannan shi ne na\'ura mai kama da ɓera da ake haɗa shi da kwamfyuta wanda ake juya shi da hannu. Amfaninta shi ne ba wa kwamfyuta umarni kamar nuni, zaɓi, ja da ajiyewa, faɗaɗawa da tsukewa, kwafa da mannawa, da sauransu.',
      folderPath: 'MOUSE',
      image: 'image.png',
      audio1: 'audio1',
      audio2: 'audio2',
      audio3: 'audio3',
    },
    
    {
      englishWord: 'MOUSE BUTTONS',
      hausaWord: 'MADANNAN LINZAMIN KWAMFYUTA',
      description: 'Waɗannan su ne madannai da ke kan linzamin kwamfyuta guda biyu. Akwai na hagu da kuma na dama.',
      folderPath: 'MOUSE_BUTTONS',
      image: 'image.jpg',
      audio1: 'audio1',
      audio2: 'audio2',
      audio3: 'audio3',
    },
    
    {
      englishWord: 'MOUSE PAD',
      hausaWord: 'TABARMAR LINZAMIN KWAMFYUTA',
      description: 'Wannan wata shinfiɗa ce ta musamman da ake juya linzamin kwamfyuta a kai.',
      folderPath: 'MOUSE_PAD',
      image: 'image.jpg',
      audio1: 'audio1',
      audio2: 'audio2',
      audio3: 'audio3',
    },
    
    {
      englishWord: 'MOUSE POINTER',
      hausaWord: 'MANUNIN LINZAMIN KWAMFYUTA',
      description: 'Wannan wata alama ce da ke wakiltar linzamin kwamfyuta, a yayinda ake amfani da ita, yawanci takan kasance kiɓiya ce da ke motsi a fuskar shafi bisa ga yadda ake motsa ita linzamin kwamfyutar.',
      folderPath: 'MOUSE_POINTER',
      image: 'image.jpg',
      audio1: 'audio1',
      audio2: 'audio2',
      audio3: 'audio3',
    },
    
    {
      englishWord: 'MP3',
      hausaWord: 'MP3',
      description: 'Wannan shi ne yanayin fayil ɗin sauti ko waƙa da aka fi amincewa da aiki da shi a na’urori masu kwakwalwa.',
      folderPath: 'MP3',
      image: 'image.png',
      audio1: 'audio1',
      audio2: 'audio2',
      audio3: 'audio3',
    },
    
    {
      englishWord: 'MP4',
      hausaWord: 'MP4',
      description: 'Wannan shi ne yanayin fayil ɗin bidiyo da aka fi amincewa da aiki da shi a na’urori masu kwakwalwa.',
      folderPath: 'MP4',
      image: 'image.jpg',
      audio1: 'audio1',
      audio2: 'audio2',
      audio3: 'audio3',
    },
    
    {
      englishWord: 'MULTIMEDIA',
      hausaWord: 'MASILIMANTA',
      description: 'Waɗannan su ne ire-iren shirye-shirye kamar su bidiyo, hotuna, sauti, rubutu da zane mai motsi da ke bada damar yin cuɗanya da juna tsakanin kwamfyuta da mai amfani da shi.',
      folderPath: 'MULTIMEDIA',
      image: 'image.jpg',
      audio1: 'audio1',
      audio2: 'audio2',
      audio3: 'audio3',
    },
]

export default function M({ navigation }): JSX.Element {
  
 
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
              <Text style={styles.letter}>M</Text>
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








































































































































































































