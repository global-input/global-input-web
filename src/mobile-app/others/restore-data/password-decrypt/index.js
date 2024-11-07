import React, { useState, useEffect } from 'react';
import {Text,  View} from 'react-native';
import {styles} from "../styles";
import {images,menusConfig} from "../../../configs";
import {EditorWithTabMenu,IconButton,TextInputField,DisplayBlockText} from "../../../components";
import {appdata} from "../../../store";

const errorMessages={
  importDecryptionError:"Please first import and activate the encryption key that was used for encrypting the exported content.",
  missingPassword:"Password required for decrypting the encryption key.",
  invalidPassword:"Failed to decrypt the key with the password provided.",
};

const passwordProtectedEncryptionKey={
  title:"Importing Encryption Key",
  content:["The data is identified as an encryption key.",
         "1. The encryption key is protected with a password. You need to provide the password in the following field to decrypt it."],
  content2:["2. Press the \"Decrypt\" button to decrypt and import the encryption key."],
  placeHolder:"Password required"
};


export default ({content,onEncryptionKeyDecrypted,onBack})=>{
       const [compData,setCompData] =useState({content, password:'',errorMessage:''});
        useEffect(()=>{
          setCompData({content, password:'',errorMessage:''});
        },[]);
        const setPassword = password =>setCompData({...compData,password, errorMessage:""});                  
        const setErrorMessage =errorMessage=>setCompData({...compData, errorMessage});                                    
        const decryptWithPassword = () => {
            const {password,content}=compData;            
            if(!password){
                setErrorMessage(errorMessages.missingPassword);
            }
            else{
                  try{
                        var encryptionKeyDecrypted=appdata.decryptPasswordEncryptedEncryptionKeyText(content,password);
                        if(!encryptionKeyDecrypted){
                              setErrorMessage(errorMessages.invalidPassword);
                        }
                        else{
                            onEncryptionKeyDecrypted(encryptionKeyDecrypted);
                        }
                      }
                      catch(error){
                            console.log(error);
                            setErrorMessage(errorMessages.invalidPassword);
                      }
               }
        };
        const renderErrorMessage = () => {
              if(compData.errorMessage){
                  return (
                        <View style={styles.errorMessageContainer}>
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
        onPress:decryptWithPassword
      }];

  return(
    <EditorWithTabMenu title={passwordProtectedEncryptionKey.title}
    menuItems={menuItems} selected={menusConfig.eye.menu}>


                     <View style={styles.formContainer}>
                        <DisplayBlockText content={passwordProtectedEncryptionKey.content}/>
                     </View>
                     <View style={styles.formContainer}>
                                 <TextInputField
                                     labelIcon={images.passwordIcon}
                                     placeholder={passwordProtectedEncryptionKey.placeHolder}
                                     value={compData.password}
                                     secureTextEntry={true}
                                     onChangeTextValue={setPassword}
                                     autoCapitalize={'none'}
                                 />
                    </View>
                    {renderErrorMessage()}
                    <View style={styles.formContainer}>
                       <DisplayBlockText content={passwordProtectedEncryptionKey.content2}/>
                    </View>



        </EditorWithTabMenu>

  );
};

