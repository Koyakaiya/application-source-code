import React = require('react');
import {
    Alert,
    Button,
    Dimensions,
    Image,
    ImageBackground,
    PixelRatio,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
import bgimg from '../../../assets/Landing.png';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useEffect, useState } from 'react';
import { InAppBrowser } from 'react-native-inappbrowser-reborn';
import axios from 'axios';
import Sound = require('react-native-sound');
import PreloaderModal from '../../../utils/Preloader';
import AlertBox from '../../../utils/alertbox';
const fontScale = PixelRatio.getFontScale();
const getFontSize = size => size / fontScale;
Sound.setCategory('Playback');

export default function Details({ route, navigation }): JSX.Element {
    const [preloaderVisible, setPreloaderVisible] = useState(true);
    const [isAlert4Visible, setIsAlert4Visible] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const { word } = route.params;
    const [audioUrls, setAudioUrls] = useState({
        englishAudioUrl: '',
        hausaAudioUrl: '',
        descriptionAudioUrl: '',
    });
    const [receivedImageData, setReceivedImageData] = useState(null);
    const showAlert4 = () => {
        setIsAlert4Visible(true);
    };

    useEffect(() => {
        // Fetch audio when the component mounts
        fetchAudio();
    }, []);

    async function fetchAudio() {
        try {
            // Show the preloader while fetching audio
            setPreloaderVisible(true);

            const audioEndpoint = 'https://api.koyakaiya.com/v1/word/getAudio';
            const audioPayload = {
                englishWord: 'audio1',
                hausaWord: 'audio2',
                descriptionWord: 'audio3',
                folderPath: word.folderPath,
            };

            const response = await fetch(audioEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(audioPayload),
            });

            if (response.ok) {
                const audioData = await response.json();
                setAudioUrls(audioData);
                console.log(audioData);
            } else {
                console.error('Failed to fetch audio:', response.status, response.statusText);
                showAlert4();
                // Handle error appropriately
            }

            // Hide the preloader when audio fetching is complete
            setPreloaderVisible(false);
        } catch (error) {
            console.error('Error:', error);
            showAlert4();
            // Handle error appropriately

            // Hide the preloader in case of an error
            setPreloaderVisible(false);
        }
    }
    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = Math.floor(timeInSeconds % 60);
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };
    let currentSound = null
    function playAudio(audioUrl) {
        if (currentSound) {
            // Pause the currently playing audio
            currentSound.pause(() => {
                // Release the resources associated with the current sound
                currentSound.release();
                console.log('Audio paused and released');

                // Create and play the new audio
                const sound = new Sound(audioUrl, '', (error) => {
                    if (error) {
                        console.error('Failed to load the sound', error);
                        // Handle the error appropriately, e.g., show an error message to the user
                    } else {
                        sound.play((success) => {
                            if (success) {
                                console.log('Audio successfully played');
                            } else {
                                console.error('Failed to play the sound');
                                // Handle the playback error
                            }
                        });
                        // Update the currentSound variable
                        currentSound = sound;
                    }
                });
            });
        } else {
            // No audio is currently playing, so create and play the new audio
            const sound = new Sound(audioUrl, '', (error) => {
                if (error) {
                    console.error('Failed to load the sound', error);
                    // Handle the error appropriately, e.g., show an error message to the user
                } else {
                    sound.play((success) => {
                        if (success) {
                            console.log('Audio successfully played');
                        } else {
                            console.error('Failed to play the sound');
                            // Handle the playback error
                        }
                    });
                    // Update the currentSound variable
                    currentSound = sound;
                }
            });
        }
    }

    const [currentTime, setCurrentTime] = useState(0);
    const [totalTime, setTotalTime] = useState(0);

    // Simulated audio duration for demonstration (you should replace this)
    const audioDuration = 180; // 3 minutes

    useEffect(() => {
        // Update the total time when the component mounts
        setTotalTime(audioDuration);

        // Update the current time periodically while playing
        const interval = setInterval(() => {
            if (isPlaying && currentTime < audioDuration) {
                setCurrentTime(currentTime + 1);
            }
        }, 1000);

        // Clear the interval when the component unmounts or audio stops
        return () => clearInterval(interval);
    }, [isPlaying, currentTime]);
    //Getting the image
    useEffect(() => {
        // Define the URL and payload for the image endpoint
        const imageEndpoint = 'https://api.koyakaiya.com/v1/word/getImage';
        const imagePayload = {
            image: word.image, // Replace with your image data
            folderPath: word.folderPath,
        };

        // Make a POST request to the image endpoint using Axios
        axios
            .post(imageEndpoint, imagePayload)
            .then((response) => {
                if (response.status === 200) {
                    const imageData = response.data; // Assuming the response contains image data
                    setReceivedImageData(imageData); // Set the received image data in state
                } else {
                    console.error(`Request failed with status code ${response.status}`);
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);

    const openImageInAppBrowser = async () => {
        try {
            // Extract the actual image URL from responseData.image
            const imageUrl = receivedImageData.imageUrl;
            if (await InAppBrowser.isAvailable()) {
                await InAppBrowser.open(imageUrl, {
                    showTitle: true,
                    // You can set additional options here if needed
                });
            } else {
                console.error('In-app browser is not available');
            }
        } catch (error) {
            console.error('Error opening in-apWannan shi ne kasancewa mamba na wani kafar sadarwa, ko keɓaɓɓen muhalli a yanar gizo da ke ba wa wanda ya yi rajista izinin yin harka ko moran abubuwan da ke samuwa a wannan muhallin.p browser:', error);
            // Handle the error here, e.g., display an error message to the user
        }
    };

    return (
        <>
            <ScrollView >
                <ImageBackground source={bgimg} resizeMode="stretch" style={styles.img}>

                    <View style={{ height: screenHeight, width: screenWidth, justifyContent: 'flex-start', alignItems: 'center' }}>
                        <View style={styles.HeaderContainer}>
                            <TouchableOpacity
                                onPress={() => navigation.goBack()}
                                style={styles.BackIcon}>
                                <Ionicons
                                    name="arrow-back-circle-outline"
                                    color="white"
                                    size={35}
                                    style={styles.BackIcon} />
                            </TouchableOpacity>
                            <View style={styles.HeaderText}>
                                <Text style={styles.SBFirstText}>Ga Sakamakon Bincike</Text>
                            </View>
                        </View>
                        <View style={{ width: screenWidth * 0.8, backgroundColor: 'white', borderRadius: 10, marginTop: '7%', flexDirection: 'row' }}>
                            <View style={{ width: screenWidth * 0.635, justifyContent: 'center', paddingLeft: '5%' }}>
                                <Text style={{ fontFamily: 'Inter-Regular', fontSize: getFontSize(14), color: 'gray', paddingTop: '2%' }}>Turanci</Text>
                                <Text style={{ fontFamily: 'Inter-SemiBold', fontSize: getFontSize(14), color: '#2460A7', paddingBottom: '2%' }}>{word.englishWord}</Text>
                            </View>
                            <View style={{ width: screenWidth * 0.15, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <TouchableOpacity
                                    onPress={() => playAudio(audioUrls.englishAudioUrl)}>
                                    <Ionicons
                                        name={isPlaying ? "pause-circle-outline" : "caret-forward-outline"}
                                        color="#2460A7"
                                        size={25}
                                    />
                                </TouchableOpacity>
                                <Ionicons name="volume-low-outline" color="#1B4D90" size={25} />
                            </View>
                        </View>
                        <View style={{ width: screenWidth * 0.8, backgroundColor: 'white', borderRadius: 10, marginTop: '5%', flexDirection: 'row' }}>
                            <View style={{ width: screenWidth * 0.635, justifyContent: 'center', paddingLeft: '5%' }}>
                                <Text style={{ fontFamily: 'Inter-Regular', fontSize: getFontSize(14), color: 'gray', paddingTop: '2%' }}>Hausa</Text>
                                <Text style={{ fontFamily: 'Inter-SemiBold', fontSize: getFontSize(14), color: '#2460A7', paddingBottom: '2%', marginVertical: '1%' }}>{word.hausaWord}</Text>
                            </View>
                            <View style={{ width: screenWidth * 0.15, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <TouchableOpacity
                                    onPress={() => playAudio(audioUrls.hausaAudioUrl)}>
                                    <Ionicons
                                        name={isPlaying ? "pause-circle-outline" : "caret-forward-outline"}
                                        color="#2460A7"
                                        size={25}
                                    />
                                </TouchableOpacity>
                                <Ionicons name="volume-low-outline" color="#1B4D90" size={25} />
                            </View>
                        </View>
                        <View style={{ width: screenWidth * 0.8, backgroundColor: 'white', borderRadius: 10, marginTop: '5%', }}>
                            <View style={{ width: screenWidth * 0.8, height: screenHeight / 20, backgroundColor: 'white', borderRadius: 10, flexDirection: 'row', marginTop: '2%' }}>
                                <View style={{ width: screenWidth * 0.635, height: screenHeight / 20, justifyContent: 'center', paddingLeft: '5%' }}>
                                    <Text style={{ fontFamily: 'Inter-SemiBold', fontSize: getFontSize(15), color: '#2460A7' }}>Fasara da Bayani</Text>
                                    {/* <Text style={{ fontFamily: 'Inter-SemiBold', fontSize: getFontSize(14), color: '#2460A7' }}>{word.englishWord}</Text> */}
                                </View>
                                <View style={{ width: screenWidth * 0.15, height: screenHeight / 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <TouchableOpacity
                                        onPress={() => playAudio(audioUrls.descriptionAudioUrl)}>
                                        <Ionicons
                                            name={isPlaying ? "pause-circle-outline" : "caret-forward-outline"}
                                            color="#2460A7"
                                            size={25}
                                        />
                                    </TouchableOpacity>
                                    <Ionicons name="volume-low-outline" color="#1B4D90" size={25} />
                                </View>
                            </View>
                            <ScrollView style={{ width: screenWidth * 0.8, height: screenHeight / 6 }}>
                                <View style={{ width: screenWidth * 0.8, height: screenHeight / 6, backgroundColor: 'white', borderRadius: 10 }}>
                                    <Text style={{ fontFamily: 'Inter-Regular', fontSize: getFontSize(14), paddingHorizontal: '5%', paddingBottom: '5%', color: '#2460A7' }}>
                                        {word.description}
                                    </Text>
                                </View>
                            </ScrollView>
                        </View>
                        <View style={{ width: screenWidth * 0.8, height: screenHeight / 4, }}>
                            <Text style={styles.giftexts}>Hoto ko GIF Mai Kara Bayani</Text>
                            <TouchableOpacity onPress={openImageInAppBrowser}>
                                <View style={styles.diagramcontainer}>
                                    {receivedImageData ? <Image
                                        source={{ uri: receivedImageData.imageUrl }}
                                        style={styles.imgorgif}
                                        resizeMode='contain'
                                    />
                                        : <Text style={{ fontFamily: 'Inter-Regular', color: 'black', fontSize: 17 }}>Loading Image</Text>
                                    }
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <PreloaderModal visible={preloaderVisible} />
                </ImageBackground>
                <AlertBox
                    isVisible={isAlert4Visible}
                    errormessage="Audio not found"
                    message="Please try again later"
                    onClose={() => navigation.goBack()}
                />

            </ScrollView>
        </>
    );
}
const styles = StyleSheet.create({
    img: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    SBFcontainer: {
        height: screenHeight / 1.12,
        width: screenWidth * 0.80,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: '5%'
    },
    SBFirstText: {
        color: 'white',
        // fontWeight: '700',
        fontFamily: 'Inter-SemiBold',
        fontSize: getFontSize(19),
    },
    audiodetailsContainer: {
        width: screenWidth * 0.8,
        height: screenHeight / 2,
        // height: '7%',
        backgroundColor: 'white',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '4%',
    },
    detailsname: {
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: '',
        width: '75%',
        marginVertical: '1%'
        // backgroundColor:'black'audioexplanationContainer
    },
    hautranslationtext: {
        fontFamily: 'Inter-Regular',
        fontSize: getFontSize(13),
        marginLeft: '9%',
    },
    engtranslationtext: {
        fontFamily: 'Inter-Regular',
        fontSize: getFontSize(15),
        color: '#1B4D90',
        width: '100%',
        fontWeight: '700',
        marginLeft: '9%',
        paddingVertical: '1%'
    },
    audioexplanationContainer: {
        width: '100%',
        flexDirection: 'row',
    },
    explanation: {
        width: '80%',
        backgroundColor: 'white',
        borderRadius: 10,
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop: '6%',
        marginHorizontal: '5%'
    },
    description: {},
    exptranslationtext: {
        fontFamily: 'Inter-Regular',
        fontSize: getFontSize(15),
        color: '#1B4D90',
        width: '100%',
        fontWeight: '700',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '0%',
        marginLeft: '7%',
    },
    audioContainer: {
        width: '50%',
        justifyContent: 'center',
        textAlign: 'center',
        marginVertical: '5%',
        marginRight: '5%',
    },
    descriptiontext: {
        color: '#1B4D90',
        marginHorizontal: '5%',
        marginTop: '1%',
        marginBottom: '4%'
    },
    diagramcontainer: {
        width: '100%',
        justifyContent: 'center',
        height: '100%',
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 5,
        alignItems: 'center'
    },
    givcontainer: {
        width: '80%',
        height: '25%',
    },
    giftexts: {
        color: 'white',
        fontFamily: 'Inter-Regular',
        fontSize: getFontSize(15),
        marginLeft: '6%',
        marginTop: '6%',
    },
    BackIcon: {
        marginRight: '1%',
        justifyContent: 'center',
    },
    HeaderContainer: {
        width: screenWidth * 1,
        height: screenHeight * 0.06,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        alignContent: 'center',
        marginTop: '5%'
    },
    HeaderText: {
        width: screenWidth * 0.6,
        marginLeft: '3%',
        marginRight: '7%',
    },
    imgorgif: {
        width: '100%',
        height: '100%',
        borderRadius: 10
    }
});