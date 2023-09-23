import React from "react";
// import Modal11 from "./Modal11";
import { Button, ScrollView, View } from "react-native";



export default function Index11({navigation}){
   
    return(
<ScrollView>
<View style={{margin:20}}>
        <Button title='Model11' onPress={()=>navigation.navigate('Modal11')}/>
</View>

<View style={{margin:20}}>
        <Button title='Model12' onPress={()=>navigation.navigate('Modal12')}/>
 </View>

<View style={{margin:20}}>
        <Button title='Model13' onPress={()=>navigation.navigate('Modal13')}/>
</View>

<View style={{margin:20}}>
        <Button title='Model14' onPress={()=>navigation.navigate('Modal14')}/>
</View>

<View style={{margin:20}}>
        <Button title='Edit Profile' onPress={()=>navigation.navigate('Profile')}/>
</View>

<View style={{margin:20}}>
        <Button title='DropDown' onPress={()=>navigation.navigate('DropDown')}/>
</View>

<View style={{margin:20}}>
        <Button title='DropDown2' onPress={()=>navigation.navigate('DropDown2')}/>
</View>

<View style={{margin:20}}>
        <Button title='DropDown4' onPress={()=>navigation.navigate('DropDown4')}/>
</View>

<View style={{margin:20}}>
        <Button title='carousel' onPress={()=>navigation.navigate('carousel')}/>
</View>

<View style={{margin:20}}>
        <Button title='Carousel2' onPress={()=>navigation.navigate('Carouselindex')}/>
</View>

<View style={{margin:20}}>
        <Button title='Carousel3' onPress={()=>navigation.navigate('Carouselindex2')}/>
</View>

<View style={{margin:20}}>
        <Button title='Carousel4' onPress={()=>navigation.navigate('Carouselindex4')}/>
</View>




</ScrollView>
        )
}