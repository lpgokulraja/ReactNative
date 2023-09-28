import React, { useState } from 'react';
import { View, TextInput, Animated, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function Input() {
  const [isFocused, setIsFocused] = useState(false);
  const [text, setText] = useState('');

  const translateY = new Animated.Value(isFocused ? -20 : 0); // Adjust the translateY value as needed

  const handleFocus = () => {
    setIsFocused(true);
    Animated.timing(translateY, {
      toValue: -20, // Move the placeholder up when focused
      duration: 200, // Adjust the animation duration as needed
      useNativeDriver: false, // Don't forget to set useNativeDriver to false for translateY
    }).start();
  };

  const handleBlur = () => {
    setIsFocused(false);
    Animated.timing(translateY, {
      toValue: 0, // Move the placeholder back down when blurred
      duration: 200,
      useNativeDriver: false,
    }).start();
  };




  const styles = StyleSheet.create({
 
    input: {
      width:"50%",
      backgroundColor:"white",
     

    },
    
  });



  return (

    <View style={{backgroundColor:"#36393d", height:'100%', justifyContent:"center", alignItems:"center"}}>


 <View style={{}}>
      
<Text style={{letterSpacing:1, alignSelf:"flex-start", fontWeight:"bold", color:"white", paddingBottom:5}} >
       Search
      </Text>
      <View style={{flexDirection:"row"}}>


   <TextInput
        placeholder='Type...'
        style={{padding:10,backgroundColor: "white", width:"70%", height:35,  borderTopLeftRadius:30, borderBottomLeftRadius:30,}}
        />
     
 
      
   <TouchableOpacity style={{backgroundColor:"#d18904",width:"20%", height:35, borderTopRightRadius:30, borderBottomRightRadius:30, justifyContent:"center", alignItems:"center" }}>
        <Text style={{fontWeight:"bold", color:"white"}}>Search</Text>
      </TouchableOpacity>
    </View>
        </View>
        </View>
  );
}


