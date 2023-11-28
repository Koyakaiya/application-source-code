import {
    Dimensions,
    Image,
    ImageBackground,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
  import * as React from 'react';
  import bgimg from '../assets/Landing.png';
  import eng from '../assets/eng.png';
  import hau from '../assets/hau.png';
  import makks from '../assets/makks.png';
  import arrow from '../assets/ARROW.png';
  import bot from '../assets/bot.png';
  import tw from 'tailwind-react-native-classnames';
  import LinearGradient from 'react-native-linear-gradient';
  const screenHeight = Dimensions.get('window').height;
  const screenWidth = Dimensions.get('window').width;
  import Ionicons from 'react-native-vector-icons/Ionicons';

  export const DemoLandingScreen = ({ navigation }) => {
    return (
      <>
        <View>
          <ImageBackground source={bgimg} resizeMode="stretch" style={styles.img}>
            <View style={styles.landingcontainer}>
              <View style={styles.landingpage}>
                <View style={styles.landingarrowcontainer}>
                  <Image source={arrow} style={styles.landingarrow} />
                </View>
              
              <View style={tw`mt-2 flex-1 flex-row justify-center bg-red-200 w-full`}>
                  <Image source={eng} style={tw`h-16 w-16 mx-1`} />
                  <Image source={bot} style={tw`h-40 w-32 mx-1`} />
                  <Image source={hau} style={tw`h-16 w-16 mx-1`} />
              </View>
              
              <View style={tw`pt-40 items-center`}>
                  <Image source={makks} style={tw`mb-2`} />
                  <Text style={styles.landinginfo}>BARKA DA ZUWA MAKKS DEMO</Text>
              </View>
              
              <TouchableOpacity
                  onPress={() => navigation.navigate('DemoSearchResult')}
                  style={styles.Landingbuttons}>                  
                    <Text style={styles.Landingbuttonstext}>
                    FARA BINCIKE
                    </Text>
                    <Ionicons name="arrow-forward-outline" color="#1B4D90"/>
              </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </View>
      </>
    );
  };
  /**
   * @author George Fabunmi
   * @description "Idan Programmer on the grind."
   */
  const styles = StyleSheet.create({
    img: {
      height: screenHeight,
      width: screenWidth,
      justifyContent: 'center',
      alignItems: 'center',
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 2,
      padding: 10,
    },
    landinginfo: {
      fontFamily: 'Oxanium-Regular',
      fontSize: 20,
      color: 'white',
    },
    landingpage: {
      justifyContent: 'center',
      alignContent: 'center',
      width: '80%',
      alignItems:'center'
    },
    landingcontainer: {
      height: screenHeight,
      width: screenWidth,
      justifyContent: 'center',
      alignItems: 'center',
      alignContent:'center'
    },
    landingarrowcontainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    landingarrow: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    Landingbuttons: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '10%',
      backgroundColor:'white',
      borderRadius:15,
      width:'50%',
      flexDirection:'row'
    },
    Landingbuttonstext: {
      color: '#1B4D90',
      fontSize: 15,
      marginVertical: '6%',
      marginHorizontal: '10%',
      fontFamily: 'Inter-Regular',
    },
    LandingLineargradient: {
      borderColor: 'white',
      borderWidth: 3,
      borderRadius: 22,
      shadowColor: '#171717',
      shadowOffset: { width: -2, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 1,
      elevation: 3,
    },
    
  });
  