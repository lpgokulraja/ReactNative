import React, { useState } from 'react';
import { View, TextInput, Animated, StyleSheet, Text, Image, ImageBackground, ScrollView } from 'react-native';
import Inputcomponents from '../Editprofile/Inputcomponents';

export default function Input() {


const [cardName, setCardName] = useState("Americal Express")
const [cardNumber, setCardNumber] = useState("1234 1234 1234 1234");
const [Name, setName] = useState("John");
const [expireDate, setExpireDate] = useState("11/28");

const [back, setBack] = useState(false);


  return (
   

    <View style={styles.container}>
      
      <View style={{ height:200, width:"100%", display:(back)?"none":"flex" }}>

      <ImageBackground source={require('./bg.jpg')} resizeMode="cover" style={styles.image}>


        <View style={{ margin:20, borderColor:"white", borderWidth:1, borderRadius:10, height:"80%"}}>

          <View style={{flex:1, alignItems:'center', justifyContent:'center', }}>
            <Image source={require('./image.png')} style={{width:60, height:60, borderRadius:30, borderColor:"white", borderWidth:1}}/>
          </View>

          <View style={{ alignItems:'center', position:"absolute", left:0, right:0, marginTop:5, }}>
            <Text style={{letterSpacing:1, color:"white", fontSize:21, fontWeight:"800" }}>{cardName}</Text>
          </View>
          
          <View style={{ justifyContent: 'center', alignItems: 'center', position:"absolute",  top: 0, left: 0, right:0, bottom:0, }}>
            <Text style={{letterSpacing:1, color:"white", fontWeight:"800",  fontFamily: 'serif' , fontSize: 23 }}>{cardNumber}</Text>
          </View>

          <View style={{ justifyContent: 'center', alignItems: 'center', paddingStart:5, position:"absolute",   left: 0,  bottom:0, }}>
            <Text style={{letterSpacing:1, color:"white", fontWeight:"800",  fontFamily: 'serif', fontSize: 18  }}>{Name}</Text>
          </View>

          <View style={{ justifyContent: 'center', alignItems: 'center', paddingEnd:5, position:"absolute",   right: 0,  bottom:0, }}>
            <Text style={{letterSpacing:1, color:"white", fontWeight:"800",  fontFamily: 'serif', fontSize: 18  }}>{expireDate}</Text>
          </View>


         


        </View>

</ImageBackground>
      </View>



      <View style={{ height:200, width:"100%", display:(!back)?"none":"flex"}}>

<ImageBackground source={require('./bg.jpg')} resizeMode="cover" style={styles.image}>


  <View style={{  height:"100%"}}>


    <View style={{  marginTop:"8%", backgroundColor:"black", height:"20%"  }}>
     
    </View>

    <View style={{ marginTop:"5%", justifyContent:"center", flexDirection:"row", height:45, alignItems:"center", }}>


    <View style={{   backgroundColor:"white", width:"70%", height:"80%"  }}>
    </View>
    <View style={{ alignItems:"center", justifyContent:"center",  backgroundColor:"white",  width:"15%", height:"70%",  }}>
      <Text>XYZ</Text>
    </View>

    </View>
    <View style={{flex:1, alignItems:'flex-start', justifyContent:'center', marginStart:20 }}>
            <Image source={require('./holo.png')} style={{width:50, height:50, borderRadius:30, borderColor:"white", borderWidth:1}}/>
          </View>

    


  </View>

</ImageBackground>
</View>


<View >

<Inputcomponents onChange={(e)=>{setName(e)}} title='Full Name' placeholder='Mr. John'/>
<Inputcomponents onChange={(e)=>{setCardNumber(e)}} title='Card Number' placeholder='1234 1234 1234 1234'/>
<Inputcomponents onChange={(e)=>{setCardName(e)}} title='Card Name' placeholder='American Express'/>
<Inputcomponents onChange={(e)=>{setExpireDate(e)}} title='Expiry MM/YY' placeholder='11/28'/>
<Inputcomponents title='CNN' placeholder='XYZ' onChange={()=>{}} onFocus={()=>setBack(true)} onBlur={()=>setBack(false)}/>

</View>



     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    height:"100%",
  },
  
  
});
