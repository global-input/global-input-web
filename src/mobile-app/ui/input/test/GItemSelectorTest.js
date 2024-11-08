/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import GItemSelector from '../GItemSelector';
import React,{useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from 'react-native';


import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions
} from 'react-native/Libraries/NewAppScreen';

export default () => {
  
  const data = {
    label: 'Single Section',
    items: [
      {label: 'item1', value: 'value1'},
      {label: 'item2', value: 'value2'},
      {label: 'item3', value: 'value3'}
    ]
  };
  const getItemByValue= value=>{
     const matched=data.items.filter(item => item.value === value);
     return matched.length?matched[0]:null;     
  }
  const [selectedValue, setSelectedValue]=useState(data.items[0]);

  const onValueChange= value => setSelectedValue(getItemByValue(value));

  return (
    <SafeAreaView>
      <ScrollView>
        <StatusBar barStyle="dark-content" />
        <View style={styles.body}>
          <GItemSelector
            selectedItem={selectedValue}
            items={data.items}
            label={data.label}
            onValueChange={onValueChange}
          />          
        </View>
        <View style={styles.section}>
  <Text>Selected value:{selectedValue.value}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
    marginTop: 32,
    paddingHorizontal: 24,
  },
  section:{

  },
  
});
