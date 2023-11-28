import { View, StyleSheet, Dimensions, Image, BackHandler } from 'react-native';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
import logo from '../../assets/logo.png';
import * as React from 'react';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const SplashScreen = ({ navigation }): JSX.Element => {
  React.useEffect(() => {
    // Check if user data exists in AsyncStorage
    const checkUserData = async () => {
      try {
        // Retrieve user data from AsyncStorage
        const userData = await AsyncStorage.getItem('userData');

        if (userData) {
          const timeout = setTimeout(() => {
            navigation.navigate('UserHome');
          }, 5000);
          // User data exists, navigate to the desired screen (e.g., UserHome)
          // navigation.navigate('UserHome');
        } else {
          const timeout = setTimeout(() => {
            navigation.navigate('LandingScreen');
          }, 5000);
          // User data does not exist, navigate to 'LandingScreen'
          // navigation.navigate('LandingScreen');
        }
      } catch (error) {
        // Handle errors, e.g., AsyncStorage access error
        console.error('Error checking user data:', error);
        // Navigate to 'LandingScreen' on error
        navigation.navigate('LandingScreen');
      }
    };

    // Call the checkUserData function
    checkUserData();

    // Navigate to 'LandingScreen' after a 5-second delay
    // const timeout = setTimeout(() => {
    //   navigation.navigate('LandingScreen');
    // }, 5000);

    // // Clear the timeout when the component unmounts
    // return () => clearTimeout(timeout);
  }, []);
  useEffect(() => {
    const backAction = () => {
      // Disable the back button behavior
      return true;
    };

    // Add an event listener for the hardware back button
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    // Clean up the event listener when the component unmounts
    return () => {
      backHandler.remove();
    };
  }, []);

  return (
    <>
      <View style={styles.container}>
        <View style={{width:screenWidth*0.8, height:screenHeight*0.5, justifyContent:'center', alignItems:'center'}}>
        <Image source={logo} style={styles.logo} />
        </View>
      </View>
    </>
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
  logo: {
    height: screenHeight*0.2,
    width: screenWidth*0.4,
  },
});
// const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); // Replace with your actual state selector

//   React.useEffect(() => {
//     setTimeout(() => {
//       if (isLoggedIn) {
//         navigation.navigate('UserHome'); // User is logged in, navigate to UserHome
//       } else {
//         navigation.navigate('LoginScreen'); // User is not logged in, navigate to LoginScreen
//       }
//     }, 5000);
//   }, [isLoggedIn]); // Listen for changes in isLoggedIn state
