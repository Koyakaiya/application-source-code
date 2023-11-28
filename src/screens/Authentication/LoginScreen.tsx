import * as React from "react";
import { useState } from "react";
import {
  Alert,
  Dimensions,
  Image,
  Modal,
  PixelRatio,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import axios from "axios";
import kayrha from "../../assets/kayhra1.png";
import AsyncStorage from "@react-native-async-storage/async-storage";
import PreloaderModal from "../../utils/Preloader";
import google from "../../assets/google.png";
import facebook from "../../assets/facebook.png"
import Ionicons from 'react-native-vector-icons/Ionicons';
import Registerationcompletealert from "../../utils/regiscompletealert";
import Registerationalert from "../../utils/regcompletealert";
import regcmplete from '../../assets/regcomplete.png';
import AlertBox from "../../utils/alertbox";


const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;
const fontScale = PixelRatio.getFontScale();
const getFontSize = size => size / fontScale;

export const LoginScreen = ({ navigation }) => {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [pwdstate, setPwdstate] = useState(true);
  const [preloaderVisible, setPreloaderVisible] = useState(false);
  const [registrationSuccessModal, setregistrationSuccessModal] = useState(false);
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [isAlert2Visible, setIsAlert2Visible] = useState(false);
  const [isAlert3Visible, setIsAlert3Visible] = useState(false);
  const [isAlert4Visible, setIsAlert4Visible] = useState(false);


  const togglePasswordVisibility = () => {
    setPwdstate(!pwdstate); // Toggle the state
  };
  const showAlert = () => {
    setIsAlertVisible(true);
  };

  const closeAlert = () => {
    setIsAlertVisible(false);
  };
  const showAlert2 = () => {
    setIsAlert2Visible(true);
  };
  const showAlert4 = () => {
    setIsAlert4Visible(true);
  };
  const closeAlert2 = () => {
    setIsAlert2Visible(false);
  };
  const showAlert3 = () => {
    setIsAlert3Visible(true);
  };

  const closeAlert3 = () => {
    setIsAlert3Visible(false);
  };
  const closeAlert4 = () => {
    setIsAlert4Visible(false);
  };

  const handleLogin = async () => {
    if (!emailOrPhone) {
      showAlert();
      return;
    }
    if (!password) {
      showAlert();
      return;
    }

    try {
      setPreloaderVisible(true);

      const response = await axios.post(
        "https://api.koyakaiya.com/v1/auth/signin",
        {
          emailOrPhone: emailOrPhone,
          password: password,
        }
      );

      if (response.status === 200) {
        const userData = response.data.userData;
        await AsyncStorage.setItem('userData', JSON.stringify(userData));
        setPreloaderVisible(false);
        showAlert4();
        // setModalVisible(true);
      } else if (response.status === 404) {
        setPreloaderVisible(false);
        // showAlert2();
      }
    } catch (error) {
      setPreloaderVisible(false);
      showAlert3();
    }
  };

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
            style={styles.modalcontainer}>
            <View style={styles.registerationalertbox}>
              <Image source={regcmplete} style={styles.imagecontainer} />
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
            {/* Modal content */}
          </Modal>
          {/* <Image source={kayrha} style={{ width: "50%", height: "28%" }} /> */}
          <View style={{ width: screenWidth * 1, height: screenHeight / 12, marginTop: '10%', flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity style={{ marginLeft: '3%', justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}
              onPress={() => navigation.goBack()}>
              <Ionicons name="chevron-back-outline" size={28} color="#2460A7"></Ionicons>
            </TouchableOpacity>
            <Text style={styles.forgotpasswordheadertext}>Shiga ta nan</Text>
          </View>
          <TextInput
            style={styles.nameandemailfield}
            placeholder="Email or Phone number"
            placeholderTextColor="#999999"
            onChangeText={(text) => setEmailOrPhone(text)}
          />
          <View
            style={{
              marginTop: "3%",
              width: screenWidth * 0.75,
              height: "6%",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: 'row',
              backgroundColor: '#f2f2f2',
              borderRadius: 10,
            }}
          >
            <TextInput
              style={{
                width: screenWidth * 0.6,
                height: '100%',
                paddingHorizontal: "6%",
                borderBottomLeftRadius: 10,
                borderTopLeftRadius: 10,
                fontFamily: 'Inter-Regular',
                color: 'black'
              }}
              placeholder="Password"
              keyboardType="default"
              returnKeyLabel="next"
              keyboardAppearance="dark"
              secureTextEntry={pwdstate}
              placeholderTextColor="#999999"
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity style={{ paddingRight: '3%' }} onPress={togglePasswordVisibility}>
              <Image
                source={pwdstate ? require('../../assets/eye.png') : require('../../assets/hidden.png')} // Replace with your actual image paths
                style={{ width: 20, height: 20 }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: "70%",
              flexDirection: "row",
              justifyContent: "flex-end",
              marginVertical: "3%",
            }}
          >
            <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
              <Text style={{ color: "#2460A7", fontFamily: "Inter-Regular", }}>ForgotPassword?</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={handleLogin} style={styles.forgotpasswordbtn}>
            <Text style={styles.forgotpasswordbtntext}>Rajista</Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              width: screenWidth * 0.9,
              height: screenHeight / 20,
              justifyContent: 'center'
            }}>
            <View
              style={{
                height: screenHeight / 600,
                backgroundColor: 'gray',
                width: screenWidth * 0.25,
                marginTop: '3%'
              }} />
            <Text
              style={{
                fontFamily: 'Inter-Regular',
                color: 'gray',
                fontSize: getFontSize(14),
                marginHorizontal: '2%'
              }}>
              or continue with
            </Text>
            <View
              style={{
                height: screenHeight / 600,
                backgroundColor: 'gray',
                width: screenWidth * 0.25,
                marginTop: '3%'
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: screenWidth * 0.8,
              height: screenHeight / 15,
              justifyContent: 'center',
            }}>
            <View
              style={{
                width: screenWidth * 0.35,
                height: screenHeight / 16,
                backgroundColor: '#fafafa',
                marginHorizontal: '1%',
                borderRadius: 30,
                justifyContent: 'center',
                alignItems: 'center'
              }}>
              <Image
                source={google}
                style={{
                  height: screenHeight / 28,
                  width: screenWidth * 0.068
                }}
              />
            </View>
            <View
              style={{
                width: screenWidth * 0.35,
                height: screenHeight / 16,
                backgroundColor: '#fafafa',
                marginHorizontal: '1%',
                borderRadius: 30,
                justifyContent: 'center',
                alignItems: 'center'
              }}>
              <Image
                source={facebook}
                style={{
                  height: screenHeight / 28,
                  width: screenWidth * 0.068,
                  borderRadius: 999
                }}
              />
            </View>
          </View>
        </View>
        <PreloaderModal visible={preloaderVisible} />
        <AlertBox
          isVisible={isAlertVisible}
          errormessage="An Samu Cikas Wurin Shiga!"
          message="Tabbata ka cika duka guraben bayanai"
          onClose={closeAlert}
        />
        <AlertBox
          isVisible={isAlert2Visible}
          errormessage="Error while logging In"
          message="User not found."
          onClose={closeAlert2}
        />
        <AlertBox
          isVisible={isAlert3Visible}
          errormessage="API Error:"
          message="An error occurred while trying to log in. Please try again later."
          onClose={closeAlert3}
        />
        <AlertBox
          isVisible={isAlert4Visible}
          errormessage="Login Successful!"
          message="Welcome back."
          onClose={() => navigation.navigate('UserHome')}
        />

      </ScrollView>

    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: screenHeight,
    width: screenWidth,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
  },
  forgotpasswordheadertext: {
    fontFamily: "Inter-Bold",
    color: "black",
    fontSize: getFontSize(22),
    textAlign: "center",
    width: '77%',
    justifyContent: 'center',
  },
  nameandemailfield: {
    width: screenWidth * 0.75,
    backgroundColor: "#f2f2f2",
    height: screenHeight / 17,
    paddingLeft: "4%",
    marginTop: "8%",
    borderRadius: 10,
    fontFamily: 'Inter-Regular',
    color: 'black'
  },
  forgotpasswordbtn: {
    backgroundColor: "#2460A7",
    borderRadius: 30,
    marginVertical: "5%",
    width: "75%",
    height: "6%",
    justifyContent: "center",
    alignItems: "center",
  },
  forgotpasswordbtntext: {
    fontFamily: "Inter-SemiBold",
    color: "white",
    fontSize: getFontSize(15),
  },
  errorText: {
    color: "red",
    fontFamily: "Inter-Regular",
    fontSize: getFontSize(15),
    marginTop: '2%',
  },
  modalcontainer: {
    height: screenHeight,
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerationalertbox: {
    width: '70%',
    height: '50%',
    backgroundColor: 'white',
    borderRadius: 20,
    elevation: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontFamily: 'Inter-Regular',
    color: '#696666',
    fontSize: getFontSize(14),
    marginTop: '8%'
  },
  textII: {
    fontFamily: 'Inter-Regular',
    color: '#696666',
    fontSize: getFontSize(14),
  },
  text2: {
    fontFamily: "Inter-SemiBold",
    color: '#1B4D90',
    fontSize: getFontSize(14),
    marginTop: '5%'
  },
  text2II: {
    fontFamily: "Inter-SemiBold",
    color: '#1B4D90',
    fontSize: getFontSize(14),
  },
  imagecontainer: {
    width: '50%',
    height: '40%'
  }
});

export default LoginScreen;