import React, { useState } from 'react';
import { View, TextInput, Animated, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';




export default function Card() {
  

  return (
    <View style={{flex:1,margin:10, flexDirection:"row"}}>


      <View style={{ height:150, width:"100%",  
      shadowColor: 'black',
      backgroundColor:'white',
      elevation: 5,
      borderRadius:10,justifyContent:"center", alignItems:"center" }}>


        <View style={{position:"absolute", left:10, top:10}}>
       <Image source={require("./arrow-left.png")} style={{width:25, height:25,}}/>
        </View>

        <View style={{position:"absolute", right:20, top:13, flexDirection:"row"}}>
       <Image source={require("./edit.png")} style={{width:17, height:17,}}/>
       <Text style={{marginStart:5, fontWeight:"bold", fontSize:13}}>Edit Profile</Text>
        </View>


            <View style={{}}>
              <Image source={require("./user.webp")} style={{width:90, height:90,}}/> 
              </View>

                <View Style={{flex:1}}>
              <Image source={require("./green_tick.png")} style={{width:25, height:25, position:"absolute", left:55, bottom:-25}}/>
                </View>

              <View Style={{flex:1,flexDirection:"row"}}>
                <View Style={{flex:1}}>
              <Text style={{fontWeight:"bold", fontSize:18}}>Gokulraja L P</Text>
                </View>
              </View>
              <Text style={{color:"gray"}}>gokulrajalp@gmail.com</Text>
 

      </View>

    </View>
  );
}


