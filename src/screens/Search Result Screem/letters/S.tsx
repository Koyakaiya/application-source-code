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
    englishWord: 'SATURATION',
    hausaWord: 'ƘAURIN LAUNI',
  description: 'Wannan na nufin tsananin ƙaurin launi a cikin hoto. A yayin da aka kara wa zane ko hoto ƙaurin launi, kalolin da ke cikin hoton yana kara ƙaurara. Haka kuma, rage ƙaurin launin hoto zai rika cire kalan har ya kusan dawo baki-da-fari.',
  folderPath: 'SATURATION',
   image: 'image.gif',
   audio1: 'audio1',
   audio2: 'audio2',
   audio3: 'audio3',
  },
  
  
  {
    englishWord: 'SAVE',
    hausaWord: 'ADANA',
    description: 'Wannan shi ne aiwatar da adana bayani a cikin kwamfyuta ko rumbun ajiya.',
    folderPath: 'SAVE',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  {
    englishWord: 'SAVE AS',
    hausaWord: 'ADANA HAKA',
    description: 'Wannan shi ne aiwatar da adana bayani ta wani nau’in da ake so.',
    folderPath: 'SAVE_AS',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  {
    englishWord: 'SCAN',
    hausaWord: 'KWAFA ZUWA HOTO',
    description: "Wannan shi ne aiwatar da kwafan bayani ko hoto da ke kan fuskar shafi ko takarda zuwa cikin kwamfyuta ta amfani da na'urar Sikana, wato Scanner.",
    folderPath: 'SCAN',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  
  {
    englishWord: 'SCAN DISK',
    hausaWord: 'BINCIKA RUMBU',
    description: 'Wannan wani umarni ne mai sa kwamfyuta ta binciki duk wata matsala da ke a cikin rumbun ajiya ta kuma yi maganin matsalar idan za ta iya yi.',
    folderPath: 'SCAN_DISK',
    image: 'image.png',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  
  {
    englishWord: 'SCANNER',
    hausaWord: 'MAKWAFIYA/SIKANA',
    description: 'Wannan wata na’ura ce da ake haɗa ta da kwamfyuta domin ta ba da hoton kowane abinda ke fuskar takarda da aka sa a cikin ta zuwa kwamfyuta.',
    folderPath: 'SCANNER',
    image: 'image.jpg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  
  {
    englishWord: 'SCENE',
    hausaWord: 'FITOWA',
    description: 'A harkan sarrafa shiri na bidiyo ko talbijin, wannan shi ne wani ɓangaren bidiyo ko hoto mai motsi da ke da farko da kuma karshe.',
    folderPath: 'SCENE',
    image: 'image.jpg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  
  {
    englishWord: 'SCREEN',
    hausaWord: 'ALLO/FUSKA',
    description: 'Wannan shi ne allo ko fuskar na’ura wanda bayanai ke fitowa a jikin ta.',
    folderPath: 'SCREEN',
    image: 'image.jpg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  {
    englishWord: 'SCREEN RECORDING/SCREEN CAPTURE/SCREEN SHOT',
    hausaWord: 'RIKORDIN DA ƊAUKAR HOTON FUSKAR ALLO',
    description: 'Wannan shi ne aiwatar da kamo, ko ɗaukar hoton abinda ke faruwa a fuskar allon kwamfyuta a lokacin da ake amfani da shi ta hanyar amfani da wani manhajar rikodin fuskar allo na musamman.',
    folderPath: 'SCREEN_RECORDING',
    image: 'image.jpg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  {
    englishWord: 'SCREEN SAVER',
    hausaWord: 'MAƘARIN ALLO',
    description: 'Wannan wani sashe ne mai fitowa da kansa domin ƙare allon na’ura daga yin shishigi idan an bar shi a kunne da daɗewa.',
    folderPath: 'SCREEN_SAVER',
    image: 'image.jpg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  
  {
    englishWord: 'SCROLL',
    hausaWord: 'JA,JUYAWA',
    description: 'Wannan shi ne aikin motsar da fuskar allon kwamfyuta don a je wani ɓangare a cikin shi sashin da ke buɗe a lokacin.',
    folderPath: 'SCROLL',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  
  {
    englishWord: 'SCROLL BAR',
    hausaWord: 'MAJANYI',
    description: 'Da shi ake motsa fuskar allon kwamfyuta zuwa sama ko ƙasa, ko kuma dama ko hagu.',
    folderPath: 'SCROLL_BAR',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  {
    englishWord: 'SEARCH',
    hausaWord: 'BINCIKO',
    description: 'Wannan shi ne aiwatar da binciko wani bayani da ake buƙata a cikin wani kwamfyuta, waya, da wasu manhajoji ko yanar gizo.',
    folderPath: 'SEARCH',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  
  {
    englishWord: 'SEARCH ENGINE',
    hausaWord: 'SHAFIN BINCIKE A YANAR GIZO',
    description: 'Wannan wani shafi ne a yanar gizo da ake amfani da shi domin nema da binciko bayanai. Misalan su: Google, Yahoo!, Bing, Baidu, MSN, da sauran su.',
    folderPath: 'SEARCH_ENGINE',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  
  {
    englishWord: 'SECOND',
    hausaWord: 'DAƘIƘA',
    description: 'Wannan shi ne ainihin ma’aunin lokaci da ake amfani da shi a duka faɗin duniya. Daƙiƙa sittin (60) shi ya ke ba da minti d’aya.',
    folderPath: 'SECOND',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  
  {
    englishWord: 'SELECT ALL',
    hausaWord: 'ZAƁI DUKA',
    description: 'Wannan shi ne aiwatar da zaɓan duka bayanai da ke cikin shafin aiki gaba-ɗaya.',
    folderPath: 'SELECT_ALL',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  
  {
    englishWord: 'SEND',
    hausaWord: 'AIKA',
    description: "Wannan shi ne aiwatar da aika saƙo ta hanyar danna madanni da aka rubuta ‘Shigarwa’. ‘Send’ wato 'Aikawa' akan sa.",
    folderPath: 'SEND',
    image: 'image.jpg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  {
    englishWord: 'SENT',
    hausaWord: 'AKWATIN SAƘONNIN DA AKA AIKA',
    description: 'A harkan aikawa da karban imeli, wannan shi ne akwati da ke riƙe da saƙonnin da aka yi nasarar aika su.',
    folderPath: 'SENT',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  {
    englishWord: 'SERVER',
    hausaWord: 'MATSAKAICIN KWAMFYUTA',
    description: 'Wannan shi ne cibiyar kwamfyuta ko na’ura da ke ba wa wasu kwamfyutoci da suka dogara a gare shi domin samun damar cudanya da kuma gudanar da ayyukansu a cikin tsarin wani hukuma, ma’aikata, ko masana’anta.',
    folderPath: 'SERVER',
    image: 'image.jpg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  {
    englishWord: 'SETTINGS',
    hausaWord: 'SAITUNA',
    description: 'Waɗannan su ne wasu jerin kayan sarrafawa da ke ba wa mai amfani da kwamfyuta damar daidaita tsarin masarrafai, manhajoji, bayanai, ko ayyuka da ake yi da kwamfyuta.',
    folderPath: 'SETTINGS',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  
  {
    englishWord: 'SHADOW',
    hausaWord: 'INUWANTAWA',
    description: 'Wannan shi ne ba wa zane, alama, ko rubutu inuwa a cikin alƙuƙi ko a cikin shafin aiki domin nuna ƙarfafawa ko muhimmanci.',
    folderPath: 'SHADOW',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  
  {
    englishWord: 'SHAPE',
    hausaWord: 'SIFFA',
    description: 'Wannan shi ne ainihin yanayin siffar zane. A harkan amfani da manhajojin ƙirƙiran zane, a san da cewa, kafin a ce wa zane yana da siffa, lallai sai an ja layi ya bi tsarin siffar da aka nufa a zana kuma ya dawo ya haɗe da asalin inda aka fara jan layin tun farko.',
    folderPath: 'SHAPE',
    image: 'image.jpg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  
  {
    englishWord: 'SHOPPING CART',
    hausaWord: 'KWANDON YIN SAYYAYA',
    description: 'Wannan shi ne wani gurbi ko shafi mai wakiltar kwando ko jakar yin sayayya da ke ɗauke da kayan da aka zaɓa da niyyar saya a cikin wani shagon kasuwanci a yanar gizo. Yawanci, akan yi amfani da alamar kwandon sayayya mai taya ne domin shigar da mai sayayya cikin wannan shafin. Da zaran an gamsu, za a iya ci gaba da biya a nan take, ko kuma a lokacin da aka shirya.',
    folderPath: 'SHOPPING_CART',
    image: 'image.jpg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  
  {
    englishWord: 'SHUT DOWN',
    hausaWord: 'KASHE',
    description: 'Wannan shi ne aiwatar da kashe kwamfyuta gabaɗaya.',
    folderPath: 'SHUT_DOWN',
    image: 'image.jpg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  {
    englishWord: 'SLEEP',
    hausaWord: 'BACCI',
    description: 'Wannan wani yanayi ne kamar dai saka kwamfyuta a yanayi na hibernate da mai amfani da kwamfyuta ke kashe ta, amma na wucin-gadi. Idan aka farfaɗo da kwamfyuta daga bacci, za a ga cewa dukan alkuƙan da ke a buɗe kafin a sa ta a wannan yanayin na nan a raye.',
    folderPath: 'SLEEP',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  
  {
    englishWord: 'SLIDE',
    hausaWord: 'SHAFIN GABATAR DA BAYANI',
    description: 'A yayinda ake amfani da Masarrrafin Matsarin Microsoft wato Power Point, wannan shi ne shafi mai ɗauke da bayanai kamar hoto ko rubutu da ake gabatarwa.',
    folderPath: 'SLIDE',
    image: 'image.jpg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  
  {
    englishWord: 'SOCIAL MEDIA',
    hausaWord: 'KAFOFIN SADA ZUMUNTA',
    description: 'Waɗannan su ne ire-iren shafukan yanar gizo da manhajojin da suka dukufa ga sadarwa, yin mu’amala da abokanai da iyali da al’umomi daban-daban, yad’a bayanai da haɗa hannu.',
    folderPath: 'SOCIAL_MEDIA',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  
  {
    englishWord: 'SOFT COPY',
    hausaWord: 'ƊANYEN BAYANI',
    description: 'Wannan shi ne tsararren bayani da za a iya gani a fuska ko allon kwanfyuta kurum. Shi ne akasin bugaggen bayani akan fallen takarda.',
    folderPath: 'SOFT_COPY',
    image: '',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  
  
  {
    englishWord: 'SOFTWARE',
    hausaWord: 'MASARRAFIN KWAMFYUTA',
    description: 'Waɗannan su ne muhimman umarnai da aka ƙirƙira da ke ba wa kwamfyuta damar yin wani asalin aiki.',
    folderPath: 'SOFTWARE',
    image: 'image.jpg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  {
    englishWord: 'SOFTWARE DRIVER',
    hausaWord: 'MATUKIN MASARRAFI',
    description: 'Wannan shi ne masarrafin da ke ba wa manhajoji ko wasu masarrafai da aka dasa a cikin kwamfyuta ikon yin aiki. Dukan ire-iren masarrafan da ke faɗin duniya wato ginshikan masarrafai, ko manhajojii, suna da na su matukan da ke basu damar gudanar da aiki.',
    folderPath: 'SOFTWARE_DRIVER',
    image: '',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  {
    englishWord: 'SOUND CARD',
    hausaWord: 'KATIN SAUTI',
    description: "Wannan wata 'yar na’ura ce da akan saka ta a cikin kwamfyuta domin ta samu damar fito da sauti ko wata shiri da yake ɗauke da sauti.",
    folderPath: 'SOUND_CARD',
    image: 'image.jpg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  
  {
    englishWord: 'SPAM',
    hausaWord: 'SPAM',
    description: 'Wannan saƙon kan-ta-kifta ne da kamfanoni ko mutane ke tura wa dubban mutane ba tare da izinin su ba domin tallata wani haja ko kuma da niyyar yin kutse.',
    folderPath: 'SPAM',
    image: 'image.jpg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  
  {
    englishWord: 'SPEAKER',
    hausaWord: 'LASIFIKA',
    description: "Wannan ita ce wata na'ura da ake haɗa ta da kwamfyuta domin taimaka mata wajen fitar da sauti da ƙarfi.",
    folderPath: 'SPEAKER',
    image: 'image.jpg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  
  {
    englishWord: 'SPECIAL CHARACTER',
    hausaWord: 'ALAMA TA MUSAMMAN',
    description: 'Wannan na nufin alama ta musamman da ke dangane da wani ainihin aiki.',
    folderPath: 'SPECIAL_CHARACTER',
    image: 'image.jpg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  
  {
    englishWord: 'SPELL CHECK',
    hausaWord: 'BABBAKU KARATUN HAJJATU',
    description: 'Wannan wani sashi ne da kwamfyuta ke yin karatun hajjatu na kalmoni ta gano inda aka yi kuskure wajen rubuta kalma ta kuma kawo shawara domin gyarawa.',
    folderPath: 'SPELL_CHECK',
    image: 'image.png',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  
  
  {
    englishWord: 'SPELLING',
    hausaWord: 'SAHIHANTA RUBUTU',
    description: 'Wannan yanayi ne na aiwatar da sahihancin kalmomin da aka rubuta.',
    folderPath: 'SPELLING',
    image: '',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  
  {
    englishWord: 'SPREAD SHEET',
    hausaWord: 'JADAWALIN LISSAFI',
    description: 'Wani irin shafin aikin kwamfyuta ne wanda ake amfani da shi wajen tsara bayani a zubin gida-gida ko layi-layi. Ana iya yin amfani da shi wajen lissafi, wanda nan take akan iya gane daraja ko matsayin lissafin, ta hanyar kwatanta wani gurbin bayani da wani, kuma ana yin hakan ta sigogi daban–daban.',
    folderPath: 'SPREAD_SHEET',
    image: 'image.jpg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  
  
  {
    englishWord: 'STACK',
    hausaWord: 'TARIN UMARNI',
    description: 'A harkan ƙirƙiran manhajoji, wannan shi ne tsarin tarin umarnin da ake amfani da su da ke gudanar da ayyuka biyu na musamman, wato shigar da umarnai da kuma fitar da umarnai akai-akai kamar yanda aka tsara.',
    folderPath: 'STACK',
    image: 'image.jpg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  {
    englishWord: 'START',
    hausaWord: 'FARA',
    description: 'Wanan shi ne umarnin fara aiki da zarar an kunna kwamfyuta.',
    folderPath: 'START',
    image: 'image.jpg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  
  {
    englishWord: 'START UP DISK',
    hausaWord: 'ƘUNDIN TAYARWA',
    description: "Wannan wata 'yar na'ura ce mai ɗauke da tsarin tayarwa da aikin kwamfyuta. Yayin da aka kunna ta karo na farko, sai an barta ta bi duk tsarin tayarwa sannan a fara aiki.",
    folderPath: 'START_UP_DISK',
    image: '',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  
  {
    englishWord: 'STATIONERY',
    hausaWord: 'DAFTARIN KAYAN AIKI',
    description: 'Waɗannan su ne dukan kayayyakin aikin ofis da ke ɗauke da tambarin da ke wakiltar wata ainihin Kamfani ko Hukuma da ke amfani da su. Kamannin daftarin aiki zai iya zama fallen rubuta wasika, ambulan, katin shaida na kasuwanci, rasit, takardan bayana farashi.',
    folderPath: 'STATIONERY',
    image: 'image.jpg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  
  
  {
    englishWord: 'STATUS',
    hausaWord: 'MATSAYI',
    description: 'Wannan shi ne yanayin da ke bayana halin da mai amfani da kwamfyuta ko waya ya ke ciki a wani muhalli a yanar gizo. Zai iya zama yana rayayyen yanayi ko ragwantaccen yanayi.',
    folderPath: 'STATUS',
    image: '',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  
  {
    englishWord: 'STATUS BAR',
    hausaWord: 'GURBIN BAYYANA MATSAYI',
    description: 'Wanan wani gurbi ne a kwance a kasan shafi ko alƙuƙi wanda ke ba da umarni a kan aikin  da ake yi a cikin shafin a lokacin.',
    folderPath: 'STATUS_BAR',
    image: 'image.jpg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  
  {
    englishWord: 'STOP-MOTION ANIMATION',
    hausaWord: 'TSARIN BIDIYON DAƘATAR-DA-MOTSI',
    description: 'A harkan sarrafa bidiyo, wannan wani tsarin bidiyo ne da ke nuna motsin abu da ake samarwa ta wurin daukar tarin hotuna daban-daban na wannan abin sai a shimfida su a jere. Kowane hoton da ke cikin tarin nan na bayana wani wurin zama da yanayin motsi daban, har sai an samu iya yawan motsin da ake bukata.',
    folderPath: 'STOP-MOTION_ANIMATION',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  
  {
    englishWord: 'STORAGE DEVICE',
    hausaWord: "NA 'URAR AJIYA",
    description: 'Wannan na nufin kowane irin na\'urar da za a iya adana bayanai a cikin ta.',
    folderPath: 'STORAGE_DEVICE',
    image: 'image.jpg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  
  {
    englishWord: 'STREAM',
    hausaWord: 'ƘWARARA',
    description: 'Wannan ita ce samun damar kallon shirin bidiyo, ko na radio, ko jin waƙa kai tsaye a yanar gizo ba tare da an sauke su zuwa cikin kwamfyuta ko waya ba. Shirye-shiryen nan suna iya kasancewa suna faruwa ne kai tsaye ko an saka su a wani gida a yanar gizo. Kyan gudun ƙwararan nan ya dangana ne ga karfin haɗin sadarwarka ga yanar gizo.',
    folderPath: 'STREAM',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  // {
  //   englishWord: 'SUBSCRIBE/SUBSCRIPTION/SIGN UP',
  //   hausaWord: 'RAJISTA NA CIKA BUƘATA',
  //   description: 'Wannan shi ne yin rajista da masu ba da damar yin aiki da hidima da manhajan su, ko samun saƙon kan-ta-kifta, ko imeli da makamantansu daga wurin su.',
  //   folderPath: 'SUBSCRIBE/SUBSCRIPTION/SIGN UP',
  //   image: 'image.jpg',
  //   audio1: 'audio1',
  //   audio2: 'audio2',
  //   audio3: 'audio3',
  // },
  {
    englishWord: 'SUBTITLE',
    hausaWord: 'MAGANA A RUBUCE',
    description: 'Wannan shi ne rubutun da ke tafiya yawanci a kasan fuskar allon na’uran da ake kallo da shi da ya ke wakiltan magana, hira, waƙa, ko zance da ake yi a cikin bidiyon. Rubutun na iya zama fasarar yaren da ake magana da shi a bidiyon ne zuwa wani yare, ko kuma asalin yaren.',
    folderPath: 'SUBTITLE',
    image: 'image.jpg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  {
    englishWord: 'SVG (Scalable Vector Graphics)',
    hausaWord: 'SVG (Scalable Vector Graphics)',
    description: 'Wannnan shi ne yanayin tsarin zanannen fayil wato Vector da ake amfani da shi a wajen ƙirƙiran ɗaki a yanar gizo. Shi ya fi dacewa a yi amfani da shi saboda rashin dushewar shi.',
    folderPath: 'SVG',
    image: 'image.png',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
  
  {
    englishWord: 'SYMBOL',
    hausaWord: 'ALAMA',
    description: 'Wannan shi ne alama da ba lamba ko harafi ba. Kamar su #, >, %, @',
    folderPath: 'SYMBOL',
    image: 'image.png',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
  },
]

export default function S({ navigation }): JSX.Element {
  
 
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
              <Text style={styles.letter}>S</Text>
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

