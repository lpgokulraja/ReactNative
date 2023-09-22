import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import Inputcomponents from "./Inputcomponents";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from '@react-navigation/native';


export default function EditProfile({}){
    const navigation = useNavigation();
    return(
        <View>

            <View>

                        <View>
                                    <Text style={{fontWeight:"600", paddingStart:10, fontSize:20, }}>&#60; <Text style={{color:'blue'}}>--</Text></Text>
                        </View>


        <View style={{ alignItems:"center", position:"absolute", justifyContent:"center", alignSelf:"center", marginTop:7}}>
            <Text style={{ fontWeight:"600", fontSize:15, letterSpacing:1}} >Edit Profile</Text>
        </View>
            
        <View style={{position:"absolute", alignSelf:"flex-end"}}>
        <Icon.Button
        name="close"
        backgroundColor="white"
        color='grey'
        onPress={() => navigation.navigate('Home')}
        />
        </View>

        </View>



        <View style={{ marginTop:30}}>
         
          <View style={{width: 100,  height: 100, backgroundColor: 'white', borderColor:"gray", borderWidth:2, borderRadius: 400/ 2, paddingTop:40, alignItems:"center", alignItems:"center", justifyContent:"center", alignSelf:"center",}}>
          <View style={{alignItems:"center", alignItems:"center", position:"absolute", justifyContent:"center", alignSelf:"center",height:"100%"}}>

<Image
source={require('./eye.jpg')} 
style={styles.cardImage}
resizeMode={"cover"}
/>



</View>

<View style={{alignItems:"center", alignItems:"center", position:"absolute", justifyContent:"center", alignSelf:"center", right:0, bottom:0}}>
<Image
source={require('./camera-icon.jpg')} 
style={ {width:30, height: 30, borderRadius: 400/2, borderColor:'white', borderWidth:2, alignSelf:"baseline", justifyContent:"flex-end", alignItems:"flex-end"} }
resizeMode={"cover"}
/>
</View>
          </View>
 

        </View >
       

            



        
        <Inputcomponents title='Full Name' placeholder='Mr. John'/>
        <Inputcomponents title='props' placeholder='props'/>
        <Inputcomponents title='props' placeholder='props'/>
        <Inputcomponents title='props' placeholder='props'/>
        <Inputcomponents title='props' placeholder='props'/>



        <TouchableOpacity style={{alignItems:"center", padding: 10, backgroundColor:'blue', width:'100%', bottom:-50, position:"absolute"}}>
            <Text  style={{ color:'white',}}>Save</Text>
        </TouchableOpacity>


        </View>
        )
}



const styles = StyleSheet.create({
    // modalContainer: {
    //   flex: 1,
    //   backgroundColor: 'rgba(0, 0, 0, 0.5)',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    // },
    // card: {
    //   width: '90%',
    //   height: '70%',
    //   backgroundColor: 'white',
    //   borderRadius: 20,
    //   padding: 20,
    //   alignItems: 'center',
    // },
    cardImage: {
      width: 80, 
      height: 80, 
      resizeMode: 'contain',
      position: 'absolute',
      alignSelf: 'center',
      borderRadius: 60,
      borderColor:'white', borderWidth:2,

  
    
    },
    grediant: {
        height: 44,
        width: 300,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius:40,
    },
    container: {
        flex: 1.0,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    },
    buttonContainer: {
        flex: 1.0,
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        width: '99%',
        margin: 1,
        borderRadius:40,
    },
    buttonText: {
        textAlign: 'center',
        color: '#4C64FF',
        alignSelf: 'center',
    }
  
   
  });