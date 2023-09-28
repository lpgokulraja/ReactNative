import React, { useState } from 'react';
import { View, TextInput, Animated, StyleSheet } from 'react-native';

export default function Input() {
  const [isFocused, setIsFocused] = useState(false);
  const [text, setText] = useState('');

  const translateY = new Animated.Value(isFocused ? -25 : 0); // Adjust the translateY value as needed

  const handleFocus = () => {
    setIsFocused(true);
    Animated.timing(translateY, {
      toValue: -20, // Move the placeholder up when focused
      duration: 200, // Adjust the animation duration as needed
      useNativeDriver: false, // Don't forget to set useNativeDriver to false for translateY
    }).start();
  };

  const handleBlur = () => {
    setIsFocused(false);
    Animated.timing(translateY, {
      toValue: 0, // Move the placeholder back down when blurred
      duration: 200,
      useNativeDriver: false,
    }).start();
  };


  const styles = StyleSheet.create({
    container: {
      margin: 20,
    },
    input: {
      borderWidth: 2,
      paddingStart:10,
      borderColor: (isFocused)?"#5EFE00":'white',
      fontSize: 16,
      paddingVertical: 8,
    },
    placeholder: {
      position: 'absolute',
      zIndex:1,
      backgroundColor:"#1B2743",
     
       paddingEnd:10,
       paddingLeft:10,
      left: 10,
      top: 13, 
      fontSize: 16,
      color: (isFocused)?"#5EFE00":'white',
    },
  });

  return (
    <View style={{backgroundColor:"#1B2743",flex:1, justifyContent:"center", alignItems:"center"}}>
      <View style={{ width:"80%"}}>
      <Animated.Text
        style={[
          styles.placeholder,
          {
            transform: [{ translateY }],
          }
        ]}
      >
        Placeholder Text
      </Animated.Text>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={(newText) => setText(newText)}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      </View>
    </View>
  );
}


