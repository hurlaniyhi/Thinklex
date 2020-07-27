import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import Equation from "./src/screens/Equation";
import Calculator from "./src/screens/Calculator"
import Formulas from "./src/screens/Formulas"
import {MaterialCommunityIcons} from '@expo/vector-icons'
import Conversion from './src/screens/Conversion'
import Units from './src/screens/Units'
import AllFormulas from "./src/screens/AllFormulas"

// const navigator = createStackNavigator(
//   {
//     Equation: Equation,
//     Calculator: Calculator
//   },
//   {
//     initialRouteName: "Calculator",
//     defaultNavigationOptions: {
//       title: "App"
//     }
//   }
// );

const FORMULAS = createStackNavigator({   // we did this instead of using what we commented out at the bottom so as to have access to the styling options
  Formulas: Formulas,
  Conversion: Conversion,
  Units: Units,
  myFormula: AllFormulas
})


FORMULAS.navigationOptions = {
   
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




const bottomTabNavigator = createBottomTabNavigator({
    CALCULATOR: Calculator,
    Equation: Equation,
    FORMULAS: FORMULAS
    
  })


export default createAppContainer(bottomTabNavigator);
