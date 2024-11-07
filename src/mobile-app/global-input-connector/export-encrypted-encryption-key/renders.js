import React, { useState, useEffect } from 'react';
import {Text, View, Image, TouchableHighlight, FlatList} from 'react-native';
import {styles} from "./styles";
import { images, manageKeysTextConfig, menusConfig } from "../../configs";
import { EditorWithTabMenu, TextInputField, DisplayBlockText } from "../../components";

import {appdata } from "../../store";


  
const renderSelectIcon = encryptionKeyItem => {
    var icon = images.device.radio.unchecked;
    if (encryptionKeyItem === this.state.action.selectedEncryptionKeyItem) {
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
  

export const renderItemListItem = ({item, action, setAction}) {
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
                {renderSelectIcon(item.encryptionKeyItem)}
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

  export const renderErrorMessage = ({action}) => {
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