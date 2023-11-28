import { Dimensions, ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity, PixelRatio } from "react-native";
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
import bgimg from '../../assets/Landing.png';
import tw from "tailwind-react-native-classnames";
import Ionicons from 'react-native-vector-icons/Ionicons';
import React = require("react");
import LinearGradient from "react-native-linear-gradient";
import Gerald from '../../assets/GERALD.png';
import profimg from '../../assets/profileimg.png'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { horizontalScale, verticalScale, moderateScale } from "../../utils/metrics";
import PreloaderModal from "../../utils/Preloader";
import { useState } from "react";
import AlertBox from "../../utils/alertbox";
const fontScale = PixelRatio.getFontScale();
const getFontSize = size => size / fontScale;

export default function SettingScreen({ navigation }) {
  const [preloaderVisible, setPreloaderVisible] = useState(false);
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const showAlert = () => {
    setIsAlertVisible(true);
  };

  const closeAlert = () => {
    setIsAlertVisible(false);
  };

  
  const [userData, setUserData] = React.useState(null);
  React.useEffect(() => {
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
  async function clearAsyncStorage() {
    try {
      await AsyncStorage.clear();
      setPreloaderVisible(true);
      console.log('AsyncStorage cleared successfully.');

      // Add a setTimeout to delay the navigation
      setTimeout(() => {
        setPreloaderVisible(false);
        navigation.navigate('WelcomeScreen');
      }, 4000); // 4 seconds (4000 milliseconds)
    } catch (error) {
      console.error('Error clearing AsyncStorage:', error);
    }
  }

  return (
    <>
      <ImageBackground source={bgimg}
        resizeMode="stretch"
        style={styles.img}>
        <View style={{
          height: '92%',
          width: screenWidth,
          justifyContent: 'flex-start',
          alignItems: 'center'
        }}>
          <View style={{ height: screenHeight * 0.145, width: screenWidth * 0.85, borderRadius: 14, marginTop: '6%', }}>
            <LinearGradient
              colors={['#FFFFFF', '#FFFFFF']}
              style={{ height: screenHeight / 7, width: screenWidth * 0.84, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
              <View style={{ height: screenHeight * 0.15, width: '25%', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ borderRadius: 999, backgroundColor: '#2460A7', width: '80%', height: '58%', borderWidth: 3, borderColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                  <Image source={profimg} style={{ width: screenWidth * 0.168, height: screenHeight / 12 }} />
                </View>
              </View>
              <View style={{ height: '100%', width: '70%', justifyContent: 'center', paddingLeft: '5%' }}>
                {userData ? (
                  <>
                    <Text style={{ fontFamily: 'Inter-Bold', color: '#2460A7', fontSize: getFontSize(19), }}>{`Barka ${userData.firstname}!`}</Text>
                    <Text style={{ fontFamily: 'Inter-Regular', color: '#2460A7', fontSize: getFontSize(15) }}>{userData.email}</Text>
                  </>
                ) : (
                  <Text style={{ color: '#2460A7', fontFamily: 'Inter-Regular' }}>A ɗan dakata... MAKKS na loda bayananka </Text>
                )}
              </View>

            </LinearGradient>
            {/*  */}
          </View>
          <View style={{ width: screenWidth * 0.85, height: screenHeight / 10, borderRadius: 20, marginTop: '5%' }}>
            <LinearGradient
              colors={['#FFFFFF', '#FFFFFF']}
              style={{ width: screenWidth * 0.84, height: screenHeight / 10, borderRadius: 10, flexDirection: 'row', }}>
              <View style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <Ionicons name="grid-outline" size={28} color="#2460A7"></Ionicons>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('AccountScreen')}
                style={{ width: '60%', height: '100%', justifyContent: 'center', paddingLeft: '2%' }}>
                <Text style={{ fontFamily: 'Inter-Bold', fontSize: getFontSize(16), color: '#2460A7' }}>Tsarin Fasali</Text>
                <Text style={{ fontFamily: 'Inter-Regular', fontSize: getFontSize(11), color: '#2460A7' }}>Yanayin Baiyyana</Text>
              </TouchableOpacity>
              <View style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <Ionicons name="chevron-forward-outline" size={28} color="#2460A7"></Ionicons>
              </View>
            </LinearGradient>
          </View>
          <View style={{ width: screenWidth * 0.85, height: screenHeight / 10, borderRadius: 20, marginTop: '3%' }}>
            <LinearGradient
              colors={['#FFFFFF', '#FFFFFF']}
              style={{ width: screenWidth * 0.84, height: screenHeight / 10, borderRadius: 10, flexDirection: 'row', }}>
              <View style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <Ionicons name="cash-outline" size={28} color="#2460A7"></Ionicons>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('AccountScreen')}
                style={{ width: '60%', height: '100%', justifyContent: 'center', paddingLeft: '2%' }}>
                <Text style={{ fontFamily: 'Inter-Bold', fontSize: getFontSize(16), color: '#2460A7' }}>Tsarin Asusun Mai Rajista</Text>
                <Text style={{ fontFamily: 'Inter-Regular', fontSize: getFontSize(11), color: '#2460A7' }}>Sarrafa bayanan asusu na</Text>
              </TouchableOpacity>
              <View style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <Ionicons name="chevron-forward-outline" size={28} color="#2460A7"></Ionicons>
              </View>
            </LinearGradient>
          </View>
          {/*  */}
          <View style={{ width: screenWidth * 0.85, height: screenHeight / 10, borderRadius: 20, marginTop: '3%' }}>
            <LinearGradient
              colors={['#FFFFFF', '#FFFFFF']}
              style={{ width: screenWidth * 0.84, height: screenHeight / 10, borderRadius: 10, flexDirection: 'row', }}>
              <View style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <Ionicons name="shield-half-outline" size={28} color="#2460A7"></Ionicons>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('AccountScreen')}
                style={{ width: '60%', height: '100%', justifyContent: 'center', paddingLeft: '2%' }}>
                <Text style={{ fontFamily: 'Inter-Bold', fontSize: getFontSize(16), color: '#2460A7' }}>Keɓantawa da Tsaro</Text>
                <Text style={{ fontFamily: 'Inter-Regular', fontSize: getFontSize(11), color: '#2460A7' }}>Saita Kalmar Sirrin Asusu</Text>
              </TouchableOpacity>
              <View style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <Ionicons name="chevron-forward-outline" size={28} color="#2460A7"></Ionicons>
              </View>
            </LinearGradient>
          </View>
          {/*  */}
          <View style={{ width: screenWidth * 0.85, height: screenHeight / 10, borderRadius: 20, marginTop: '3%' }}>
            <LinearGradient
              colors={['#FFFFFF', '#FFFFFF']}
              style={{ width: screenWidth * 0.84, height: screenHeight / 10, borderRadius: 10, flexDirection: 'row', }}>
              <View style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <Ionicons name="settings-outline" size={28} color="#2460A7"></Ionicons>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('AccountScreen')}
                style={{ width: '60%', height: '100%', justifyContent: 'center', paddingLeft: '2%' }}>
                <Text style={{ fontFamily: 'Inter-Bold', fontSize: getFontSize(16), color: '#2460A7' }}>Saitocin Bayanan Manhaja</Text>
                <Text style={{ fontFamily: 'Inter-Regular', fontSize: getFontSize(11), color: '#2460A7' }}>Saita Ka'idojin Ayyukan Manhaja</Text>
              </TouchableOpacity>
              <View style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <Ionicons name="chevron-forward-outline" size={28} color="#2460A7"></Ionicons>
              </View>
            </LinearGradient>
          </View>
          {/*  */}
          <View style={{ width: screenWidth * 0.85, height: screenHeight / 10, borderRadius: 20, marginTop: '3%' }}>
            <LinearGradient
              colors={['#FFFFFF', '#FFFFFF']}
              style={{ width: screenWidth * 0.84, height: screenHeight / 10, borderRadius: 10, flexDirection: 'row', }}>
              <View style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <Ionicons name="information-circle-outline" size={28} color="#2460A7"></Ionicons>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('AccountScreen')}
                style={{ width: '60%', height: '100%', justifyContent: 'center', paddingLeft: '2%' }}>
                <Text style={{ fontFamily: 'Inter-Bold', fontSize: getFontSize(16), color: '#2460A7' }}>Bayani Game da MAKKS</Text>
                <Text style={{ fontFamily: 'Inter-Regular', fontSize: getFontSize(11), color: '#2460A7' }}>Samu Ƙarin Bayani Game da Manhajanmu</Text>
              </TouchableOpacity>
              <View style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <Ionicons name="chevron-forward-outline" size={28} color="#2460A7"></Ionicons>
              </View>
            </LinearGradient>
          </View>
          {/*  */}
          <View style={{ width: screenWidth * 0.85, height: screenHeight / 10, borderRadius: 20, marginTop: '3%' }}>
            <LinearGradient
              colors={['#FFFFFF', '#FFFFFF']}
              style={{ width: screenWidth * 0.84, height: screenHeight / 10, borderRadius: 10, flexDirection: 'row', }}>
              <View style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <Ionicons name="exit-outline" size={28} color="red"></Ionicons>
              </View>
              <TouchableOpacity
                onPress={clearAsyncStorage}
                style={{ width: '60%', height: '100%', justifyContent: 'center', paddingLeft: '2%' }}>
                <Text style={{ fontFamily: 'Inter-Bold', fontSize: getFontSize(16), color: '#2460A7' }}>Logout</Text>
                <Text style={{ fontFamily: 'Inter-Regular', fontSize: getFontSize(11), color: '#2460A7' }}>Fita Daga Manhaja</Text>
              </TouchableOpacity>
              <View style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <Ionicons name="chevron-forward-outline" size={28} color="#2460A7"></Ionicons>
              </View>
            </LinearGradient>
          </View>
        </View>
        <PreloaderModal visible={preloaderVisible} />
        <AlertBox
          isVisible={isAlertVisible}
          errormessage="Login Successful!"
          message="Welcome back."
          onClose={() => navigation.navigate('UserHome')}
        />

      </ImageBackground>
    </>
  );
}
const styles = StyleSheet.create({
  img: {
    height: screenHeight,
    width: screenWidth,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
