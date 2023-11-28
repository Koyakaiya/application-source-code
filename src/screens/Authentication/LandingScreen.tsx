import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  PixelRatio
} from 'react-native';
import * as React from 'react';
import bgimg from '../../assets/Landing.png';
import eng from '../../assets/eng.png';
import hau from '../../assets/hau.png';
import makks from '../../assets/makks.png';
import arrow from '../../assets/ARROW.png';
import bot from '../../assets/bot.png';
import tw from 'tailwind-react-native-classnames';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { horizontalScale, verticalScale, moderateScale } from '../../utils/metrics';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const fontScale = PixelRatio.getFontScale();
const getFontSize = size => size / fontScale;

export const LandingScreen = ({ navigation }) => {
  return (
    <>
      <View style={{
        flex: 1,
        justifyContent: 'center'
      }}>

        <ImageBackground
          source={bgimg}
          resizeMode="stretch"
          style={styles.backgroundImage}>

          <View style={styles.container}>

            <View style={styles.content}>

              <View style={styles.arrowContainer}>
                <Image source={arrow} style={styles.arrow} />
              </View>

              <View style={{
                width: screenWidth * 1,
                flexDirection: 'row',
                justifyContent: 'center',
                height: screenHeight / 5
              }}>

                <Image source={eng} style={{
                  width: screenWidth * 0.2,
                  height: screenHeight / 9.5,
                  marginHorizontal: moderateScale(5)
                }} />
                <Image source={bot} style={{
                  width: screenWidth * 0.34,
                  height: screenHeight / 5,
                }} />
                <Image source={hau} style={{
                  width: screenWidth * 0.2,
                  height: screenHeight / 9.5,
                  marginHorizontal: moderateScale(5)
                }} />
              </View>

              <View style={{ alignItems: 'center' }}>
                <Image source={makks} style={{
                  width: screenWidth * 0.6,
                  marginBottom: moderateScale(6)
                }} />

                <Text style={styles.infoText}>
                  MATAIMAKIN AMFANI
                </Text>
                <Text style={styles.infoText}>
                  DA KOYON KWAMFYUTA
                </Text>
                <Text style={styles.infoText}>
                  A SAUWAKE
                </Text>
              </View>

              <View style={{
                alignItems: 'center',
                width: screenWidth * 1,
                height: screenHeight / 10
              }}>

                <TouchableOpacity
                  onPress={() => navigation.navigate('WelcomeScreen')}
                  style={styles.Landingbuttons}>
                  <Text style={styles.Landingbuttonstext}>
                    DANNA NAN DOMIN CI GABA
                  </Text>

                  <Ionicons name="arrow-forward-outline" color="#1B4D90" />
                </TouchableOpacity>

              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  infoText: {
    fontFamily: 'Inter-Light',
    fontSize: getFontSize(18),
    color: 'white',
  },
  content: {
    justifyContent: 'center',
    alignContent: 'center',
    width: screenWidth * 1
  },
  container: {
    height: screenHeight,
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrow: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  Landingbuttons: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: moderateScale(30),
    backgroundColor: 'white',
    borderRadius: 30,
    width: screenWidth * 0.75,
    flexDirection: 'row',
    height: screenHeight / 17
  },
  Landingbuttonstext: {
    color: '#1B4D90',
    fontSize: getFontSize(14),
    fontFamily: 'Inter-Regular',
    marginRight: moderateScale(5)
  },
  LandingLineargradient: {
    elevation: 3,
  },
});
