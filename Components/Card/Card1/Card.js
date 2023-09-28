import React, { useState } from 'react';
import { View, TextInput, Animated, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

export default function Card() {
  

  return (
    <View style={{flex:1,margin:10, flexDirection:"row"}}>


      <View style={{ height:250, width:"50%", justifyContent:"space-between", 
      shadowColor: 'black',
      backgroundColor:'white',
        
        elevation: 5, borderBottomEndRadius:10, borderBottomStartRadius:10}}>
            <View style={{flex:1}}>
              <Image source={require("./bajaj.png")} style={{width:"100%", height:50}}/>
            </View>

            <View style={{flex:1, marginStart:10}}>
              <Text style={{fontWeight:"bold"}}>Bajaj Allianz</Text>
              <Text style={{color:"gray"}}>Ex-Showroom Price</Text>
              <Text> &#8377; 9,795</Text>
            </View>

              <View style={{flex:1,  alignItems:"center", marginBottom:10,  }}>

            <TouchableOpacity style={{backgroundColor:"#7F2B29", width:"90%", borderRadius:10, padding:10, alignItems:"center" }}>
              <Text style={{color:'white', fontSize:12}}>SHOW ON-ROAD PRICE</Text>
            </TouchableOpacity>



            <TouchableOpacity style={{backgroundColor:"#1D2F3B", marginTop:10, width:"90%", borderRadius:10, padding:10, alignItems:"center" }}>
              <Text style={{color:'white', fontSize:12}}>SEE MORE</Text>
            </TouchableOpacity>



              </View>


      </View>

    </View>
  );
}


