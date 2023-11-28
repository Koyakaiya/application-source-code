import * as React from "react";
import { View, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export const PaymentPlanScreen = ({ navigation }) => {
  return (
    <>
      <View style={styles.bgcontainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('UserHome')}
          style={styles.buttonContainer}>
          <LinearGradient
            colors={['#5353FFE5', '#00CCFFE5']}
            style={styles.buttonGradient}>
            <Text style={styles.buttonText}>Continue with Trial</Text>
          </LinearGradient>
        </TouchableOpacity>
        <Text>Or</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('SelectBundle')}
          style={styles.buttonContainer}>
          <LinearGradient
             colors={['#5353FFE5', '#00CCFFE5']}
            style={styles.buttonGradient}>
            <Text style={styles.buttonText}>Go Premium</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  bgcontainer: {
    height: screenHeight,
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  buttonContainer: {
    width: '70%', // Set the width to 70%
    marginVertical: '5%',
  },
  buttonGradient: {
    width: '100%', // Make the gradient fill the button container
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Inter-Bold',
    fontSize: 20,
  },
});
