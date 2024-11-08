/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import GMultiSelector from '../GMultiSelector';

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
    label: 'selection test',
    selectType:"single",
    items: [
      {label: 'item1', value: 'value1'},
      {label: 'item2', value: 'value2'},
      {label: 'item3', value: 'value3'},
      {label: 'item4', value: 'value4'},
      {label: 'item5', value: 'value5'}
    ]
  };
  
  const [selectedValue, setSelectedValue]=useState([]);

  

  return (
    <SafeAreaView>
      
        <StatusBar barStyle="dark-content" />
        <View style={styles.body}>
             <GMultiSelector
                  selectType={data.selectType}
                  selectedItems={selectedValue}
                  items={data.items}
                  label={data.label}
                  onValueChange={items=>setSelectedValue(items)}/>
        </View>
        <View style={styles.section}>
  <Text>Selected value:</Text>
  {selectedValue.map(item => (<Text key={item.value}>{item.value}</Text>))}
        </View>
      
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
