import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React = require('react');
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicon from 'react-native-vector-icons/Ionicons';
export default function Navigation({ navigation }): JSX.Element {
  return (
    <>
      <View style={styles.bottomnavcontainer}>
        <TouchableOpacity onPress={()=> navigation.navigate('HomeScreen')} style={styles.bottomtabcontainer}>
          <Ionicon name="home-outline" size={28} color="white"></Ionicon>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('Profile')} style={styles.bottomtabcontainer}>
          <Ionicon name="person-outline" size={28} color="ProfileScreen"></Ionicon>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('Search')} style={styles.bottomtabcontainer}>
          <Ionicon name="search-outline" size={28} color="SearchScreen"></Ionicon>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('Settings')} style={styles.bottomtabcontainer}>
          <Ionicon name="settings-outline" size={28} color="SettingScreen"></Ionicon>
        </TouchableOpacity>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  bottomnavcontainer: {
    width: '100%',
    height: '6.5%',
    backgroundColor: 'rgba(83, 83, 255, 0.6)',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  bottomtabcontainer: {
    height: '85%',
    width: '15%',
    marginVertical: 5,
    marginHorizontal: 20,
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});