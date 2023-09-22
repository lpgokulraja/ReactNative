import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet, Animated, PanResponder, Image } from 'react-native';

const Modal12 = () => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event(
          [
            null,
            {
              dy: pan.y, // Update the Animated.ValueXY on drag
            },
          ],
          { useNativeDriver: false }
        ),
        onPanResponderRelease: (e, gestureState) => {
          if (gestureState.dy > 50) {
            // If the user drags the view down more than 50 units, hide it
            Animated.timing(pan, {
              toValue: { x: 0, y: 500 }, // You can adjust the final position to make it disappear off the screen
              duration: 300,
              useNativeDriver: false,
            }).start();
          } else {
            // If the drag distance is not sufficient, animate the view back to its original position
            Animated.spring(pan, {
              toValue: { x: 0, y: 0 },
              friction: 5,
              useNativeDriver: false,
            }).start();
          }
        },
      }),
    [pan]
  );

  return (
    <Animated.View
      {...panResponder.panHandlers}
      style={[
        styles.container,
        {
          transform: [{ translateY: pan.y }],
        },
      ]}
    >
      <View style={styles.contentContainer}>
        <Text>--------</Text>
        <View style={{alignSelf : "flex-start", paddingLeft:10, position:'absolute', paddingTop:20}}>

        <Image  
  source={{
    uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png'
  }} 
  style={{width: 70, height: 70, borderRadius: 400/ 2}} />
  </View>
        <Text style={{paddingTop:8, fontWeight: "bold", paddingBottom:5, fontSize:20}}>TITLE</Text>
        <Text>Description</Text>
        
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end', // Push the view to the bottom of the screen
  },
  contentContainer: {
    width: '100%',
    height: '40%',
    backgroundColor: 'gray',
    borderTopEndRadius: 20,
    borderTopLeftRadius: 20,
    alignItems: 'center',
  },
});

export default Modal12;
