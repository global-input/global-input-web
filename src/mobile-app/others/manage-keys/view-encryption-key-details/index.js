// view-encryption-key-details/index.js

import React, { useState, useEffect } from 'react';

import { styles } from '../styles';


import images from '../../../configs/images';
import manageKeysTextConfig from '../../../configs/manageKeysTextConfig';
import menusConfig from '../../../configs/menusConfig';

import EditorWithTabMenu from '../../../components/menu/EditorWithTabMenu';
import IconButton from '../../../components/buttons/IconButton';
import TextFieldWithDone from '../../../components/input/TextFieldWithDone';

import { appdata, formDataUtil } from '../../../store';
import * as appStore from '../../../store';

const getStateFromProps = ({ encryptionKeyItem }) => {  
  const createdAt = formDataUtil.getDateString(encryptionKeyItem.createdAt);
  const name = encryptionKeyItem.name;
  return { key:encryptionKeyItem.encryptionKey, createdAt, name };
};

export default function ViewEncryptionKeyDetails({
  encryptionKeyItem,
  updateEncryptionKeyName,
  onBack,
  activateEncryptionKey,
  onDeletingEncryptionKeyItem,
  onQrCodeSelected,
  onClipboardCopySelected,
}) {
  const [compData, setCompData] = useState(() =>
    getStateFromProps({ encryptionKeyItem })
  );

  

  const setName = (name) => setCompData({ ...compData, name });

  useEffect(() => {
    const processKey = async () => {
    const key = await appStore.decryptEncryptionKey(encryptionKeyItem.lockedKeyValue);
    console.log("----encrypted--key:"+key)
    setCompData({ ...compData, key });
    };
    processKey();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[encryptionKeyItem.encryptionKey]);

  const updateNameButton = () => {
    const name = compData.name.trim();
    updateEncryptionKeyName(encryptionKeyItem, name);
  };

  const renderSaveNameButton = () => {
    const name = compData.name.trim();
    if (!name) {
      return null;
    }
    if (encryptionKeyItem.name !== name) {
      return (
        <IconButton image={images.saveIcon} onPress={updateNameButton} />
      );
    } else {
      return null;
    }
  };

  useEffect(() => {
    setCompData(getStateFromProps({ encryptionKeyItem }));
  }, [encryptionKeyItem]);

  let title = manageKeysTextConfig.encryptionDetails.deactivated.title;
  const menuItems = [
    {
      menu: menusConfig.back.menu,
      onPress: onBack,
    },
  ];
  let titleIcon = null;

  if (appStore.isEncryptionKeyIsActive(encryptionKeyItem)) {
    title = manageKeysTextConfig.encryptionDetails.activated.title;
    titleIcon = images.activateIconWhite;
  } else {
    menuItems.push(
      {
        menu: menusConfig.activate.menu,
        onPress: () => {
          activateEncryptionKey(encryptionKeyItem);
        },
      },
      {
        menu: menusConfig.delete.menu,
        onPress: () => {
          onDeletingEncryptionKeyItem(encryptionKeyItem);
        },
      }
    );
  }
  menuItems.push(
    {
      menu: menusConfig.qrcode.menu,
      onPress: () => {
        onQrCodeSelected(encryptionKeyItem);
      },
    },
    {
      menu: menusConfig.exportText.menu,
      onPress: () => {
        onClipboardCopySelected(encryptionKeyItem);
      },
    }
  );

  return (
    <EditorWithTabMenu
      title={title}
      menuItems={menuItems}
      selected={menusConfig.manageKeys.menu}
      titleIcon={titleIcon}
    >
      <div style={styles.itemRow}>
        <TextFieldWithDone
          labelIcon={images.labelIcon}
          dark={true}
          placeholder={manageKeysTextConfig.nameField.placeHolder}
          value={compData.name}
          onChangeTextValue={setName}
          notFocusedContent={renderSaveNameButton()}
        />
      </div>
      <div style={styles.itemRow}>
        <img src={images.key} style={styles.itemIcon} alt="" />
        <div style={styles.fieldValueContainer}>
          <div style={styles.fieldValue}>{compData.key}</div>
        </div>
      </div>
      <div style={styles.itemRow}>
        <img src={images.timestampIcon} style={styles.itemIcon} alt="" />
        <div style={styles.fieldValueContainer}>
          <div style={styles.fieldValue}>{compData.createdAt}</div>
        </div>
      </div>
    </EditorWithTabMenu>
  );
}