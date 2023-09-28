import { Dimensions, FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import data from './Data';
import { useCallback, useEffect, useRef, useState } from "react";


function Slide({ data, index }) {
    const { width: windowWidth, height: windowHeight } = Dimensions.get("window");


    return (
      <View
        style={{
          height: windowHeight,
          width: windowWidth,
          alignItems: "center",
        }}
      >
        <View style={{backgroundColor:"gray", justifyContent: "center", alignItems: "center", width:windowWidth*0.8,  marginHorizontal:21, borderRadius:20, }}>

        <Image
          source={{ uri: data.imgUrl }}
          style={{ width: "100%", height: windowHeight * 0.5 ,borderRadius:20}}
          ></Image>

         
          </View>
      </View>
    );
  }

function Slide2({ data }) {
    const { width: windowWidth, height: windowHeight } = Dimensions.get("window");


    return (
      <View
        style={{
        
          paddingHorizontal:8,
          
         
        }}
      >
       
              <View style={{ marginStart:10, justifyContent:"center"}}>
  <TouchableOpacity>

        <Image
          source={{ uri: data.imgUrl }}
          style={{ width:50, height: 50,  }}
          
          ></Image>
          </TouchableOpacity>
          </View>
  
       
        </View>
    
    );
  }




  export default function Card() {
    const [index, setIndex] = useState(0);
    const indexRef = useRef(index);
    indexRef.current = index;


    const onScroll = useCallback((event) => {
      console.log(index);
      const slideSize = event.nativeEvent.layoutMeasurement.width;
      const index = event.nativeEvent.contentOffset.x / slideSize;
      const roundIndex = Math.round(index);
  
      const distance = Math.abs(roundIndex - index);
  
  
      const isNoMansLand = 0.4 < distance;
  
      if (roundIndex !== indexRef.current && !isNoMansLand) {
        setIndex(roundIndex);
      }
    }, []);
  
      console.log(index);
  
    return (

      <View style={{ flex:1, marginTop:20}}>

     <FlatList
        data={data}
        style={{ flex: 1 }}
        renderItem={({ item, index }) => {
          return <Slide data={item} index={index}  />;
        }}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        />

<View style={{ height:180, marginTop:20, marginStart:20}}>


<FlatList
        data={data}
       
        style={{ flex: 1 }}
        renderItem={({ item}) => {
          return <Slide2 data={item} />;
        }}
       
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        />


        {/* <TouchableOpacity onPress={()=>{ setIndex(2); console.log(index); onScroll;}}><Text>ttt</Text></TouchableOpacity> */}


</View>



        </View>
      
    );
  }