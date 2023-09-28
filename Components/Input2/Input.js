import React, {  useState } from 'react';
  import { Animated, StyleSheet, Text, TextInput, View } from 'react-native';
  import { Dropdown } from 'react-native-element-dropdown';
  import AntDesign from '@expo/vector-icons/AntDesign';

 

  const Input = () => {
  const [isFocused, setIsFocused] = useState(false);
   
    const translateY = new Animated.Value(isFocused ? -15 : 0); 



    const handleFocus = () => {
      setIsFocused(true);
      setStyleStatus(styles.onFocus);
      Animated.timing(translateY, {
        toValue: -20, 
        duration: 200, 
        useNativeDriver: false, 
      }).start();
    };
  
    const handleBlur = () => {
      setIsFocused(false);
      setStyleStatus(styles.Focuses);
      Animated.timing(translateY, {
        toValue: 0, 
        duration: 200,
        useNativeDriver: false,
      }).start();
    };


const [styleStatus, setStyleStatus] = useState(styles.Focuses)


    return (

      <View style={{flex:1, justifyContent:"center", alignItems:"center", alignSelf:"center"}}>
<View style={{padding:20}}>

  <View>


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

      {/* <Text style={{position:"absolute", bottom:0, paddingBottom:10, paddingStart:10,}}>User Name</Text> */}
      <TextInput style={styleStatus}
        onFocus={handleFocus} onBlur={handleBlur}/>
 
  </View>
</View>


        </View>
    );
  };

  export default Input;

 
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
    onFocus:{
      paddingTop:20,
       paddingBottom:5,
        paddingStart:5,
         borderColor:"green",
          borderBottomWidth:2,
           margin:5,
            opacity:0.5,
            width:250, 
            backgroundColor:"gray"},

            Focuses:{
              paddingTop:20,
              paddingBottom:5,
               paddingStart:5,
                  margin:5,
                   opacity:0.5,
                   width:250, 
            }
  });