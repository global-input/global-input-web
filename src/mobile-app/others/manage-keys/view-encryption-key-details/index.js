import React, { useState, useEffect } from 'react';
import {
  Text, 
  View,
  Image,  
} from 'react-native';

import {styles} from "../styles";



import {images,manageKeysTextConfig,menusConfig} from "../../../configs";

import {EditorWithTabMenu,IconButton,TextFieldWithDone} from "../../../components";

import {appdata,formDataUtil} from "../.././../store";


  const getStateFromProps =  ({encryptionKeyItem}) => {    
    var decryptedKeyContent=appdata.decryptedWithPassword(encryptionKeyItem.encryptionKey);
    var createdAt=formDataUtil.getDateString(encryptionKeyItem.createdAt);
    var name=encryptionKeyItem.name;
    return {decryptedKeyContent,createdAt,name};
  }
  
export default ({encryptionKeyItem, updateEncryptionKeyName, onBack, 
    activateEncryptionKey, onDeletingEncryptionKeyItem, onQrCodeSelected, onClipboardCopySelected})=>{
    const [compData, setCompData]= useState(()=>getStateFromProps({encryptionKeyItem}));
    const setName = name => setCompData({...compData,name});
    const updateNameButton = () => {
        var name=compData.name.trim();
        updateEncryptionKeyName(encryptionKeyItem,name);
    };
    const renderSaveNameButton = () => {
        var name=compData.name.trim();
        if(!name){
          return null;
        }
        if(encryptionKeyItem.name!==name){
                return(
                  <IconButton image={images.saveIcon}
                       onPress={updateNameButton}/>
                );
        }
        else{
          return null;
        }
  };
    useEffect(()=>{
        setCompData(getStateFromProps({encryptionKeyItem}));
    },[encryptionKeyItem]);

    var title=manageKeysTextConfig.encryptionDetails.deactivated.title;
  var menuItems=[{
       menu:menusConfig.back.menu,
       onPress:onBack
   }];
   var titleIcon=null;

  if(appdata.isEncryptionKeyIsActive(encryptionKeyItem)){
      title=manageKeysTextConfig.encryptionDetails.activated.title;
      titleIcon=images.activateIconWhite;
  }
  else{
    menuItems.push({
         menu:menusConfig.activate.menu,
         onPress:()=>{
            activateEncryptionKey(encryptionKeyItem);
         }
     });
     menuItems.push({
          menu:menusConfig.delete.menu,
          onPress:()=>{
             onDeletingEncryptionKeyItem(encryptionKeyItem);
          }
      });
  }
     menuItems.push({
          menu:menusConfig.qrcode.menu,
          onPress:()=>{
             onQrCodeSelected(encryptionKeyItem);
          }
      });

     menuItems.push({
           menu:menusConfig.exportText.menu,
           onPress:()=>{
              onClipboardCopySelected(encryptionKeyItem);
           }
       });


  return(
    <EditorWithTabMenu title={title}
    menuItems={menuItems} selected={menusConfig.manageKeys.menu} titleIcon={titleIcon}>


                                <View style={styles.itemRow}>
                                            <TextFieldWithDone
                                                  labelIcon={images.labelIcon}
                                                   dark={true}
                                                   placeholder={manageKeysTextConfig.nameField.placeHolder}
                                                   value={compData.name}
                                                   onChangeTextValue={setName}
                                                   notFocusedContent={renderSaveNameButton()}
                                                 />
                                </View>
                                <View style={styles.itemRow}>
                                  <Image source={images.key} style={styles.itemIcon}/>
                                  <View style={styles.fieldValueContainer}>
                                            <Text style={styles.fieldValue}>{compData.decryptedKeyContent}</Text>
                                  </View>
                                </View>
                                <View style={styles.itemRow}>
                                    <Image source={images.timestampIcon} style={styles.itemIcon}/>
                                    <View style={styles.fieldValueContainer}>
                                      <Text style={styles.fieldValue}>{compData.createdAt}</Text>
                                    </View>
                                </View>
      </EditorWithTabMenu>

  );
};

