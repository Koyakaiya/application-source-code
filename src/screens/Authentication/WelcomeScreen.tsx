import * as React from "react";
import { View, Text, Dimensions, Image, TouchableOpacity, PixelRatio, BackHandler } from "react-native";
const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;
const fontScale = PixelRatio.getFontScale();
const getFontSize = size => size / fontScale;
import WelcomeImg from "../../assets/kayhra1.png";
import logo from "../../assets/logo.png";
import makks from "../../assets/makks.png"
import google from "../../assets/google.png";
import facebook from "../../assets/facebook.png"
import { useEffect } from "react";
export default function WelcomeScreen({ navigation }) {
    useEffect(() => {
        const backAction = () => {
          // Disable the back button behavior
          return true;
        };
    
        // Add an event listener for the hardware back button
        const backHandler = BackHandler.addEventListener(
          "hardwareBackPress",
          backAction
        );
    
        // Clean up the event listener when the component unmounts
        return () => {
          backHandler.remove();
        };
      }, []);
    return (
        <>
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'white'
                }}>

                <View
                    style={{
                        width: screenWidth * 1,
                        height: screenHeight / 3,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>

                    <Image
                        source={WelcomeImg}
                        style={{
                            width: screenWidth * 0.6,
                            height: screenHeight / 3.3
                        }}
                    />
                </View>

                <View
                    style={{
                        flexDirection: 'row',
                        height: screenHeight / 17,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>

                    <Text
                        style={{
                            fontFamily: 'Inter-Bold',
                            fontSize: getFontSize(22),
                            color: '#2460A7',
                            marginLeft: '1%'
                        }}>
                        M.A.K.K.S
                    </Text>

                </View>

                <Text
                    style={{
                        color: 'black',
                        fontFamily: 'Inter-SemiBold',
                        fontSize: getFontSize(18),
                        textAlign: 'center',
                        width:'80%'
                    }}>
                    Abokin koyo daga farawa zuwa kwarewa
                </Text>

                <View
                    style={{
                        width: screenWidth * 1,
                        height: screenHeight / 9,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('SignupScreen')}
                        style={{
                            width: screenWidth * 0.60,
                            height: screenHeight / 16,
                            backgroundColor: '#2460A7',
                            borderRadius: 30,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>

                        <Text
                            style={{
                                fontFamily: 'Inter-SemiBold',
                                fontSize: getFontSize(17),
                                color: 'white'
                            }}>
                            Shiga da imeli 
                        </Text>

                    </TouchableOpacity>

                </View>

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
                        ko ka shiga da 
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
                <Text
                    style={{
                        color: 'gray',
                        fontSize: getFontSize(12),
                        fontFamily: 'Inter-Regular',
                        marginTop: '8%'
                    }}>
                    Ci gaba na nuna amincewarka da na M.A.K.K.S
                </Text>
                <View
                    style={{
                        flexDirection: 'row',
                        marginTop: '1%'
                    }}>
                    <Text
                        style={{
                            color: '#2460A7',
                            fontSize: getFontSize(12),
                            fontFamily: 'Inter-Bold'
                        }}>
                        Sharruɗan yin amfani
                    </Text>
                    <Text
                        style={{
                            color: 'gray',
                            fontSize: getFontSize(12),
                            fontFamily: 'Inter-Regular',
                            marginHorizontal: '1%'
                        }}>
                        da
                    </Text>

                    <Text
                        style={{
                            color: '#2460A7',
                            fontSize: getFontSize(12),
                            fontFamily: 'Inter-Bold'
                        }}>
                        Manufofin Keɓantawa
                    </Text>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        marginTop: '10%'
                    }}>
                    <Text
                        style={{
                            color: 'gray',
                            fontSize: getFontSize(12),
                            fontFamily: 'Inter-Regular'
                        }}>
                        Kana da Asusu?
                    </Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('LoginScreen')}>
                        <Text
                            style={{
                                color: '#2460A7',
                                fontSize: getFontSize(12),
                                fontFamily: 'Inter-Bold',
                                paddingHorizontal: '0.5%'
                            }}>
                            Shiga ta nan
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
}