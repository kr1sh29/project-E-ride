import React, { Component } from "react";
import {Rajdhani_600SemiBold} from "@expo-google-fonts/rajdhani "
import * as Font from "expo-font"

import BottomTabNavigator from "./components/BottomTabNavigator";

export default class App extends Component {
  constructor (){
super()
this.state={
  fontLoaded:false 
}

}



  render() {
    const {fontLoaded}= this.state 
    if (fontLoaded){

      return <BottomTabNavigator />;
    }
    return null
  }
}

const Styles = styleSheet.create({
container:{
flex:1,
backGroundColor:"cyan",
},
upperContainer:{
  flex:1,
  justifyContent:"center",
  alignItem:"center"
},
lowerContainer:{
  flex:1,
  justifyContent:"center",
  alignItem:"center"
},
buttonText:{
fontSize:24,
color:"white"
}
})