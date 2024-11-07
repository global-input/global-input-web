import React, { Component } from 'react';
import {View,Image,TouchableHighlight} from 'react-native';


import {styles} from "../styles";
import {TextInputField} from "../../components";



import {menusConfig, images} from "../../configs";

const renderFieldSelection = ({dataitem,fieldSelection,onFieldSelected}) => {
  var icon=menusConfig.checkbox.options[0].image;
  var checked=false;  
  if(fieldSelection && fieldSelection.dataitem===dataitem){
    icon=menusConfig.checkbox.options[1].image;
    checked=true;
  }
    return(
      <TouchableHighlight onPress={()=>{
            if(checked){
              onFieldSelected(null);
            }
            else{              
              onFieldSelected(dataitem);
            }
        }}>
          <Image source={icon} style={styles.itemIcon}/>
      </TouchableHighlight>

    );
}



export default ({dataitem,fieldSelection, showHideSecret,onFieldChanged,onFieldSelected}) => {
  const value=dataitem.value?dataitem.value:"";  
  const secureTextEntry= dataitem && dataitem.type==='secret' && showHideSecret && (!showHideSecret.show)  
  const nLines = dataitem.nLines?dataitem.nLines:1;  
  if(nLines>1){
      return(
        <TextInputField
          value={value}
          label={dataitem.label}
          dark={true}
          secureTextEntry={secureTextEntry}                      
          multiline={true}
          numberOfLines={nLines}           
          onFocus={()=>onFieldSelected(null)}           
          onChangeTextValue={data=>onFieldChanged(data)} placeholder={dataitem.label}>
             {renderFieldSelection({dataitem,fieldSelection, onFieldSelected})}
         </TextInputField>
    );
  }  
  else{
      return(
        <View style={styles.inputContainer}>
          <TextInputField
              value={value}
              placeholder={dataitem.label}                            
              dark={true}
              secureTextEntry={secureTextEntry}
              onFocus={()=>onFieldSelected(null)}              
              onChangeTextValue={data=>onFieldChanged(data)}              
              autoCapitalize={'none'}
          >
          {renderFieldSelection({dataitem,fieldSelection, onFieldSelected})}
        </TextInputField>
    
        </View>
           );
  }
};

