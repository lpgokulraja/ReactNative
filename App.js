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
import profileIndex from './Components/Editprofile/ProfileIndex';

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
        <Stack.Screen name="Profile" component={profileIndex}  options={{
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
