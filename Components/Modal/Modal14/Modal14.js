import React, { useState } from 'react';
import { TextInput, TouchableOpacityComponent } from 'react-native';
import { View, Text, Modal, TouchableOpacity, StyleSheet, Image } from 'react-native';
// import { Icon } from '@rneui/themed'
import Icon from 'react-native-vector-icons/FontAwesome';

const Modal13 = ({ visible, onClose }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}


    >
      <View style={styles.modalContainer}>
        <View style={styles.card}>

          <View style={{width:85, height:85,  borderRadius: 400/ 2, opacity:0.5, position:'absolute', backgroundColor:"pink", marginTop:45}}></View>
          <View style={{width:35, height:35, borderWidth:5, borderColor:'white', borderRadius: 400/ 2, backgroundColor:"pink", marginTop:45}}></View>
          <View style={{width: 100, height: 100, backgroundColor: 'grey', position: "absolute", borderRadius: 400/ 2, top:-35}}></View>
          <View style={{width: 80, height: 80, backgroundColor: 'grey', position: "absolute", top:-12, borderBottomEndRadius:10, borderTopEndRadius:25, borderBottomLeftRadius:25, transform: [{rotate: '45deg'}],}}></View>


          <Image
            source={require('./dp.webp')} 
            style={styles.cardImage}
            resizeMode={"cover"}
            />
         


<View style={{position:"absolute"}}>
  
</View>
        <Text style={{ fontSize:20, color:"blue", letterSpacing:2, width:"60%", textAlign:"center", fontWeight:'500'}}>Share your ride experience</Text>

        <View style={{paddingTop:50, alignItems:"flex-start", width:"100%", marginStart:"20%" }}>

        <Text>How was the ride ?</Text>
        </View>

        <View style={{paddingTop:50, alignItems:"flex-end", width:"100%" }}>

        <TextInput
        style={{ height:200, textAlignVertical: 'top',}}
        onChangeText={()=>{}}
        placeholder="..."
        />
        </View>

        <View style={{position:"absolute", bottom:30, width:"100%"}}>
        <Icon.Button
        style={styles.closeIcon}
        name="close"
        backgroundColor="white"
        color='grey'
        onPress={onClose}
        />
        </View>
 



         <View style={{position:"absolute", bottom:35, width:"100%"}}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={()=>{onClose(); alert("Submitted...")}}
          >
            <Text style={{ fontSize:20, fontWeight:"bold",}}>SUBMIT</Text>
          </TouchableOpacity>
            </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: '90%',
    height: '70%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
  cardImage: {
    width: 80, 
    height: 80, 
    resizeMode: 'contain',
    position: 'absolute',
    top: -25, 
    alignSelf: 'center',
    borderRadius: 400/ 2,
    borderWidth:2,
    borderColor:'white'

  
  },

  closeIcon:{
    alignSelf:"flex-start",
  },
  
  closeButton: {
    // position:"absolute",
  //  left:80,
  alignSelf:"flex-end",
  // width:"100%"
  },
});

export default Modal13;
