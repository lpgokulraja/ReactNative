import React, { useState } from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const DropDown = ({ data }) => {
  const [selectedLinks, setSelectedLinks] = useState({});

  const handleDropdownChange = (itemName, value) => {
    setSelectedLinks({
      ...selectedLinks,
      [itemName]: value,
    });
  };

  const openLink = (link) => {
    if (link) {
      Linking.openURL(link);
    }
  };

  return (
    <View>
      {data.map((item, index) => {
        return(
        <View key={index} style={styles.dropdownContainer}>
          <Text>{item.label}</Text>
          <RNPickerSelect
            placeholder={{ label: 'Select an option...', value: null }}
            onValueChange={(value) => handleDropdownChange(item.name, value)}
            items={item.options}
          />
          <Text
            style={styles.link}
            onPress={() => openLink(selectedLinks[item.name])}
          >
            Go to Link
          </Text>
        </View>
      )})}
    </View>
  );
};

const styles = StyleSheet.create({
  dropdownContainer: {
    marginBottom: 20,
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginTop: 5,
  },
});

export default DropDown;
