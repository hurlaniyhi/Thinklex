import React, {useState} from "react";
import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";
//import {Button} from "react-native-elements"
import {SafeAreaView} from 'react-navigation'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import image1 from '../../Formulas/image1.jpg'
import image2 from '../../Formulas/image2.jpg'
import image3 from '../../Formulas/image3.jpg'
import image4 from '../../Formulas/image4.jpg'
import image5 from '../../Formulas/image5.jpg'
import image6 from '../../Formulas/image6.jpg'
import image7 from '../../Formulas/image7.jpg'
import image8 from '../../Formulas/image8.jpg'
import image9 from '../../Formulas/image9.jpg'

import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
  } from 'react-native-responsive-screen'
import { ScrollView } from "react-native-gesture-handler";


const AllFormulas = () => {

    return(
      <ScrollView>
        <View style={{flex: 1, marginHorizontal: wp("5%"), alignItems: "center", marginTop: hp("2%")}}>
           <Image style={styles.image} source={image1}/>
           <Image style={styles.image} source={image2}/>
           <Image style={[styles.image, {height: hp("70%")}]} source={image3}/>
           <Image style={styles.image} source={image4}/>
           <Image style={styles.image} source={image5}/>
           <Image style={styles.image} source={image6}/>
           <Image style={styles.image} source={image7}/>
           <Image style={styles.image} source={image8}/>
           <Image style={[styles.image, {height: hp("55%")}]} source={image9}/>
        </View>
      </ScrollView>
    )
}




AllFormulas.navigationOptions = {
   
    headerStyle:{
        backgroundColor: "#398AD7"
        
    },
    headerTintColor: "white",
    
    headerTitleStyle: {
        color: "white",
        fontSize: wp("6%"),
        paddingLeft: wp("17%")
      },
    title: "Formulas"
    
  }

  const styles = StyleSheet.create({
    image: {
      height: hp("68%"),
      width: wp("90%"),
      marginBottom: hp("2%")
    }
  })

export default AllFormulas