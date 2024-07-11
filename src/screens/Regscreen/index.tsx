import React from "react";
import {ImageBackground, Text, TouchableOpacity, View} from "react-native";
import { styleContainer } from "../../styles/globalstyle";
import {MenuStackTypes} from "../../navigation/MenuStack.navigation";


export function Regscreen({navigation}: MenuStackTypes) {
    const image = require('../../assets/Autscreen.png')
 return (
 
 <ImageBackground source={image} style={styleContainer.container}>

 </ImageBackground>
      
 )

}