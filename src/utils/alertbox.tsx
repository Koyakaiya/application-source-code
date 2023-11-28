import * as React from "react";
import { View, Modal, Text, TouchableOpacity, StyleSheet, Dimensions, PixelRatio } from 'react-native';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const fontScale = PixelRatio.getFontScale();
const getFontSize = size => size / fontScale;

export default function AlertBox({ isVisible, message, onClose, errormessage }) {
    return (
      
            <Modal
              transparent={true}
              animationType="fade"
              visible={isVisible}
              onRequestClose={onClose}
            >
              <View style={styles.modalContainer}>
                <View style={styles.alertBox}>
                  <View style={{width:screenWidth*1,height:screenHeight/19, justifyContent:'center', alignItems:'flex-start', paddingLeft:'20%', paddingTop:'4%'}}>
                  <Text style={styles.rerrorText}>{errormessage}</Text>
                  </View>
                  <View style={{width:'100%', height:'40%', justifyContent:'center', paddingLeft:'8%', backgroundColor:'white', paddingRight:'10%'}}>
                  <Text style={styles.messageText}>{message}</Text>
                  </View>
                  <View style={{paddingRight:'15%',alignItems:'flex-end', width:'100%', justifyContent:'center', paddingTop:'3%'}}>
                  <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                    <Text style={styles.closeButtonText}>OK</Text>
                  </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>
          );
        }
        
        const styles = StyleSheet.create({
          modalContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
          },
          alertBox: {
            backgroundColor: 'white',
            borderRadius: 30,
            width:'80%',
            height:'20%',
            alignItems: 'center',
          },
          messageText: {
            fontSize:getFontSize(16),
            
            color:'black',
            fontFamily:'Inter-Regular'
          },
          rerrorText: {
            fontSize: getFontSize(18),
            fontFamily:'Inter-SemiBold',
            color:'black'
          },
          closeButton: {
           // Blue button color
          },
          closeButtonText: {
            color: '#2460A7',
            fontSize: getFontSize(13),
            fontFamily:'Inter-Regular'
          },
        });
        
