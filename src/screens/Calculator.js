import React, {useState} from "react";
import { Text, StyleSheet, View, TouchableOpacity, Vibration, ScrollView } from "react-native";
import {SafeAreaView} from 'react-navigation'
//import {Button} from "react-native-elements"
import {MaterialCommunityIcons} from '@expo/vector-icons'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
  } from 'react-native-responsive-screen'
  



const Calculator = () => {
    const [question, setQuestion] = useState("")
    const [solve, setSolve] = useState("")
    const [stored, setStored] = useState("")
    

    
   


    function solveFact(arr1){
        let sum=0
        let ind=0
        let sq=1
        let arr2 = []
        let reus = []
        
        for (let suby of arr1){
            
            if (suby=="!"){
                let k=1
                let y=""
                let z=""
                while((arr1[ind-k] != "+") && (arr1[ind-k] != "-") && (arr1[ind-k] != "!") && (arr1[ind-k] != "*") && (arr1[ind-k] != "/") && (arr1[ind-k] != ")") && (arr1[ind-k] != "(") && (ind-k) >= 0){
                    y += arr1[ind-k]
                    reus.push(ind-k)
                    k++
                }
                b=y
                let p = 1
                for (let j of b){
                    
                    z=z + (b[(b.length)-p])
                    
                    p = p + 1
                }
                arr2.push(z)
            }
            ind=ind+1
        }
        reus.sort(function(a,b){return a-b})
        
        //console.log(reus)
        //console.log(arr2)
        let arreply = []
        for (let arrs of arr2){
            
            let facto=1
            while(arrs != 0){
                facto=facto*arrs
                arrs--;
            }
            
            arreply.push(facto)
        }
        //console.log(arreply) 
        
        // replace a particular character without replacing other character that are same
        function rep(str,index,chr){
            if(index > str.length-1) return str;
            return str.substr(0,index) + chr + str.substr(index+1);
        }
        //let b=rep(arr1,0,"b")
        //console.log(b)
        
        String.prototype.removey = function (i){
            var temp = this.split('');
            temp.splice(i,1);
            return temp.join('');
        }
        //console.log(arr1)
        let v=0
        for (let wise of reus){
            
            arr1=arr1.removey(wise-v)
            v++
        }

        
        
        //console.log(arr1)
        
        function rep(str,index,chr){
            if(index > str.length-1) return str;
            return str.substr(0,index) + chr + str.substr(index+1);
        }
        ind=0
        indx1=0
        indx=0
        for (let vall of arr1){
            if(vall=="!"){
                arr1=rep(arr1,(ind+indx1),arreply[indx]+"!")
                indx1 =indx1-1
                
                indx1=indx1+1+(String(arreply[indx]).length)
                indx++;
            
            }
            ind=ind+1
        }
        return arr1
    }


    function syntas(habyb){

        function rep(str,index,chr){
            if(index > str.length-1) return str;
        return str.substr(0,index) + chr + str.substr(index+1);
        }

       let indy=0
       let indey=0
       let habr = []
       let juj = []
       for (let well of habyb){
           if (well == "(" && habyb[indy-1] != "+" && habyb[indy-1] != "-" && habyb[indy-1] != "*" && habyb[indy-1] != "(" && habyb[indy-1] != "/" && habyb[indy-1] != "n" && habyb[indy-1] != "s" && habyb[indy-1] != "t" && habyb[indy-1] != "^" && indy != (habyb.length-habyb.length)){
               //juj.push(habyb[indy-1])
               //habr.push(indy-1)
               habyb=rep(habyb,indy,"*(")

               indy=indy+1
            }
            if(well == ")" && habyb[indy+1] != "+" && habyb[indy+1] != "-" && habyb[indy+1] != "!" && habyb[indy+1] != "*" && habyb[indy+1] != "/" && habyb[indy+1] != "(" && habyb[indy+1] != ")"  && habyb[indy+1] != "^" && well != habyb[(habyb.length)-1] ){


               habyb=rep(habyb,indy,")*")

               indy=indy+1
            }
            if(well == "s" && habyb[indy-1] != "+" && habyb[indy-1] != "-" && indy != (habyb.length-habyb.length) && habyb[indy-1] != "*" && habyb[indy-1] != "/" && habyb[indy-1] != "o" && habyb[indy-1] != "(" && habyb[indy-1] != "^"){

               habyb=rep(habyb,indy,"*s")

               indy=indy+1
            }
            if(well == "c" && habyb[indy-1] != "+" && habyb[indy-1] != "-" && indy != (habyb.length-habyb.length) && habyb[indy-1] != "*" && habyb[indy-1] != "/"  && habyb[indy-1] != "(" && habyb[indy-1] != "^"){

               habyb=rep(habyb,indy,"*c")

               indy=indy+1
            }
            if(well == "t" && habyb[indy-1] != "+" && habyb[indy-1] != "-" && indy != (habyb.length-habyb.length) && habyb[indy-1] != "*" && habyb[indy-1] != "/" && habyb[indy-1] != "r" && habyb[indy-1] != "o" && habyb[indy-1] != "(" && habyb[indy-1] != "^"){

               habyb=rep(habyb,indy,"*t")

               indy=indy+1
            }

        indy=indy+1
        }
        return habyb 
    }



    
    


    function addInp(value){
        

        

        Vibration.vibrate(20)
        

        if (solve !== ""){
            
            setStored(solve)
            if(value == "+" || value == "-" || value == "x" || value == "/" || value == "!" || value == "^"){
                setQuestion("Ans" + value)
                setSolve("")
            }
            else{
            
            setQuestion(value)
            setSolve("")
            console.log(solve)
            }
        }
        else{
        setQuestion(question + value)
        }
    }


    const solved = async(problem) => {
        
        Vibration.vibrate(20)
 
        let j = problem 
         j = j.replace(/Ans/g, stored)

        try{

        if (j.includes("++") || j.includes("+-") || j.includes("+x") || j.includes("+/")
        || j.includes("-+") || j.includes("--") || j.includes("-/") || j.includes("-x")
        || j.includes("//") || j.includes("/+") || j.includes("/x") || j.includes("/-")
        || j.includes("xx") || j.includes("x/") || j.includes("x+") || j.includes("x-")){

            setSolve("Syntax Error");

        }
        else {
            if (j.includes("!")){
                j=solveFact(j)
             }
             if (j.includes("(") || j.includes(")") || j.includes("s") || j.includes("c") || j.includes("t")){
                 j=syntas(j)
             }
             
            //let ridwaan = ""
            
            if (j.includes("sqrt(") || j.includes("Ans") || j.includes("sin(") || j.includes("cos(") 
            || j.includes("tan(") || j.includes("cot(") || j.includes("^") || j.includes("ln")
            || j.includes("fac(") || j.includes("!") || j.includes("x")){ 
                                       
                function escapeRegExp(string){
                return string.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")
                }
            function replaceAll(str, term, replacement){
                return str.replace(new RegExp(escapeRegExp(term), "g"),replacement);
            }
            
               let sqrts = replaceAll(j,"sqrt(","Math.sqrt(")
               let sinAns = replaceAll(sqrts,"sin(","Math.sin((3.142/180)*")
               let cosAns = replaceAll(sinAns,"cos(","Math.cos((3.142/180)*")
               let tanAns = replaceAll(cosAns,"tan(","Math.tan((3.142/180)*")
               let cotAns = replaceAll(tanAns,"cot(","1/Math.tan((3.142/180)*")
               let powerAns = replaceAll(cotAns,"^","**")
               let factAns = replaceAll(powerAns,"!","")
               let timesAns = replaceAll(factAns,"x","*")
               //let reAns = document.getElementById("result").value
               
            //    let mody = replaceAll(timesAns,"Ans",stored)
               
            
                let s = eval(timesAns)

                const show = await setSolve(s)
                }
            else { 
                
                let s = eval(j)                    
                const show = await setSolve(s)
                   }
            }
        }
        catch (err){
            setSolve("Syntax Error")
        }
        }
   
        
        function myRound(take){

            Vibration.vibrate(20)

            let m =Number(take)
             setSolve(m.toFixed(3))
         }


    function erase(){
        Vibration.vibrate(20)
        setQuestion("")
        setSolve("")
    }

    function del(){
        Vibration.vibrate(20)
        setQuestion(question.slice(0, (question.length)-1))
    }

  return (
    <SafeAreaView forceInset={{top: "always"}} style={{flex: 1, backgroundColor: "black"}}>
      <ScrollView>
      <View style={{backgroundColor: "#413D3E", flex: 1}}>
          <View style={styles.screen}>
              <Text style={styles.equation}>{question}</Text>
              <Text style={styles.answer}>{solve}</Text>
          </View>
          <View style={{flexDirection: "row"}}>
              <TouchableOpacity style={styles.touch1} onPress={(value)=>addInp("sqrt(")}>
                  <Text style={{color: "white", fontSize: hp("2.5%"), alignSelf: "center"}}>sqrt</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.touch1} onPress={(value)=>addInp("(")}>
                  <Text style={{color: "white", fontSize: hp("2.5%"), alignSelf: "center"}}>(</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.touch1} onPress={(value)=>addInp(")")}>
                  <Text style={{color: "white", fontSize: hp("2.5%"), alignSelf: "center"}}>)</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.touch1} onPress={(value)=>addInp("^")}>
                  <Text style={{color: "white", fontSize: hp("2.5%"),alignSelf: "center"}}>x^</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.touch1} onPress={(value)=>addInp("!")}>
                  <Text style={{color: "white", fontSize: hp("2.5%"), alignSelf: "center"}}>!</Text>
              </TouchableOpacity>
          </View>
          <View style={{flexDirection: "row", paddingTop: hp("0.68%")}}>
              <TouchableOpacity style={styles.touch1} onPress={(value)=>addInp("sin(")}>
                  <Text style={{color: "white", fontSize: hp("2.5%"), alignSelf: "center"}}>sin</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.touch1} onPress={(value)=>addInp("cos(")}>
                  <Text style={{color: "white", fontSize: hp("2.5%"), alignSelf: "center"}}>cos</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.touch1} onPress={(value)=>addInp("tan(")}>
                  <Text style={{color: "white", fontSize: hp("2.5%"), alignSelf: "center"}}>tan</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.touch1} onPress={(value)=>addInp("cot(")}>
                  <Text style={{color: "white", fontSize: hp("2.5%"), alignSelf: "center"}}>cot</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.touch1} onPress={(value)=>myRound(solve)}>
                  <Text style={{color: "white", fontSize: hp("2.5%"), alignSelf: "center"}}>Rnd</Text>
              </TouchableOpacity>
          </View>
          <View style={{flexDirection: "row", paddingTop: hp("0.68%")}}>
              <TouchableOpacity style={styles.touch} onPress={(value)=>addInp("7")}>
                  <Text style={styles.number}>7</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.touch} onPress={(value)=>addInp("8")}>
                  <Text style={styles.number}>8</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.touch} onPress={(value)=>addInp("9")}>
                  <Text style={styles.number}>9</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.touch2} onPress={()=>del()}>
                  <Text style={styles.number2}>DEL</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.touch3} onPress={()=>erase()}>
                  <Text style={{color: "white", fontSize: hp("2.5%"), alignSelf: "center"}}>AC</Text>
              </TouchableOpacity>
          </View>
          <View style={{flexDirection: "row", paddingTop: hp("0.68%")}}>
              <TouchableOpacity style={styles.touch} onPress={(value)=>addInp("4")}>
                  <Text style={styles.number}>4</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.touch} onPress={(value)=>addInp("5")}>
                  <Text style={styles.number}>5</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.touch} onPress={(value)=>addInp("6")}>
                  <Text style={styles.number}>6</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.touch} onPress={(value)=>addInp("x")}>
                  <Text style={styles.number}>x</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.touch} onPress={(value)=>addInp("/")}>
                  <Text style={styles.number}>/</Text>
              </TouchableOpacity>
          </View>
          <View style={{flexDirection: "row", paddingTop: hp("0.68%")}}>
              <TouchableOpacity style={styles.touch} onPress={(value)=>addInp("1")}>
                  <Text style={styles.number}>1</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.touch} onPress={(value)=>addInp("2")}>
                  <Text style={styles.number}>2</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.touch} onPress={(value)=>addInp("3")}>
                  <Text style={styles.number}>3</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.touch} onPress={(value)=>addInp("+")}>
                  <Text style={styles.number}>+</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.touch} onPress={(value)=>addInp("-")}>
                  <Text style={styles.number}>-</Text>
              </TouchableOpacity>
          </View>
          <View style={{flexDirection: "row", paddingTop: hp("0.68%")}}>
              <TouchableOpacity style={styles.touch} onPress={(value)=>addInp("0")}>
                  <Text style={styles.number}>0</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.touch} onPress={(value)=>addInp(".")}>
                  <Text style={styles.number}>.</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.touch} onPress={(value)=>addInp("x10^")}>
                  <Text style={{color: "white", fontSize: hp("2.5%"), alignSelf: "center"}}>x10^</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.touch} onPress={(value)=>addInp("Ans")}>
                  <Text style={styles.number2}>Ans</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.touch} onPress={(value)=>solved(question)}>
                  <Text style={styles.number}>=</Text>
              </TouchableOpacity>
          </View>
      </View>
      </ScrollView>
      </SafeAreaView>
  )
};

