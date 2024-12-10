// src/mobile-app/qr-code-encryption/encrypt-content-view/index.js

import React, { useState } from 'react';
import { styles } from '../styles'; // Ensure styles are adjusted for React.js

import images from '../../configs/images';
import encryptedQrCodeTextConfig from '../../configs/encryptedQrCodeTextConfig';
import menusConfig from '../../configs/menusConfig';



import EditorWithTabMenu from '../../components/menu/EditorWithTabMenu';
import TextInputField from '../../components/input/TextInputField';
import DisplayBlockText from '../../components/display-text/DisplayBlockText';
import { appdata } from '../../store';
import * as appStore from '../../store';
import { logger } from '../../logging';

const EncryptContentView = ({ onContentEncrypted, menuItems, title, help }) => {
  // Initialize state using a function to avoid recomputation on every render
  const [action, setAction] = useState(() => getStateFromProps());

  // Function to initialize state
   function getStateFromProps() {
    const encryptionKeyList = appdata.getEncryptionKeyList();
    
    const selectedEncryptionKeyItem = appdata.getActiveEncryptionKeyItem();
    const items = encryptionKeyList.map((encryptionKeyItem) => ({
      encryptionKeyItem,
      key: encryptionKeyItem.lockedKeyValue,
    }));

    return {
      content: '',
      errorMessage: '',
      items,
      selectedEncryptionKeyItem,
    };
  }

  // Handler for selecting an item
  const onItemSelected = (selectedItem) =>
    setAction({ ...action, selectedEncryptionKeyItem: selectedItem.encryptionKeyItem });

  // Handler for setting content
  const setContent = (content) => setAction({ ...action, content, errorMessage: '' });

  // Handler for setting error messages
  const setErrorMessage = (errorMessage) => setAction({ ...action, errorMessage });

  // Handler for completing content encryption
  const  onContentCompleted = async () => {
    try {
      const { content, selectedEncryptionKeyItem } = action;
      if (!content) {
        setErrorMessage(encryptedQrCodeTextConfig.errorMessages.contentIsMissing);
      } else {
        const encryptedContent = await appdata.encryptWithAnEncryptionKey(content, selectedEncryptionKeyItem);
        onContentEncrypted(encryptedContent, encryptedQrCodeTextConfig.qrcodeLabel);
      }
    } catch (error) {
      logger.error("Error:"+error, error);
      setErrorMessage(`${encryptedQrCodeTextConfig.errorMessages.failedToEncrypt} ${error}`);
    }
  };

  // Render the error message if it exists
  const renderErrorMessage = () => {
    if (action.errorMessage) {
      return (
        <div style={styles.inputContainer}>
          <span style={styles.errorMessage}>{action.errorMessage}</span>
        </div>
      );
    }
    return null;
  };

  // Render the active icon if the key is active
  const renderActiveIcon = (encryptionKeyItem) => {
    if (appStore.isEncryptionKeyIsActive(encryptionKeyItem)) {
      return <img src={images.activeIcon} style={styles.itemIcon} alt="Active Icon" />;
    }
    return null;
  };

  // Render the selection icon for the encryption key item
  const renderSelectIcon = (encryptionKeyItem) => {
    let icon = images.device.radio.unchecked;
    if (encryptionKeyItem === action.selectedEncryptionKeyItem) {
      icon = images.device.radio.checked;
    }
    return <img src={icon} style={styles.itemIcon} alt="Select Icon" />;
  };

  // Render each item in the encryption key list
  const renderItemListItem = ({ item }) => (
    <div onClick={() => onItemSelected(item)} style={styles.touchableHighlight}>
      <div style={styles.itemRecord}>
        <div style={styles.itemRow}>
          <div style={styles.listContainer}>
            <div style={styles.listvalue}>
              {renderSelectIcon(item.encryptionKeyItem)}
              <img src={images.key} style={styles.itemIcon} alt="Key Icon" />
              <span style={styles.keyText}>{item.encryptionKeyItem.name}</span>
            </div>
            {renderActiveIcon(item.encryptionKeyItem)}
          </div>
        </div>
      </div>
    </div>
  );

  // Prepare menu items
  const menus = [...menuItems];
  menus.push({
    menu: menusConfig.encrypt.menu,
    onPress: onContentCompleted,
  });
  

  return (
    <EditorWithTabMenu title={title} menuItems={menus} selected={menusConfig.encryptedQrCode.menu}>
      <div style={styles.content}>
        <DisplayBlockText content={encryptedQrCodeTextConfig.enterContent.content} />

        <TextInputField
          labelIcon={images.message}
          placeholder={encryptedQrCodeTextConfig.placeHolder}
          value={action.content}
          secureTextEntry={false}
          onChangeTextValue={setContent}
          dark={true}          
        />

        {renderErrorMessage()}
      
      
        <DisplayBlockText content={encryptedQrCodeTextConfig.encryptionKey.content} />
        {action.items.map((item) => (
          <React.Fragment key={item.key}>{renderItemListItem({ item })}</React.Fragment>
        ))}
        <DisplayBlockText content={help} />
      </div>

      
    </EditorWithTabMenu>
  );
};

export default EncryptContentView;