import React, { useState } from 'react';
import { View, TextInput, Animated, StyleSheet } from 'react-native';

export default function Input() {
  const [isFocused, setIsFocused] = useState(false);
  const [text, setText] = useState('');

  const translateY = new Animated.Value(isFocused ? -20 : 0); // Adjust the translateY value as needed

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

  return (
    <View style={styles.container}>
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
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    fontSize: 16,
    paddingVertical: 8,
  },
  placeholder: {
    position: 'absolute',
    left: 10,
    top: 20, // Adjust the top position to align with the input
    fontSize: 16,
    color: 'gray',
  },
});
