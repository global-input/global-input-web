import React, { useState, useEffect } from 'react';
import {
  Text,
  View
} from 'react-native';


import {styles} from "../styles";



import {menusConfig} from "../../../configs";

import {ViewWithTabMenu,DisplayBlockText} from "../../../components";

import {appdata, formDataUtil} from "../../../store";



const importDecryptionError="Please first import and activate the encryption key that was used for encrypting the exported content.";
const formDataMessage=["Press the \"Decrypt\" button to decrypt the data."];
  

export const FormContentDataView = ({windowTitle,content,onDecryptedFormData,onBack}) => {
        const [compData,setCompData]=useState({content,errorMessage:'', password:''});
        useEffect(()=>{
          setCompData({content,errorMessage:'', password:''});
        },[]);
        

        const setErrorMessage = errorMessage =>setCompData({...compData,errorMessage});
        

          
        const decryptFormData = ()=> {
            var globalInputData=appdata.decryptFormDataText(compData.content);
            if(!globalInputData){
              setErrorMessage(importDecryptionError);
              return;
            }
            
            onDecryptedFormData(globalInputData.forms);
        };

        const renderErrorMessage = () => {
              if(compData.errorMessage){
                  return (
                        <View style={styles.inputContainer}>
                              <Text style={styles.errorMessage}>{compData.errorMessage}</Text>
                        </View>
                  );
                }
                else{
                    return null;
                  }
        };

  var menuItems=[{
        menu:menusConfig.cancel.menu,
        onPress:onBack
  },{
        menu:menusConfig.decrypt.menu,
        onPress:decryptFormData
  }];
  

var cc=formDataUtil.buldTextContentResolved(appdata.getActiveEncryptionKeyItem(),formDataMessage);
  return(
    <ViewWithTabMenu title={windowTitle}
    menuItems={menuItems}
    selected={menusConfig.others.menu}>
        <View style={styles.formContainer}>
                        <DisplayBlockText content={cc}/>
                                    {renderErrorMessage()}
        </View>
    </ViewWithTabMenu>
  );
};

