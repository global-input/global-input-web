import React from 'react';
import {View} from 'react-native';

import {styles} from "../styles";


export default ({dataitem, onFieldChanged}) => {
    var selectedItem=null;
    if(dataitem.items){
      for(var i=0;i<dataitem.items.length;i++){
        if(dataitem.items[i].value===dataitem.value){
          selectedItem=dataitem.items[i];
        }
      }
    }    
    return(
      <View style={styles.inputContainer}>
          <InputPicker
            selectedItem={selectedItem}
            items={dataitem.items}
            label={dataitem.label}
            onValueChange={value=>{
                onFieldChanged(value);
            }}/>
        </View>
    );
  };