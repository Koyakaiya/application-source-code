import React = require('react');
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
import bgimg from '../../assets/Landing.png';
import SBFimg1 from '../../assets/SBFimg1.png';
import SBFimg2 from '../../assets/SBFimg2.png';
import SBFimg3 from '../../assets/SBFimg3.png';
import SBFimg4 from '../../assets/SBFimg4.png';
import SBFimg6 from '../../assets/SBFimg5.png';
import SBFimg5 from '../../assets/SBFimg6.png';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function CategoryScreen({ navigation }): JSX.Element {
  return (
    <>
      <ImageBackground source={bgimg} resizeMode="stretch" style={styles.img}>
        <View style={styles.SBFcontainer}>
          <View style={styles.HeaderContainer}>
          <TouchableOpacity 
          onPress={() => navigation.navigate('HomeStack')}
          style={styles.BackIcon}>
              <Ionicons
                name="arrow-back-circle-outline"
                color="white"
                size={34}
                style={styles.BackIcon}></Ionicons>
            </TouchableOpacity>
            <View style={styles.textcontainer}>
              <Text style={styles.SBFirstText}>
            Shafin Yin Bincike Bisa Ga Fannoni
          </Text>
          <Text style={styles.SBFSecondText}>
            Ga Fannoni Shida da Za Ka Iya Gudanar da Bincike
          </Text>
            </View>
          </View>
          
          {/* First Bar */}
          <TouchableOpacity onPress={() => navigation.navigate('CategoryResult')} style={styles.SBFbars}>
            <View style={styles.SBFimages}>
              <Image source={SBFimg1} style={styles.SBFimg} />
            </View>
            <View style={styles.SBFtextField}>
              <Text style={styles.SBFtexts}>
                Tubalin Fahimtar Ilimin Fasahar Sadarwa
              </Text>
            </View>
          </TouchableOpacity>
          {/* Second Bar */}
          <TouchableOpacity onPress={() => navigation.navigate('CategoryResult')} style={styles.SBFbars}>
            <View style={styles.SBFimages}>
              <Image source={SBFimg2} style={styles.SBFimgfst} />
            </View>
            <View style={styles.SBFtextField}>
              <Text style={styles.SBFtexts}>Tsaron Kwamfyuta</Text>
            </View>
          </TouchableOpacity>
          {/* Third Bar */}
          <TouchableOpacity onPress={() => navigation.navigate('CategoryResult')} style={styles.SBFbars}>
            <View style={styles.SBFimages}>
              <Image source={SBFimg3} style={styles.SBFimgfst} />
            </View>
            <View style={styles.SBFtextField}>
              <Text style={styles.SBFtexts}>
                Ayyuka da Manhajojin Kwamfyuta
              </Text>
            </View>
          </TouchableOpacity>
          {/* Fourth Bar */}
          <TouchableOpacity onPress={() => navigation.navigate('CategoryResult')} style={styles.SBFbars}>
            <View style={styles.SBFimages}>
              <Image source={SBFimg4} style={styles.SBFimgfst} />
            </View>
            <View style={styles.SBFtextField}>
              <Text style={styles.SBFtexts}>Na’urorin Hadi na Kwamfyuta</Text>
            </View>
          </TouchableOpacity>
          {/* Fifth Bar */}
          <TouchableOpacity onPress={() => navigation.navigate('CategoryResult')} style={styles.SBFbars}>
            <View style={styles.SBFimages}>
              <Image source={SBFimg5} style={styles.SBFimgfst} />
            </View>
            <View style={styles.SBFtextField}>
              <Text style={styles.SBFtexts}>Masarafai da Manhajoji </Text>
            </View>
          </TouchableOpacity>
          {/* Sixth Bar */}
          <TouchableOpacity onPress={() => navigation.navigate('CategoryResult')} style={styles.SBFbars}>
            <View style={styles.SBFimages}>
              <Image source={SBFimg6} style={styles.SBFimgfst} />
            </View>
            <View style={styles.SBFtextField}>
              <Text style={styles.SBFtexts}>Harka a Yanar Gizo</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.SBFbuttons}>
            <LinearGradient
              colors={['#FFFFFF', '#CDF2F645']}
              style={styles.SBFLineargradient}>
              <Text style={styles.SBFbuttonstext}>KOMA DA NI BAYA</Text>
            </LinearGradient>
          </View>
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
  SBFcontainer: {
    height: screenHeight,
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  SBFirstText: {
    color: 'white',
    fontWeight: '700',
    fontFamily: 'Inter',
    fontSize: 18,
  },
  SBFSecondText: {
    color: 'white',
    fontSize: 13,
    marginBottom: '3%',
  },
  SBFbars: {
    height: '11%',
    width: '80%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 20,
    borderWidth: 3,
    borderColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '3%',
  },
  SBFimages: {
    height: '85%',
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  SBFtextField: {
    height: '85%',
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  SBFtexts: {
    color: '#1B4D90',
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    textAlign: 'center',
  },
  SBFbuttons: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 3,
    borderRadius: 40,
    marginTop:10
  },
  SBFbuttonstext: {
    color: '#1B4D90',
    fontSize: 16,
    marginLeft: '4%',
    marginRight: '4%',
    marginTop: '2%',
    marginBottom: '2%',
    fontFamily: 'Inter-Regular',
  },
  SBFLineargradient: {
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 40,
  },
  SBFimg: {
    height: '100%',
    width: '100%',
  },
  SBFimgfst: {
    height: '100%',
    width: '88%',
  },
  BackIcon: {
    marginLeft: '2%',
    marginRight:'1%',
    justifyContent: 'center',
  },
  HeaderContainer:{
    width:'100%',
    height:'8%',
    justifyContent:'flex-start',
    alignItems:'center',
    flexDirection:'row',
    alignContent:'center'
  },
  textcontainer:{
    width:'73%',
    height:'100%',
    justifyContent:'center',
    alignItems:'center',
    
  }
});
