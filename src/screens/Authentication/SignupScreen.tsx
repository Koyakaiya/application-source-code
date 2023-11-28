import * as React from "react";
import { createContext, useContext, useState, useEffect } from "react";
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
import { CountryPicker } from "react-native-country-codes-picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import reg from "../../assets/Reg.png";
import regcmplete from "../../assets/regcomplete.png";
import google from '../../assets/google.png';
import facebook from '../../assets/facebook.png';
import { getData, storeData } from "../../utils/storage";
const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;
const fontScale = PixelRatio.getFontScale();
const getFontSize = size => size / fontScale;
import profimg from "../../assets/profileimg.png";
import Icon from 'react-native-vector-icons/FontAwesome'; // You can use any other icon library as well
import { CameraOptions, ImageLibraryOptions, MediaType, launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PreloaderModal from "../../utils/Preloader";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AlertBox from "../../utils/alertbox";


export const SignupScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [telephone, setTelephone] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [pwdstate, setPwdstate] = useState(true);
  const [token, setToken] = useState("");
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState("+234");
  const [mode, setMode] = useState<'date' | 'time' | 'datetime'>('date');
  const [showDate, setShowDate] = useState(false);
  const [profilepicture, setprofilepicture] = useState(null);
  const [isModalVisible, setGalleryModalVisible] = useState(false);
  const [preloaderVisible, setPreloaderVisible] = useState(false);
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [isAlert2Visible, setIsAlert2Visible] = useState(false);
  const [isAlert3Visible, setIsAlert3Visible] = useState(false);
  const [isAlert4Visible, setIsAlert4Visible] = useState(false);
  const [isAlert5Visible, setIsAlert5Visible] = useState(false);
  const [isAlert6Visible, setIsAlert6Visible] = useState(false);
  const [isAlert7Visible, setIsAlert7Visible] = useState(false);
  const [isAlert8Visible, setIsAlert8Visible] = useState(false);
  const [isAlert9Visible, setIsAlert9Visible] = useState(false);




  const togglePasswordVisibility = () => {
    setPwdstate(!pwdstate); // Toggle the state
  };
  const showAlert1 = () => {
    setIsAlertVisible(true);
  };
  const showAlert10 = () => {
    setIsAlert9Visible(true);
  };

  const showAlert2 = () => {
    setIsAlert2Visible(true);
  };
  const showAlert3 = () => {
    setIsAlert3Visible(true);
  };
  const showAlert4 = () => {
    setIsAlert4Visible(true);
  };
  const showAlert5 = () => {
    setIsAlert5Visible(true);
  };
  const showAlert6 = () => {
    setIsAlert6Visible(true);
  };
  const showAlert7 = () => {
    setIsAlert7Visible(true);
  };
  const closeAlert = () => {
    setIsAlertVisible(false);
  };
  const closeAlert1 = () => {
    setIsAlertVisible(false);
  };
  const closeAlert2 = () => {
    setIsAlert2Visible(false);
  };
  const closeAlert3 = () => {
    setIsAlert3Visible(false);
  };
  const closeAlert4 = () => {
    setIsAlert4Visible(false);
  };
  const closeAlert5 = () => {
    setIsAlert5Visible(false);
  };
  const closeAlert6 = () => {
    setIsAlert6Visible(false);
  };
  const closeAlert7 = () => {
    setIsAlert7Visible(false);
  };
  const closeAlert8 = () => {
    setIsAlert8Visible(false);
  };




  const registerUser = async (
    firstname,
    lastname,
    email,
    password,
    telephone,
    countryCode,

  ) => {
    try {
      // Make the registration request
      const response = await axios.post(
        "https://api.koyakaiya.com/v1/auth/signup",
        {
          firstname,
          lastname,
          email,
          password,
          telephone,
          countryCode,
        }
      );

      // Check if the registration was successful
      if (response.status === 200) {
        const token = response.data.token;
        // Store the registration data in AsyncStorage
        const userData = {
          firstname,
          lastname,
          email,
          telephone,
          countryCode,
          token,
        };

        await AsyncStorage.setItem('userData', JSON.stringify(userData));
        setModalVisible(true);
        return token;
      } else if (response.status === 400) {
        // Handle registration failure
        throw new Error("Registration failed");
      }
    } catch (error) {
      console.error("Registration Error:", error);
      throw error;
    } finally {
      // Hide the preloader when the registration process is complete
      setPreloaderVisible(false);
    }
  };
  const handleRegister = async () => {

    // Check if any field is empty
    if (!firstname || !lastname || !email || !password || !telephone || !countryCode) {
      showAlert1();
      return;
    }
    // Check if the password is less than 6 characters
    if (password.length < 6) {
      showAlert2();
      return;
    }
    //Check if firstname and lastname is empty
    if (!firstname) {
      showAlert3();
      return;
    }
    //Check if lastname is empty
    if (!lastname) {
      showAlert4();
      return;
    }

    if (!email.includes("@")) {
      showAlert5();
      return;
    }
    // Check if the phone number is not 11 characters
    if (telephone.length !== 11) {
      showAlert6();
      return;
    }


    try {
      const token = await registerUser(
        firstname,
        lastname,
        email,
        password,
        telephone,
        countryCode,

      );
      setToken(token);
      const registrationSuccess = true;

      if (registrationSuccess) {
        await AsyncStorage.setItem('token', token);
        // setModalVisible(true);
        showAlert10();
        // navigation.navigate('OTPScreen');
      }
    } catch (error) {
      console.error("Error registering user:", error);
      Alert.alert("Error", "Registration failed. Please try again later.");
    }
  };

  return (
    <>
      <View>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.modalcontainer}>
            <View style={styles.registerationalertbox}>
              <Image source={regcmplete} style={styles.imagecontainer} />
              <TouchableOpacity
                onPress={() => navigation.navigate("")}
                style={styles.continuetextbtn}
              >
                <TouchableOpacity onPress={() => navigation.navigate('OTPScreen')} style={{ justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={styles.text2}>
                    Dannan nan Domin Fara
                  </Text>
                  <Text style={styles.text2II}>
                    Moriyar Kyauta
                  </Text>
                </TouchableOpacity>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <CountryPicker
          show={show}
          pickerButtonOnPress={(item) => {
            setCountryCode(item.dial_code);
            setShow(false);
          }}
          lang={"en"}
        />
        <ScrollView>
          <View style={styles.container}>
            <View style={{ width: screenWidth * 1, height: screenHeight / 22, marginTop: '10%', flexDirection: 'row', alignItems: 'center' }}>
              <TouchableOpacity style={{ marginLeft: '3%', justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}
                onPress={() => navigation.goBack()}>
                <Ionicons name="chevron-back-outline" size={28} color="#2460A7"></Ionicons>
              </TouchableOpacity>
              <Text style={{
                fontFamily: "Inter-Bold",
                color: "black",
                fontSize: getFontSize(22),
                textAlign: "center",
                width: screenWidth * 0.77,
                justifyContent: 'center',
              }}>Shafin Rajista</Text>
            </View>
            <View
              style={{
                marginVertical: "1.5%",
                width: screenWidth * 1,
                height: screenHeight / 18,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TextInput
                style={styles.nameandemailfield}
                placeholder="Suna na Farko"
                placeholderTextColor="#999999"
                value={firstname}
                onChangeText={(text) => setFirstname(text)}
              />

            </View>

            <View
              style={{
                marginVertical: "1.5%",
                width: screenWidth * 1,
                height: screenHeight / 18,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TextInput
                style={styles.nameandemailfield}
                placeholder="Sunan Mahaifi"
                placeholderTextColor="#999999"
                value={lastname}
                onChangeText={(text) => setLastname(text)}
              />

            </View>
            <View
              style={{
                marginVertical: "1.5%",
                width: screenWidth * 1,
                height: screenHeight / 18,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TextInput
                style={styles.nameandemailfield}
                placeholder="Imeli"
                placeholderTextColor="#999999"
                value={email}
                onChangeText={(text) => setEmail(text)}
              />

            </View>
            <View
              style={{
                marginTop: "5%",
                width: screenWidth * 0.75,
                height: screenHeight / 18,
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: 'row',
                backgroundColor: '#f2f2f2',
                borderRadius: 10,
              }}
            >
              <TextInput
                style={{
                  width: screenWidth * 0.68,
                  height: screenHeight / 18,
                  paddingHorizontal: "6%",
                  borderBottomLeftRadius: 10,
                  borderTopLeftRadius: 10,
                  fontFamily: 'Inter-Regular',
                  color: 'black'
                }}
                placeholder="Kalmar Sirri"
                keyboardType="default"
                returnKeyLabel="next"
                keyboardAppearance="dark"
                secureTextEntry={pwdstate}
                placeholderTextColor="#999999"
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity style={{ paddingRight: '20%' }} onPress={togglePasswordVisibility}>
                <Image
                  source={pwdstate ? require('../../assets/eye.png') : require('../../assets/hidden.png')} // Replace with your actual image paths
                  style={{ width: screenWidth * 0.040, height: screenHeight * 0.020 }}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                marginVertical: "3%",
                marginBottom: "3%",
                width: screenWidth * 0.75,
                height: screenHeight / 18,
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity
                onPress={() => setShow(true)}
                style={{
                  width: screenWidth * 0.20,
                  height: screenHeight / 18,
                  backgroundColor: "white",
                  borderRadius: 10,
                  borderColor: "#f2f2f2",
                  borderWidth: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: "black",
                    fontFamily: "Inter-Bold",
                    fontSize: 16,
                  }}
                >
                  {countryCode}
                </Text>
              </TouchableOpacity>
              <View style={{ width: screenWidth * 0.53, height: screenHeight * 0.060 }}>
                <View
                  style={{
                    height: screenHeight * 0.06,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <TextInput
                    style={{
                      width: screenWidth * 0.53,
                      backgroundColor: "#f2f2f2",
                      height: screenHeight * 0.06,
                      paddingHorizontal: "5%",
                      borderRadius: 10,
                      color: "black",
                      fontFamily: 'Inter-Regular'
                    }}
                    placeholder="Lambar Waya"
                    placeholderTextColor="#999999"
                    value={telephone}
                    onChangeText={(Number) => setTelephone(Number)}
                  />

                </View>
              </View>
            </View>

            <TouchableOpacity
              onPress={handleRegister}
              style={styles.Registerbtn}
            >
              <Text style={styles.Registerbtntext}>
              Yi Rajista Yanzu 
              </Text>
            </TouchableOpacity>
            <View style={{ flexDirection: "row", justifyContent: "center", marginTop: "4%" }}>
              <Text style={{ color: 'gray', fontFamily: 'Inter-Regular' }}>Kana da Asusu?</Text>
              <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
                <Text style={{ color: "#2460A7", fontFamily: "Inter-Regular", marginTop: '1%', }}>Shiga ta nan</Text>
              </TouchableOpacity>
            </View>
          </View>
          <PreloaderModal visible={preloaderVisible} />
          <AlertBox
            isVisible={isAlertVisible}
            errormessage="Bayanai Basu Cika Ba"
            message="Tabbata ka cika duka guraben bayanai"
            onClose={closeAlert}
          />
          <AlertBox
            isVisible={isAlert2Visible}
            errormessage="Kalmar Sirrinka ba shi da karfi"  
            message="Dole kalmar sirri ya kasance harrufa 6 (shida)."
            onClose={closeAlert2}
          />
          <AlertBox
            isVisible={isAlert3Visible}
            errormessage="Bayanai Basu Cika Ba"
            message="Please fill in your firstname."
            onClose={closeAlert3}
          />
          <AlertBox
            isVisible={isAlert4Visible}
            errormessage="Bayanai Basu Cika Ba"
            message="Please fill in your lastname."
            onClose={closeAlert4}
          />
          <AlertBox
            isVisible={isAlert5Visible}
            errormessage="Invalid Email"
            message="Please enter a valid email address."
            onClose={closeAlert5}
          />
          <AlertBox
            isVisible={isAlert6Visible}
            errormessage="Invalid Phone Number"
            message="Phone number mus be 11 characters long."
            onClose={closeAlert6}
          />
          <AlertBox
            isVisible={isAlert7Visible}
            errormessage="Kuskure ya auku"
            message="User with this email already exists."
            onClose={closeAlert7}
          />
          <AlertBox
            isVisible={isAlert8Visible}
            errormessage="Internal Server Error"
            message="Please try again later."
            onClose={closeAlert8}
          />
          <AlertBox
            isVisible={isAlert9Visible}
            errormessage="Signup Successful"
            message=""
            onClose={() => navigation.navigate('OTPScreen')}
          />

        </ScrollView>
      </View>
    </>
  );
};

/**
 * @author George Fabunmi
 * @description "Idan Programmer on the grind."
 */
const styles = StyleSheet.create({
  container: {
    height: screenHeight,
    width: screenWidth,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
  },
  newregistertext: {
    fontFamily: "Inter-Bold",
    color: "#2460A7",
    fontSize: getFontSize(25),
  },

  newregistertext2: {
    fontFamily: "Inter-Regular",
    color: "#2460A7",
    fontSize: getFontSize(18),
  },
  nameandemailfield: {
    width: screenWidth * 0.75,
    height: screenHeight / 17,
    backgroundColor: "#f2f2f2",
    paddingLeft: "4%",
    marginTop: "8%",
    borderRadius: 10,
    fontFamily: 'Inter-Regular',
    color: 'black'
  },
  registernowtext: {
    fontFamily: "Inter-Regular",
    color: "#2460A7",
    fontSize: getFontSize(15),
    textAlign: "center",
    lineHeight: 23,
  },
  Registerbtn: {
    backgroundColor: "#2460A7",
    elevation: 3,
    borderRadius: 30,
    marginTop: "1%",
    marginBottom: '5%',
    width: screenWidth * 0.75,
    height: screenHeight / 17,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  Registerbtntext: {
    fontFamily: "Inter-Regular",
    color: "white",
    fontSize: getFontSize(15),
  },
  forgotpasswordtext: {
    color: "#2460A7",
    fontSize: 12,
  },
  Oauthiconcontainer: {
    width: "25%",
    height: "80%",
    backgroundColor: "white",
    borderRadius: 18,
    marginHorizontal: "2.5%",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    elevation: 2,
  },
  Oauthcontainer: {
    width: "60%",
    height: "8%",
    marginVertical: "4%",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  //
  modalcontainer: {
    height: screenHeight,
    width: screenWidth,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#A9A9A997",
  },
  registerationalertbox: {
    width: "70%",
    height: "40%",
    backgroundColor: "white",
    borderRadius: 20,
    elevation: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "Inter-Regular",
    color: "#696666",
    fontSize: getFontSize(14),
    marginTop: 20,
  },
  textII: {
    fontFamily: "Inter-Regular",
    color: "#696666",
    fontSize: getFontSize(14),
  },
  text2: {
    fontFamily: "Inter-SemiBold",
    color: "#1B4D90",
    fontSize: getFontSize(14),
    marginTop: 10,
  },
  text2II: {
    fontFamily: "Inter-SemiBold",
    color: "#1B4D90",
    fontSize: getFontSize(14),
  },
  imagecontainer: {
    width: "50%",
    height: "48%",
  },
  continuetextbtn: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    marginVertical: "2%",
  },
  oauthsignup: {
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: "5%",
    height: "10%",
  },
  oauthmodalsignup: {
    height: "100%",
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  oauthiconcontainer: {
    backgroundColor: "white",
    height: "70%",
    elevation: 5,
    width: "14%",
    borderRadius: 15,
    marginHorizontal: "1.5%",
    justifyContent: "center",
    alignItems: "center",
  },
});
