import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from "react-native"
import data from "../carousel/Data";

export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

const CarouselCardItem = ({ data, index }) => {
  const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

  return (
    <View
    style={{
      height: windowHeight,
      width: windowWidth,
      // justifyContent: "center",
      alignItems: "center",
    }}
  >
    <View style={{backgroundColor:"gray", justifyContent: "center",
      alignItems: "center", width:windowWidth*0.8,  marginHorizontal:21, borderRadius:20}}>

    <Image
      source={{ uri: data.imgUrl }}
      style={{ width: "100%", height: windowHeight * 0.5 ,borderTopLeftRadius:20,borderTopRightRadius:20,}}
      ></Image>

      <View style={{paddingTop:10}}>
    <Text style={{ fontSize: 24 , textAlign:"center", letterSpacing:2}}>{data.title}</Text>
      </View>

      <View style={{padding:10,}}>
    <Text style={{ fontSize: 18 , textAlign:"justify", letterSpacing:2}}>{data.body}</Text>
      </View>
      </View>
  </View>
  )
}

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: 'white',
//     borderRadius: 8,
//     width: ITEM_WIDTH,
//     paddingBottom: 40,
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 3,
//     },
//     shadowOpacity: 0.29,
//     shadowRadius: 4.65,
//     elevation: 7,
//   },
//   image: {
//     width: ITEM_WIDTH,
//     height: 300,
//   },
//   header: {
//     color: "#222",
//     fontSize: 28,
//     fontWeight: "bold",
//     paddingLeft: 20,
//     paddingTop: 20
//   },
//   body: {
//     color: "#222",
//     fontSize: 18,
//     paddingLeft: 20,
//     paddingLeft: 20,
//     paddingRight: 20
//   }
// })

export default CarouselCardItem