import React = require('react');
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
import bgimg from '../assets/Landing.png';
import Ionicons from 'react-native-vector-icons/Ionicons';
import letbgimg from '../assets/letimg.png';

export default function DemoSearchResult({ navigation }): JSX.Element {
  return (
    <>
      <ImageBackground source={bgimg} resizeMode="stretch" style={styles.img}>
        <Text style={styles.HeaderText}>Matsa rubutu don samun bincike</Text>
        <View style={styles.SearchResult}>
          <View style={styles.SearchLetterResult}>
            <ImageBackground source={letbgimg} style={styles.letimg}>
              <Text style={styles.letter}>A-Z</Text>
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
          <TouchableOpacity onPress={() => navigation.navigate('Account')}>
              <Text style={styles.SearchResultText}>Account</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('AddressBar')}>
              <Text style={styles.SearchResultText}>Address Bar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Algorithm')}>
              <Text style={styles.SearchResultText}>Algorithm</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Contents')}>
              <Text style={styles.SearchResultText}>Contents</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Cookies')}>
              <Text style={styles.SearchResultText}>Cookies</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('CoverPage')}>
              <Text style={styles.SearchResultText}>Cover page</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Firewall')}>
              <Text style={styles.SearchResultText}>Firewall</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Flier')}>
              <Text style={styles.SearchResultText}>Flier</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('FlightMode')}>
              <Text style={styles.SearchResultText}>Flight Mode</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('FloppyDisk')}>
              <Text style={styles.SearchResultText}>Floppy Disk</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('HardDisk')}>
              <Text style={styles.SearchResultText}>Hard Disk</Text>
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
  letimg:{
    width:'67%',
    height:'100%'
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
    paddingLeft: 44,
    paddingRight: 44,
    paddingTop: 12,
    paddingBottom: 12,
    marginBottom: 13,
  },
  SearchResultText: {
    color: '#1B4D90',
    paddingTop: 10,
  },
  SearchLetterResult: {
    flexDirection: 'row',
    marginLeft: 40,
    marginRight: 28,
    marginTop: 28,
    marginBottom: 12,
    width: '80%',
    justifyContent: 'space-between',
  },
  lettercontainer: {
    backgroundColor: '#1B4D90',
    margin: 4,
    textAlign: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: '34%',
    borderWidth: 3,
    borderColor: '#A9A9A9',
  },
  letter: {
    color: 'white',
    fontSize: 37,
    fontFamily: 'Inter-Bold',
    textAlign:'left',
    justifyContent:'flex-start',
    alignContent:'center',
    marginLeft:'12%'
  },
  BackIcon: {
    marginRight: '3%',
    justifyContent: 'center',
  },
  HeaderText:{
    color:'white',
    fontFamily:'Inter-Regular',
  }
});
