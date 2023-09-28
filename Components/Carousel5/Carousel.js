import React, { useCallback, useRef } from 'react'
import { Dimensions, FlatList, Image, StyleSheet, Text, View } from "react-native"
import data from './Data'
import { useState } from 'react';
const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

function Slide({ data }) {


  return (
    <View
      style={{
       
        width: 250,
        paddingHorizontal:8,
        
       
      }}
    >
      <View style={{
        height: "20%",
        width:"100%",
        flexDirection:"row",
        borderRadius:5,
        elevation: 0.2,
        shadowColor: '#171717',
        
      }}>
            <View style={{ marginStart:10, justifyContent:"center"}}>

      <Image
        source={{ uri: data.imgUrl }}
        style={{ width:50, height: 50,  }}
        ></Image>
        </View>

      <View style={{ justifyContent:"center",flex:1,paddingHorizontal:12}}>
      <Text style={{ fontSize: 20 }}>{data.title}</Text>
      <Text style={{ fontSize: 12, textAlign:"justify" }}>{data.body}</Text>
      </View>
      </View>
  
    </View>
  );
}




export default function Carousel() {
 

  return (
    <View style={{ flex: 1, margin: 0, padding: 0 }}> 
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return <Slide data={item} />;
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ padding: 0 }} 
      />
    </View>
  );
}
