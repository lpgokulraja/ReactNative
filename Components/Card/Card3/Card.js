import React, { useState } from 'react';
import { View, TextInput, Animated, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';




export default function Card() {
  

  return (
    <View style={{flex:1, marginTop:10, }}>

<View style={{flexDirection:"row", backgroundColor:"white", height:120, alignItems:"center"}}>


  <Image source={require("./car.webp")} style={{width:100, height:80}}/>

<View style={{marginStart:10, }}>

  <Text style={{  fontWeight: "bold", }}>Alto K10 VXI AGS</Text>
  <Text style={{marginBottom:20, color:"gray"}}>Pearl Midnight Black</Text>
  <Text style={{ color:"#343434"}}>Booked at : 09/09/2023 (12:06:05 pm)</Text>
  <Text style={{ fontWeight: "bold",}}>Status : <Text style={{ fontWeight: "bold", color:"#FFA500"}}>Pending</Text></Text>

</View>
</View>
     


    </View>
  );
}


