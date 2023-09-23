import { Dimensions, FlatList, Image, Text, View } from "react-native";
import data from "../carousel/Data";
import { useCallback, useEffect, useRef, useState } from "react";
import Carousel, { Pagination } from 'react-native-snap-carousel'
import React from "react";

function Slide({ data }) {
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
    );
  }




  export default function Carousel4() {
    const [index, setIndex] = useState(0);
    const indexRef = useRef(index);
    indexRef.current = index;
    const onScroll = useCallback((event) => {
      const slideSize = event.nativeEvent.layoutMeasurement.width;
      const index = event.nativeEvent.contentOffset.x / slideSize;
      const roundIndex = Math.round(index);
  
      const distance = Math.abs(roundIndex - index);
  
      // Prevent one pixel triggering setIndex in the middle
      // of the transition. With this we have to scroll a bit
      // more to trigger the index change.
      const isNoMansLand = 0.4 < distance;
  
      if (roundIndex !== indexRef.current && !isNoMansLand) {
        setIndex(roundIndex);
      }
    }, []);
  
  const isCarousel = React.useRef(null)
   const SLIDER_WIDTH = Dimensions.get('window').width + 80
   const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)
  
    return (

      <View>
         <Carousel
        layout="tinder"
        layoutCardOffset={9}
        ref={isCarousel}
        data={data}
        renderItem={Slide}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index) => setIndex(index)}
        useScrollView={true}
      />
      </View>



      // <FlatList
      //   data={data}
      //   style={{ flex: 1 }}
      //   renderItem={({ item }) => {
      //     return <Slide data={item} />;
      //   }}
      //   pagingEnabled
      //   horizontal
      //   showsHorizontalScrollIndicator={false}
      //   onScroll={onScroll}
      // />
    );
  }