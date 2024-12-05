// src/mobile-app/global_input_connector/export-encrypted-encryption-key/renders.js

import React from 'react';
import { styles } from './styles';

import images from "../../configs/images";




import { appdata } from '../../store';
import * as appStore from '../../store';  

// Adjusted renderSelectIcon function
const renderSelectIcon = (encryptionKeyItem, action) => {
  let icon = images.device.radio.unchecked;
  if (encryptionKeyItem === action.selectedEncryptionKeyItem) {
    icon = images.device.radio.checked;
  }
  return <img src={icon} style={styles.itemIcon} alt="Select Icon" />;
};

// Adjusted renderActiveIcon function
const renderActiveIcon = (encryptionKeyItem) => {
  if (appStore.isEncryptionKeyIsActive(encryptionKeyItem)) {
    return <img src={images.activeIcon} style={styles.itemIcon} alt="Active Icon" />;
  }
  return null;
};

// Adjusted renderItemListItem component
export const renderItemListItem = ({ item, action, setAction }) => {
  if (!item.encryptionKeyItem) {
    return <div style={styles.endSpace}></div>;
  }

  const onItemSelected = (selectedItem) =>
    setAction({ ...action, selectedEncryptionKeyItem: selectedItem.encryptionKeyItem });

  return (
    <div onClick={() => onItemSelected(item)} style={styles.touchableHighlight}>
      <div style={styles.itemRecord}>
        <div style={styles.itemRow}>
          <div style={styles.listContainer}>
            <div style={styles.listvalue}>
              {renderSelectIcon(item.encryptionKeyItem, action)}
              <img src={images.key} style={styles.itemIcon} alt="Key Icon" />
              <span style={styles.keyText}>{item.encryptionKeyItem.name}</span>
            </div>
            {renderActiveIcon(item.encryptionKeyItem)}
          </div>
        </div>
      </div>
    </div>
  );
};

// Adjusted renderErrorMessage component
export const renderErrorMessage = ({ action }) => {
  if (action.errorMessage) {
    return (
      <div style={styles.inputContainer}>
        <span style={styles.errorMessage}>{action.errorMessage}</span>
      </div>
    );
  }
  return null;
};