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
    englishWord: 'HACKING',
    hausaWord: 'YIN KUTSE',
    description: 'Wannnan shi ne samun damar shiga kwamfyuta, waya, ko cibiyar sadarwa na wani, ko na wani hukuma ta wani haramtaciyar hanya. Ana yin kutse ne don a saci bayani, janyo cikas, zuba cuta, tagwaita yadda kwamfyuta ta ke da sauran su.',
    folderPath: 'HACKING',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    {
    englishWord: 'HARD COPY',
    hausaWord: 'BAYANIN DA AKA BUGO',
    description: 'Wannan shi ne bayanin da aka riga aka bugo shi a jikin takarda daga kwamfyuta.',
    folderPath: 'HARD_COPY',
    image: 'image.jpeg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    {
    englishWord: 'HARD DISK DRIVE (HDD)',
    hausaWord: 'GINSHIKIN RUMBUN AJIYA',
    description: "Wannan shi ne ginshikin rumbun ajiya da ke zuwa da kwamfyuta ko waya wanda yake adana duk wani masarrafi, manhaja, tsari, bayani, ko lissafi a cikin na'ura. A san da cewa, na'urori na zuwa da ginshikin rumbun ajiya masu ƙarfi hauwa-hauwa daban-daban. Misali, mai karfin Giga Bayit ɗari da sittin, Giga Bayit ɗari uku da ashirin, Giga Bayit ɗari biyar, da Tera Bayit ɗaya.",
    folderPath: 'HARD_DISC',
    image: 'image.jpg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    {
    englishWord: 'HASHTAG',
    hausaWord: ' ALAMAR HASHTAG',
    description: 'Wannan wata alama ce (#) da ake amfani da ita wajen bayana wani batu ko kan magana a kafofin sada zumunta irin su Twitter da Instagram.',
    folderPath: 'HASHTAG',
    image: 'image.jpg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    {
    englishWord: 'HEADER',
    hausaWord: 'KANUN SAMA',
    description: 'Wannan wani bayani ne a saman shafi mai shaida aiki ko bayana yanayin aikin.',
    folderPath: 'HEADER',
    image: 'image.png',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    {
    englishWord: 'HEADPHONE',
    hausaWord: 'MASAURARI',
    description: "Wannan wani na’ura ne mai ɗauko sauti daga cikin na'ura zuwa kunnuwa. Akan ɗora shi ne a ka domin a ji sautin da ke fitowa daga kwamfyuta ko waya.",
    folderPath: 'HEAD_PHONE',
    image: 'image.jpg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    {
    englishWord: 'HIBERNATE/SLEEP',
    hausaWord: 'KASHE KWAMFYUTA NA WUCIN-GADI',
    description: 'Wannan wani yanayi ne da mai amfani da kwamfyuta ke kashe ta, amma na wucin-gadi. Idan aka farfaɗo da kwamfyuta daga barci, za a ga cewa dukan alƙuƙan da ke a buɗe kafin a sa ta a wannan yanayin na nan a raye.',
    folderPath: 'HIBERNATE',
    image: 'image.png',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    {
    englishWord: 'HIGHLIGHT',
    hausaWord: 'HASKAKAWA',
    description: 'Wannan shi ne aiwatar da haskaka wani bayani ko jerin kalmomi ta amfani da linzamin kwamfyuta ko kibodi da niyyar sarrafa su. Za a iya kwafa, motsa, ja, goge, canza launi, jan layi a ƙasa, ko kaurara su, da sauran su bayan an yi wannan haskakawan.',
    folderPath: 'HIGHLIGHT',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    {
    englishWord: 'HOME PAGE',
    hausaWord: 'SHAFI NA FARKO',
    description: 'Wannan shi ne shafi na farko da ake gani idan an ziyarci kowane ɗaki a yanar gizo.',
    folderPath: 'HOME_PAGE',
    image: 'image.jpg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    {
    englishWord: 'HOME SCREEN',
    hausaWord: 'ALLON FARI',
    description: 'Wannan shi ne allo na farko da ke fuskar na’urar kwamfyuta ko waya . A wannan allon ko shafin ake ganin jerin alamomin manhajojin da aka dasa a cikin kwamfyutar ko wayar.',
    folderPath: 'HOME_SCREEN',
    image: 'image.jpg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    {
    englishWord: 'HOTSPOT 1 (Connectivity)',
    hausaWord: 'HOTSPOT (Dangane da fasahar sadarwa)',
    description: "Wannan ita ce wata fasahar sadarwa da ke samuwa a cikin na'urori da ke ba da damar yaɗa hanyar shiga yanar gizo ta iska ga wani na'ura daban.",
    folderPath: 'HOTSPOT_1',
    image: 'image.jpg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    {
    englishWord: 'HOTSPOT 2 (Web Design)',
    hausaWord: 'HOTSPOT (Dangane da kirƙirar yanar gizo)',
    description: 'Wannan wani ainihin sarari ne da ake sa wa idan ana ƙirƙiran shafi a yanar gizo domin jawo hankalin masu ziyarta ga wasu bayanai da ake so su sani. A yayinda ake zirga-zirga a shafi a yanar gizo, duk inda kibiyar linzamin kwamfyuta ta canza yanayi daga kibiya zuwa alama ta hannu mai nuna yatsa ɗaya, nan ake sani ko gano Hotspot.',
    folderPath: 'HOTSPOT_2',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    {
    englishWord: 'HTTP',
    hausaWord: 'HTTP',
    description: 'Waɗannan dokoki ne da sai an bi su domin samun damar musanya, da yaɗa ire-iren kowane bayanai a yanar gizo. Kasancewar su ke ba da damar biyan buƙatan kwaso da adana bayanai daga wani shafi a yanar gizo.',
    folderPath: 'HTTP',
    image: 'image.jpg',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    {
    englishWord: 'HYPERLINK',
    hausaWord: 'BAYANI MAI HAƊI',
    description: 'Wannan wani umarni ne, ko kalma, ko hoto na musamman a cikin alƙuƙin da ake aiki da shi wanda ke aiwatar da haɗa wani bayani zuwa wani. Sabon bayanin nan da aka haɗa zai iya kasancewa shafin yanar gizo ne, ko hoto, ko rubutu, ko sauti, ko bidiyo da sauran su..',
    folderPath: 'HYPERLINK',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
    {
    englishWord: 'HYPHENATION',
    hausaWord: 'ƘARA ƊORANTAWA',
    description: "Wannan ita ce wata ƙa'ida ta rubutu mai nuna ɗorantawa wato misali kalmar da ta zo a ƙarshen layi kuma bata ƙare ba ko kuma kalma mai ƙarin dori. Misali: ka-fi-zabo, ko kan-ta-kifta.",
    folderPath: 'HYPHENATION',
    image: 'image.gif',
    audio1: 'audio1',
    audio2: 'audio2',
    audio3: 'audio3',
    },
    
]

export default function H({ navigation }): JSX.Element {
  
 
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
              <Text style={styles.letter}>H</Text>
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
























































































































