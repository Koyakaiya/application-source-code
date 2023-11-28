import React = require("react");
import { View,StyleSheet, Dimensions, Text, Image } from "react-native";
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
import regiscmplete from '../assets/regiscomplete.png';

export default function Registerationcompletealert(){
    return(
        <>
        <View style={styles.container}>
            <View style={styles.registerationalertbox}>
                    <Image source = {regiscmplete} style={styles.imagecontainer}/>
                    <Text style={styles.text}>
                        Barka Aryan!
                    </Text>
                    <Text style={styles.textII}>
                    An yi Nasarar Canza Kalmer Sirri
                    </Text>
                    <Text style={styles.text2}>
                        Dannan nan Domin Ci Gaba
                    </Text>
            </View>
        </View>
        
        </>
    );
}

const styles = StyleSheet.create(
    {   container:{
            height: screenHeight,
            width: screenWidth,
            justifyContent: 'center',
            alignItems: 'center',
        },
        registerationalertbox:{
            width:'70%',
            height:'50%',
            backgroundColor:'white',
            borderRadius:20,
            elevation:20,
            justifyContent:'center',
            alignItems:'center'
        },
        text:{
            fontFamily:'Inter-Regular',
            color:'#696666',
            fontSize:14,
            marginTop:20
        },
        textII:{
            fontFamily:'Inter-Regular',
            color:'#696666',
            fontSize:14,
        },
        text2:{
            fontFamily:"Inter-SemiBold",
            color:'#1B4D90',
            fontSize:14,
            marginTop:20
        },
        imagecontainer:{
            width:'50%',
            height:'40%'
        }
    }
);