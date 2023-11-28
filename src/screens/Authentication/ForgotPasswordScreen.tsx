import * as React from "react";
import { useState } from 'react';
import {
  Image,
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
  PixelRatio, // Import Alert from 'react-native'
} from 'react-native';
import axios from 'axios';
import tw from 'tailwind-react-native-classnames';
import forpass from '../../assets/rem_pass.png';
import Ionicons from 'react-native-vector-icons/Ionicons';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const fontScale = PixelRatio.getFontScale();
const getFontSize = size => size / fontScale;


export const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleForgotPassword = async () => {
    if (!email) {
      // Check if email or phoneNumber is empty
      Alert.alert('Missing Information', 'Please fill in your email.');
      return;
    }

    try {
      const response = await axios.post(
        'https://api.koyakaiya.com/v1/auth/forgot',
        {
          email: email,
        }
      );

      console.log('API Response:', response.data);

      if (response.data.success) {
        Alert.alert("Forgot Password Successfull")
        navigation.navigate('ResetPassword');
      } else {
        console.error('Forgot Password Failed:', response.data.message);
      }
    } catch (error) {
      console.error('API Error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={{width:screenWidth*1 , height:screenHeight*0.09, marginTop:'10%', flexDirection:'row', alignItems:'center'}}>
        <TouchableOpacity style={{marginLeft:'3%',justifyContent:'center', alignItems:'center', borderRadius:10}}
          onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back-outline" size={28} color="#2460A7"></Ionicons>
        </TouchableOpacity>
        <Text style={styles.forgotpasswordheadertext}>Danna nan idan ka manta kalmar sirrinka?</Text>
        </View>
        <Text style={{width:'70%', textAlign:'center', color:'gray', fontFamily:'Inter-Regular', fontSize:getFontSize(12)}}>Don sake saita kalmar sirri, shigar da adireshin imelin da ka buɗe asusun MAKKS da shi.</Text>
      <TextInput
        style={styles.nameandemailfield}
        placeholder="Adireshin Imeli"
        placeholderTextColor="#999999"
        onChangeText={(text) => setEmail(text)}
      />
      
      <TouchableOpacity
        onPress={handleForgotPassword}
        style={styles.forgotpasswordbtn}
      >
        <Text style={styles.forgotpasswordbtntext}>
        Na gama 
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: screenHeight,
    width: screenWidth,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  forgotpasswordheadertext: {
    fontFamily: 'Inter-Bold',
    color: 'black',
    fontSize: getFontSize(16),
    textAlign: 'center',
    marginBottom:'2%',
    width:screenWidth*0.8,
    marginTop:"2%"
  },
  forgotpasswordcontenttext: {
    fontFamily: 'Inter-SemiBold',
    color: '#696666',
    marginVertical: 0,
    fontSize: getFontSize(12),
    lineHeight: 20,
  },
  nameandemailfield: {
    width:screenWidth*0.75,
    backgroundColor: "#f2f2f2",
    height: screenHeight*0.06,
    paddingLeft: "4%",
    marginTop: "8%",
    borderRadius: 10,
    fontFamily:'Inter-Regular'
  },
  forgotpasswordbtn: {
    backgroundColor: "#2460A7",
    borderRadius: 30,
    marginVertical: "5%",
    width: screenWidth*0.75,
    height: screenHeight*0.06,
    justifyContent: "center",
    alignItems: "center",
  },
  forgotpasswordbtntext: {
    fontFamily: "Inter-SemiBold",
    color: "white",
    fontSize: getFontSize(15),
  },
});
