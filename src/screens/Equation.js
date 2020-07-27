import React, {useState} from "react";
import { Text, StyleSheet, View, TextInput, Vibration, ScrollView } from "react-native";
import {SafeAreaView} from 'react-navigation'
import {Button} from "react-native-elements"
import {FontAwesome5} from '@expo/vector-icons'

import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
  } from 'react-native-responsive-screen'
import { TouchableOpacity } from "react-native-gesture-handler";

const Equation = () => {
 
  const [w1, setW1] = useState("")
  const [w2, setW2] = useState("")
  const [w3, setW3] = useState("")
  const [w4, setW4] = useState("")
  const [x1, setX1] = useState("")
  const [x2, setX2] = useState("")
  const [x3, setX3] = useState("")
  const [x4, setX4] = useState("")
  const [y1, setY1] = useState("")
  const [y2, setY2] = useState("")
  const [y3, setY3] = useState("")
  const [y4, setY4] = useState("")
  const [z1, setZ1] = useState("")
  const [z2, setZ2] = useState("")
  const [z3, setZ3] = useState("")
  const [z4, setZ4] = useState("")
  const [aA, setAA] = useState("")
  const [aB, setAB] = useState("")
  const [aC, setAC] = useState("")
  const [aD, setAD] = useState("")
  const [w, setW] = useState(null)
  const [x, setX] = useState(null)
  const [y, setY] = useState(null)
  const [z, setZ] = useState(null)
  const [errMessage, setErrMessage] = useState("")


function erase(){
  Vibration.vibrate(20)
  setW1("")
  setW2("")
  setW3("")
  setW4("")
  setX1("")
  setX2("")
  setX3("")
  setX4("")
  setY1("")
  setY2("")
  setY3("")
  setY4("")
  setZ1("")
  setZ2("")
  setZ3("")
  setZ4("")
  setAA("")
  setAB("")
  setAC("")
  setAD("")
  setErrMessage("")
  setW(null)
  setX(null)
  setY(null)
  setZ(null)
}

function solve(){
  Vibration.vibrate(20)
   setErrMessage("")
  if (w1 =="" || x1 =="" || y1 == "" || z1 == "" || aA == "" || w2 == "" || x2 == "" || y2 == "" || z2 == "" || aB == ""
                || w3 == "" || x3 == "" || y3 == "" || z3 == "" || aC == "" || w4 == "" || x4 == "" || y4 == "" || z4 == "" || aD == ""){
            setErrMessage("Please input all coeficients")
        }

        else{
        
                
    
    
               let a1 = [w1,x1,y1,z1,aA]
               let a2 = [w2,x2,y2,z2,aB]
               let a3 = [w3,x3,y3,z3,aC]
               let a4 = [w4,x4,y4,z4,aD]

               a1=a1.map(Number)
               a2=a2.map(Number)
               a3=a3.map(Number)
               a4=a4.map(Number)

                    


            if (a1[0]==0){ 
                if (a2[0] != 0){
                    for (var j=0; j<=4; j++){
                    var temp = a1[j]
                    a1[j]=a2[j]
                    a2[j]=temp
                
                   }
                }
                if (a1[0]==0){
                    for (var j=0; j<=4; j++){
                    var temp = a1[j]
                    a1[j]=a3[j]
                    a3[j]=temp
                     }
                      }
                if (a1[0]==0){
                    for (var j=0; j<=4; j++){
                    var temp = a1[j]
                    a1[j]=a4[j]
                    a4[j]=temp
                   }
                  }
                    }
            if (a1[0]==0){
                setErrMessage("This equation do not have solution")
                   }
            if (a1[0] != 0){
                var temp = a1[0]
                for(var j=0; j<=4; j++){
                a1[j] = a1[j]/temp
            }
            }
            var temp = -a2[0]
            for (var j=0; j<=4; j++){
                a2[j] = a2[j] + (a1[j]*temp)
            }
            
            var temp = -a3[0]
            for (var j=0; j<=4; j++){
                a3[j] = a3[j] + (a1[j]*temp)
            }

            var temp = -a4[0]
            for (var j=0; j<=4; j++){
                a4[j] = a4[j] + (a1[j]*temp)
            }

            if (a2[1] == 0 ) {  
                for (var j=1; j<=4; j++){
                var temp = a2[j]
                a2[j] = a3[j]
                a3[j] = temp
                }

                if(a2[1] == 0){
                    for (var j=1; j<=4; j++){
                        var temp = a2[j]
                        a2[j] = a4[j]
                        a4[j] = temp
                    }
                }
            }
            if (a2[1] == 0 ) {
                setErrMessage("This equation did not have solution")
            }
            
            if (a2[1] != 0 ) {
                var temp = a2[1]
                for(var j=1; j<=4; j++){
                    a2[j] = a2[j]/temp
                }
        
                var temp = -a3[1]
    
                for (var j=1; j<=4; j++ ) {
                    a3[j] = a3[j] + (a2[j] * temp)
                }
       
                var temp = -a4[1]

                for (var j=1; j<=4; j++ ) {
                    a4[j] = a4[j] + (a2[j] * temp) 
                }
            }


            if (a3[2] == 0){
                for (var j=2; j<=4; j++) {
                    var temp = a3[j]
                    a3[j] = a4[j]
                    a4[j] = temp
                }
            }

            if (a3[2] == 0) {
                setErrMessage("This equation did not have solution")
            }	

            if (a3[2] != 0){
                var temp = a3[2]	
                for(j=2; j<=4; j++){
                    a3[j] = a3[j]/temp
                }
                var temp = -a4[2]
    
                for (var j=2; j<=4; j++ ){
                    a4[j] = a4[j] + (a3[j] * temp) 
                }
            }


            if (a4[3] == 0 ) {
                setErrMessage("This equation did not have solution")
            }
            
            if (a4[3] != 0 ) {
                var temp = a4[3]
                for(var j=3; j<=4; j++){
                    a4[j] = a4[j]/temp
                }
            }

        let value4 = a4[4] / a4[3]
        let value3 = (a3[4]-(value4*a3[3]))/a3[2]
        let value2 = (a2[4]-(value4*a2[3])-(value3*a2[2]))/a2[1]
        let value1 = (a1[4]-(value4*a1[3])-(value3*a1[2])-(value2*a1[1]))/a1[0]

        setW(String(value1))
        setX(String(value2))
        setY(String(value3))
        setZ(String(value4))

            }
        
          }

  

  return (
    <SafeAreaView forceInset={{top: "always"}} style={{flex: 1, backgroundColor: "black"}}>
      <ScrollView>
    <View style={{flex: 1, backgroundColor: "white"}}>
      <View style={styles.eqnTopic}><Text style={{alignSelf: "center", fontSize: hp("2.3%"), fontWeight: "bold", fontStyle: "italic"}}>Four Equations With Four Unknowns Solver</Text></View>
      <View style={styles.unknowns}>
        <View style={{flexDirection: "row", marginTop: hp("3%")}}>
        <TextInput
        keyboardType="numeric"
        value={w1}
        onChangeText={(newValue) => setW1(newValue)}
        style={[styles.input, {backgroundColor:"green"}]}
        />
        <Text style={{fontSize: wp("6.8%"), paddingRight: wp("1.5%"),paddingLeft: wp("0.5%"), color: "orange", alignSelf:"center"}}>w</Text>
        <Text style={{fontSize: wp("6.8%"), alignSelf: "center"}}>+</Text>
        <TextInput
        keyboardType="numeric"
        value={x1}
        onChangeText={(newValue) => setX1(newValue)}
        style={[styles.input, {backgroundColor:"#9D6A89"}]}
        />
        <Text style={{fontSize: wp("6.8%"), paddingRight: wp("1.5%"),paddingLeft: wp("0.5%"), color: "orange", alignSelf: "center"}}>x</Text>
        <Text style={{fontSize: wp("6.8%"), alignSelf: "center"}}>+</Text>
        <TextInput
        keyboardType="numeric"
        value={y1}
        onChangeText={(newValue) => setY1(newValue)}
        style={[styles.input, {backgroundColor:"black"}]}
        />
        <Text style={{fontSize: wp("6.8%"), paddingRight: wp("1.5%"),paddingLeft: wp("0.5%"), color: "orange"}}>y</Text>
        <Text style={{fontSize: wp("6.8%")}}>+</Text>
        <TextInput
        keyboardType="numeric"
        value={z1}
        onChangeText={(newValue) => setZ1(newValue)}
        style={[styles.input, {backgroundColor:"#4F6381"}]}
        />
        <Text style={{fontSize: wp("6.8%"), paddingRight: wp("1.5%"), paddingLeft: wp("0.5%"), color: "orange"}}>z</Text>
        <Text style={{fontSize: wp("6.8%")}}>=</Text>
        <TextInput
        keyboardType="numeric"
        value={aA}
        onChangeText={(newValue) => setAA(newValue)}
        style={[styles.input, {backgroundColor:"#ACB255"}]}
        />
        </View>
        <View style={{flexDirection: "row", marginTop: hp("1.5%")}}>
        <TextInput
        keyboardType="numeric"
        value={w2}
        onChangeText={(newValue) => setW2(newValue)}
        style={[styles.input, {backgroundColor:"green"}]}
        />
        <Text style={{fontSize: wp("6.8%"), paddingRight: wp("1.5%"), paddingLeft: wp("0.5%"), color: "orange"}}>w</Text>
        <Text style={{fontSize: wp("6.8%")}}>+</Text>
        <TextInput
        keyboardType="numeric"
        value={x2}
        onChangeText={(newValue) => setX2(newValue)}
        style={[styles.input, {backgroundColor:"#9D6A89"}]}
        />
        <Text style={{fontSize: wp("6.8%"), paddingRight: wp("1.5%"), paddingLeft: wp("0.5%"), color: "orange"}}>x</Text>
        <Text style={{fontSize: wp("6.8%")}}>+</Text>
        <TextInput
        keyboardType="numeric"
        value={y2}
        onChangeText={(newValue) => setY2(newValue)}
        style={[styles.input, {backgroundColor:"black"}]}
        />
        <Text style={{fontSize: wp("6.8%"), paddingRight: wp("1.5%"),paddingLeft: wp("0.5%"), color: "orange"}}>y</Text>
        <Text style={{fontSize: wp("6.8%")}}>+</Text>
        <TextInput
        keyboardType="numeric"
        value={z2}
        onChangeText={(newValue) => setZ2(newValue)}
        style={[styles.input, {backgroundColor:"#4F6381"}]}
        />
        <Text style={{fontSize: wp("6.8%"), paddingRight: wp("1.5%"), paddingLeft: wp("0.5%"), color: "orange"}}>z</Text>
        <Text style={{fontSize: wp("6.8%")}}>=</Text>
        <TextInput
        keyboardType="numeric"
        value={aB}
        onChangeText={(newValue) => setAB(newValue)}
        style={[styles.input, {backgroundColor:"#ACB255"}]}
        />
        </View>
        <View style={{flexDirection: "row", marginTop: hp("1.5%")}}>
        <TextInput
        keyboardType="numeric"
        value={w3}
        onChangeText={(newValue) => setW3(newValue)}
        style={[styles.input, {backgroundColor:"green"}]}
        />
        <Text style={{fontSize: wp("6.8%"), paddingRight: wp("1.5%"), paddingLeft: wp("0.5%"), color: "orange"}}>w</Text>
        <Text style={{fontSize: wp("6.8%")}}>+</Text>
        <TextInput
        keyboardType="numeric"
        value={x3}
        onChangeText={(newValue) => setX3(newValue)}
        style={[styles.input, {backgroundColor:"#9D6A89"}]}
        />
        <Text style={{fontSize: wp("6.8%"), paddingRight: wp("1.5%"),paddingLeft: wp("0.5%"), color: "orange"}}>x</Text>
        <Text style={{fontSize: wp("6.8%")}}>+</Text>
        <TextInput
        keyboardType="numeric"
        value={y3}
        onChangeText={(newValue) => setY3(newValue)}
        style={[styles.input, {backgroundColor:"black"}]}
        />
        <Text style={{fontSize: wp("6.8%"), paddingRight: wp("1.5%"),paddingLeft: wp("0.5%"), color: "orange"}}>y</Text>
        <Text style={{fontSize: wp("6.8%")}}>+</Text>
        <TextInput
        keyboardType="numeric"
        value={z3}
        onChangeText={(newValue) => setZ3(newValue)}
        style={[styles.input, {backgroundColor:"#4F6381"}]}
        />
        <Text style={{fontSize: wp("6.8%"), paddingRight: wp("1.5%"),paddingLeft: wp("0.5%"), color: "orange"}}>z</Text>
        <Text style={{fontSize: wp("6.8%")}}>=</Text>
        <TextInput
        keyboardType="numeric"
        value={aC}
        onChangeText={(newValue) => setAC(newValue)}
        style={[styles.input, {backgroundColor:"#ACB255"}]}
        />
        </View>
        <View style={{flexDirection: "row", marginTop: hp("1.5%")}}>
        <TextInput
        keyboardType="numeric"
        value={w4}
        onChangeText={(newValue) => setW4(newValue)}
        style={[styles.input, {backgroundColor:"green"}]}
        />
        <Text style={{fontSize: wp("6.8%"), paddingRight: wp("1.5%"),paddingLeft: wp("0.5%"), color: "orange"}}>w</Text>
        <Text style={{fontSize: wp("6.8%")}}>+</Text>
        <TextInput
        keyboardType="numeric"
        value={x4}
        onChangeText={(newValue) => setX4(newValue)}
        style={[styles.input, {backgroundColor:"#9D6A89"}]}
        />
        <Text style={{fontSize: wp("6.8%"), paddingRight: wp("1.5%"),paddingLeft: wp("0.5%"), color: "orange"}}>x</Text>
        <Text style={{fontSize: wp("6.8%")}}>+</Text>
        <TextInput
        keyboardType="numeric"
        value={y4}
        onChangeText={(newValue) => setY4(newValue)}
        style={[styles.input, {backgroundColor:"black"}]}
        />
        <Text style={{fontSize: wp("6.8%"), paddingRight: wp("1.5%"),paddingLeft: wp("0.5%"), color: "orange"}}>y</Text>
        <Text style={{fontSize: wp("6.8%")}}>+</Text>
        <TextInput
        keyboardType="numeric"
        value={z4}
        onChangeText={(newValue) => setZ4(newValue)}
        style={[styles.input, {backgroundColor:"#4F6381"}]}
        />
        <Text style={{fontSize: wp("6.8%"), paddingRight: wp("1.5%"),paddingLeft: wp("0.5%"), color: "orange"}}>z</Text>
        <Text style={{fontSize: wp("6.8%")}}>=</Text>
        <TextInput
        keyboardType="numeric"
        value={aD}
        onChangeText={(newValue) => setAD(newValue)}
        style={[styles.input, {backgroundColor:"#ACB255"}]}
        />
        </View>
        {errMessage ? <View style={[styles.solTopic, {bottom: 0, top: hp("2.9a%"), width: wp("62%"),  marginLeft: wp("0%")}]}>
        <Text style={{color: "red", alignSelf: "center"}}>{errMessage}</Text>
        </View> : null}
      </View>
      
      
      
      <TouchableOpacity style={styles.click} onPress={() => solve()}>
        <Text style={styles.soltext}>Get Solution</Text>
      </TouchableOpacity>
      <View style={styles.solTopic}><Text style={{alignSelf: "center"}} onPress={() => erase()}>The Unknowns</Text></View>
      <View style={styles.solution}>
        {w&&x&&y&&z && !errMessage? <View>
        <View style={{flexDirection: "row"}}>
          <Text style={[styles.textsol]}>w</Text>
          <Text style={[styles.eqsol]}>=</Text>
          <Text style={[styles.outsol, {backgroundColor:"#F8D900"}]}>{w}</Text>
        </View>
        <View style={{flexDirection: "row", marginTop: hp("0.7%")}}>
          <Text style={[styles.textsol]}>x</Text>
          <Text style={[styles.eqsol]}>=</Text>
          <Text style={[styles.outsol, {backgroundColor:"#9D6A89"}]}>{x}</Text>
        </View>
        <View style={{flexDirection: "row", marginTop: hp("0.7%")}}>
          <Text style={[styles.textsol]}>y</Text>
          <Text style={[styles.eqsol]}>=</Text>
          <Text style={[styles.outsol, {backgroundColor:"black"}]}>{y}</Text>
        </View>
        <View style={{flexDirection: "row", marginTop: hp("0.7%")}}>
          <Text style={[styles.textsol]}>z</Text>
          <Text style={[styles.eqsol]}>=</Text>
          <Text style={[styles.outsol, {backgroundColor:"#4F6381"}]}>{z}</Text>
        </View>
        </View> : <Text style={{textAlign: "center", color: "white", marginTop: hp("11%"), fontSize: hp("3%")}}>Provide the coefficients and click Get Solution</Text>}
      </View>
      
    </View>
    </ScrollView>
    </SafeAreaView>
  )
};



