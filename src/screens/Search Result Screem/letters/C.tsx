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
    englishWord: 'CACHE',
    hausaWord: "MA'AJIN WUCIN-GADI NA KWAMFYUTA",
    description: 'Wannan, wani ma’aji na wucin-gadi ne da kwamfyuta ke ginawa da ke ba ka daman samun bayanai cikin sauri fiye da in ka neme su daga cikin rumbun ajiyarka na cikin kwamfyuta.',
    folderPath: 'CACHE',
    image: 'image.jpg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    {
    englishWord: 'CD DRIVE',
    hausaWord: 'GURBIN FAIFAN CD',
    description: 'Wannan shi ne gurbin da ake saka faifan CD da ke jikin kwamfyuta domin yin amfani da shi ko ganin abinda ya ƙunsa.',
    folderPath: 'CD_DRIVE',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    {
    englishWord: 'CELL',
    hausaWord: 'GURBIN SAKA BAYANAI',
    description: 'Wannan wani ɗan karamin gurbin saka bayani ne da ke samuwa a cikin jadawallin lissafi idan ana amfani da masarrafin malissafin Microsoft wato MS Excel.',
    folderPath: 'CELL',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    {
    englishWord: 'CENTRAL PROCESSING UNIT (CPU)',
    hausaWord: 'CIBIYAR SARRAFA BAYANAI/CPU',
    description: 'Wannan ita ce ƙwaƙwalwar kwamfyuta, domin ita ce ta ke shirya aikin dukan sauran sassan ta.',
    folderPath: 'CENTRAL_PROCESSING_UNIT(CPU)',
    image: 'image.png',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    
    
    {
    englishWord: 'CHART',
    hausaWord: 'LISSAFI A ZANE, GIRAF',
    description: 'Wannan, wani lissafi ne a zane wanda yake nuna bayani cikin gida-gida.',
    folderPath: 'CHART',
    image: 'image.png',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    
    
    {
    englishWord: 'CHAT',
    hausaWord: 'HIRA',
    description: 'Wannan, shi ne sadarwa ta hanyar aika saƙonni na rubutu da ake yin shi kai tsaye ko a cikin lokaci na zahiri. A yayinda ake hira, abokanen hira za su samu kowane saƙon rubutu da su ka aika ma juna a take, hakanan kuma, za su iya maida ma juna martani a take.',
    folderPath: 'CHAT',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    
    
    {
    englishWord: 'CHAT ROOM',
    hausaWord: 'ƊAKIN HIRA',
    description: "Wannan wani muhallin sada zumunta ne a yanar gizo da ke ba wa mutane biyu ko fiye damar yin mu'amala kai tsaye da juna ta hanyar aika saƙo a rubuce. Kafin mutum ya samu damar yin mu'amala a cikin ɗakin hira a yanar gizo, sai ya na da asusu a wannan muhallin sada zumuntar.",
    folderPath: 'CHAT_ROOM',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    
    
    {
    englishWord: 'CHECK A BOX',
    hausaWord: 'SAKA ALAMAR AMINCEWA',
    description: 'Wannan shi ne saka alamar amincewa a cikin gurbin zaɓin da ke kusa da rubutun da ke bayyana abinda aka zaɓa.',
    folderPath: 'CHECK_A_BOX',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    
    
    {
    englishWord: 'CHECKOUT',
    hausaWord: 'SHAFI NA BIYAN KUƊI',
    description: 'A harkan kasuwanci a yanar gizo, wannan wani sashi ne da ake ganin abubuwan da aka zaɓa kuma ake da niyar biyan kuɗinsu a wannan lokacin. A wannan sashin ne ake samun ire-iren hanyoyin biya da ke dangane da wannan gidan. Misali, Katin ATM, Tiransfa, da USSD.',
    folderPath: 'CHECKOUT',
    image: 'image.jpeg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    
    
    {
    englishWord: 'CHIP',
    hausaWord: "ƊAN NA'URA A KWAKWALWAR KWAMFYUTA",
    description: 'Wannan wani ɗan ƙararramin na’ura ne da ke samuwa a kwakwalwar kwamfyuta. Ya na da damar taimaka wa kwamfyuta sarrafa bayanai.',
    folderPath: 'CHIP',
    image: 'image.jpg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    
    
    {
    englishWord: 'CLEAR',
    hausaWord: 'GOGE/SHARE',
    description: 'Wannan shi ne aiwatar da gogewa ko share bayani a cikin shafin aiki.',
    folderPath: 'CLEAR',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    
    
    {
    englishWord: 'CLIENT',
    hausaWord: 'KWAMFYUTA MAI DOGARO',
    description: 'Wannan shi ne wani kwamfyuta ko na’ura da ke dogara ga wani muhimmin kwamfyuta domin samun gudanar da wani shiri ko aiki na musamman. Alal misali, kwamfyutar mai biyan kuɗi a kanta a cikin banki yana dogaro ne ga wani babban kwamfyuta da ke ɓoye.',
    folderPath: 'CLIENT',
    image: 'image.png',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    
    
    {
    englishWord: 'CLIP ART',
    hausaWord: 'ZANE MAI KAMANCI',
    description: 'Wannan wani zane ne ko kamanci ko hoto da akan yi amfani da shi domin a sa shi cikin wani aiki.',
    folderPath: 'CLIP_ART',
    image: 'image.jpg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    
    
    {
    englishWord: 'CLIPBOARD',
    hausaWord: 'RUHI NA WUCIN-GADI',
    description: 'Wannan, wani ruhin kwafan bayanai ne na wucin-gadi da ke riƙe bayanai da aka kwafo a cikin manhajan da ake aiki a ciki ko daga wani daban da niyyar manna shi ko shigo da shi cikin aiki. A duk lokacin da aka aiwatar da yanka wani bayani (wato cut) ko kwafan aiki (wato copy), kwamfyuta na ɗaukan bayanin nan ta kai ta cikin ruhin. Bayan an aiwatar da manna ko liƙa bayani (wato paste) abin da ke cikin ruhin kwafan bayanan zai koma sabon wurin da ake buƙatar sa.',
    folderPath: 'CLIPBOARD',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    
    
    {
    englishWord: "CLONE",
    hausaWord: 'TAGWAITAWA',
    description: 'Tagwaita na’urar sadarwa hanya ce ta sake kwafan dukan bayanai da manhajoji da ke cikin ta zuwa wata na’ura daban. Ana tagwaita na’ura ne da kyakyawar niyya, kamar sa ido da kulawa ko kuma da mugun nufi kamar satar fasaha da leƙen asiri. ',
    folderPath: 'CLONE',
    image: 'image.jpg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    
    
    {
    englishWord: 'CLOSE',
    hausaWord: 'RUFE',
    description: "Wannan, shi ne aiwatar da rufe wani bayani ko fayil da ke buɗe kuma ake aiki a cikinta, ta hanyar danna alamar 'x' da ke can saman hannun dama na shafin alƙuƙi.",
    folderPath: 'CLOSE',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    
    
    {
    englishWord: 'CLOUD',
    hausaWord: 'FARFAJIYAR AJIYA A YANAR GIZO',
    description: 'Wannan shi ne kamantaccen farfajiya a yanar gizo inda matsakaitan kwamfyutoci wato SERVERS su ke harka. A san da cewa, farfajiyar nan ba na zahiri ba ne. A cikin waɗannan matsakaitan kwamfyutocin ne ake adana ainihin tsarin aiki na manhajojin waya, kwamfyutoci da ɗakuna a yanar gizo.',
    folderPath: 'CLOUD',
    image: 'image.jpg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    
    
    {
    englishWord: 'CMYK(Cyan, Magenta, Yellow, and Key (Black)',
    hausaWord: 'CMYK (Cyan, Magenta, Yellow, and Key (Black)',
    description: 'Wannan shi ne yanayin launuka da ke cikin zane ko hoto da aka sarrafa da niyyar bugawa a takarda, ko a wani irin shafi kamar zani ko riga.',
    folderPath: 'CMYK(Cyan, Magenta, Yellow, and Key (Black)',
    image: 'image.jpg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    
    
    {
    englishWord: 'CODE',
    hausaWord: 'RUKUNIN UMARNI',
    description: 'Rukunin umarnai wasu dokoki ne da aka ƙirƙira a cikin wani tsari na sa kwamfyuta ta iya gudanar da asalin aikin ta. Waɗannan dokokin su ne dai kamar ruhin kwamfyuta ko waya.',
    folderPath: 'CODE',
    image: 'image.jpg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    
    
    {
    englishWord: 'COLLAGE',
    hausaWord: 'FASAHAR HARHAƊA HOTUNA DA ZANE MABANBANTA',
    description: 'Wannan fasaha ce da ake aiwatarwa ta hanyar tattaro hoto, zane, da yankin ɓangarori na jarida a haɗa su a kan shafi ɗaya.',
    folderPath: 'COLLAGE',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    
    
    {
    englishWord: 'COLOUR HARMONY',
    hausaWord: 'JITUWAN LAUNI',
    description: "Wannan fasaha ce ta amfani da launuka a cikin jituwa idan ana yin zane ko sarrafa hoto domin ƙawata su da ƙara masu ban sha'awa.",
    folderPath: "COLOUR_HARMONY",
    image: 'image.jpg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    
    
    {
    englishWord: 'COLUMNS',
    hausaWord: 'LAYUKAN TSAYE',
    description: 'Waɗannan wasu layuka ne a cikin jadawalin rubutu da ake jansu a tsaye da fili a tsakaninsu.',
    folderPath: 'COLUMNS',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    
    
    {
    englishWord: 'COMMENT',
    hausaWord: 'SHARHI',
    description: 'Wannan shi ne furuci ko rubutaccen kalma da ke bayana ra’ayi ko martani ga abinda aka yaɗa ko ya faru.',
    folderPath: 'COMMENT',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    
    
    {
    englishWord: 'COMPACT DISK (CD)',
    hausaWord: 'FAIFAN CD',
    description: 'Wannan, wani faifai ne mai zagaye wanda ake adana sauti, waƙoƙi, da hoton bidiyo domin kallo ko adana bayanai. A san da cewa, iyakar ƙarfin rike bayanai na faifan CD shi ne 700 MB (wato mega bayit ɗari bakwai).',
    folderPath: 'COMPACT_DISK(CD)',
    image: 'image.png',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    
    
    {
    englishWord: 'COMPATIBLE',
    hausaWord: 'JITUWA',
    description: ' Wannan shi ne kasancewa mamba na wani kafar sadarwa, ko keɓaɓɓen muhalli a yanar gizo da ke ba wa wanda ya yi rajista izinin yin harka ko moran abubuwan da ke samuwa a wannan muhallin.',
    folderPath: 'COMPATIBLE',
    image: '',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    
    
    {
    englishWord: 'COMPOSITION',
    hausaWord: 'SHIRI BISA NUFI',
    description: 'Shi ne ƙoƙarin kwamfyutoci su sassanta su yi aiki tare domin musayan bayanai. Jituwar kwamfyutoci, waya, masarrafai, da wasu na’urori su yi aiki da juna ya dangana ne ga dole sai an samu wasu dacewar tsari ko saitunan da zasu bada daman yin hakan.',
    folderPath: 'COMPOSITION',
    image: 'image.png',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    
    
    {
    englishWord: 'COMPUTER',
    hausaWord: 'GINSHIKIN KWAMFYUTA',
    description: 'Ginshikin kwamfyuta wata na’ura ce wadda aka shirya ta ɗauke da bayanai, ta kan iya samar da lissafi da bayanai a cikin gajeren lokaci, ta kan kuma iya adana bayanai har lokacin da aka buƙace su.',
    folderPath: 'COMPUTER',
    image: 'image.png',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    
    
    {
    englishWord: 'COMPUTER ACCESSORIES',
    hausaWord: 'MATAIMAKAN KWAMFYUTA',
    description: 'Waɗannan su ne dukan abubuwan da aka haɗa da kwamfyuta domin taimaka ma ta da gudanar da aikinta. Misali, lasifika ko kyamara.',
    folderPath: 'COMPUTER_ACCESSORIES',
    image: 'image.png',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    
    
    {
    englishWord: 'CONTENTS',
    hausaWord: 'ƘUNSHI',
    description: 'Wannan shi ne duk wani abin da yake cikin wani bayani ko littafi.',
    folderPath: 'CONTENTS',
    image: 'image.png',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    
    
    {
    englishWord: 'CONTROL PANEL',
    hausaWord: 'GINSHIKIN DAIDAITA YANAYIN KWAMFYUTA',
    description: ' Wannan wani sashe ne mai kula da duk kayyayakin aiki da suke cikin kwamfyuta.',
    folderPath: 'CONTROL_PANEL',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    
    
    {
    englishWord: 'COOKIES',
    hausaWord: 'COOKIES',
    description: "Waɗannan wasu 'yan na’urori ne da ke samuwa a gida a yanar gizo da ke sa ido a kan masu ziyartar wannan gidan. Idan mutum ya sake ziyartar wannan gidan, Cookies na sanar mai da gidan cewa shi ainihin mutumin ya dawo.",
    folderPath: 'COOKIES',
    image: 'image.png',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    
    
    {
    englishWord: 'COPY',
    hausaWord: 'KWAFA',
    description: 'Wannan shi ne aiwatar da kwafo wani bayani ko wata ɓangare a cikin wannan aikin sak, zuwa wani wuri.',
    folderPath: 'COPY',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    
    
    {
    englishWord: 'COPY (CC/BCC)',
    hausaWord: 'AIKA WA WASU IMELI',
    description: 'A harkan aikawa da imeli, wannan wani gurbin umarni ne a cikin shafin aika imeli da idan aka shigar da adireshin wani ko wasu, su ma zasu samu saƙon da aka rubuta wa asalin wanda ake aika wa saƙon.',
    folderPath: 'COPY (CC/BCC)',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    
    
    {
    englishWord: 'COPYRIGHT',
    hausaWord: 'HAƘIN MALLAKA',
    description: 'Haƙin mallaka shi ne yin rajista na aikin fasaha da asalin mai shi ya yi domin kare aikin nan daga masu satar fasaha da kwafe-kwafe don sayarwa da yaɗawa ba tare da izini ba. Misalin waɗannan ayyukan sun kunshi Litattafai, Zane, Bidiyo, Hotuna, Hotuna masu motsi, Wakoki, da shirye-shiryen kwamfyuta da na’urori.',
    folderPath: 'COPYRIGHT',
    image: '',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    
    
    {
    englishWord: 'COVER PAGE',
    hausaWord: 'BANGON LITTAFI',
    description: 'Wannan shi ne bangon littafi da ke bayyana abinda ke ƙunshe a cikin littafin, ko mujallar. Bangon littafi zai iya kasancewa wanda aka ƙera da manhajar zane a cikin kwamfyuta ko kuma shi ainihin bugagen littafin.',
    folderPath: 'COVER_PAGE',
    image: 'image.jpg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    
    
    {
    englishWord: 'CPU TOWER',
    hausaWord: 'GIDAN KWAMFYUTA',
    description: 'Wannan shi ne muhalli ko gidan da ake lura da kayayyakin cikin kwamfyuta, ko kuma muhallin da ke ɗauke da kayayyakin cikin kwamfyuta.',
    folderPath: 'CPU_TOWER',
    image: 'image.jpg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    
    
    {
    englishWord: 'CRASH',
    hausaWord: 'LALLACEWA',
    description: 'Wannan ita ce kwamfyuta ta kashe kanta sakamakon rashin gudanar da aikinta daidai ko lallacewa gaba-ɗaya.',
    folderPath: 'CRASH',
    image: 'image.png',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    
    
    {
    englishWord: 'CREATE',
    hausaWord: 'ƘIRƘIRA',
    description: 'Wannan shi ne aiwatar da ƙirƙiro wani abu a kwamfyuta.',
    folderPath: 'CREATE',
    image: '',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    
    
    {
    englishWord: 'CROP',
    hausaWord: 'RAGE FAƊIN HOTO',
    description: 'Wannan shi ne aiwatar da cire wuraren da ba a so daga jikin hoto.',
    folderPath: 'CROP',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    
    
    {
    englishWord: 'CRYPTO CURRENCY',
    hausaWord: 'KUƊIN KIRIPTO',
    description: 'Wannan wani irin kamantaccen kuɗi ne mai matukar tsaro da ake cinikaiyya da shi a yanar gizo. An ƙirƙiro shi ne domin ya samu yancin kai da ikon mallaka daga gwamnatocin dukan kasashe.',
    folderPath: 'CRYPTO_CURRENCY',
    image: 'image.png',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    
    
    {
    englishWord: 'CURSOR',
    hausaWord: 'MANUNIN SHIGAR DA RUBUTU',
    description: 'Wannan ita ce manuni mai shigar da rubutu a jikin allon kwamfyuta. Ana yin aiki da ita domin zaɓar inda ake so a yi sabon rubutu ko kuma a gyara rubutu.',
    folderPath: 'CURSOR',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    
    
    {
    englishWord: 'CUSTOM SETTINGS',
    hausaWord: "SAITUNA NA RA'AYI",
    description: 'Waɗannan su ne saitunan da mai amfani da na’urar (wato kwamfyuta ko waya) ya canza bisa ga ra’ayin shi.',
    folderPath: 'CUSTOM_SETTINGS',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    
    
    {
    englishWord: 'CUT',
    hausaWord: 'YANKE',
    description: 'Wannan shi ne aiwatar da kwafo aiki ta hanyar yanko bayani ko wani ɓangare na bayanin gaba-ɗaya.',
    folderPath: 'CUT',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    
    
    {
    englishWord: 'CYBER SECURITY',
    hausaWord: 'TSARON KAI A YANAR GIZO',
    description: 'Wannan shi ne hanyoyin tsaron mai amfani da kafofin sadarwa ta yanar gizo daga farmaki da zai iya shafan masarrafai, fayiloli, bayanai, kayayyakin kwamfyuta na ciki, da na waje, da sauransu. kwamfyuta ',
    folderPath: 'CYBER_SECURITY',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    
    
    {
    englishWord: 'CYBERBULLY/CYBERBULLYING',
    hausaWord: 'MAI CIN ZALI A YANAR GIZO/CIN ZALI A YANAR GIZO',
    description: 'Wannan shi ne yin amfani da shafukan sada zumunta kamar su Facebook da Twitter, wayoyi, saƙonnin kan-ta-kifta, imeli, ɗakunan yin hira kamar WhatsApp, domin muzgunawa, yin barazana ko cin fuskar wani.',
    folderPath: 'CYBERBULLY/CYBERBULLYING',
    image: 'image.png',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    
    
    
    
    
]

export default function C({ navigation }): JSX.Element {
  
 
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
              <Text style={styles.letter}>C</Text>
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