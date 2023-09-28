import React, { useState } from 'react';
import { View, TextInput, Animated, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { BackgroundImage } from 'react-native-elements/dist/config';
import Icon from 'react-native-vector-icons/FontAwesome';




export default function Card() {
  

  return (
    <View style={{flex:1, margin:10}}>

      <View style={{ backgroundColor:"white",  elevation:3, padding:10, borderRadius:10}}>



     <Text style={{color:"#4B4749", fontWeight:"bold", paddingBottom:5}}>HOME</Text>
     <Text>12 Mani Street Attupatti Malligai Nursing Home Sailam</Text>
     <Text>213465</Text>

     <TouchableOpacity style={{backgroundColor:"#0D4C92", borderRadius:5, width:40, marginTop:10, height:30, justifyContent:"center", alignItems:"center"}}>
      <Text style={{color:"white"}}>Edit</Text>
     </TouchableOpacity>


      </View>

    </View>
  );
}


