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
import trivia from '../../assets/Trivia.png';
import kacici from '../../assets/kacici.png';
import award from '../../assets/award.png';
import thinkinbot from '../../assets/thinkingbot.png';
import globe from '../../assets/globe.png';
import LinearGradient from 'react-native-linear-gradient';
import { InAppBrowser } from 'react-native-inappbrowser-reborn';

export const QuizHomePage = (): JSX.Element => {
  const openQuizInAppBrowser = async () => {
    try {
      const imageUrl =
        'https://www.figma.com/proto/yO7tm1Vl9rgNlqGRwnzOhl/Kacici-Kacici?page-id=0%3A1&type=design&node-id=8-4&viewport=521%2C484%2C0.12&t=hjjdb7BeUDrnRhhf-1&scaling=min-zoom&mode=design';

      if (await InAppBrowser.isAvailable()) {
        await InAppBrowser.open(imageUrl, {
          showTitle: true,
          enableUrlBarHiding: true,
        });
      } else {
        console.error('In-app browser is not available');
      }
    } catch (error) {
      console.error('Error opening in-app browser:', error);
    }
  };
  return (
    <>
      <ImageBackground source={bgimg} resizeMode="stretch" style={styles.img}>
        <View style={styles.SBFcontainer}>
          <Image source={trivia} style={styles.triviamainicon} />
          <Image source={kacici} style={styles.kaciciicon} />
          <View style={styles.triviabotcontent}>
            <Image source={award} style={styles.triviaaward} />
            <Image source={thinkinbot} style={styles.triviabot} />
            <Image source={globe} style={styles.triviaglobe} />
          </View>
          <View style={styles.triviatextcontainer}>
            <Text style={styles.triviatext}>
              JARRABA ILIMIN KA NA FASAHAR SADARWA!
            </Text>
          </View>
          <TouchableOpacity
            onPress={openQuizInAppBrowser}
            style={styles.SBFbuttons}>
            <LinearGradient
              colors={['#9F53FF9C', '#5353FF97']}
              style={styles.SBFLineargradient}>
              <Text style={styles.SBFbuttonstext}>DANNA NAN DOMIN FARAWA</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </>
  );
};
const styles = StyleSheet.create({
  img: {
    height: screenHeight,
    width: screenWidth,
    justifyContent: 'center',
    alignContent: 'center',
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
  audiodetailsContainer: {
    width: '80%',
    height: '7%',
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  detailsname: {
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    width: '50%',
  },
  hautranslationtext: {
    fontFamily: 'Inter-Regular',
    fontSize: 13,
    marginLeft: 15,
  },
  engtranslationtext: {
    fontFamily: 'Inter-Regular',
    fontSize: 15,
    color: '#1B4D90',
    width: '100%',
    fontWeight: '700',
    marginLeft: 15,
  },
  audioexplanationContainer: {
    width: '100%',
    flexDirection: 'row',
  },
  explanation: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15,
  },
  description: {},
  exptranslationtext: {
    fontFamily: 'Inter-Regular',
    fontSize: 15,
    color: '#1B4D90',
    width: '100%',
    fontWeight: '700',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 15,
  },
  audioContainer: {
    width: '50%',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 15,
    marginRight: 15,
  },
  descriptiontext: {
    color: '#1B4D90',
    marginLeft: 15,
    marginTop: 15,
    marginRight: 15,
    marginBottom: 15,
  },
  diagramcontainer: {
    width: '100%',
    justifyContent: 'center',
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 5,
  },
  givcontainer: {
    width: '80%',
    height: '25%',
  },
  giftexts: {
    color: 'white',
    fontWeight: '700',
    fontFamily: 'Inter',
    fontSize: 18,
    marginLeft: 15,
    marginTop: 20,
  },
  triviabotcontent: {
    flexDirection: 'row',
    height: '18%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  triviatextcontainer: {
    width: '50%',
  },
  triviatext: {
    color: 'white',
    fontFamily: 'Inter-Medium',
    fontSize: 18,
    textAlign: 'center',
  },
  triviamainicon: {
    height: '17%',
    width: '33%',
  },
  kaciciicon: {
    height: '20%',
    width: '70%',
  },
  triviaaward: {
    height: '50%',
    width: '15%',
    marginTop: 24,
  },
  triviabot: {
    height: '100%',
    width: '24%',
    marginBottom: 38,
  },
  triviaglobe: {
    height: '42%',
    width: '15%',
    marginTop: 35,
    marginLeft: 10,
  },
  SBFbuttons: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 24,
    marginTop: 24,
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  SBFbuttonstext: {
    color: 'white',
    fontSize: 13,
    marginVertical: '3%',
    marginHorizontal: '4%',
    fontFamily: 'Inter-Regular',
  },
  SBFLineargradient: {
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 22,
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
