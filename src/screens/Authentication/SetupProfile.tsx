import AsyncStorage from "@react-native-async-storage/async-storage";
import * as React from "react";
import { useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  Modal,
  PixelRatio,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  CameraOptions,
  ImageLibraryOptions,
  launchCamera,
  launchImageLibrary,
} from "react-native-image-picker";
const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;
const fontScale = PixelRatio.getFontScale();
const getFontSize = (size) => size / fontScale;
import Ionicons from "react-native-vector-icons/Ionicons";

export default function SetupProfile({ navigation }) {
  const [profilepicture, setprofilepicture] = useState(null);
  const [isModalVisible, setGalleryModalVisible] = useState(false);

  const openImagePicker = () => {
    setGalleryModalVisible(true);
  };

  const closeImagePicker = () => {
    setGalleryModalVisible(false);
  };

  const chooseImageFromGallery = () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      quality: 0.5,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log("Image selection cancelled");
      } else if (response.errorMessage) {
        console.error("Image picker error:", response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        setprofilepicture(response.assets[0].uri);
      }

      // Close the image picker modal
      closeImagePicker();
    });
  };

  const takeNewPhoto = () => {
    const options: CameraOptions = {
      mediaType: "photo",
      quality: 0.5,
    };

    launchCamera(options, (response) => {
      if (response.didCancel) {
        console.log("Camera capture cancelled");
      } else if (response.errorMessage) {
        console.error("Camera capture error:", response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        setprofilepicture(response.assets[0].uri);
      }

      // Close the image picker modal
      closeImagePicker();
    });
  };
  useEffect(() => {
    navigation.addListener('beforeRemove', (e) => {
      e.preventDefault();
    });

    return () => {
      navigation.removeListener('beforeRemove');
    };
  }, [navigation]);

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={closeImagePicker}
      >
        <View
          style={{
            height: screenHeight,
            width: screenWidth,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#A9A9A997",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              width: screenWidth * 0.8,
              justifyContent: "center",
              height: screenHeight * 0.2,
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                fontFamily: "Inter-SemiBold",
                color: "#2460A7",
                fontSize: getFontSize(18),
                marginLeft: "10%",
              }}
            >
              Zaɓi ta yadda kake son saka hotonka
            </Text>
            <View
              style={{
                width: "100%",
                height: "70%",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  height: "70%",
                  borderRadius: 10,
                  width: "25%",
                  backgroundColor: "white",
                  marginHorizontal: "1.5%",
                  justifyContent: "center",
                  alignItems: "center",
                  borderWidth: 1,
                  borderColor: "#2460A7",
                }}
                onPress={takeNewPhoto}
              >
                <Ionicons name="camera-outline" size={28} color="#2460A7">
                </Ionicons>
                <Text
                  style={{
                    color: "#2460A7",
                    fontSize: getFontSize(14),
                    fontFamily: "Inter-SemiBold",
                  }}
                >
                  Ta Kyamara 
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  height: "70%",
                  borderRadius: 10,
                  width: "25%",
                  backgroundColor: "white",
                  marginHorizontal: "1.5%",
                  justifyContent: "center",
                  alignItems: "center",
                  borderWidth: 1,
                  borderColor: "#2460A7",
                }}
                onPress={chooseImageFromGallery}
              >
                <Ionicons name="image-outline" size={28} color="#2460A7">
                </Ionicons>
                <Text
                  style={{
                    color: "#2460A7",
                    fontSize: getFontSize(14),
                    fontFamily: "Inter-SemiBold",
                  }}
                >
                  Daga Rumbun Ajiya 
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  height: "70%",
                  borderRadius: 10,
                  width: "25%",
                  backgroundColor: "white",
                  marginHorizontal: "1.5%",
                  justifyContent: "center",
                  alignItems: "center",
                  borderWidth: 1,
                  borderColor: "red",
                }}
                onPress={closeImagePicker}
              >
                <Ionicons name="ban-outline" size={28} color="red"></Ionicons>
                <Text
                  style={{
                    color: "red",
                    fontSize: getFontSize(14),
                    fontFamily: "Inter-SemiBold",
                  }}
                >
                  Share 
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <View
        style={{
          height: screenHeight,
          width: screenWidth,
          justifyContent: "flex-start",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <Text
          style={{
            fontFamily: "Inter-SemiBold",
            fontSize: getFontSize(20),
            color: "black",
            marginTop: "10%",
          }}
        >
          Shafin Saita Bayanin Mai Rajista
        </Text>
        <Text
          style={{
            fontFamily: "Inter-Regular",
            fontSize: getFontSize(14),
            color: "black",
          }}
        >
          Danna nan domin saka hotonka
        </Text>
        <View
          style={{
            marginTop: "7%",
            width: "40%",
            height: "20%",
            backgroundColor: "gray",
            borderRadius: 999,
            borderWidth: 2,
            borderColor: "white",
            elevation: 4,
            marginBottom: "4%",
          }}
        >
          <Image
            source={profilepicture
              ? { uri: profilepicture }
              : require("../../assets/profileimg.png")}
            style={{ width: "100%", height: "100%", borderRadius: 999 }}
          />
          <TouchableOpacity
            style={{
              position: 'absolute',
              bottom: '5%',
              right: '5%',
              backgroundColor: '#2460A7',
              borderRadius: 50,
              padding: '6%',
              justifyContent: 'center',
              alignItems: 'center'
            }}
            onPress={openImagePicker}
          >
            <Ionicons name="camera-outline" size={20} color="white"></Ionicons>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', width: screenWidth * 1, height: screenWidth * 0.14, justifyContent: 'center', alignItems: 'center', marginTop: '8%' }}>
          <TouchableOpacity style={{ marginHorizontal: '1.5%', marginTop: '12%', width: '40%', height: '100%', borderRadius: 30, backgroundColor: '#2460A7', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontFamily: 'Inter-Regular', fontSize: getFontSize(16), color: 'white' }}>Aika</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('UserHome')} style={{ marginHorizontal: '1.5%', marginTop: '12%', width: '40%', height: '100%', borderRadius: 30, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#2460A7' }}>
            <Text style={{ fontFamily: 'Inter-Regular', fontSize: getFontSize(16), color: '#2460A7' }}>Na fasa/Ba yanzu ba </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
