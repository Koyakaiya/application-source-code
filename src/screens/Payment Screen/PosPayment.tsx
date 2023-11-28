import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  Modal,
  PixelRatio
} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import pos from '../../assets/POS1.png';
import gtbank from '../../assets/Gtbank.png'
import Providus from '../../assets/Providusbank.png'
import Jaiz from '../../assets/Jaiz.png'
import zenith from '../../assets/zenith.png'
import access from '../../assets/access.png'
import React = require('react');
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
const fontScale = PixelRatio.getFontScale();
const getFontSize = size => size / fontScale;

export default function PosPayment({ navigation }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isGtModalVisible, setGtModalVisible] = useState(false);
  const [isAccessModalVisible, setAccessModalVisible] = useState(false);
  const [isZenithVisible, setZenithModalVisible] = useState(false);
  const [isDoneVisible, setDoneModalVisible] = useState(false);





  const openModal = () => {
    setIsModalVisible(true);
  };
  const zenithmodal = () => {
    setGtModalVisible(true);
  };
  const accessmodal = () => {
    setAccessModalVisible(true);
  };
  const fidelitymodal = () => {
    setZenithModalVisible(true);
  };
  const DoneModal = () => {
    setDoneModalVisible(true);
  };

  const closeAccModal = () => {
    setAccessModalVisible(false);
  };
  const closeZenModal = () => {
    setGtModalVisible(false);
  };
  const closeJaizModal = () => {
    setZenithModalVisible(false);
  };
  const closeDoneModal = () => {
    setDoneModalVisible(false);
  };
  const closeModal = () => {
    setIsModalVisible(false);
  };
  const [userData, setUserData] = useState(null);
  useEffect(() => {
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
  return (
    <>
      <Modal
        animationType="slide" // You can change the animation type as per your preference
        transparent={true}
        visible={isModalVisible}

      >
        <View style={styles.modalContainer}>
          <View style={{ width: '70%', height: '30%', backgroundColor: 'white', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={gtbank} style={{ width: '30%', height: '40%' }} />
            <Text style={{ color: 'black', fontSize: 20, fontFamily: 'Inter-Regular' }}>0078334553</Text>
            <TouchableOpacity style={{ marginTop: '4%' }} onPress={() => closeModal()}>
              <Text style={{ color: "#2460A7", fontFamily: 'Inter-Regular', fontSize: 16 }}>Na gama</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide" // You can change the animation type as per your preference
        transparent={true}
        visible={isGtModalVisible}

      >
        <View style={styles.modalContainer}>
          <View style={{ width: '70%', height: '30%', backgroundColor: 'white', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={zenith} style={{ width: '30%', height: '40%' }} />
            <Text style={{ color: 'black', fontSize: 20, fontFamily: 'Inter-Regular' }}>4673132453</Text>
            <TouchableOpacity style={{ marginTop: '4%' }} onPress={() => closeZenModal()}>
              <Text style={{ color: "#2460A7", fontFamily: 'Inter-Regular', fontSize: 16 }}>Na gama</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide" // You can change the animation type as per your preference
        transparent={true}
        visible={isAccessModalVisible}

      >
        <View style={styles.modalContainer}>
          <View style={{ width: '70%', height: '30%', backgroundColor: 'white', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={access} style={{ width: '30%', height: '40%' }} />
            <Text style={{ color: 'black', fontSize: 20, fontFamily: 'Inter-Regular' }}>4735827338</Text>
            <TouchableOpacity style={{ marginTop: '4%' }} onPress={() => closeAccModal()}>
              <Text style={{ color: "#2460A7", fontFamily: 'Inter-Regular', fontSize: 16 }}>Na gama</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide" // You can change the animation type as per your preference
        transparent={true}
        visible={isZenithVisible}

      >
                <View style={styles.modalContainer}>
          <View style={{ width: '70%', height: '30%', backgroundColor: 'white', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={access} style={{ width: '30%', height: '40%' }} />
            <Text style={{ color: 'black', fontSize: 20, fontFamily: 'Inter-Regular' }}>4735827338</Text>
            <TouchableOpacity style={{ marginTop: '4%' }} onPress={() => closeAccModal()}>
              <Text style={{ color: "#2460A7", fontFamily: 'Inter-Regular', fontSize: 16 }}>Na gama</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide" // You can change the animation type as per your preference
        transparent={true}
        visible={isDoneVisible}
      >
        <View style={styles.modalContainer}>
          <View style={{ width: '70%', height: '17%', backgroundColor: 'white', borderRadius: 10, justifyContent: 'center'}}>
            <View style={{alignItems:'center'}}>
            <Text style={{ alignItems:'center', justifyContent:'center',color: 'black', fontSize: 17, fontFamily: 'Inter-Regular' }}>Your Payment will be verified in the next 12hours</Text>
            </View>
            <TouchableOpacity style={{ marginTop: '10%', alignItems:'flex-end', marginRight:'10%'}} onPress={() => navigation.navigate('UserHome')}>
              <Text style={{ color: "#2460A7", fontFamily: 'Inter-Regular', fontSize: getFontSize(14) }}>Ok</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View style={{ height: "100%", justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
        {/* <Image source={pos} style={{ width: '20%', height: '15%' }} /> */}
        <Text style={{
          fontFamily: 'Inter-Regular',
          fontSize: 18,
          color: '#2468AB',
          width: '75%',
          textAlign: 'center',
        }}>Zabi daya daga cikin wadannan bankuna domin biya</Text>
        <View style={{ width: '70%', height: '40%', marginTop: '10%', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignContent: 'center' }}>
          <TouchableOpacity onPress={() => openModal()} style={{ justifyContent: 'center', alignItems: 'center', width: '45%', height: '45%', backgroundColor: 'white', marginHorizontal: '2%', marginVertical: '2%' }}>
            <Image source={gtbank} style={{ width: '80%', height: '85%' }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => accessmodal()} style={{ justifyContent: 'center', alignItems: 'center', width: '45%', height: '45%', backgroundColor: 'white', marginHorizontal: '2%', marginVertical: '2%' }}>
            <Image source={access} style={{ width: '80%', height: '80%' }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => zenithmodal()} style={{ justifyContent: 'center', alignItems: 'center', width: '45%', height: '45%', backgroundColor: 'white', marginHorizontal: '2%', marginVertical: '2%' }}>
            <Image source={zenith} style={{ width: '80%', height: '80%' }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => fidelitymodal()} style={{ justifyContent: 'center', alignItems: 'center', width: '45%', height: '45%', backgroundColor: 'white', marginHorizontal: '2%', marginVertical: '2%' }}>
            <Image source={Jaiz} style={{ width: '80%', height: '40%' }} />
          </TouchableOpacity>
        </View>
        <Text style={{ color: 'black', fontFamily: 'Inter-Regular', fontSize: 14, marginVertical: '2%' }}>Yi amfani da lambar da ke kasa a matsayin ID</Text>
        <View
          style={{ width: '70%', height: '6%', borderColor: '#CDD6F6', borderWidth: 2, borderRadius: 20, backgroundColor: '#F2F7FBD9', justifyContent: 'center', alignItems: 'center' }}
        >
          <Text style={{ fontFamily: 'Inter-Regular', textAlign: 'center', color: "#5353FF87", fontSize: 20 }}>{userData ? userData.telephone : 'Loading...'}</Text>
        </View>
        <TouchableOpacity
          onPress={() => DoneModal()}
          style={{ width: '50%', height: '7%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#2460A7', borderRadius: 30, marginTop: '8%' }}>
          <Text style={{ fontFamily: 'Inter-Regular', fontSize: 16, color: 'white' }}>Na gama</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}
const styles = StyleSheet.create({

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalText: {
    fontSize: 24,
    color: 'white',
  },
  modalCloseButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#2460A7',
    borderRadius: 5,
  },
  modalCloseButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

