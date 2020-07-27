import React, {useState} from "react";
import { Text, View, TouchableOpacity, StyleSheet, ImageBackground, ScrollView } from "react-native";
//import {Button} from "react-native-elements"

import {MaterialCommunityIcons} from '@expo/vector-icons'


import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
  } from 'react-native-responsive-screen'



const Units = () => {

    return(
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.leftTable}>
                <View style={[styles.leftTableInner, {backgroundColor: "#398AD7"}]}>
                      <Text style={[styles.leftTableContent, {color: "white", fontSize: wp("4%")}]}>Quantity</Text>
                    </View>
                    <View style={styles.leftTableInner}>
                      <Text style={styles.leftTableContent}>Velocity</Text>
                    </View>
                    <View style={styles.leftTableInner}>
                      <Text style={styles.leftTableContent}>Force</Text>
                    </View>
                    <View style={styles.leftTableInner}>
                      <Text style={styles.leftTableContent}>Pressure</Text>
                    </View>
                    <View style={styles.leftTableInner}>
                      <Text style={styles.leftTableContent}>Power</Text>
                    </View>
                    <View style={styles.leftTableInner}>
                      <Text style={styles.leftTableContent}>Voltage</Text>
                    </View>
                    <View style={styles.leftTableInner}>
                      <Text style={styles.leftTableContent}>Frequency</Text>
                    </View>
                    <View style={styles.leftTableInner}>
                      <Text style={styles.leftTableContent}>Temperature</Text>
                    </View>
                    <View style={styles.leftTableInner}>
                      <Text style={styles.leftTableContent}>Mass</Text>
                    </View>
                    <View style={styles.leftTableInner}>
                      <Text style={styles.leftTableContent}>Luminous Intensity</Text>
                    </View>
                    <View style={styles.leftTableInner}>
                      <Text style={styles.leftTableContent}>Current</Text>
                    </View>
                    <View style={styles.leftTableInner}>
                      <Text style={styles.leftTableContent}>Capacitance</Text>
                    </View>
                    <View style={styles.leftTableInner}>
                      <Text style={styles.leftTableContent}>Conductance</Text>
                    </View>
                    <View style={styles.leftTableInner}>
                      <Text style={styles.leftTableContent}>Inductance</Text>
                    </View>
                    <View style={styles.leftTableInner}>
                      <Text style={styles.leftTableContent}>Resistance</Text>
                    </View>
                    <View style={styles.leftTableInner}>
                      <Text style={styles.leftTableContent}>Luminous Flux</Text>
                    </View>
                    <View style={styles.leftTableInner}>
                      <Text style={styles.leftTableContent}>Magnetic Flux</Text>
                    </View>
                    <View style={styles.leftTableInner}>
                      <Text style={styles.leftTableContent}>Work, Energy, Heat</Text>
                    </View>
                    <View style={styles.leftTableInner}>
                      <Text style={styles.leftTableContent}>Acceleration</Text>
                    </View>
                    <View style={styles.leftTableInner}>
                      <Text style={styles.leftTableContent}>density</Text>
                    </View>
                    <View style={styles.leftTableInner}>
                      <Text style={styles.leftTableContent}>Luminace</Text>
                    </View>
                    <View style={styles.leftTableInner}>
                      <Text style={styles.leftTableContent}>Moment of Inertia</Text>
                    </View>
                    <View style={styles.leftTableInner}>
                      <Text style={styles.leftTableContent}>Momentum</Text>
                    </View>
                    <View style={styles.leftTableInner}>
                      <Text style={styles.leftTableContent}>Permitivity</Text>
                    </View>
                    <View style={styles.leftTableInner}>
                      <Text style={styles.leftTableContent}>Torque</Text>
                    </View>
                    <View style={styles.leftTableInner}>
                      <Text style={styles.leftTableContent}>Specific Heat Capacity</Text>
                    </View>
                    <View style={styles.leftTableInner}>
                      <Text style={styles.leftTableContent}>Viscosity</Text>
                    </View>
                    <View style={styles.leftTableInner}>
                      <Text style={styles.leftTableContent}>Power</Text>
                    </View>
                    <View style={styles.leftTableInner}>
                      <Text style={styles.leftTableContent}>Stress</Text>
                    </View>
                </View>


                <View style={styles.rightTable}>
                <View style={[styles.rightTableInner, {backgroundColor: "#398AD7"}]}>
                      <Text style={[styles.rightTableContent, {color: "white", fontSize: wp("4%"), fontWeight: "bold"}]}>Unit</Text>
                  </View>
                  <View style={styles.rightTableInner}>
                      <Text style={styles.rightTableContent}>m/s2</Text>
                  </View>
                  <View style={styles.rightTableInner}>
                      <Text style={styles.rightTableContent}>N, kg.m/sec_square</Text>
                  </View>
                  <View style={styles.rightTableInner}>
                      <Text style={styles.rightTableContent}>N/m_square, Pa</Text>
                  </View>
                  <View style={styles.rightTableInner}>
                      <Text style={styles.rightTableContent}>Watt, J/s, V/A</Text>
                  </View>
                  <View style={styles.rightTableInner}>
                      <Text style={styles.rightTableContent}>Volt</Text>
                  </View>
                  <View style={styles.rightTableInner}>
                      <Text style={styles.rightTableContent}>Hz</Text>
                  </View>
                  <View style={styles.rightTableInner}>
                      <Text style={styles.rightTableContent}>deg. C, deg. F, deg. R </Text>
                  </View>
                  <View style={styles.rightTableInner}>
                      <Text style={styles.rightTableContent}>kg</Text>
                  </View>
                  <View style={styles.rightTableInner}>
                      <Text style={styles.rightTableContent}>candela (cd)</Text>
                  </View>
                  <View style={styles.rightTableInner}>
                      <Text style={styles.rightTableContent}>Ampere (A)</Text>
                  </View>
                  <View style={styles.rightTableInner}>
                      <Text style={styles.rightTableContent}>farad (F)</Text>
                  </View>
                  <View style={styles.rightTableInner}>
                      <Text style={styles.rightTableContent}>Siemens</Text>
                  </View>
                  <View style={styles.rightTableInner}>
                      <Text style={styles.rightTableContent}>henry (h)</Text>
                  </View>
                  <View style={styles.rightTableInner}>
                      <Text style={styles.rightTableContent}>ohm</Text>
                  </View>
                  <View style={styles.rightTableInner}>
                      <Text style={styles.rightTableContent}>lumen</Text>
                  </View>
                  <View style={styles.rightTableInner}>
                      <Text style={styles.rightTableContent}>weber</Text>
                  </View>
                  <View style={styles.rightTableInner}>
                      <Text style={styles.rightTableContent}>Joule</Text>
                  </View>
                  <View style={styles.rightTableInner}>
                      <Text style={styles.rightTableContent}>m/sec_square</Text>
                  </View>
                  <View style={styles.rightTableInner}>
                      <Text style={styles.rightTableContent}>kg/m_cube</Text>
                  </View>
                  <View style={styles.rightTableInner}>
                      <Text style={styles.rightTableContent}>cd/m_square</Text>
                  </View>
                  <View style={styles.rightTableInner}>
                      <Text style={styles.rightTableContent}>kg m_square</Text>
                  </View>
                  <View style={styles.rightTableInner}>
                      <Text style={styles.rightTableContent}>kg m/s</Text>
                  </View>
                  <View style={styles.rightTableInner}>
                      <Text style={styles.rightTableContent}>farad per meter</Text>
                  </View>
                  <View style={styles.rightTableInner}>
                      <Text style={styles.rightTableContent}>N m</Text>
                  </View>
                  <View style={styles.rightTableInner}>
                      <Text style={styles.rightTableContent}>j/(kg k)</Text>
                  </View>
                  <View style={styles.rightTableInner}>
                      <Text style={styles.rightTableContent}>m_square/sec</Text>
                  </View>
                  <View style={styles.rightTableInner}>
                      <Text style={styles.rightTableContent}>kilowatt</Text>
                  </View>
                  <View style={styles.rightTableInner}>
                      <Text style={styles.rightTableContent}>Pa</Text>
                  </View>
                </View>







           
                <View style={[styles.leftTable, {marginTop: hp("6%")}]}>
                <View style={[styles.leftTableInner, {backgroundColor: "#398AD7"}]}>
                      <Text style={[styles.leftTableContent, {color: "white", fontSize: wp("4%")}]}>Number</Text>
                    </View>
                    <View style={styles.leftTableInner}>
                      <Text style={styles.leftTableContent}>10^24</Text>
                    </View>
                    <View style={styles.leftTableInner}>
                      <Text style={styles.leftTableContent}>10^21</Text>
                    </View>
                    <View style={styles.leftTableInner}>
                      <Text style={styles.leftTableContent}>10^18</Text>
                    </View>
                    <View style={styles.leftTableInner}>
                      <Text style={styles.leftTableContent}>10^15</Text>
                    </View>
                    <View style={styles.leftTableInner}>
                      <Text style={styles.leftTableContent}>10^12</Text>
                    </View>
                    <View style={styles.leftTableInner}>
                      <Text style={styles.leftTableContent}>10^9</Text>
                    </View>
                    <View style={styles.leftTableInner}>
                      <Text style={styles.leftTableContent}>10^6</Text>
                    </View>
                    <View style={styles.leftTableInner}>
                      <Text style={styles.leftTableContent}>10^3</Text>
                    </View>
                    <View style={styles.leftTableInner}>
                      <Text style={styles.leftTableContent}>10^2</Text>
                    </View>
                    <View style={styles.leftTableInner}>
                      <Text style={styles.leftTableContent}>10^1</Text>
                    </View>
                    <View style={styles.leftTableInner}>
                      <Text style={styles.leftTableContent}>10^-1</Text>
                    </View>
                    <View style={styles.leftTableInner}>
                      <Text style={styles.leftTableContent}>10^-2</Text>
                    </View>
                    <View style={styles.leftTableInner}>
                      <Text style={styles.leftTableContent}>10^-3</Text>
                    </View>
                    <View style={styles.leftTableInner}>
                      <Text style={styles.leftTableContent}>10^-6</Text>
                    </View>
                    <View style={styles.leftTableInner}>
                      <Text style={styles.leftTableContent}>10^-9</Text>
                    </View>
                    <View style={styles.leftTableInner}>
                      <Text style={styles.leftTableContent}>10^-12</Text>
                    </View>
                    <View style={styles.leftTableInner}>
                      <Text style={styles.leftTableContent}>10^-15</Text>
                    </View>
                    <View style={styles.leftTableInner}>
                      <Text style={styles.leftTableContent}>10^-18</Text>
                    </View>
                    <View style={styles.leftTableInner}>
                      <Text style={styles.leftTableContent}>10^-21</Text>
                    </View>
                    <View style={styles.leftTableInner}>
                      <Text style={styles.leftTableContent}>10^-24</Text>
                    </View>
                </View>


                <View style={[styles.rightTable, {marginTop: hp("6%")}]}>
                <View style={[styles.rightTableInner, {backgroundColor: "#398AD7"}]}>
                      <Text style={[styles.rightTableContent, {color: "white", fontSize: wp("4%"), fontWeight: "bold"}]}>Prefix</Text>
                  </View>
                  <View style={styles.rightTableInner}>
                      <Text style={styles.rightTableContent}>yotta</Text>
                  </View>
                  <View style={styles.rightTableInner}>
                      <Text style={styles.rightTableContent}>zetta</Text>
                  </View>
                  <View style={styles.rightTableInner}>
                      <Text style={styles.rightTableContent}>exa</Text>
                  </View>
                  <View style={styles.rightTableInner}>
                      <Text style={styles.rightTableContent}>peta</Text>
                  </View>
                  <View style={styles.rightTableInner}>
                      <Text style={styles.rightTableContent}>tera</Text>
                  </View>
                  <View style={styles.rightTableInner}>
                      <Text style={styles.rightTableContent}>giga</Text>
                  </View>
                  <View style={styles.rightTableInner}>
                      <Text style={styles.rightTableContent}>mega</Text>
                  </View>
                  <View style={styles.rightTableInner}>
                      <Text style={styles.rightTableContent}>kilo</Text>
                  </View>
                  <View style={styles.rightTableInner}>
                      <Text style={styles.rightTableContent}>hecto</Text>
                  </View>
                  <View style={styles.rightTableInner}>
                      <Text style={styles.rightTableContent}>deca</Text>
                  </View>
                  <View style={styles.rightTableInner}>
                      <Text style={styles.rightTableContent}>deci</Text>
                  </View>
                  <View style={styles.rightTableInner}>
                      <Text style={styles.rightTableContent}>centi</Text>
                  </View>
                  <View style={styles.rightTableInner}>
                      <Text style={styles.rightTableContent}>milli</Text>
                  </View>
                  <View style={styles.rightTableInner}>
                      <Text style={styles.rightTableContent}>micro</Text>
                  </View>
                  <View style={styles.rightTableInner}>
                      <Text style={styles.rightTableContent}>nano</Text>
                  </View>
                  <View style={styles.rightTableInner}>
                      <Text style={styles.rightTableContent}>pico</Text>
                  </View>
                  <View style={styles.rightTableInner}>
                      <Text style={styles.rightTableContent}>femto</Text>
                  </View>
                  <View style={styles.rightTableInner}>
                      <Text style={styles.rightTableContent}>atto</Text>
                  </View>
                  <View style={styles.rightTableInner}>
                      <Text style={styles.rightTableContent}>zepto</Text>
                  </View>
                  <View style={styles.rightTableInner}>
                      <Text style={styles.rightTableContent}>yocto</Text>
                  </View>
                 </View>
                
            </View>
        </ScrollView>
    )
} 


