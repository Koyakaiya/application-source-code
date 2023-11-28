import {
  Dimensions,
  Image,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import kayhra from '../../assets/kayhra1.png';
import google from '../../assets/google.png';
import facebook from '../../assets/facebook.png';
import apple from '../../assets/apple.png';
import * as React from 'react';
import { useState } from 'react';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export const OauthSignup = ({ navigation }) => {
const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <View style={styles.container}>
      <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.modalcontainer}>
            <View style={styles.registerationalertbox}>
              <Text style={styles.text}>
               Coming Soon!
              </Text>
            </View>
          </View>
        </Modal>
        <Image source={kayhra} style={tw`h-80 w-72 mx-1`} />
        <TouchableOpacity
          style={styles.Registerbtn}
          onPress={() => navigation.navigate('SignupScreen')}>
          <Text style={styles.Registerbtntext}>SABON RAJISTA</Text>
        </TouchableOpacity>

        <Text style={styles.Registertext}>
          Ko Ka Yi Rajista da Asusun ka na
        </Text>
        <Text style={styles.Registertext}>
          Google ko na Facebook ko na Apple
        </Text>

        <View style={styles.oauthsignup}>
          <TouchableOpacity style={styles.oauthmodalsignup} onPress={() => setModalVisible(true)}>
          <View style={styles.oauthiconcontainer}>
            <Image source={google} style={{width:'70%',
            height:'70%',}} />
          </View>
          <View style={styles.oauthiconcontainer}>
          <Image source={facebook} style={{width:'70%',
            height:'70%',}} />
          </View>
          <View style={styles.oauthiconcontainer}>
          <Image source={apple} style={{width:'70%',
            height:'70%',}} />
          </View>
          </TouchableOpacity>
        </View>

        <View style={tw`items-center mt-8`}>
          <Text style={styles.Registertext}>Ka na da Asusu da Mu?</Text>
          <Text style={styles.Newregistertext}>Shiga ta Nan</Text>
        </View>

      </View>
    </>
  );
};
/**
 * @author George Fabunmi
 * @description "Idan Programmer on the grind."
 */
const styles = StyleSheet.create({
  container: {
    height: screenHeight,
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  Registerbtn: {
    backgroundColor: '#2460A7',
    elevation: 3,
    borderRadius: 35,
    marginVertical: '5%',
  },
  Registerbtntext: {
    fontFamily: 'Inter-Regular',
    paddingHorizontal: '20%',
    marginVertical: '3%',
    color: 'white',
  },
  Registertext: {
    fontFamily: 'Inter-Regular',
    color: '#2460A7',
    fontSize: 15,
    textAlign: 'center',
    lineHeight: 15,
  },
  Newregistertext: {
    fontFamily: 'Inter-Bold',
    color: '#2460A7',
    fontSize: 25,
  },
  //
  modalcontainer: {
    height: screenHeight,
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A9A9A997',
  },
  registerationalertbox: {
    width: '80%',
    height: '25%',
    backgroundColor: 'white',
    borderRadius: 20,
    elevation: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontFamily: 'Inter-Bold',
    color: '#7393B3',
    fontSize: 30,
    marginTop: 20
  },
  textII: {
    fontFamily: 'Inter-Regular',
    color: '#696666',
    fontSize: 14,
  },
  text2: {
    fontFamily: "Inter-SemiBold",
    color: '#1B4D90',
    fontSize: 14,
    marginTop: 10
  },
  text2II: {
    fontFamily: "Inter-SemiBold",
    color: '#1B4D90',
    fontSize: 14,
  },
  imagecontainer: {
    width: '50%',
    height: '44%'
  },
  continuetextbtn:{
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
    marginVertical:'2%'
  },
  oauthsignup:{
    width:'100%',
    justifyContent:'center',
    flexDirection:'row',
    marginTop:'5%',
    height:'10%',
  },
  oauthmodalsignup:{
    height:'100%',
    width:'100%',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  oauthiconcontainer:{
    backgroundColor:'white',
    height:'70%',
    elevation:5,
    width:'14%',
    borderRadius:15,
    marginHorizontal:'1.5%',
    justifyContent:'center',
    alignItems:'center'
  }
});
