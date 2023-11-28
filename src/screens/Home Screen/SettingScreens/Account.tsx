import * as React from 'react';
import { Dimensions, ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
import bgimg from '../../../assets/Landing.png';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function AccountScreen({ navigation }){
    return(
        <>
        <ImageBackground source={bgimg}
        resizeMode="stretch"
        style={styles.img}>
            <View style={styles.container}>
                <View style={{width:'100%', justifyContent:'flex-start'}}>
                <View style={{flexDirection:'row', justifyContent:'space-between', width:'60%', marginHorizontal:'5%'}}>
                    <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{backgroundColor:'white', borderRadius:9}}>
                    <Ionicons name="chevron-back-outline" color="#2460A7" size={30} style={styles.backicon}></Ionicons>
                    </TouchableOpacity>
                <Text style={{fontSize:24, fontFamily:'Inter-Bold', color:'#2460A7'}}>Account</Text>
                </View>
                </View>
            <View style={{
                    width: '100%',
                    justifyContent: 'center',
                    borderWidth: 3,
                    borderColor: 'white',
                    borderRadius: 10,
                    alignItems: 'center',
                    alignContent: 'center',
                    marginVertical: '8%',
                    backgroundColor: 'white'
            }}>
              
                <TouchableOpacity
                onPress={()=> navigation.navigate('SelectBundle')}
                style={{width:'70%', height:'25%', backgroundColor:'#2460A7', borderRadius:20, justifyContent:'center', alignItems:'center'}}>
                    <Text style={{color:'white', fontFamily:'Inter-Regular'}}>
                      Payment Plan
                    </Text>
                </TouchableOpacity>
          
            </View>
            </View>
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
    Divider:{
      width:'90%',
      height:'0.5%',
      backgroundColor:'#D3D3D3',
      alignItems:'center'
    },
    container:{
      height: '93%',
      width: screenWidth,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal:40,
    },
    profcontainer:{
      width:'100%',
      height:'99%',
      borderRadius:22,
      justifyContent:'center',
      alignItems:'center'
    },
    profimgcontainer:{
      width:'32%',
      height:'100%',
      borderRadius:999,
      backgroundColor:'pink',
      borderWidth:4,
      borderColor:'white',
      elevation:10
    },
    profimg:{
      width:'100%',
      height:'100%',
      borderRadius:999,
    },
    profiletext:{
      fontFamily:'Inter-SemiBold',
      color:'#1B4D90',
      fontSize:20,
      marginBottom:'30%',
      height:'25%',
      marginVertical:'2%'
    },
    profilecontainer:{
      width:'100%',
      borderColor:'white',
      borderWidth:3.5,
      borderRadius:30,
      height:'14%'
    },
    settingscontainer:{
      backgroundColor:'white',
      width:'100%',
      borderRadius:17,
      height:'45%',
      justifyContent:'center',
      alignItems:'center',
      marginTop:'15%'
    },
    barcontainer:{
      padding:8,
      borderRadius:20,
      height:'100%',
      width:'100%',
    },
    settingscreenbars:{
      width:'100%',
      height:'16%',
      flexDirection:'row',
      justifyContent:'space-between',
      paddingHorizontal:'5%',
      alignItems:'center',
      marginVertical:'0.5%'
    },
    nameandiconcontainer:{
      flexDirection:'row',
      justifyContent:'center',
      marginVertical:3,
      marginLeft:5,
    },
    settingstext:{
      fontFamily:'Inter-Regular',
      color:'black',
      marginHorizontal:4,
      fontSize:17,
      marginVertical:2
    },
    backicon:{
      marginTop:'1.5%'
    }
  });
