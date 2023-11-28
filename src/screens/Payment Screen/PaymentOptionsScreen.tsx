import {
  StyleSheet,
  ImageBackground,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  PixelRatio,
  Share,
} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import payyee from '../../assets/payyee.png';
import * as React from 'react';
import LinearGradient from 'react-native-linear-gradient';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
import transf from '../../assets/TRSF.png';
import pfm from '../../assets/PFM.png';
import pos from '../../assets/POS.png';
import paybot from '../../assets/payee.png';
import axios from 'axios';
import { Linking } from 'react-native';
import bg from '../../assets/bgicon.png';
const fontScale = PixelRatio.getFontScale();
const getFontSize = size => size / fontScale;

const payment = () => {
  // Send POST request to the API
  axios({
    method: 'POST',
    url: endpoint,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    data: payload,
  })
    .then(response => {
      // Extract the authorization URL from the response
      const { authorization_url } = response.data.data;

      // Open the authorization URL in the browser
      Linking.openURL(authorization_url)
        .then(() => {
          console.log('Authorization URL opened successfully.');
        })
        .catch(error => {
          console.error('Error opening authorization URL:', error);
        });
    })
    .catch(error => {
      console.error('Error sending POST request:', error);
    });
};

const sharePaymentUrl = async () => {
  // Define your payload
  // Send POST request to the API
  const response = await axios({
    method: 'POST',
    url: endpoint,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    data: payload,
  });

  // Extract the authorization URL from the response
  const { authorization_url } = response.data.data;

  // Share the authorization URL
  await Share.share({
    message: authorization_url,
  });
} catch (error) {
  console.error('Error:', error);
}
};

export const PaymentOption = ({ navigation, contentToShare }) => {
  const openShareDialog = async () => {
    try {
      const shareOptions = {
        message: contentToShare, // The content you want to share (text, URL, etc.)
        // You can specify additional options here, such as subject, title, and more.
      };

      const result = await Share.share(shareOptions);

      if (result.action === Share.sharedAction) {
        // Content was successfully shared
        console.log('Shared successfully');
      } else if (result.action === Share.dismissedAction) {
        // Share dialog dismissed by the user
        console.log('Share dismissed');
      }
    } catch (error) {
      console.error('Error sharing:', error.message);
    }
  };
  return (
    <>
      <ImageBackground source={bg} style={styles.container}>
        <View style={styles.barmaincontainer}>
          <TouchableOpacity style={styles.barcontentcontainer}>
            <View style={styles.secondbarcontainer}>
              <LinearGradient
                colors={['#5353FFE5', '#00CCFFE5']}
                style={styles.headerbar}>
                <View style={styles.headerbarcontainer}>
                  <Text style={styles.headerbartext}>Shafin Biya</Text>
                </View>
                <Image source={paybot} style={styles.headerbarimg} />
              </LinearGradient>
            </View>
          </TouchableOpacity>
        </View>
        <Text style={styles.headertext}>Zaɓi Hanyar Biya da ka fiso </Text>
        <View style={styles.barmaincontainer}>
          <TouchableOpacity
            // onPress={() => navigation.navigate('UserHome')}
            style={styles.barcontentcontainer}>
            <View style={styles.secondbarcontainer}>
              <View
                // colors={['#ECF7FF37', '#00CCFF45']}
                style={styles.paymentbar}>
                <Image source={transf} style={styles.barimg} />
                <TouchableOpacity
                  onPress={payment}
                  style={styles.bartextcontainer}>
                  <Text style={styles.paymentbartext}>Biya ta Yanar Gizo</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={sharePaymentUrl}
          style={styles.barmaincontainer}>
          <View style={styles.barcontentcontainer}>
            <View style={styles.secondbarcontainer}>
              <View
                // colors={['#CDF2F645', '#00CCFF87']}
                style={styles.paymentbar2}>
                <Image source={pfm} style={styles.barimg} />
                <View style={styles.bartextcontainer}>
                  <Text style={styles.paymentbartext}>
                    Biya ta Mai Tallafawa
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.barmaincontainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('PosPaymentScreen')}
            style={styles.barcontentcontainer}>
            <View style={styles.secondbarcontainer}>
              <View
                // colors={['#CDF2F663', '#00CCFFB3']}
                style={styles.paymentbar3}>
                <Image source={pos} style={styles.barimg} />
                <View style={styles.bartextcontainer}>
                  <Text style={styles.paymentbartext}>
                    Biya da Tsabar Kudi a P.O.S
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerbar: {
    width: '100%',
    height: '50%',
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 20,
    elevation: 8,
    backgroundColor: 'white',
    marginBottom: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  paymentbar: {
    width: '100%',
    height: '65%',
    borderRadius: 20,
    backgroundColor: 'white',
    marginBottom: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  paymentbar2: {
    width: '100%',
    height: '65%',
    borderRadius: 20,
    backgroundColor: 'white',
    marginBottom: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  paymentbar3: {
    width: '100%',
    height: '65%',
    borderRadius: 20,
    backgroundColor: 'white',
    marginBottom: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerbarcontainer: {
    width: '60%',
    height: '95%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  bartextcontainer: {
    width: '69%',
    height: '95%',
    justifyContent: 'center',
  },
  barimgcontainer: {
    width: '25%',
    height: '120%',
    backgroundColor: 'yellow',
  },
  headerbarimg: {
    height: screenHeight / 6,
    width: screenWidth * 0.26,
    paddingBottom: 40,
    marginRight: 30,
  },
  barimg: {
    height: '130%',
    width: '30%',
    paddingBottom: 40,
    marginLeft: 10,
  },
  barcontentcontainer: {
    width: '95%',
    height: '95%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  barmaincontainer: {
    width: '100%',
    height: '18%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondbarcontainer: {
    width: '90%',
    height: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerbartext: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Inter-Bold',
  },
  paymentbartext: {
    color: '#2460A7',
    fontSize: 16,
    fontFamily: 'Inter-Regular',
  },
  headertext: {
    color: 'white',
    fontFamily: 'Inter-Regular',
    fontSize: 20,
    alignItems: 'center',
    marginBottom: '5%',
  },
});
