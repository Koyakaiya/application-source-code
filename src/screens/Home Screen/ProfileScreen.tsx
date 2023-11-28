import {
  Dimensions,
  Image,
  ImageBackground,
  PixelRatio,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
import bgimg from '../../assets/Landing.png';
import React = require('react');
import Ionicons from 'react-native-vector-icons/Ionicons';
import profimg from '../../assets/profileimg.png';
import LinearGradient from 'react-native-linear-gradient';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
const fontScale = PixelRatio.getFontScale();
const getFontSize = size => size / fontScale;

export default function ProfileScreen() {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    fetchUserData();
  }, []);
  const fetchUserData = async () => {
    try {
      const storedUserData = await AsyncStorage.getItem('userData');

      if (storedUserData) {
        const userDataObject = JSON.parse(storedUserData);
        setUserData(userDataObject);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };
  return (
    <>
      <ImageBackground source={bgimg} resizeMode="stretch" style={styles.img}>
        <View style={styles.container}>
          <View style={styles.profilecontainer}>
            <LinearGradient
              colors={['#FFFFFF', '#FFFFFF']}
              style={styles.profcontainer}>
              <View style={styles.profimgcontainer}>
                <Image source={profimg} style={styles.profimg} />
              </View>
              <Text style={styles.profiletext}>
                {userData
                  ? `${userData.firstname} ${userData.lastname}`
                  : 'A ɗan dakata... MAKKS na loda bayananka '}
              </Text>
            </LinearGradient>
          </View>
          <View
            style={{
              borderRadius: 20,
              borderColor: 'white',
              borderWidth: 3,
              width: screenWidth * 0.8,
              height: screenHeight / 2.5,
              marginTop: '10%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <LinearGradient
              colors={['#FFFFFF', '#FFFFFF']}
              style={styles.maincontainer}>
              <View style={styles.namecontainer}>
                <View style={styles.iconcontainer}>
                  <Ionicons name="person-outline" size={30} color="gray" />
                </View>
                <View style={styles.namecontentcontainer}>
                  <Text style={styles.namelabel}>Username</Text>
                  <Text style={styles.namebar}>
                    {userData
                      ? `${userData.firstname} ${userData.lastname}`
                      : 'A ɗan dakata... MAKKS na loda bayananka '}
                  </Text>
                </View>
              </View>
              {/* <View style={styles.Divider}/> */}

              <View style={styles.namecontainer}>
                <View style={styles.iconcontainer}>
                  <Ionicons name="mail-outline" size={30} color="gray" />
                </View>
                <View style={styles.namecontentcontainer}>
                  <Text style={styles.namelabel}>Email</Text>
                  <Text style={styles.namebar}>
                    {userData
                      ? userData.email
                      : 'A ɗan dakata... MAKKS na loda bayananka '}
                  </Text>
                </View>
              </View>
              {/* <View style={styles.Divider}/> */}

              <View style={styles.namecontainer}>
                <View style={styles.iconcontainer}>
                  <Ionicons name="call-outline" size={30} color="gray" />
                </View>
                <View style={styles.namecontentcontainer}>
                  <Text style={styles.namelabel}>Phone Number</Text>
                  <Text style={styles.namebar}>
                    {userData
                      ? userData.telephone
                      : 'A ɗan dakata... MAKKS na loda bayananka '}
                  </Text>
                </View>
              </View>
            </LinearGradient>
          </View>
        </View>
      </ImageBackground>
    </>
  );
}
const styles = StyleSheet.create({
  Divider: {
    width: '90%',
    height: '0.5%',
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
  },
  img: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  container: {
    height: screenHeight / 1.12,
    width: screenWidth * 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  maincontainer: {
    width: screenWidth * 0.8,
    height: screenHeight / 2.55,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    borderColor: 'white',
  },
  contentcontainer: {
    width: screenWidth * 0.8,
    height: screenHeight / 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileimgcontainer: {
    width: '41%',
    height: '72%',
    borderRadius: 999,
    backgroundColor: 'pink',
    borderColor: 'white',
    borderWidth: 3,
    elevation: 8,
    marginBottom: 20,
  },
  namelabel: {
    color: 'black',
    fontFamily: 'Inter-SemiBold',
    fontSize: getFontSize(14),
  },
  namebar: {
    color: '#1B4D90',
    fontFamily: 'Inter-Regular',
    fontSize: getFontSize(20),
  },
  namecontainer: {
    flexDirection: 'row',
    marginVertical: '2.5%',
    marginBottom: 0,
    height: screenHeight / 8,
    width: screenWidth * 0.8,
    borderRadius: 20,
  },
  iconcontainer: {
    height: screenHeight / 8,
    width: screenWidth * 0.15,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:'black'
  },
  namecontentcontainer: {
    width: screenWidth * 0.65,
    height: screenHeight / 10,
    justifyContent: 'center',
    marginTop: '2%',
    // backgroundColor:'black'
  },
  profcontainer: {
    width: screenWidth * 0.8,
    height: screenHeight * 0.125,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profimgcontainer: {
    width: screenWidth * 0.288,
    height: screenHeight / 7,
    borderRadius: 70,
    borderWidth: 3,
    borderColor: 'white',
    elevation: 4,
  },
  profimg: {
    height: screenHeight / 7.4,
    width: screenWidth * 0.27,
    borderRadius: 999,
  },
  profiletext: {
    fontFamily: 'Inter-SemiBold',
    color: '#1B4D90',
    fontSize: getFontSize(20),
    marginBottom: '30%',
    height: screenHeight / 20,
    marginVertical: '2%',
  },
  profilecontainer: {
    width: screenWidth * 0.81,
    borderColor: 'white',
    borderWidth: 3.5,
    borderRadius: 30,
    height: screenHeight * 0.13,
  },
});
