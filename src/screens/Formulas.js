import React, {useState} from "react";
import { Text, View, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
//import {Button} from "react-native-elements"
import {SafeAreaView} from 'react-navigation'
import {MaterialCommunityIcons, Octicons} from '@expo/vector-icons'
import image from '../../tracker1.png'


import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
  } from 'react-native-responsive-screen'
// import { NavigationEvents } from "react-navigation";
  


const Formulas = ({navigation}) =>{
//     const [color, setColor] = useState("green")
//    let initial = 1

    // function changeColor(){

    //     setInterval(function(){
            
    //             if(initial === 2 ){
    //                 setColor("blue")
    //             }
    //             else if (initial === 3){
    //                 setColor("yellow")
    //             }
    //             else if (initial == 4){
    //                 setColor("purple")
                    
    //             }
    //             else if (initial == 5){
    //                 setColor("green")
    //                 initial = 1
    //             }

    //             initial = initial + 1
            
            
    //     },1000)
    // }

    // <Text style={{alignSelf: "center", fontSize: wp("11%"), color: `${color}`}}>Coming Soon !!!</Text> 


    return (
       <SafeAreaView forceInset={{top: "always"}} style={{flex: 1, backgroundColor: "black"}}>
           {/* <NavigationEvents onWillFocus={()=>changeColor()}/> */}
        <View style={{ flex: 1, backgroundColor: "white"}}>
         
         <View style={styles.title}>
           <Text style={styles.T_info}>Tools</Text> 
           <Octicons name="tools" size={45} style={{color: "white"}}/>
        </View>

          <TouchableOpacity style={styles.touch} onPress={()=> navigation.navigate('Conversion')}>
              <Text style={styles.info}>Conversions</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.touch, {marginTop: wp("3%")}]} onPress={()=> navigation.navigate('Units')}>
              <Text style={styles.info}>S.I Units</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.touch, {marginTop: wp("3%")}]} onPress={()=> navigation.navigate('myFormula')}>
              <Text style={styles.info}>Formulas</Text>
          </TouchableOpacity>
          
        </View>
       </SafeAreaView>
        )
}


Formulas.navigationOptions = {
   
    headerShown: null,
    
    
    tabBarOptions: {
        style: {
            backgroundColor: 'white',
            // borderWidth: 4,
            activeTintColor: "white",
            borderColor: "#413D3E",
        
            
        },
        
    },
    tabBarIcon: ({tintColor}) => <MaterialCommunityIcons color={tintColor} name="math-integral-box" size={20} />,
    
  }



  const styles = StyleSheet.create({
      title: {
          height: hp("20%"),
          backgroundColor: "blue",
          borderBottomLeftRadius: 80,
          marginBottom: wp("40%"),
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row"
      },
      touch: {
        backgroundColor: "#398AD7", 
        width: wp("80%"), 
        height: hp("7.5%"), 
        borderRadius: 10, 
        justifyContent: "center",
        marginHorizontal: wp("10%"),
        borderWidth: 1,
        borderColor: "white",
        alignItems: "center"
      },
      info: {
          color: "white",
          fontSize: wp("6%")
      },
      T_info: {
        color: "white",
        fontSize: wp("9.5%"),
        paddingRight: wp("20%")
    },
    background: {
      width: wp("100%"),
      height: hp("30%"),
      borderBottomLeftRadius: 80
    }, 
    overlay:{
      flex: 1,
      backgroundColor: "rgba(47,163,218, 0.4)"
    }
  })


export default Formulas