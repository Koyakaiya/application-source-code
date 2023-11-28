import * as React from 'react';
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
import bgimg from '../../assets/Landing.png';
import LinearGradient from 'react-native-linear-gradient';

export const QuizQuestionPage = (): JSX.Element => {
  return (
    <>
      <ImageBackground source={bgimg} resizeMode="stretch" style={styles.img}>
        <View style={styles.QScontainer}>
          <View style={styles.scoreboard}>
            <View style={styles.timercontainer}>
              <Text style={styles.timernumber}>TIMER</Text>
              <View style={styles.LGcontainer}>
                <LinearGradient
                  colors={['#1B4D90E5', '#5353FF7A']}
                  style={styles.timercountcontainer}>
                  <Text style={styles.timercount}>01:30</Text>
                </LinearGradient>
              </View>
            </View>
            <View style={styles.scorecountcontainer}>
              <View style={styles.LGScontainer}>
                <LinearGradient
                  colors={['#F5F5F5', '#F5F5F5']}
                  style={styles.scorecountercontainer}>
                  <View style={styles.scorecontent}>
                    <Text style={styles.scoretext}>SCORE</Text>
                    <Text style={styles.score}>30</Text>
                  </View>
                </LinearGradient>
              </View>
            </View>
            <View style={styles.questioncountcontainer}>
              <Text style={styles.timernumber}>QUESTION</Text>
              <View style={styles.LGcontainer}>
                <LinearGradient
                  colors={['#1B4D90E5', '#5353FF7A']}
                  style={styles.timercountcontainer}>
                  <Text style={styles.timercount}>3/10</Text>
                </LinearGradient>
              </View>
            </View>
          </View>
          <View style={styles.questioncontainer}>
            <Text style={styles.question}>
              A harkan aikawa da imeli, me ake kiran bayanin da aka makala a
              jikin sako da za a aika?
            </Text>
          </View>
          <View style={styles.questionoptionscontainer}>
            <View style={styles.questionoptions}>
              <Text style={styles.questiontext}>INBOX</Text>
            </View>
            <View style={styles.questionoptions}>
              <Text style={styles.questiontext}>SENT MAIL</Text>
            </View>
            <View style={styles.questionoptions}>
              <Text style={styles.questiontext}>DRAFT</Text>
            </View>
            <View style={styles.questionoptions}>
              <Text style={styles.questiontext}>ATTACHMENT</Text>
            </View>
          </View>

          <View style={styles.SBFbuttons}>
            <LinearGradient
              colors={['#9F53FF9C', '#5353FF97']}
              style={styles.QuizLineargradient}>
              <Text style={styles.Quizbuttonstext}>CONTINUE</Text>
            </LinearGradient>
          </View>
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
  QScontainer: {
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
    borderWidth: 1.5,
    borderRadius: 24,
    marginTop: 24,
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  Quizbuttonstext: {
    color: 'white',
    fontSize: 13,
    marginVertical: '2.5%',
    marginHorizontal: '17%',
    fontFamily: 'Inter-Regular',
  },
  QuizLineargradient: {
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 22,
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  scoreboard: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'center',
    height: '18%',
    marginBottom: 20,
  },
  displaytimer: {
    width: '100%',
    borderRadius: 17,
  },
  timergradient: {
    width: '20%',
    borderRadius: 17,
    border: 2,
  },
  questioncontainer: {
    height: '25%',
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
  question: {
    fontSize: 17,
    textAlign: 'center',
    fontFamily: 'Inter-Regular',
    color: 'black',
    marginHorizontal: 30,
  },
  questionoptionscontainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '80%',
    height: '30%',
    justifyContent: 'center',
    alignContent: 'center',
  },
  questiontext: {
    fontFamily: 'Inter-Regular',
    color: 'black',
  },
  questionoptions: {
    height: '40%',
    width: '43%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 20,
    borderWidth: 3,
    borderColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '2.5%',
    marginHorizontal: '2.5%',
    textAlign: 'center',
  },
  timercontainer: {
    width: '30%',
    height: '100%',
    justifyContent: 'center',
    alignContent: 'center',
  },
  questioncountcontainer: {
    width: '30%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scorecountcontainer: {
    width: '40%',
    height: '100%',
    justifyContent: 'center',
    alignContent: 'center',
  },
  timernumber: {
    color: 'white',
    fontFamily: 'Inter-Regular',
    fontSize: 11,
    textAlign: 'center',
  },
  timerdisplay: {
    width: '100%',
    height: '40%',
    backgroundColor: 'white',
  },
  timercount: {
    color: 'white',
    fontFamily: 'Oxanium-Regular',
    fontSize: 17,
    textAlign: 'center',
  },
  timercountcontainer: {
    width: '100%',
    height: '100%',
    borderRadius: 18,
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 0,
  },
  LGcontainer: {
    width: '75%',
    height: '34%',
    border: 10,
    borderColor: '#FFFFFFA1',
    borderWidth: 4,
    borderRadius: 22,
    marginTop: 2,
    marginHorizontal: 12,
  },
  scorecontainer: {
    width: '80%',
    height: '70%',
    borderRadius: 60,
    justifyContent: 'center',
    alignContent: 'center',
    marginHorizontal: '8%',
  },
  scorecountercontainer: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 0,
  },
  scoretext: {
    fontFamily: 'Oxanium-Regular',
    color: '#1B4D90',
    fontSize: 10,
  },
  score: {
    fontFamily: 'Oxanium-Bold',
    color: '#1B4D90',
    fontSize: 30,
  },
  LGScontainer: {
    width: '80%',
    height: '70%',
    justifyContent: 'center',
    alignContent: 'center',
    marginHorizontal: '9%',
  },
  scorecontent: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#a9ff53',
    height: '80%',
    width: '80%',
    borderRadius: 50,
    margin: 10,
  },
});
