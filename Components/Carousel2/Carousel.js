import { Dimensions, FlatList, Image, Text, View } from "react-native";
import data from "../carousel/Data";
import { useCallback, useEffect, useRef, useState } from "react";


function Slide({ data }) {
    const { width: windowWidth, height: windowHeight } = Dimensions.get("window");


    return (
      <View
        style={{
          height: windowHeight,
          width: windowWidth,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={{ uri: data.imgUrl }}
          style={{ width: windowWidth * 0.8, height: windowHeight * 0.5 }}
        ></Image>
        <Text style={{ fontSize: 24 }}>{data.title}</Text>
        <Text style={{ fontSize: 18 }}>{data.body}</Text>
      </View>
    );
  }




  export default function Carousel() {
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
  

  
    return (
      <FlatList
        data={data}
        style={{ flex: 1 }}
        renderItem={({ item }) => {
          return <Slide data={item} />;
        }}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
      />
    );
  }


