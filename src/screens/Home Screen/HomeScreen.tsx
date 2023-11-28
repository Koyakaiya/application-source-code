import {
  Dimensions,
  Image,
  ImageBackground,
  Linking,
  Modal,
  PixelRatio,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
import bgimg from '../../assets/Landing.png';
import tw from 'tailwind-react-native-classnames';
import learn from '../../assets/learn.png';
import trivial from '../../assets/Trivial.png';
import search from '../../assets/Search.png';
import searchfile from '../../assets/filesearch.png';
import * as React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { InAppBrowser } from 'react-native-inappbrowser-reborn';
import profimg from '../../assets/profileimg.png'
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { verticalScale, horizontalScale, moderateScale } from '../../utils/metrics';
const fontScale = PixelRatio.getFontScale();
const getFontSize = size => size / fontScale;

export const HomeScreen = ({ navigation }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    const checkModalDisplay = async () => {
      // Check if the modal has been displayed before
      try {
        const modalDisplayed = await AsyncStorage.getItem('modalDisplayed');
        if (!modalDisplayed) {
          setIsModalVisible(true);
          // Mark the modal as displayed
          await AsyncStorage.setItem('modalDisplayed', 'true');
        }
      } catch (error) {
        console.error('Error checking AsyncStorage:', error);
      }
    };

    checkModalDisplay();
  }, []);
  //
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    // Fetch user data from AsyncStorage when the component mounts
    fetchUserData();
  }, []);
  const fetchUserData = async () => {
    try {
      // Retrieve user data from AsyncStorage
      const storedUserData = await AsyncStorage.getItem('userData');

      if (storedUserData) {
        // Parse the stored data as JSON
        const userDataObject = JSON.parse(storedUserData);
        setUserData(userDataObject);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };


  return (
    <>
      <Modal
        animationType="slide" // You can change the animation type as per your preference
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => {
          // Handle modal close, if needed
          setIsModalVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={{ width: '70%', height: '30%', backgroundColor: 'white', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{fontSize:getFontSize(16), fontFamily:'Inter-SemiBold', color:'black', marginVertical:'3%'}}>Fara amfani da M.A.K.K.S</Text>
            <TouchableOpacity onPress={() => setIsModalVisible(false)} style={{ marginVertical: '4%', width: '80%', height: '18%', backgroundColor: "#2460A7", borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ color: 'white', fontFamily: 'Inter-Regular', fontSize: 16 }}>More kyauta da iyaka</Text>
            </TouchableOpacity>
            <Text style={{ color: 'gray', fontFamily: 'Inter-Regular', fontSize: 15 }}>or</Text>
            <TouchableOpacity onPress={() => navigation.navigate('SelectBundle')} style={{ elevation: 3, marginVertical: '4%', width: '80%', height: '18%', backgroundColor: "#2460A7", borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ color: 'white', fontFamily: 'Inter-Regular', fontSize: 16 }}>Zabi tsari mara iyaka</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>


      <ImageBackground source={bgimg} resizeMode="stretch" style={styles.img}>
        <View style={styles.container}>
          <View style={styles.headercontainerbar}>
            <LinearGradient
              colors={['#FFFFFF', '#FFFFFF']}
              style={styles.headercontainer}>
              <View
                style={{ 
                width: screenWidth * 0.288, 
                height: screenHeight/7, 
                borderRadius: 70, 
                borderWidth: 3, 
                borderColor: 'white', 
                elevation: 4, 
                justifyContent:'center',
                alignItems:'center'
                                }}>
                <Image source={profimg} style={styles.profileimage} />
              </View>
              {userData ? (
                <>
                  <Text style={styles.textname}>{`Barka ${userData.firstname}!`}</Text>
                  <Text style={styles.textbio}>Me ka ke so ka yi yau?</Text>
                </>
              ) : (
                <Text style={{ color: 'black', fontFamily: 'Inter-Regular' }}>A ɗan dakata... MAKKS na loda bayananka </Text>
              )}
            </LinearGradient>
          </View>


          <TouchableOpacity
            style={styles.barcontainer}
            onPress={() => navigation.navigate('LettersMenuScreen')}>
            <LinearGradient
              colors={['#FFFFFF', '#FFFFFF']}
              style={styles.homesectionbars}>
              <View style={styles.imagecontent}>
                <Image source={learn} style={styles.image} />
              </View>
              <View style={styles.contentcontainer}>
                <Text style={styles.homesectionbarstext}>
                  Bincike da Fasara Kalmomi Bisa ga Tsarin Jerin Harrufa
                </Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>


          <TouchableOpacity
            onPress={() => navigation.navigate('')}
            style={styles.barcontainer}>
            <LinearGradient
              colors={['#FFFFFF', '#FFFFFF']}
              style={styles.homesectionbars}>
              <View style={styles.imagecontent}>
                <Image source={search} style={styles.image1} />
              </View>
              <View style={styles.contentcontainer}>
                <Text style={styles.homesectionbarstext}>
                  Shigar da na ka Kalmomi domin Bincike da Fasara
                </Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('QuizHome')}
            style={styles.barcontainer}>
            <LinearGradient
              colors={['#FFFFFF', '#FFFFFF']}
              style={styles.homesectionbars}>
              <View style={styles.imagecontent}>
                <Image source={trivial} style={styles.image} />
              </View>
              <View style={styles.contentcontainer}>
                <Text style={styles.homesectionbarstext}>
                  Shiga Gasar Kacici-Kacici na Mako-Mako
                </Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </>
  );
};
/**
 * @author George Fabunmi
 * @description "Idan Programmer on the grind."
 */
const styles = StyleSheet.create({
  img: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  container: {
    height: screenHeight/1.12,
    width: screenWidth*1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileimage: {
    height: screenHeight/7.20,
    width: screenWidth*0.281,
  },
  headercontainerbar: {
    width: screenWidth * 0.81,
    height: screenHeight/5.7,
    borderRadius: 25,
    marginTop: '8%'
  },
  headercontainer: {
    width: screenWidth * 0.8,
    height: screenHeight/6,
    borderRadius: 21,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textname: {
    fontFamily: 'Inter-Bold',
    color: '#2460A7',
    fontSize: getFontSize(24),
    textAlign: 'center',
  },
  textbio: {
    fontFamily: 'Inter-Regular',
    color: '#2460A7',
    fontSize: getFontSize(18),
    lineHeight: getFontSize(20),
    marginBottom: '26%',
  },
  homesectionbars: {
    width: screenWidth * 0.80,
    flexDirection: 'row',
    height: screenHeight/8.3,
    justifyContent: 'center',
    borderRadius: 15,
    alignItems: 'center'
    // paddingHorizontal: '4%',
  },
  homesectionbarstext: {
    color: '#2460A7',
    textAlign: 'center',
    lineHeight: getFontSize(20),
    fontSize: getFontSize(15),
    fontFamily: 'Inter-Regular',
    width: '100%',
    height: '100%',
    // backgroundColor:'black'
    // paddingHorizontal:'2%'
  },
  barcontainer: {
    width: screenWidth * 0.81,
    height: screenHeight/8,
    borderRadius: 20,
    marginTop: '6%',
  },
  itemscontainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagecontent: {
    height: screenHeight/9,
    width: screenWidth * 0.18,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    height: screenHeight/14,
    width: screenWidth * 0.14,
    margin: '10%',
  },
  contentcontainer: {
    width: screenWidth*0.58,
    height: screenHeight/12,
    paddingTop:'3%'
  },
  image1: {
    height: '70%',
    width: '70%',
    margin: '10%',
    marginTop: '20%',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalText: {
    fontSize: getFontSize(24),
    color: 'white',
  },
  modalCloseButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#2460A7',
    borderRadius: 5,
  },
  modalCloseButtonText: {
    color: 'white',
    fontSize: getFontSize(16),
  },
});

