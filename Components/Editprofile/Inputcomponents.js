import React from 'react';
import { View, TextInput, TouchableOpacity, Text, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Inputcomponents = ({title, placeholder}) => {
  return (
    <View style={{alignItems:"center", alignItems:"center",justifyContent:"center", alignSelf:"center", marginTop:20}}>






<LinearGradient
   colors={['#c914b4', '#7114db', '#350bbf', '#1c08cf', '#1c05f0', '#052cf0']}
  start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
  style={styles.grediant}

>
             
                    <TouchableOpacity style={styles.buttonContainer}>


                    <View style={{ position:"absolute", paddingEnd:10, paddingLeft:10, alignSelf:"flex-start", top:-10, backgroundColor:'white', paddingButtom:20, marginLeft:50}}>
                <Text>{title}</Text>
            </View>




            <TextInput
        style={{ 
            height: 50,
            paddingEnd:"50%",
            paddingLeft:30,
            margin: 12,
            // borderWidth: 2,
            // borderColor:"violet",
            borderRadius:40,
            padding: 5,
        }}
            placeholder={placeholder}
            />

<Image
source={require('./tick.png')} 
style={{width: 30, 
    height: 30, 
    position: 'absolute',
    alignSelf: 'flex-end',
   right:5,
    borderRadius: 400/ 2,}}
resizeMode={"cover"}
/>
                    </TouchableOpacity>

            </LinearGradient>



            
        </View>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradientBorder: {
    borderRadius: 8, // Adjust the border radius as needed
    width: 200, // Adjust the width as needed
    borderWidth: 2, // Adjust the border width as needed
    borderColor: 'transparent', // Set the border color to transparent
    overflow: 'hidden', // Clip the gradient to the border
  },
  input: {
    width: '100%',
    height: 40,
    paddingLeft: 8,
    backgroundColor: 'transparent', // Make the input background transparent
  },
  cardImage: {
    width: 80, 
    height: 80, 
  //   resizeMode: 'contain',
    position: 'absolute',
    alignSelf: 'center',
    borderRadius: 400/ 2,


  
  },
  grediant: {
      height: 44,
      width: 300,
      justifyContent: 'center',
      alignSelf: 'center',
      borderRadius:40,
  },
  
  buttonContainer: {
      flex: 1.0,
      alignSelf: 'center',
      justifyContent: 'center',
      backgroundColor: '#ffffff',
      width: '99%',
      margin: 1,
      borderRadius:40,
  },
  buttonText: {
      textAlign: 'center',
      color: '#4C64FF',
      alignSelf: 'center',
  }
};

export default Inputcomponents;
