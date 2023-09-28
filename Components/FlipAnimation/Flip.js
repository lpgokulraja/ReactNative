import React from "react";
import { useSharedValue } from 'react-native-reanimated';

export default function Flip(){


    const spin = useSharedValue(0);
    const onPress=() => (spin.value = spin.value ? 0 : 1)



    return(
        <View>


<Animated.View style={[styles.front, frontViewStyle]}></Animated.View>

        <Animated.View style={[styles.front]}>
            <Text>Front View</Text>
            </Animated.View>
            <Animated.View style={[styles.back]}>
            <Text>Back View</Text>
        </Animated.View>
            </View>
    )
}


const frontAnimatedStyle = useAnimatedStyle(() => {
    const spinVal = interpolate(spin.value, [0, 1], [0, 180]);
    return {
      transform: [
        {
          rotateY: withTiming(`${spinVal}deg`, { duration: 500 }),
        },
      ],
    };
  }, []);

  const backAnimatedStyle = useAnimatedStyle(() => {
    const spinVal = interpolate(spin.value, [0, 1], [180, 360]);
    return {
      transform: [
        {
          rotateY: withTiming(`${spinVal}deg`, { duration: 500 }),
        },
      ],
    };
  }, []);


const styles = StyleSheet.create({
    container: {
      margin: 20,
      height:"100%",
    },
    front: {
        height: 400,
        width: 250,
        backgroundColor: "#D8D9CF",
        borderRadius: 16,
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
     },
     back: {
        height: 400,
        width: 250,
        backgroundColor: "#FF8787",
        borderRadius: 16,
        backfaceVisibility: "hidden",
        alignItems: "center",
        justifyContent: "center",
     },
    
  });
  