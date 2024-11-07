import React, { useState} from 'react';
import {View,FlatList,Text,  Image, TouchableHighlight} from 'react-native';

import {images, manageKeysTextConfig, menusConfig } from "../../configs";
import {appdata } from "../../store";
import {styles} from "./styles";

import { EditorWithTabMenu, TextInputField, DisplayBlockText } from "../../components";


const populateItemsInAction = (action, encryptionKeyList) => {
  if (!encryptionKeyList) {
    console.log("encryptionKeyList is null");
    return action;
  }
  
  let {endReached,startIndex,numberRocordsInBatch}=action;
  let items=[...action.items];
  for (var counter = 0; counter < numberRocordsInBatch; counter++) {
    if (startIndex >= encryptionKeyList.length) {
      endReached = true;
      break;
    }
    var encryptionKeyItem = encryptionKeyList[startIndex];
    items.push({
      encryptionKeyItem,
      key: encryptionKeyItem.encryptionKey
    });
    startIndex++;
  }
  return {...action, items,endReached,startIndex};
}

const buildInitialData = () => {
  var encryptionKeyList = appdata.getEncryptionKeyList();
  var activeEncryptionKey = appdata.getDecryptedActiveEncryptionKey();
  var selectedEncryptionKeyItem = appdata.findEncryptionKeyByDecryptedValue(activeEncryptionKey);
  var action = {
    password: "",
    errorMessage: "",
    startIndex: 0,
    items: [],
    endReached: false,
    numberRocordsInBatch: 50,
    selectedEncryptionKeyItem
  };
  return populateItemsInAction(action, encryptionKeyList);
  
}

const loadNextBatchOfItems = action => {
  var encryptionKeyList = appdata.getEncryptionKeyList();
  return populateItemsInAction(action, encryptionKeyList);  
};










const renderSelectIcon = (encryptionKeyItem, action) => {
  var icon = images.device.radio.unchecked;
  if (encryptionKeyItem === action.selectedEncryptionKeyItem) {
    icon = images.device.radio.checked;
  }
  return (
    <Image source={icon} style={styles.itemIcon} />
  );
}
const renderActiveIcon = encryptionKeyItem => {
  if (appdata.isEncryptionKeyIsActive(encryptionKeyItem)) {
    return (
      <Image source={images.activeIcon} style={styles.itemIcon} />
    );
  }
  else {
    return null;
  }
}


const renderItemListItem = ({item, action, setAction}) => {
  if (!item.encryptionKeyItem) {
    return (
      <View style={styles.endSpace}></View>
    );
  }
  const onItemSelected = selectedItem => setAction({...action,selectedEncryptionKeyItem: selectedItem.encryptionKeyItem});            

  return (
    <TouchableHighlight onPress={() => onItemSelected(item)}>
      <View style={styles.itemRecord}>
        <View style={styles.itemRow}>
          <View style={styles.listContainer}>
            <View style={styles.listvalue}>
              {renderSelectIcon(item.encryptionKeyItem,action)}
              <Image source={images.key} style={styles.itemIcon} />
              <Text style={styles.keyText}>{item.encryptionKeyItem.name}</Text>
            </View>
            {renderActiveIcon(item.encryptionKeyItem)}
          </View>

        </View>
      </View>
    </TouchableHighlight>
  );

};

const renderErrorMessage = ({action}) => {
  if (action.errorMessage) {
    return (
      <View style={styles.inputContainer}>
        <Text style={styles.errorMessage}>{action.errorMessage}</Text>
      </View>
    );
  }
  else {
    return null;
  }
}


export default ({onCancel,onCompleted})=> {
  const [action,setAction]=useState(()=>buildInitialData());
  
  const setPassword =password =>  setAction({...action, password});
  const setErrorMessage = errorMessage =>  setAction({...action, errorMessage});    
  
  const onEncrypt = () => {
  
    try {            
         
            if (!action.password) {
                setErrorMessage(manageKeysTextConfig.errorMessages.passwordIsmissing);
            }
            else if (action.password.length < 5) {
                setErrorMessage(manageKeysTextConfig.errorMessages.passwordTooShort);
            }
            else {
                var encryptedContent = appdata.exportEncryptionKeyItemWithPassword(action.selectedEncryptionKeyItem, action.password);
                var codedataname = manageKeysTextConfig.export.qrcode.title;
                onCompleted(encryptedContent,codedataname);                
            }
    }
    catch (error) {
      console.log(error);
      setErrorMessage(manageKeysTextConfig.errorMessages.failedToEncrypt + error);      
    }
  };

  

  const onEndReached = () =>{  
    if (!action.endReached) {
        setAction(loadNextBatchOfItems(action));
    }
  };
  
  
  const  menuItems = [{menu: menusConfig.back.menu,onPress: onCancel},
                    {menu: menusConfig.encryptedQrCode.menu,onPress: onEncrypt}];
    return (

      <EditorWithTabMenu title={manageKeysTextConfig.export.fillContent.title}
        menuItems={menuItems} selected={menusConfig.eye.menu}>
        <View style={styles.content}>
          <DisplayBlockText content={manageKeysTextConfig.export.fillContent.selectKey.content} />
          <FlatList
            data={action.items}            
            renderItem={({item, index})=>renderItemListItem({item,action, setAction})}
            onEndReached={onEndReached} />
        </View>
        <View style={styles.content}>
          <DisplayBlockText content={manageKeysTextConfig.export.fillContent.password.content1} />
          <View style={styles.inputContainer}>
            <TextInputField
              placeholder={manageKeysTextConfig.export.fillContent.password.placeHolder}
              value={action.password}
              secureTextEntry={false}
              onChangeTextValue={setPassword}
              autoCapitalize={'none'}
            />
          </View>
          {renderErrorMessage({action})}
        </View>
        <View style={styles.content}>
          <DisplayBlockText content={manageKeysTextConfig.export.fillContent.password.content2} />
        </View>
      </EditorWithTabMenu>

    );

};