Equation.navigationOptions = {
  title: "THE FOUR UNKNOWNS",
  headerStyle: {
    textAlign: "center"
  },
  
  
  tabBarOptions: {
      style: {
          // backgroundColor: '#413D3E',
          backgroundColor: 'white',
          // borderWidth: 4,
          activeTintColor: "white",
          borderColor: "#413D3E",
      
          
      },
      
  },
  tabBarIcon: ({tintColor}) => <FontAwesome5 color={tintColor} name="brain" size={20} />,
  
}


const styles = StyleSheet.create({
  text: {
    fontSize: hp("3%"),
  },
  unknowns: {
    width: wp("100%"),
    height: hp("34%"),
    marginBottom: hp("6%"),
    backgroundColor: "yellow",
    borderBottomLeftRadius: 40,
    alignItems: "center",
    
    
    // paddingVertical: hp("5%")
    

  },
  solution: {
    width: wp("100%"),
    height: hp("31%"),
    paddingVertical: hp("3%"),
    backgroundColor: "green",
    borderTopRightRadius: 40,
    
  
  },
  click: {
    width: wp("50%"),
    marginHorizontal: wp("25%"),
    height: hp('7%'), 
    borderRadius: 7,
    backgroundColor: "#5080FC",
    justifyContent: "center",
    marginTop: hp("2%"),
    marginBottom: hp("8%")
  },
  soltext: {
    fontSize: hp("2.5%"),
    color: "white",
    alignSelf: "center",
  },
  solTopic: {
    color: "black",
    
    width: wp("50%"),
    marginLeft: wp("25%"),
    backgroundColor: "whitesmoke",
    height: hp("4.2%"),
    borderRadius: 10,
    
    justifyContent: "center"
    
  },
  eqnTopic: {
    
    width: wp("100%"),
    backgroundColor: "whitesmoke",
    
    height: hp("6%"),
    borderRadius: 6,
    
    
    
    justifyContent: "center"
    
  }, input: {
    
    height: hp("5%"),
    width: wp("10%"),
    backgroundColor: "blue",
    color: "white",
    marginLeft: wp("1.5%"),
    textAlign: "center",
    fontSize: hp("2.5%"),
    borderRadius: 5
    
  },
  textsol:{
    fontSize: hp("4%"),
    marginLeft: wp("25%"),
    color: "white",
    width: wp("15%"),
    backgroundColor: "orange",
    textAlign: "center",
    borderRadius: 40
  },
  eqsol:{
    fontSize: hp("4%"),
    marginLeft: wp("7%"),
    color: "white"
  },
  outsol:{
    height: hp("6%"),
    width: wp("18%"),
    backgroundColor: "blue",
    color: "white",
    marginLeft: wp("7%"),
    textAlign: "center",
    fontSize: hp("3.8%"),
    borderRadius: 5
  },
});

export default Equation;