Calculator.navigationOptions = {
    headerShown: null,
    tabBarIcon: ({tintColor}) => <MaterialCommunityIcons color={tintColor} name="calculator" size={hp("3%")} />,
    tabBarOptions: {
        style: {
            backgroundColor: 'black',
            borderWidth: 4,
            borderColor: "#413D3E",
            // borderRadius: 10,
            
            
        },
    },
   
    
  }

const styles = StyleSheet.create({
  screen: {
    marginHorizontal: wp("2.3%"),
    //marginTop: hp("2%"),
    marginTop: hp("3.5%"),
    width: wp("95.4%"),
    marginBottom: hp("4.4%"),
    height: hp("28.2%"),
    backgroundColor:"#808545"
  },
  touch: {
    backgroundColor: "black", 
    width: wp("18.45%"), 
    height: hp("9%"), 
    borderRadius: 7, 
    justifyContent: "center",
    marginHorizontal: wp("0.77%"),
    borderWidth: 1,
    borderColor: "white"
  },
  touch1: {
    backgroundColor: "#6E6865", 
    width: wp('18.45%'), 
    height: hp('9%'), 
    borderRadius: 7, 
    justifyContent: "center",
    marginHorizontal: wp("0.77%"),
    borderWidth: 1,
    borderColor: "white"
  },
  touch2: {
    backgroundColor: "yellow", 
    width: wp('18.45%'), 
    height: hp('9%'), 
    borderRadius: 7, 
    justifyContent: "center",
    marginHorizontal: wp("0.77%"),
    borderWidth: 1,
    borderColor: "white"
  },
  touch3: {
    backgroundColor: "red", 
    width: wp('18.45%'), 
    height: hp('9%'), 
    borderRadius: 7, 
    marginHorizontal: wp("0.75%"),
    borderWidth: 1,
    justifyContent: "center",
    borderColor: "white"
  },
  number2: {
    color: "white", 
    fontSize: hp("2.5%"), 
    alignSelf: "center"
  },
  number: {
    color: "white", 
    fontSize: hp("4%"), 
   alignSelf: "center",
  },
  equation:{
      paddingTop: hp("1.8%"),
      paddingLeft: wp("2.5%"),
      color: "white",
      fontSize: hp("3.2%")
  },
  answer: {
    paddingTop: hp("14.5%"),
    color: "white",
    fontSize: hp("3.2%"),
    paddingRight: wp("2%"),
    textAlign: "right"
  }
});

export default Calculator;
