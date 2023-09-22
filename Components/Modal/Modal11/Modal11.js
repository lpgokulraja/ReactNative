import React, {useState, useEffect} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View, Animated, Dimensions, TouchableHighlight} from 'react-native';

const Modal11 = ({ title,
subtitle,
BackgroundColor,
textcolor,
LeftBorderColor
}) => {


    const styles = StyleSheet.create({
        centeredView: {
          flex: 1,
          // justifyContent: 'center',
          alignItems: 'center',
          // marginTop: 22,
        },
        modalView: {
          margin: 20,
          backgroundColor: BackgroundColor,
          borderRadius: 5,
          borderColor:LeftBorderColor,borderLeftWidth:5,
          paddingRight: 180,
          paddingLeft: 40,
          alignItems: 'flex-start',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 4,
          elevation: 5,
        },
        button: {
          borderRadius: 20,
          padding: 10,
          elevation: 2,
        },
        buttonOpen: {
          backgroundColor: '#F194FF',
        },
        buttonClose: {
          backgroundColor: '#2196F3',
        },
        textStyle: {
          color: 'white',
          fontWeight: 'bold',
          textAlign: 'center',
        },
        modalText1: {
          marginTop: 8,
          fontWeight: 'bold',
          textAlign: 'center',
          color:textcolor,
        },
        modalText2: {
          marginBottom: 8,
          textAlign: 'center',
          color:textcolor,
        },
      });



  const [modalVisible, setModalVisible] = useState(false);
 
const devicheight = Dimensions.get('window').height
const [modelY,setmodelY] = useState(new Animated.Value(-devicheight))


useEffect(()=>{
    openModal()

            setTimeout(()=>{
                closeModal()
            },3000);
},[])


  const openModal = () => {
    Animated.timing(modelY, {
      duration: 300,
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };

  const closeModal = () => {
    Animated.timing(modelY, {
        duration: 300,
      toValue:-devicheight,
      useNativeDriver: true,
    }).start();
  };



  return (
    <View style={styles.centeredView}>
        <Animated.View style={{transform: [{translateY: modelY}]}}>


        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText1}>{title}</Text>
            <Text style={styles.modalText2}>{subtitle}</Text>
            
          </View>
        </View>
      </Animated.View>
      
    </View>
  );
};



export default Modal11;