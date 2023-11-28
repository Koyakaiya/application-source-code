import {
  Dimensions,
  Image,
  ImageBackground,
  Modal,
  PixelRatio,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
import bgimg from '../../../assets/Landing.png';
import tw from 'tailwind-react-native-classnames';
import searchbot from '../../../assets/Searchbot.png';
import React = require('react');
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import letbgimg from '../../../assets/letimg.png';
const fontScale = PixelRatio.getFontScale();
const getFontSize = size => size / fontScale;
export default function LettersMenuScreen({ navigation }) {
  return (
    <>

      <ImageBackground source={bgimg} resizeMode="stretch" style={styles.img}>
        <View style={styles.container}>
          <View style={styles.textstylecontainer}>
            <Text style={styles.textstyle}>Zaɓi Harafin Farko na Kalmar</Text>
            <Text style={styles.textstyle2}>da ka ke so ka Bincika</Text>
          </View>
          <View style={styles.searchcontainer}>
            <Image source={searchbot} style={tw`w-20 h-20 mr-10`} />
            <View style={styles.selectmenucontainer}>
              <TouchableOpacity style={styles.menuitems} onPress={() => navigation.navigate('A')}>
                <ImageBackground source={letbgimg} resizeMode='stretch' style={styles.bgletimg}>
                  <Text style={styles.letters}>A</Text>
                </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuitems} onPress={() => navigation.navigate('B')}>
                <ImageBackground source={letbgimg} resizeMode='stretch' style={styles.bgletimg}>
                  <Text style={styles.letters}>B</Text>
                </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuitems} onPress={() => navigation.navigate('C')}>
                <ImageBackground source={letbgimg} resizeMode='stretch' style={styles.bgletimg}>
                  <Text style={styles.letters}>C</Text>
                </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuitems} onPress={() => navigation.navigate('D')}>
                <ImageBackground source={letbgimg} resizeMode='stretch' style={styles.bgletimg}>
                  <Text style={styles.letters}>D</Text>
                </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuitems} onPress={() => navigation.navigate('E')}>
                <ImageBackground source={letbgimg} resizeMode='stretch' style={styles.bgletimg}>
                  <Text style={styles.letters}>E</Text>
                </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuitems} onPress={() => navigation.navigate('F')}>
                <ImageBackground source={letbgimg} resizeMode='stretch' style={styles.bgletimg}>
                  <Text style={styles.letters}>F</Text>
                </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuitems} onPress={() => navigation.navigate('G')}>
                <ImageBackground source={letbgimg} resizeMode='stretch' style={styles.bgletimg}>
                  <Text style={styles.letters}>G</Text>
                </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuitems} onPress={() => navigation.navigate('H')}>
                <ImageBackground source={letbgimg} resizeMode='stretch' style={styles.bgletimg}>
                  <Text style={styles.letters}>H</Text>
                </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuitems} onPress={() => navigation.navigate('I')}>
                <ImageBackground source={letbgimg} resizeMode='stretch' style={styles.bgletimg}>
                  <Text style={styles.letters}>I</Text>
                </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuitems} onPress={() => navigation.navigate('J')}>
                <ImageBackground source={letbgimg} resizeMode='stretch' style={styles.bgletimg}>
                  <Text style={styles.letters}>J</Text>
                </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuitems} onPress={() => navigation.navigate('K')}>
                <ImageBackground source={letbgimg} resizeMode='stretch' style={styles.bgletimg}>
                  <Text style={styles.letters}>K</Text>
                </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuitems} onPress={() => navigation.navigate('L')}>
                <ImageBackground source={letbgimg} resizeMode='stretch' style={styles.bgletimg}>
                  <Text style={styles.letters}>L</Text>
                </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuitems} onPress={() => navigation.navigate('M')}>
                <ImageBackground source={letbgimg} resizeMode='stretch' style={styles.bgletimg}>
                  <Text style={styles.letters}>M</Text>
                </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuitems} onPress={() => navigation.navigate('N')}>
                <ImageBackground source={letbgimg} resizeMode='stretch' style={styles.bgletimg}>
                  <Text style={styles.letters}>N</Text>
                </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuitems} onPress={() => navigation.navigate('O')}>
                <ImageBackground source={letbgimg} resizeMode='stretch' style={styles.bgletimg}>
                  <Text style={styles.letters}>O</Text>
                </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuitems} onPress={() => navigation.navigate('P')}>
                <ImageBackground source={letbgimg} resizeMode='stretch' style={styles.bgletimg}>
                  <Text style={styles.letters}>P</Text>
                </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuitems} onPress={() => navigation.navigate('Q')}>
                <ImageBackground source={letbgimg} resizeMode='stretch' style={styles.bgletimg}>
                  <Text style={styles.letters}>Q</Text>
                </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuitems} onPress={() => navigation.navigate('R')}>
                <ImageBackground source={letbgimg} resizeMode='stretch' style={styles.bgletimg}>
                  <Text style={styles.letters}>R</Text>
                </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuitems} onPress={() => navigation.navigate('S')}>
                <ImageBackground source={letbgimg} resizeMode='stretch' style={styles.bgletimg}>
                  <Text style={styles.letters}>S</Text>
                </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuitems} onPress={() => navigation.navigate('T')}>
                <ImageBackground source={letbgimg} resizeMode='stretch' style={styles.bgletimg}>
                  <Text style={styles.letters}>T</Text>
                </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuitems} onPress={() => navigation.navigate('U')}>
                <ImageBackground source={letbgimg} resizeMode='stretch' style={styles.bgletimg}>
                  <Text style={styles.letters}>U</Text>
                </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuitems} onPress={() => navigation.navigate('V')}>
                <ImageBackground source={letbgimg} resizeMode='stretch' style={styles.bgletimg}>
                  <Text style={styles.letters}>V</Text>
                </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuitems} onPress={() => navigation.navigate('W')}>
                <ImageBackground source={letbgimg} resizeMode='stretch' style={styles.bgletimg}>
                  <Text style={styles.letters}>W</Text>
                </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuitems} >
                <ImageBackground source={letbgimg} resizeMode='stretch' style={styles.bgletimg}>
                  <Text style={styles.letters}>X</Text>
                </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuitems} >
                <ImageBackground source={letbgimg} resizeMode='stretch' style={styles.bgletimg}>
                  <Text style={styles.letters}>Y</Text>
                </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuitems} onPress={() => navigation.navigate('Z')}>
                <ImageBackground source={letbgimg} resizeMode='stretch' style={styles.bgletimg}>
                  <Text style={styles.letters}>Z</Text>
                </ImageBackground>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.SCbutton}>
            <LinearGradient
              colors={['#FFFFFF', '#FFFFFF']}
              style={styles.SCLineargradient}>
              <Text style={styles.SCbuttonstext}>KOMA DA NI BAYA</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </>
  );
}
const styles = StyleSheet.create({
  img: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  container: {
    height: screenHeight / 1.12,
    width: screenWidth * 0.80,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:'5%'
  },
  SCbuttonstext: {
    color: '#1B4D90',
    fontSize: getFontSize(12),
    marginHorizontal: '15%',
    marginVertical: '3%',
    fontFamily: 'Inter-Regular',
    alignItems: 'center',
  },
  SCLineargradient: {
    borderColor: 'white',
    borderWidth: 3,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  SCtextstyle: {
    color: '#1B4D90',
    fontFamily: 'Inter-Regular',
    fontSize: getFontSize(12),
  },
  SCbutton: {
    borderRadius: 40,
    marginTop: '10%',
  },
  textstyle: {
    fontFamily: 'Inter-Bold',
    fontSize: getFontSize(15),
    color: 'white',
    marginBottom: '0%',
  },
  textstyle2: {
    fontFamily: 'Inter-Bold',
    fontSize: getFontSize(15),
    color: 'white',
    marginBottom: '10%',
    lineHeight: 16,
  },
  textstylecontainer: {
    width: screenWidth * 0.7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchcontainer: {
    width: screenWidth * 0.8,
    height: screenHeight/2,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '13%',
  },
  selectmenucontainer: {
    width: screenWidth * 0.8,
    height: screenHeight/2.3,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '23%',
    // backgroundColor:'black'
  },
  menuitems: {
    width: screenWidth * 0.1,
    height: screenHeight/20,
    margin: '2.5%',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
  },
  bgletimg: {
    width: screenWidth * 0.1,
    height: screenHeight/18.5,
    borderRadius: 12,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '2%'
  },
  letters: {
    fontFamily: 'Inter-Bold',
    color: 'white',
    fontSize: getFontSize(25),
    justifyContent:'center',
    alignItems:'center'
  },
  BackIcon: {
    marginLeft: '2%',
    marginRight: '1%',
    justifyContent: 'center',
    marginBottom: '4%'
  },
  HeaderContainer: {
    width: screenHeight * 1,
    height: '8%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    alignContent: 'center'
  },
});
