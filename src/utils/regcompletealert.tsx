import React = require("react");
import { View,StyleSheet, Dimensions, Text, Image, PixelRatio, Modal } from "react-native";
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const fontScale = PixelRatio.getFontScale();
const getFontSize = size => size / fontScale;
import regcmplete from '../assets/regcomplete.png';
import { useState } from "react";


export default function Registerationalert(){
  const [modalVisible, setModalVisible] = useState(false);

    return(
        <>
        <Modal
         animationType="fade"
         transparent={true}
         visible={modalVisible}
         onRequestClose={() => {
           setModalVisible(!modalVisible);
         }}
        style={styles.modalcontainer}>
            <View style={styles.registerationalertbox}>
                    <Image source = {regcmplete} style={styles.imagecontainer}/>
                    <Text style={styles.text}>
                        Barka Aryan!
                    </Text>
                    <Text style={styles.textII}>
                    An yi Nasarar Bude Asusu
                    </Text>
                    <Text style={styles.text2}>
                        Dannan nan Domin Fara
                    </Text>
                    <Text style={styles.text2II}>
                        Moriyar Kyauta
                    </Text>
            </View>
        </Modal>
        
        </>
    );
}

const styles = StyleSheet.create(
    {   modalcontainer:{
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
            marginTop:10
        },
        text2II:{
            fontFamily:"Inter-SemiBold",
            color:'#1B4D90',
            fontSize:14,
        },
        imagecontainer:{
            width:'50%',
            height:'40%'
        }
    }
);