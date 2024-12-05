import React, { useState } from 'react';
import images from '../../configs/images';
import manageKeysTextConfig from '../../configs/manageKeysTextConfig';
import menusConfig from '../../configs/menusConfig';
import {appdata} from '../../store';
import * as appStore from  '../../store';
import { styles } from './styles';

import EditorWithTabMenu from '../../components/menu/EditorWithTabMenu';
import TextInputField from '../../components/input/TextInputField';
import DisplayBlockText from '../../components/display-text/DisplayBlockText';

const populateItemsInAction = (action, encryptionKeyList) => {
  if (!encryptionKeyList) {
    console.log('encryptionKeyList is null');
    return action;
  }

  let { endReached, startIndex, numberRecordsInBatch } = action;
  let items = [...action.items];
  for (let counter = 0; counter < numberRecordsInBatch; counter++) {
    if (startIndex >= encryptionKeyList.length) {
      endReached = true;
      break;
    }
    const encryptionKeyItem = encryptionKeyList[startIndex];
    items.push({
      encryptionKeyItem,
      key: encryptionKeyItem.encryptionKey,
    });
    startIndex++;
  }
  return { ...action, items, endReached, startIndex };
};

const buildInitialData = () => {
  const encryptionKeyList = appdata.getEncryptionKeyList();
  const activeEncryptionKey = appdata.getDecryptedActiveEncryptionKey();
  const selectedEncryptionKeyItem = appdata.findEncryptionKeyByDecryptedValue(
    activeEncryptionKey
  );
  const action = {
    password: '',
    errorMessage: '',
    startIndex: 0,
    items: [],
    endReached: false,
    numberRecordsInBatch: 50,
    selectedEncryptionKeyItem,
  };
  return populateItemsInAction(action, encryptionKeyList);
};

const loadNextBatchOfItems = (action) => {
  const encryptionKeyList = appdata.getEncryptionKeyList();
  return populateItemsInAction(action, encryptionKeyList);
};

const renderSelectIcon = (encryptionKeyItem, action) => {
  let icon = images.device.radio.unchecked;
  if (encryptionKeyItem === action.selectedEncryptionKeyItem) {
    icon = images.device.radio.checked;
  }
  return <img src={icon} style={styles.itemIcon} alt="" />;
};

const renderActiveIcon = (encryptionKeyItem) => {
  if (appStore.isEncryptionKeyIsActive(encryptionKeyItem)) {
    return (
      <img src={images.activeIcon} style={styles.itemIcon} alt="Active Icon" />
    );
  } else {
    return null;
  }
};

const renderItemListItem = ({ item, action, setAction }) => {
  if (!item.encryptionKeyItem) {
    return <div style={styles.endSpace}></div>;
  }
  const onItemSelected = (selectedItem) =>
    setAction({ ...action, selectedEncryptionKeyItem: selectedItem.encryptionKeyItem });

  return (
    <div
      onClick={() => onItemSelected(item)}
      style={styles.itemRecord}
      role="button"
      tabIndex="0"
    >
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
  );
};

const renderErrorMessage = ({ action }) => {
  if (action.errorMessage) {
    return (
      <div style={styles.inputContainer}>
        <span style={styles.errorMessage}>{action.errorMessage}</span>
      </div>
    );
  } else {
    return null;
  }
};

const ExportEncryptionKey = ({ onCancel, onCompleted }) => {
  const [action, setAction] = useState(() => buildInitialData());

  const setPassword = (password) => setAction({ ...action, password });
  const setErrorMessage = (errorMessage) => setAction({ ...action, errorMessage });

  const onEncrypt = () => {
    try {
      if (!action.password) {
        setErrorMessage(manageKeysTextConfig.errorMessages.passwordIsmissing);
      } else if (action.password.length < 5) {
        setErrorMessage(manageKeysTextConfig.errorMessages.passwordTooShort);
      } else {
        const encryptedContent = appdata.exportEncryptionKeyItemWithPassword(
          action.selectedEncryptionKeyItem,
          action.password
        );
        const codedataname = manageKeysTextConfig.export.qrcode.title;
        onCompleted(encryptedContent, codedataname);
      }
    } catch (error) {
      console.error(error);
      setErrorMessage(manageKeysTextConfig.errorMessages.failedToEncrypt + error);
    }
  };

  const onScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    if (scrollHeight - scrollTop === clientHeight) {
      if (!action.endReached) {
        setAction(loadNextBatchOfItems(action));
      }
    }
  };

  const menuItems = [
    { menu: menusConfig.back.menu, onPress: onCancel },
    { menu: menusConfig.encryptedQrCode.menu, onPress: onEncrypt },
  ];

  return (
    <EditorWithTabMenu
      title={manageKeysTextConfig.export.fillContent.title}
      menuItems={menuItems}
      selected={menusConfig.eye.menu}
    >
      <div style={styles.content}>
        <DisplayBlockText
          content={manageKeysTextConfig.export.fillContent.selectKey.content}
        />
        <div
          style={{ overflowY: 'auto', maxHeight: '400px' }} // Adjust as needed
          onScroll={onScroll}
        >
          {action.items.map((item, index) =>
            renderItemListItem({ item, action, setAction })
          )}
        </div>
      </div>
      <div style={styles.content}>
        <DisplayBlockText
          content={manageKeysTextConfig.export.fillContent.password.content1}
        />
        <div style={styles.inputContainer}>
          <TextInputField
            placeholder={manageKeysTextConfig.export.fillContent.password.placeHolder}
            value={action.password}
            secureTextEntry={false}
            onChangeTextValue={setPassword}
            
          />
        </div>
        {renderErrorMessage({ action })}
      </div>
      <div style={styles.content}>
        <DisplayBlockText
          content={manageKeysTextConfig.export.fillContent.password.content2}
        />
      </div>
    </EditorWithTabMenu>
  );
};

export default ExportEncryptionKey;