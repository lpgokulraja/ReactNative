import React, { useState } from 'react';
import { View, TextInput, Animated, StyleSheet } from 'react-native';

export default function Input() {
  const [isFocused, setIsFocused] = useState(false);
  const [text, setText] = useState('');

  const translateY = new Animated.Value(isFocused ? -20 : 0); // Adjust the translateY value as needed

  const handleFocus = () => {
    setIsFocused(true);
    Animated.timing(translateY, {
      toValue: -20, 
      duration: 200, 
      useNativeDriver: false, 
    }).start();
  };

  const handleBlur = () => {
    setIsFocused(false);
    Animated.timing(translateY, {
      toValue: 0, 
      duration: 200,
      useNativeDriver: false,
    }).start();
  };




  const styles = StyleSheet.create({
 
    input: {
      borderBottomWidth: 1,
      borderBottomColor: (isFocused)?'#62239e':"black",
      fontSize: 16,
      paddingVertical: 8,
      margin:10
    },
    placeholder: {
      position: 'absolute',
      left: 10,
      top: 20,
      fontSize: 12,
      color: 'gray',
    },
  });



  return (

    <View style={{backgroundColor:"#95b4e6", height:'100%'}}>

    <View style={ {margin: 20, backgroundColor: "white"}}>
      <Animated.Text
        style={[
          styles.placeholder,
          {
            transform: [{ translateY }],
          }
        ]}
        >
       Name
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


