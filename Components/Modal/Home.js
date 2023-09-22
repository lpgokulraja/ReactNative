import React from "react";
// import Modal11 from "./Modal11";
import { Button } from "react-native";



export default function Index11({navigation}){
   
    return(
<>
        <Button title='Model11' onPress={()=>navigation.navigate('Modal11')}/>
        <Button title='Model12' onPress={()=>navigation.navigate('Modal12')}/>
        <Button title='Model13' onPress={()=>navigation.navigate('Modal13')}/>
        <Button title='Model14' onPress={()=>navigation.navigate('Modal14')}/>
        <Button title='Edit Profile' onPress={()=>navigation.navigate('Profile')}/>

</>
        )
}