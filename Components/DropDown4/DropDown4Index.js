import { StyleSheet, View } from "react-native";
import DropDown from "./DropDown";

const dropdownData = [
    {
      name: 'dropdown1',
      label: 'Dropdown 1',
      options: [
        { label: 'Option 1', value: 'https://example.com/link1' },
        { label: 'Option 2', value: 'https://example.com/link2' },
      ],
    },
    {
      name: 'dropdown2',
      label: 'Dropdown 2',
      options: [
        { label: 'Option A', value: 'optionA' },
        {
          label: 'Option B',
          value: 'https://example.com/linkB',
          subOptions: [
            { label: 'Sub-Option X', value: 'https://example.com/linkX' },
            { label: 'Sub-Option Y', value: 'https://example.com/linkY' },
          ],
        },
      ],
    },
  ];
  
  const DropDown4Index = () => {
    return (
      <View style={styles.container}>
        <DropDown data={dropdownData} />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
    },
  });
  
  export default DropDown4Index;