import React, {  useState } from 'react';
  import { StyleSheet, TextInput, View } from 'react-native';
  import { Dropdown } from 'react-native-element-dropdown';
  import AntDesign from '@expo/vector-icons/AntDesign';

 

  const Input = () => {
   

    return (

      <View style={{flex:1, justifyContent:"center", alignItems:"center", alignSelf:"center", backgroundColor:"violet"}}>
<View style={{padding:20}}>

        <TextInput placeholder='UserName' style={{padding:10, margin:5, borderRadius:10, opacity:0.5, paddingEnd:"60%", backgroundColor:"white"}}/>
        <TextInput placeholder='Password' style={{padding:10, margin:5, borderRadius:10, opacity:0.5, paddingEnd:"60%", backgroundColor:"white"}}/>
</View>

        </View>
    );
  };

  export default Input;

 
