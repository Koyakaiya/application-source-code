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
import bgimg from '../../../assets/Landing.png';
import SBFimg5 from '../../../assets/SBFimg5.png';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function CategoryResult({ navigation }): JSX.Element {
  return (
    <>
      <ImageBackground source={bgimg} resizeMode="stretch" style={styles.img}>
        <TouchableOpacity 
          onPress={() => navigation.navigate('HomeStack')}
          style={styles.BackIcon}>
              <Ionicons
                name="arrow-back-circle-outline"
                color="white"
                size={40}
                style={styles.BackIcon}></Ionicons>
            </TouchableOpacity>
        <View style={styles.SBFbars}>
          <LinearGradient
            colors={['#FFFFFF', '#CDF2F645']}
            style={styles.WWWSBFLineargradient}>
            <Image source={SBFimg5} style={styles.SBFimg} />
          </LinearGradient>
        </View>
        
        <Text style={styles.SBFirstText}>Jerin Kalmomi daga Fannin</Text>
        <Text style={styles.SBFirstText}>Karka a anar Gizo</Text>

        <View style={styles.SearchResult}>
          <View style={styles.SearchContent}>
            <TouchableOpacity onPress={() => navigation.navigate('SearchResultScreen')}>
              <Text style={styles.SearchResultText}>Account</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('SearchResultScreen')}>
              <Text style={styles.SearchResultText}>Acivation</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('SearchResultScreen')}>
              <Text style={styles.SearchResultText}>Active Window</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('SearchResultScreen')}>
              <Text style={styles.SearchResultText}>Address Bar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('SearchResultScreen')}>
              <Text style={styles.SearchResultText}>Address Book</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('SearchResultScreen')}>
              <Text style={styles.SearchResultText}>Algorithm</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('SearchResultScreen')}>
              <Text style={styles.SearchResultText}>Alignment</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('SearchResultScreen')}>
              <Text style={styles.SearchResultText}>Analog</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('SearchResultScreen')}>
              <Text style={styles.SearchResultText}>Android</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('SearchResultScreen')}>
              <Text style={styles.SearchResultText}>Ani-Virus</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('SearchResultScreen')}>
              <Text style={styles.SearchResultText}>Apple iOs</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('SearchResultScreen')}>
              <Text style={styles.SearchResultText}>Application Software</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('SearchResultScreen')}>
              <Text style={styles.SearchResultText}>Archive</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('SearchResultScreen')}>
              <Text style={styles.SearchResultText}>Arranae</Text>
            </TouchableOpacity>
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
  SBFbars: {
    height: '13%',
    width: '27%',
    borderRadius: 20,
    borderWidth: 3,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '3%',
  },
  SBFimg: {
    height: '80%',
    width: '80%',
  },
  WWWSBFLineargradient: {
    borderColor: 'white',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:16
  },
  SBFirstText: {
    color: 'white',
    fontWeight: '700',
    fontFamily: 'Inter',
    fontSize: 18,
  },
  SearchResult: {
    marginTop: 13,
    backgroundColor: 'white',
    borderRadius: 10,
    width: '70%',
  },
  SearchContent: {
    paddingLeft: 28,
    paddingRight: 28,
    paddingTop: 12,
    paddingBottom: 12,
    marginBottom: 13,
  },
  SearchResultText: {
    color: '#1B4D90',
    paddingTop: 10,
  },
  BackIcon: {
    marginLeft: '2%',
    marginRight:'1%',
    justifyContent: 'center',
  },
  HeaderContainer:{
    flexDirection:'row',
    justifyContent:'center'
  }
});
