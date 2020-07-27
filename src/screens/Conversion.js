import React, {useState} from "react";
import { Text, View, TouchableOpacity, StyleSheet, ImageBackground, ScrollView } from "react-native";
//import {Button} from "react-native-elements"

import {MaterialCommunityIcons} from '@expo/vector-icons'


import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
  } from 'react-native-responsive-screen'


  const Conversion = () => {


    return(
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.contents}>
                    <Text style={{fontSize: wp("3.5%"), fontWeight: "bold", paddingBottom: hp("4%")}}>Mass</Text>
                    <Text>1 kg  = 2.205 lbm</Text>
                    <Text>1 slug  = 32.2 lbm</Text>
                    <Text>1 ton  = 2000 lbm</Text>
                </View>
                <View style={styles.contents}>
                    <Text style={{fontSize: wp("3.5%"), fontWeight: "bold", paddingBottom: hp("4%")}}>Area</Text>
                    <Text>1 acre  = 4047 m_sqr</Text>
                    <Text>          = 43.560 ft_sqr</Text>
                    <Text>     = 0.00156 mi_sqr</Text>
                </View>
                <View style={styles.contents}>
                    <Text style={{fontSize: wp("3.5%"), fontWeight: "bold", paddingBottom: hp("4%")}}>Force</Text>
                    <Text>1 N  = 0.225lb</Text>
                    <Text>1 kip  = 1000lb</Text>
                </View>
                <View style={styles.contents}>
                    <Text style={{fontSize: wp("3.5%"), fontWeight: "bold", paddingBottom: hp("4%")}}>Energy</Text>
                    <Text>1 J  = 9.48 x 10^-4 Btu</Text>
                    <Text> = 0.239 cal</Text>
                    <Text>    = 0.7376 ft.lb</Text>
                    <Text>1 KWh  = 36000000 J</Text>
                </View>
                <View style={styles.contents}>
                    <Text style={{fontSize: wp("3.5%"), fontWeight: "bold", paddingBottom: hp("4%")}}>Length</Text>
                    <Text>1 m  = 3.28 ft</Text>
                    <Text>1 km  = 0.621 mi</Text>
                    <Text>1 in  = 2.54 cm</Text>
                    <Text>1 mi  = 5280 ft</Text>
                    <Text>1 yd  = 3 ft</Text>
                </View>
                <View style={styles.contents}>
                    <Text style={{fontSize: wp("3.5%"), fontWeight: "bold", paddingBottom: hp("4%")}}>Volume</Text>
                    <Text>1L  = 0.264 gal</Text>
                    <Text>      = 33.8 fl oz</Text>
                    <Text>    = 0.0353 ft_cube</Text>
                    <Text>1mL  = 1 cm_cube = 1 cc</Text>
                </View>
                <View style={styles.contents}>
                    <Text style={{fontSize: wp("3.5%"), fontWeight: "bold", paddingBottom: hp("4%")}}>Pressure</Text>
                    <Text>1 atm  = 1.01325 bar</Text>
                    <Text>            = 33.9 ft H2O</Text>
                    <Text>            = 29.92 in.Hg</Text>
                    <Text>           = 101,325 pa</Text>
                    <Text>      = 14.7 psi</Text>
                    <Text>1 psi  = 2.31 ft of H2O</Text>
                </View>
                <View style={styles.contents}>
                    <Text style={{fontSize: wp("3.5%"), fontWeight: "bold", paddingBottom: hp("4%")}}>Temperature Change</Text>
                    <Text>1 K  = 1 degree C</Text>
                    <Text>     = 1.8 degree F</Text>
                    <Text>     = 1.8 degree R</Text>
                </View>
                <View style={styles.contents}>
                    <Text style={{fontSize: wp("3.5%"), fontWeight: "bold", paddingBottom: hp("4%")}}>Time</Text>
                    <Text>1 d    = 24 hr</Text>
                    <Text>1 hr   =  60 min</Text>
                    <Text>1 min  = 60 sec</Text>
                    <Text>1 yr  = 365 d</Text>
                </View>
                <View style={styles.contents}>
                    <Text style={{fontSize: wp("3.5%"), fontWeight: "bold", paddingBottom: hp("4%")}}>Power</Text>
                    <Text>1 W  = 3.412 Btu/h</Text>
                    <Text>       = 0.00134 hp</Text>
                    <Text>            = 14.34 cal/min</Text>
                    <Text>           = 0.7376 ft.lb/s</Text>
                </View>
            </View>
        </ScrollView>
       
    )
  }


  Conversion.navigationOptions = {
   
    headerStyle:{
        backgroundColor: "#398AD7"
        
    },
    headerTintColor: "white",
    
    headerTitleStyle: {
        color: "white",
        fontSize: wp("6%"),
        paddingLeft: wp("17%")
      },

    
  }

  const styles = StyleSheet.create({
      container: {
        flex: 1, 
        flexDirection: "row", 
        flexWrap: "wrap", 
       
      },
      contents: {
        width: wp("45%"), 
        height: hp("27%"), 
        borderWidth: 2, 
        borderColor: "#398AD7",
        justifyContent: "center", 
        alignItems: "center", 
        marginTop: hp("2%"),
        paddingTop: hp("5%"),
        paddingBottom: hp("5%"),
        marginHorizontal: wp("2.5%")
      }
  })
  export default Conversion