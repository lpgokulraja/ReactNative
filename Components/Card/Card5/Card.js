
import { useState } from 'react';
import { View, Text,FlatList, TouchableOpacity, Image } from 'react-native';



const data=[
  {Title:"Engine",SubTitle:"1.0L Petrol"},
  {Title:"Max Power",SubTitle:"50 kW @ 6000 rpm"},
  {Title:"Max Torque",SubTitle:"90 Nm @ 3500 rpm"},
  {Title:"Transmission",SubTitle:"5-Speed AGS (Auto Gear Shift)"},
  {Title:"Fuel Efficiency",SubTitle:"23.7 km/l"},
  {Title:"Brakes",SubTitle:"Front Disc and Rear Drum"},
  {Title:"Suspension",SubTitle:"McPherson Strut with Coil Spring (Front), 3-Link Rigid (Rear)"},
  {Title:"Tyre Size",SubTitle:"155/65 R14"},
  {Title:"Wheel Size",SubTitle:"14-inch"},
  {Title:"Dimensions",SubTitle:"3545 mm x 1490 mm x 1475 mm (L x W x H)"},
  {Title:"Boot Space",SubTitle:"177 L"},
]



export default function Card() {
  
  const [limit, SetLimit] = useState(false);

  return (

    
    <View style={{flex:1, margin:10, }}>

      <View style={{   backgroundColor:"white",elevation:3, padding:10, borderRadius:10,}}>

<Text style={{fontWeight:"bold", fontSize:20, color:"#2F4858", marginBottom:10}}>Key Specifications</Text> 


<View style={{flexDirection:"row", flexWrap:"wrap", }}>




  <FlatList
  data={data.slice(0,(limit)?data.length:6)}
  numColumns={"2"}
  renderItem={({ item }) => {
    return <CardComponent Title={item.Title} SubTitle={item.SubTitle} />;
  }}
  />



</View>

<View style={{paddingTop:5, paddingBottom:5}}>

<TouchableOpacity style={{alignItems:"center", flexDirection:"row", justifyContent:"center"} } onPress={()=>{SetLimit(true)}}>
  <Text style={{color:"#677987", fontSize:18, display:(limit)?"none":"flex", paddingRight:5}}>See More</Text>
  <Image source={require("./down.png")} style={{width:25, height:25, display:(limit)?"none":"flex"}}/>
 
</TouchableOpacity>

<TouchableOpacity style={{alignItems:"center", flexDirection:"row", justifyContent:"center"} } onPress={()=>{SetLimit(false)}}>
  <Text style={{color:"#677987", fontSize:18, display:(limit)?"flex":"none", paddingRight:5}}>See Less</Text>
  <Image source={require("./up.png")} style={{width:25, height:25, display:(limit)?"flex":"none"}}/>

</TouchableOpacity>

      </View>



</View>
    </View>
  );
}


const CardComponent=({Title,SubTitle})=>{
  return(
    <View style={{width:"48%", borderWidth:2, borderColor:"#CDCDCD", borderRadius:10, flex:1, margin:3, }}>

<Text style={{color:"#AAAAAA", fontSize:15, paddingStart:5, paddingBottom:10, }}>{Title}</Text>
<Text style={{color:"#484848", fontWeight:"bold", fontSize:18, paddingStart:5}}>{SubTitle}</Text>


</View>
  )
}