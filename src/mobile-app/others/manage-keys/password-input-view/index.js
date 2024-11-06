import React, { useState, useEffect } from 'react';
import {
  Text,
  View
} from 'react-native';
import {styles} from "../styles";

import {images,menusConfig,manageKeysTextConfig} from "../../../configs";

import {EditorWithTabMenu,DisplayBlockText,TextInputField} from "../../../components";



import DisplayKeyDetails from "../manage-keys-view/DisplayKeyDetails";

const renderErrorMessage = errorMessage => {
    if(errorMessage){
      return (
        <View style={styles.errorMessageContainer}>
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        </View>
      );
    }
    else{
      return null;
    }
  }
  
export default ({encryptionKeyItem,nextStep,title,placeHolder,onBack,help1,help2}) => {
    const [password,setPassword]=useState('');
    const [errorMessage,setErrorMessage]=useState('');
    const onNextStep = () => {        
        if(password.trim().length<5){
            setErrorMessage(manageKeysTextConfig.errorMessages.passwordTooShort);
            return;
        }
        nextStep(password.trim());
    };
    useEffect(()=>{
        setPassword('');
        setErrorMessage('');
    },[encryptionKeyItem]);
    var menuItems=[{
        menu:menusConfig.cancel.menu,
        onPress:onBack
    }];
   menuItems.push({
       menu:menusConfig.encrypt.menu,
       onPress:onNextStep
   });
   
   
  return(
    <EditorWithTabMenu title={title}
    menuItems={menuItems} selected={menusConfig.eye.menu}>
                            <DisplayKeyDetails encryptionKeyItem={encryptionKeyItem}/>
                            <View style={styles.help}>
                                  <DisplayBlockText content={help1}/>
                            </View>
                            
                            <View style={styles.formContainer}>
                                <View style={styles.itemRow}>
                                            <TextInputField
                                                  labelIcon={images.passwordIcon}
                                                   placeholder={placeHolder}
                                                   value={password}
                                                   autoCapitalize={'none'}
                                                   onChangeTextValue={setPassword}
                                                 />
                                </View>
                                {renderErrorMessage()}
                            </View>
                            <View style={styles.help}>
                                <DisplayBlockText content={help2}/>
                            </View>

        </EditorWithTabMenu>
  );


}

