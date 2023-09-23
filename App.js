import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index11 from "./Components/Modal/Modal11/Index11"
import Index12 from "./Components/Modal/Modal12/Index12"
import Index13 from "./Components/Modal/Modal13/Index13"
import Index14 from "./Components/Modal/Modal14/Index14"
import Home from "./Components/Modal/Home"
import ProfileIndex from './Components/Editprofile/ProfileIndex';
import DropDownIndex from './Components/DropDown/DropDownIndex';
import DropDown2Index from './Components/DropDown2/DropDown2Index';
import DropDown3Index from './Components/DropDown3/DropDown3Index';
import CarouselCards from './Components/carousel/CarouselCards';
import Carouselindex from './Components/Carousel2/Carouselindex';
import Carouselindex2 from './Components/Carousel3/Carouselindex2';
import Carouselindex4 from './Components/Carousel4/Carouselindex4';
import DropDown4Index from './Components/DropDown4/DropDown4Index';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
       <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Modal11" component={Index11} />
        <Stack.Screen name="Modal12" component={Index12} />
        <Stack.Screen name="Modal13" component={Index13} />
        <Stack.Screen name="Modal14" component={Index14} />
        <Stack.Screen name="DropDown" component={DropDownIndex} />
        <Stack.Screen name="DropDown2" component={DropDown2Index} />
        <Stack.Screen name="DropDown3" component={DropDown3Index} />
        <Stack.Screen name="DropDown4" component={DropDown4Index} />
        <Stack.Screen name="carousel" component={CarouselCards} />
        <Stack.Screen name="Carouselindex" component={Carouselindex} />
        <Stack.Screen name="Carouselindex2" component={Carouselindex2} />
        <Stack.Screen name="Carouselindex4" component={Carouselindex4} />
        <Stack.Screen name="Profile" component={ProfileIndex}  options={{
          headerLeft: null, headerShown:false,
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
