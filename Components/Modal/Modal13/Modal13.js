import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Modal14 = ({ visible, onClose }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.card}>
          <Image
            source={require('./download.jpg')} 
            style={styles.cardImage}
          />
          <Text style={{paddingTop:20, fontWeight:"bold"}}>Sucessfull...</Text>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={onClose}
          >
            <Text>Close</Text>
          </TouchableOpacity>
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
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  cardImage: {
    width: 50, 
    height: 50, 
    resizeMode: 'contain',
    position: 'absolute',
    top: -25, 
    alignSelf: 'center',
    borderRadius: 400/ 2
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'lightgray',
    borderRadius: 5,
  },
});

export default Modal14;
