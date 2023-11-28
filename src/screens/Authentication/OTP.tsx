import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Dimensions, Image, Alert, PixelRatio } from 'react-native';
import axios from 'axios';
import logo from "../../assets/logo.png";
import AsyncStorage from '@react-native-async-storage/async-storage';
import AlertBox from "../../utils/alertbox";
import PreloaderModal from '../../utils/Preloader';


const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const fontScale = PixelRatio.getFontScale();
const getFontSize = size => size / fontScale;

const OTPScreen = ({ navigation }) => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [isAlert5Visible, setIsAlert5Visible] = useState(false);
  const [isAlert6Visible, setIsAlert6Visible] = useState(false);
  const [isAlert7Visible, setIsAlert7Visible] = useState(false);
  const [preloaderVisible, setPreloaderVisible] = useState(false);


  const ValidOTP = () => {
    setIsAlert6Visible(true);
  }
  const InValidOTP = () => {
    setIsAlert6Visible(true);
  }
  const NullOtp = () => {
    setIsAlert7Visible(true);
  }
  const closeAlert = () => {
    setIsAlert5Visible(false);
  }
  const closeAlert2 = () => {
    setIsAlert5Visible(false);
  }


  // Create refs for each input field
  const inputRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  useEffect(() => {
    // Focus on the next input field when the current one is filled
    for (let i = 0; i < otp.length; i++) {
      if (otp[i] !== '' && i < otp.length - 1) {
        inputRefs[i + 1].current.focus();
      }
    }
  }, [otp]);
  const getAndLogUserName = async () => {
    try {
      // Get the user data from AsyncStorage
      const userDataString = await AsyncStorage.getItem('userData');
      if (userDataString) {
        // Parse the JSON string to get the user data object
        const userData = JSON.parse(userDataString);

        // Extract the first name and last name from the user data
        const { email } = userData;

        // Log the user's full name
        console.log(`User's Name: ${email}`);
      } else {
        // Handle the case when user data is not found in AsyncStorage
        console.log('User data not found in AsyncStorage');
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle any errors that may occur during the process
    }
  };
  getAndLogUserName();
  const handleOTPVerification = async () => {
    try {
      const userString = await AsyncStorage.getItem('userData');
      const userData = JSON.parse(userString)
      const { email } = userData;
      const concatenatedOTP = otp.join(''); // Concatenate the OTP input values
      const response = await axios.post('https://api.koyakaiya.com/v1/auth/verify', {
        email: email,
        otp: concatenatedOTP,

      });
      if (response.status === 200) {
        ValidOTP();
        // navigation.navigate('SetupProfileScreen');
      } else {
        InValidOTP();
      }
    } finally {
      console.log()
    }
    if (!otp) {
      NullOtp();
    }
  };

  const handleResendOTP = async () => {
    try {
      const response = await axios.post('https://api.koyakaiya.com/v1/auth/verify/sms/resend');

      if (response.data.status === 'success') {
        Alert.alert('Success', 'OTP has been resent.');
        resetOTP(); // Call the function to reset OTP input fields
      } else {
        Alert.alert('Error', 'Failed to resend OTP. Please try again.');
      }
    } catch (error) {
      console.error('Error resending OTP:', error);
      Alert.alert('Error', 'An error occurred while resending OTP. Please try again.');
    }
  };

  // Function to reset OTP input fields
  const resetOTP = () => {
    setOtp(['', '', '', '', '', '']);
    // Set focus to the first input field
    if (inputRefs[0] && inputRefs[0].current) {
      inputRefs[0].current.focus();
    }
  };

  useEffect(() => {
    const loadEmail = async () => {
      try {
        const storedEmail = await AsyncStorage.getItem('storedEmail');
        if (storedEmail) {
          setEmail(storedEmail);
        }
      } catch (error) {
        console.error('Error loading email:', error);
      }
    };
    loadEmail();
  }, []);

  useEffect(() => {
    navigation.addListener('beforeRemove', (e) => {
      e.preventDefault();
    });

    return () => {
      navigation.removeListener('beforeRemove');
    };
  }, [navigation]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={logo} style={{ width: screenWidth * 0.2, height: screenHeight / 10 }} />
        <Text style={styles.title}>Shafin Lambar Tabbatarwa (OTP).</Text>
        <View style={{ flexDirection: 'row', marginBottom: '5%' }}>
          <Text style={{ color: 'black', fontFamily: 'Inter-Regular', fontSize: getFontSize(13) }}>Shigar da lambar Tabbatarwa da aka tura maka a waya ta saƙon SMS</Text>
          <Text style={{ color: 'black', fontFamily: 'Inter-SemiBold', marginHorizontal: '1%', fontSize: getFontSize(13) }}>{email}</Text>
        </View>
        <View style={styles.otpInputContainer}>
          {otp.map((value, index) => (
            <TextInput
              key={index}
              style={styles.input}
              placeholder=""
              keyboardType="numeric"
              maxLength={1}
              value={value}
              onChangeText={(text) => {
                const updatedOTP = [...otp];
                updatedOTP[index] = text;
                setOtp(updatedOTP);
              }}
              ref={inputRefs[index]} // Assign a ref to the input field
            />
          ))}
        </View>
        <View style={{ flexDirection: 'row', marginTop: '2%' }}>
          <Text style={{ color: 'black', fontFamily: 'Inter-Regular', fontSize: getFontSize(13) }}>Idan baka samu OTP ba,</Text>
          <TouchableOpacity onPress={handleResendOTP}>
            <Text style={{ color: '#2460A7', fontFamily: 'Inter-Regular', marginHorizontal: '1%', fontSize: getFontSize(13) }}>Danna nan</Text>
          </TouchableOpacity>
        </View>
        <View style={{
          width: screenWidth * 1,
          justifyContent: 'center',
          alignItems: 'center',
          height: screenHeight / 10,
          flexDirection: 'row'
        }}>
          <TouchableOpacity
            onPress={handleOTPVerification}
            style={styles.button}>
            <Text style={styles.buttonText}>Aika</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={resetOTP} // Call the resetOTP function
            style={{
              backgroundColor: 'white',
              borderRadius: 30,
              elevation: 3,
              marginVertical: '5%',
              width: screenWidth * 0.35,
              height: screenHeight / 16,
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: '1.5%',
            }}>
            <Text style={{
              color: 'black',
              fontSize: getFontSize(16),
              textAlign: 'center',
              fontFamily: 'Inter-Regular',
            }}>Share duka</Text>
          </TouchableOpacity>
        </View>
        <PreloaderModal visible={preloaderVisible} />
        <AlertBox
          isVisible={isAlert6Visible}
          errormessage="Success"
          message="OTP is correct. You are verified!"
          onClose={() => navigation.navigate('SetupProfileScreen')}
        />

        <AlertBox
          isVisible={isAlert5Visible}
          errormessage="Failed"
          message="Invalid OTP, Please try again!"
          onClose={closeAlert}
        />
        <AlertBox
          isVisible={isAlert7Visible}
          errormessage="Kuskure ya auku "
          message="Shigar da lambar Tabbatarwa da aka tura maka a waya ta saƙon SMS"
          onClose={closeAlert2}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: screenHeight,
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  title: {
    fontSize: getFontSize(18),
    marginTop: "6%",
    marginBottom: '2%',
    fontFamily: 'Inter-SemiBold',
    color: 'black',
  },
  otpInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '8%',
  },
  input: {
    width: screenHeight * 0.06,
    borderWidth: 1,
    borderColor: '#ccc',
    fontSize: getFontSize(18),
    textAlign: 'center',
    color: 'black',
    marginHorizontal: '1%',
    borderRadius: 8,
    height: screenHeight / 17
  },
  errorText: {
    color: 'red',
  },
  button: {
    backgroundColor: '#2460A7',
    borderRadius: 30,
    marginVertical: '5%',
    elevation: 3,
    width: screenWidth * 0.35,
    height: screenHeight / 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: '1.5%'
  },
  buttonText: {
    color: 'white',
    fontSize: getFontSize(16),
    textAlign: 'center',
    fontFamily: 'Inter-Regular',
  },
});

export default OTPScreen;
