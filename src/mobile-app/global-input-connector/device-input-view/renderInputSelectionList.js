import React, { useState, useEffect } from 'react';
import {View} from 'react-native';
  
import GMultiSelector from "../../ui/input/GMultiSelector";

import {styles} from "../styles";

export default ({dataitem, onFieldChanged}) => {
    var selectedItems=[];
    if(dataitem.items && dataitem.items.length>0 && dataitem.value){
          if(typeof dataitem.value ==='object'){
              selectedItems=dataitem.items.filter(itm=>{
                    var matchedValues=dataitem.value.filter(v=>v===itm.value);
                    if(matchedValues.length){
                      return true;
                    }
                    else{
                      return false;
                    }
              });

          }
          else{
            selectedItems=dataitem.items.filter(itm=>itm.value===dataitem.value);
          }
      }      
    return(
      <View style={styles.inputContainer}>
          <GMultiSelector
            selectType={dataitem.selectType}
            selectedItems={selectedItems}
            items={dataitem.items}
            label={dataitem.label}
            onValueChange={items=>{
                var values=[];
                items.forEach(itm=>{
                  values.push(itm.value);
                });
                onFieldChanged(values);
            }}/>
        </View>
    );
};