Units.navigationOptions = {
   
    headerStyle:{
        backgroundColor: "#398AD7"
        
    },
    headerTintColor: "white",
    
    headerTitleStyle: {
        color: "white",
        fontSize: wp("6%"),
        paddingLeft: wp("3%")
      },
    title: "SI Units and Prefixes"
    
  }



const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: wp("90%"), 
        flexDirection: "row",
        flexWrap: "wrap", 
        marginTop: hp("2%"),
        marginHorizontal: wp("5%")
      },
      leftTable: {
        
        width: wp("45%"),
        borderLeftWidth: 3, 
        borderTopWidth: 1,
        borderBottomWidth: 3,
        borderColor: "#398AD7",
        marginBottom: hp("3%")
      },
      leftTableInner: {
        borderBottomWidth: 1, 
        justifyContent: "center", 
        height: hp("5.5%"),
        borderColor: "#398AD7"
      },
      leftTableContent: {
        alignSelf: "center", 
        fontWeight: "bold",
        color: "#726B68"
      },
      rightTable: {
        
        width: wp("45%"),
        borderWidth: 1,
        borderRightWidth: 3,
        borderBottomWidth: 3,
        borderColor: "#398AD7",
        marginBottom: hp("3%")
      },
      rightTableInner: {
        borderBottomWidth: 1, 
        justifyContent: "center", 
        height: hp("5.5%"),
        borderColor: "#398AD7"
      },
      rightTableContent: {
        alignSelf: "center"
      }
})

export default Units