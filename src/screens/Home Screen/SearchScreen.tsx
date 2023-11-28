import {
    Dimensions,
    Image,
    ImageBackground,
    PixelRatio,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
import bgimg from '../../assets/Landing.png';
import tw from 'tailwind-react-native-classnames';
import searchbot from '../../assets/Searchbot.png';
import React = require('react');
import LinearGradient from 'react-native-linear-gradient';
const fontScale = PixelRatio.getFontScale();
const getFontSize = size => size / fontScale;
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function SearchScreen() {
    return (
        <>
            <ImageBackground source={bgimg} resizeMode="stretch" style={styles.img}>
                <View style={styles.container}>
                    <Image source={searchbot} style={styles.searchbot} />
                    <View style={styles.TextInputContainermain}>
                        <Ionicons
                            name="search-outline"
                            color="#808080"
                            size={20}
                            style={{ marginTop: '2%', marginLeft: '2%' }}
                        />
                        <TextInput
                            style={styles.TextInputContainer}
                            placeholder="Search here"
                            placeholderTextColor={'#808080'}
                        />
                    </View>

                    <View>
                        <TouchableOpacity style={styles.SCbutton}>
                            <LinearGradient
                                colors={['#FFFFFF', '#CDF2F645']}
                                style={styles.SCLineargradient}>
                                <Text style={styles.SCbuttonstext}>
                                    DANNA NAN DOMIN FARA BINCIKE
                                </Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.middlecontainer}>
                        <View style={styles.SearchResultScreen}>
                            <Text style={styles.SCtextstyle}>
                                Duba Sakamakon Binciken ka a nan
                            </Text>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </>
    );
}
/**
 * @author George Fabunmi
 */
const styles = StyleSheet.create({
    img: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    container: {
        height: screenHeight / 1.12,
        width: screenWidth * 0.8,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: '5%',
    },
    middlecontainer: {
        width: '100%',
        height: '30%',
        justifyContent: 'center',
        borderWidth: 3,
        borderColor: 'white',
        borderRadius: 30,
        alignItems: 'center',
        alignContent: 'center',
        marginVertical: '8%',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        marginTop: '10%',
    },
    searchbot: {
        alignContent: 'center',
        height: screenHeight / 9,
        width: screenWidth * 0.23,
        marginRight: '10%',
    },
    TextInputContainermain: {
        alignContent: 'center',
        width: screenWidth * 0.8,
        height: screenHeight / 20,
        justifyContent: 'center',
        backgroundColor: 'white',
        flexDirection: 'row',
        borderRadius: 20,
        marginVertical: '2.5%',
    },
    TextInputContainer: {
        borderRadius: 10,
        backgroundColor: 'white',
        fontSize: getFontSize(12),
        fontFamily: 'Inter-Regular',
        color: '#808080',
        alignItems: 'center',
        paddingHorizontal: '5%',
        height: screenHeight / 20,
        width: screenWidth * 0.7,
    },
    SCbuttonstext: {
        color: '#2460A7',
        fontSize: getFontSize(9),
        fontFamily: 'Inter-Regular',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: '3%',
        paddingHorizontal: '7%',
    },
    SCLineargradient: {
        borderRadius: 30,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    SCtextstyle: {
        color: '#2460A7',
        fontFamily: 'Inter-Regular',
        fontSize: getFontSize(12),
        textAlign: 'center',
    },
    SCbutton: {
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 30,
        marginTop: '5%',
    },
    SearchResultScreen: {
        width: screenWidth * 0.4,
        alignItems: 'center',
        alignContent: 'center',
    },
});
