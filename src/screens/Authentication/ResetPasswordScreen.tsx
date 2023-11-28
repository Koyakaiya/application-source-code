import * as React from "react";
import { useState } from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert, // Import Alert from 'react-native'
} from 'react-native';
import axios from 'axios';
import passres from '../../assets/reset.png';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export const ResetPasswordScreen = ({ navigation }) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleResetPassword = async () => {
    if (!newPassword || !confirmPassword) {
      // Check if newPassword or confirmPassword is empty
      Alert.alert('Error', 'Please fill in both password fields.');
      return;
    }

    if (newPassword !== confirmPassword) {
      // Check if newPassword and confirmPassword match
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }

    try {
      const response = await axios.post(
        'https://api.koyakaiya.com/v1/auth/reset',
        {
          newPassword: newPassword,
        }
      );

      console.log('API Response:', response.data);

      if (response.data.success) {
        // Password reset was successful
        Alert.alert('Success', 'Password reset successful.');
        navigation.navigate('LoginScreen');
      } else {
        // Handle unsuccessful password reset or display error message
        console.error('Password Reset Failed:', response.data.message);
        Alert.alert('Error', 'Password reset failed. Please try again later.');
      }
    } catch (error) {
      // Handle errors here
      console.error('API Error:', error);
      Alert.alert('Error', 'An error occurred while resetting the password.');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={passres} style={{ width: '70%', height: '15%', marginLeft: '5%' }} />
      <Text style={styles.resetpasswordheadertext}>
        Shafin Canza Kalmar Sirri 
      </Text>
      <TextInput
        style={styles.resetpasswordnameandemailfield}
        placeholder="Shigar da sabon kalmar sirri"
        placeholderTextColor="#5353FF87"
        secureTextEntry={true}
        onChangeText={(text) => setNewPassword(text)}
      />
      <TextInput
        style={styles.resetpasswordnameandemailfield}
        placeholder="Sake shigar da kalmar sirri"
        placeholderTextColor="#5353FF87"
        secureTextEntry={true}
        onChangeText={(text) => setConfirmPassword(text)}
      />

      <TouchableOpacity
        onPress={handleResetPassword}
        style={styles.resetpasswordbtn}>
        <Text style={styles.resetpasswordbtntext}>
          Sallama
        </Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: screenHeight,
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  resetpasswordheadertext: {
    fontFamily: 'Inter-Bold',
    color: '#2460A7',
    fontSize: 20,
    textAlign: 'center',
    marginTop: '3%',
  },
  resetpasswordnameandemailfield: {
    width: '75%',
    backgroundColor: '#CDD6F6',
    height: 45,
    paddingHorizontal: 20,
    marginTop: 18,
    borderRadius: 10,
  },
  resetpasswordbtn: {
    backgroundColor: '#2460A7',
    elevation: 5,
    borderRadius: 10,
    marginVertical: '10%',
    width: '75%',
    height: '5%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  resetpasswordbtntext: {
    fontFamily: 'Inter-SemiBold',
    color: 'white',
  },
});
