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
import bgimg from '../../../assets/Landing.png';
import Ionicons from 'react-native-vector-icons/Ionicons';
import letbgimg from '../../../assets/letimg.png';
const fontScale = PixelRatio.getFontScale();
const getFontSize = size => size / fontScale;
import axios from 'axios';
import Navigation from '../../../components/BottomNavigation/Navigation';
import PreloaderModal from '../../../utils/Preloader';

 
export const words = [
  {
   englishWord: 'ZIP DRIVE',
   hausaWord: 'GURBIN MALA',
   description: 'Wannan wata kaɗaitaccen na ura ce da ake haɗa ta da kwamfyuta kuma ana amfani da ita ne wajen adana bayanai daga cikin faifan flofi wato Floppy Disk.',
   folderPath: 'ZIP_DRIVE',
   image: 'image.jpg',
   audio1: 'audio1',
   audio2: 'audio2',
   audio3: 'audio3',
 },
 {
   englishWord: 'ZIP FILE',
   hausaWord: 'DUNƘULALLEN FAYILOLI',
   description: 'A harkan adana da yaɗa bayanai, wannan shi ne rage nauyin fayil ɗaya ko fayiloli ta hanyar amfani da manhajar dunƙulewa, wato Zip File Compressor su fito a dunƙulallen yanayi domin samun damar yaɗa su a sauwake. A san da cewa, kafin wanda aka tura wa dunƙulallen fayil ya samu damar ganin abubuwan da ke ƙunshe a ciki, sai ya warware dunƙulewar ta hanyar amfani da wannan manhajar dukulewan.',
   folderPath: 'ZIP_FILE',
   image: 'image.jpg',
   audio1: 'audio1',
   audio2: 'audio2',
   audio3: 'audio3',
 },
 {
  englishWord: 'ZIP FILE COMPRESSOR',
  hausaWord: 'MANHAJAR RAGE NAUYIN FAYIL',
  description: 'Wannan shi ne manhajar da ake amfani da shi wajen rage nauyin fayil ko fayiloli domin samun damar yad’a su a sauwake. Dukan fayil da aka rage masu nauyi da wannan manhajar suna fitowa ne a wani dunƙulallen yanayi da ake kira zip file.',
  folderPath: 'ZIP_FILE_COMPRESSOR',
  image: 'image.jpg',
  audio1: 'audio1',
  audio2: 'audio2',
  audio3: 'audio3',
},
{
  englishWord: 'ZOOM',
  hausaWord: 'KUSANTA/NESANTA',
  description: 'Wannan shi ne aiwatar da kusanta ko nesanta bayani ko hoto domin ya fito fili sosai ko kuma a rage faɗinta. Kamar dai na yanayin kyamarar ɗaukar hoto.',
  folderPath: 'ZOOM',
  image: 'image.gif',
  audio1: 'audio1',
  audio2: 'audio2',
  audio3: 'audio3',
},
{
  englishWord: 'ZOOM IN',
  hausaWord: 'KUSANTAWA',
  description: 'Wannan shi ne ara faɗin shafin alƙuƙi domin kara girman wani hoto, bidiyo, ko ɓangare a cikin manhajan da ake aiki da shi.',
  folderPath: 'ZOOM_IN',
  image: 'image.gif',
  audio1: 'audio1',
  audio2: 'audio2',
  audio3: 'audio3',
},
{
  englishWord: 'ZOOM OUT',
  hausaWord: 'NESANTAWA',
  description: 'Wannan shi ne rage faɗin shafin alƙuƙi domin ƙanƙantar da wani hoto, bidiyo, ko bangare a cikin manhajan da ake aiki da shi.',
  folderPath: 'ZOOM_OUT',
  image: 'image.gif',
  audio1: 'audio1',
  audio2: 'audio2',
  audio3: 'audio3',
},
]

export default function Y({ navigation }): JSX.Element {
  
 
  const [isLoading, setIsLoading] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState('');
  const [modalVisible, setModalVisible] = React.useState(false); // State variable for the modal visibility
  // Define the handleAccountPress function
  
  return (
    <>
      <ImageBackground source={bgimg} resizeMode="stretch" style={styles.img}>
        <View style={{height:'93%', width:'100%', flex:1, alignItems:'center'}}>
        <Text style={styles.HeaderText}>Matsa rubutu don samun bincike</Text>
        <View style={styles.SearchResult}>
          <View style={styles.SearchLetterResult}>
            <ImageBackground source={letbgimg} style={styles.letimg}>
              <Text style={styles.letter}>Z</Text>
            </ImageBackground>
            <TouchableOpacity onPress={() => navigation.navigate('LettersMenuScreen')} style={styles.BackIcon}>
              <Ionicons
                name="arrow-back-circle-outline"
                color="#A9A9A9"
                size={60}
                style={styles.BackIcon}></Ionicons>
            </TouchableOpacity>
          </View>
          <ScrollView>
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