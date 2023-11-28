import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  PixelRatio
} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import subimg from '../../assets/subimg.png';
import React = require('react');
import LinearGradient from 'react-native-linear-gradient';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const fontScale = PixelRatio.getFontScale();
const getFontSize = size => size / fontScale;

export const SelectBundle = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.selectbundleheadertext}>Ire-Iren Tsarin Amfani da Fa’idodin su</Text>
        <Text style={styles.selectbundlefollowingtext}>
          Zaɓi irin Tsarin Amfani da ka ke so
        </Text>
        <LinearGradient
          colors={['#2460A7', '#2460A7']}
          style={styles.bundleselectioncontainer}>
          <Text style={styles.price}>₦500</Text>
          <Text style={styles.containerheadercontent}>A KOWANE WATA</Text>

          <View style={styles.containerbodycontent}>
            <View style={styles.containerbodytextcontainer}>
              <View
                style={tw`bg-white h-1.5 w-1.5 rounded-full mt-2.5 mx-2.5`}
              />
              <Text style={styles.containerbodytext}>
                Kalmomi 10 (goma) za a iya bincika a kowane rana da wannan
                tsarin
              </Text>
            </View>
            <View style={styles.containerbodycontent}>
              <View style={styles.secondcontainerbodytextcontainer}>
                <View
                  style={tw`bg-white h-1.5 w-1.5 rounded-full mt-2.5 mx-2.5`}
                />
                <Text style={styles.containerbodytext}>
                  Damar Shiga Gasar Kacici-Kacici na Mako Mako
                </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity 
          onPress={() => navigation.navigate('PaymentOptionsScreen')}
          style={styles.firsttokenbtn}>
            <Text style={styles.tokenbtn}>Zaɓi irin Tsarin Nan</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient
          colors={['#2460A7', '#2460A7']}
          style={styles.bundleselectioncontainer}>
          <Text style={styles.price}>₦1000</Text>
          <Text style={styles.containerheadercontent}>A KOWANE WATA</Text>
          <View style={styles.containerbodycontent}>
            <View style={styles.containerbodytextcontainer}>
              <View
                style={tw`bg-white h-1.5 w-1.5 rounded-full mt-2.5 mx-2.5`}
              />
              <Text style={styles.containerbodytext}>
                Kalmomi 20 (ashirin) za a iya bincika a kowane rana da wannan
                tsarin
              </Text>
            </View>

            <View style={styles.containerbodycontent}>
              <View style={styles.secondcontainerbodytextcontainer}>
                <View
                  style={tw`bg-white h-1.5 w-1.5 rounded-full mt-2.5 mx-2.5`}
                />
                <Text style={styles.containerbodytext}>
                  Damar Shiga Gasar Kacici - na Mako Mako
                </Text>
              </View>
            </View>
          </View>

          <TouchableOpacity 
          onPress={() => navigation.navigate('PaymentOptionOneThousand')}
          style={styles.firsttokenbtn}>
            <Text style={styles.tokenbtn}>Zaɓi irin Tsarin Nan</Text>
          </TouchableOpacity>
        </LinearGradient> 
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  price: {
    fontSize: getFontSize(50),
    textAlign: 'center',
    fontFamily: 'Inter-Bold',
    color: 'white',
    height: screenHeight/12,
  },
  containerheadercontent: {
    fontFamily: 'Inter-Bold',
    fontSize: getFontSize(20),
    textDecorationLine: 'underline',
    textAlign: 'center',
    color: 'white',
  },
  containerbodycontent: {
    width: screenWidth*0.8,
    height: '40%',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerbodytextcontainer: {
    flexDirection: 'row',
    alignContent: 'center',
    width: screenWidth*0.75,
  },
  secondcontainerbodytextcontainer: {
    flexDirection: 'row',
    alignContent: 'center',
    backgroundColor: '',
    width: screenWidth*0.75,
    marginTop: '2%',
  },

  containerbodytext: {
    color: 'white',
    fontSize: getFontSize(13),
    fontFamily: 'Inter-Regular',
    width: screenWidth*0.67,

  },
  container: {
    flex:1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  selectbundleheadertext: {
    fontFamily: 'Inter-SemiBold',
    // fontWeight:'900',
    color: '#2460A7',
    fontSize: getFontSize(18),
    textAlign: 'center',
    marginTop:'10%',
    width:screenWidth*0.8,
    marginBottom:'2%',

  },
  selectbundlefollowingtext: {
    fontFamily: 'Inter-SemiBold',
    color: '#2460A7',
    fontSize: getFontSize(16),
    marginBottom:'1%',
  },
  bundleselectioncontainer: {
    width: screenWidth*0.8,
    height: screenHeight/3,
    borderRadius: 20,
    marginTop: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  firsttokenbtn: {
    borderRadius: 30,
    backgroundColor: 'white',
    alignItems: 'center',
    width: screenWidth*0.5,
    marginBottom:'5%'
  },
  tokenbtn: {
    marginVertical: 6,
    fontFamily: 'Inter-Regular',
    textAlign: 'center',
    alignItems: 'center',
    color: '#2460A7',
    fontSize: getFontSize(15),
  },
});
