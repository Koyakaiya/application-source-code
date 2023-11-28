import * as React from 'react';
import { Dimensions, ImageBackground, StyleSheet, Text, View, Image } from "react-native";
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
import bgimg from '../../assets/Landing.png';
import profimg from '../../assets/profileimg.png'
import companylogo from '../../assets/Group12.png'
import Gerald from '../../assets/GERALD.png'
export default function NotificationsScreen(){
    return(
        <>
        <ImageBackground source={bgimg}>
            <View style={styles.bgcontainer}>
                <View style={styles.HeaderContainer}>
                <View style={styles.profilecontainer}>
                <Image source={profimg} style={styles.profileimg}/>
                </View>
                <Text style={styles.Headertext}>Notifications</Text>
                </View>

                <View style={styles.notificationbars}>
                    <View style={styles.companieslogocontainer}>
                    <Image source={companylogo} style={styles.companieslogo}/>
                    </View>
                    <View style={styles.notificationinformation}>
                        <Text style={styles.companiesname}>MAKKS</Text>
                        <Text style={styles.companiesinformation}>Barka Gerald, welcome to Makks. As you are here, please have a good time in out application and have a blessed time while using the application</Text>
                    </View>
                </View>
                <View style={styles.notificationbars}>
                    <View style={styles.companieslogocontainer}>
                    <Image source={Gerald} style={styles.companieslogo}/>
                    </View>
                    <View style={styles.notificationinformation}>
                        <Text style={styles.companiesname}>MAKKS</Text>
                        <Text style={styles.companiesinformation}>Barka Gerald, you have 3 more trials left once you've used all your free searches you'll have to pay and unlock the premium versions to get full user experience.</Text>
                    </View>
                </View>
                <View style={styles.notificationbars}>
                    <View style={styles.companieslogocontainer}>
                    <Image source={companylogo} style={styles.companieslogo}/>
                    </View>
                    <View style={styles.notificationinformation}>
                        <Text style={styles.companiesname}>MAKKS</Text>
                        <Text style={styles.companiesinformation}>Barka Gerald, your 1000 naira monthly subscription has been verified, you are now legible to 20 searches per day.</Text>
                    </View>
                </View>
            </View>
        </ImageBackground>
        </>
    );
}



const styles = StyleSheet.create({
    img: {
        height: screenHeight,
        width: screenWidth,
        justifyContent: 'flex-start',
        alignItems: 'center',
        },
    bgcontainer:{
        height:'100%',
        width:'100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    HeaderContainer:{
        width:'100%',
        height:'7%',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        marginVertical:'4%'
    },
    Headertext:{
        fontFamily:'Inter-Regular',
        fontSize:26,
        color:'white',
        alignItems:'center',
        justifyContent:'center'
    },
    profilecontainer:{
        width:'11%',
        height:'80%',
        borderRadius:999,
        backgroundColor:'yellow',
        marginHorizontal:'2.5%'
    },
    profileimg:{
        width:'100%',
        height:'100%'
    },
    notificationbars:{
        width:'95%',
        height:'12%',
        backgroundColor:'white',
        borderRadius:10,
        marginVertical:'2.5%',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    notificationinformation:{
        width:'80%',
        justifyContent:'center',
        alignItems:'flex-start',
        marginHorizontal:'2%'
    },
    companiesname:{
        fontFamily:'Inter-Bold',
        fontSize:12,
        paddingHorizontal:'2%',
        color:'#2468A7'
    },
    companiesinformation:{
        fontFamily:'Inter-Regular',
        fontSize:13,
        paddingHorizontal:'2%',
        color:'grey'
    },
    companieslogocontainer:{
        width:'16%',
        height:'62%',
        borderRadius:999,
        marginLeft:'3%',
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center'
    },
    companieslogo:{
        width:'110%',
        height:'110%'
    }
})