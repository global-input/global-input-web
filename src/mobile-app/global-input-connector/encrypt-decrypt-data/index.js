import React from 'react';
import ACT_TYPE from '../ACT_TYPE';
import menusConfig from '../../configs/menusConfig';
import SelectEncryptionKey from './SelectEncryptionKey';
import { encryptData, decryptData, appdata } from '../../store';

import EditorWithTabMenu from '../../components/menu/EditorWithTabMenu';
import DisplayBlockText from '../../components/display-text/DisplayBlockText';
import TextInputField from '../../components/input/TextInputField';
import { styles } from './styles';
import { logger } from '../../logging';

/*****************Init Data******Begin*********/
const initDataActionForEncryptionAndDecryption = (initData, actionType) => {
  const globalInputdata = initData.form.fields.map((f) => {
    return { ...f, value: '' };
  });

  let encryptionKeyList = appdata.getEncryptionKeyList();

  let selectedEncryptionKeyItem = null;
  if (initData.encryptionKey && encryptionKeyList && encryptionKeyList.length) {
    let matchedKeyItems = encryptionKeyList.filter(
      (ekey) => ekey.name === initData.encryptionKey
    );
    selectedEncryptionKeyItem = matchedKeyItems.length
      ? matchedKeyItems[0]
      : null;
  }
  if (!selectedEncryptionKeyItem) {
    
    selectedEncryptionKeyItem = appdata.getActiveEncryptionKeyItem();
    
  }

  return {
    initData,
    globalInputdata,
    showContent: false,
    actionType,
    encryptionKeyList,
    selectedEncryptionKeyItem,
    errorMessage: null,
  };
};

export const initDataActionForEncryption = (initData) =>
  initDataActionForEncryptionAndDecryption(
    initData,
    ACT_TYPE.ENCRYPT_SELECT_KEY
  );

export const initDataActionForDecryption = (initData) =>
  initDataActionForEncryptionAndDecryption(
    initData,
    ACT_TYPE.DECRYPT_SELECT_KEY
  );

/****Init Data *********End*/

/*****Utility functions**********Begin********/

const buildDisplayField = (field, value) => {
  if (value && value.length > 255) {
    return { ...field, value: value.slice(0, 255) + '...' };
  } else {
    return { ...field, value };
  }
};

const encryptField = async (field, encryptionKeyItem) => {
  if (field.type === 'encrypt' && field.value) {
    const encryptedValue = await encryptData(field.value, encryptionKeyItem);
    return buildDisplayField(field, encryptedValue);
  } else {
    return field;
  }
};

const decryptField = (field, encryptionKeyItem) => {
  if (field.type === 'decrypt' && field.value) {
    const decryptedValue = decryptData(field.value, encryptionKeyItem);
    return buildDisplayField(field, decryptedValue);
  } else {
    return field;
  }
};

const getMapItemKey = (item, index) => {
  if (item.id) {
    return item.id;
  } else if (item.label) {
    return index + '_' + item.label;
  } else if (item.value) {
    return index + '_' + item.value;
  } else {
    return index;
  }
};

const sendEncryptedFieldsToDevice = async ({ action, sendFieldToDevice }) => {
  const fields = action.initData.form.fields;
  for (let index = 0; index < fields.length; index++) {
    const f = fields[index];
    if (f.type === 'encrypt' && f.value) {
      const encryptedContent = await encryptData(
        f.value,
        action.selectedEncryptionKeyItem
      );
      const field = { ...f, value: encryptedContent };
      sendFieldToDevice({ field, index });
    }
  }
};

const sendDecryptedFieldsToDevice = ({ action, sendFieldToDevice }) => {
  action.initData.form.fields.forEach((f, index) => {
    if (f.type === 'decrypt' && f.value) {
      let decryptedContent = null;
      try {
        decryptedContent = decryptData(
          f.value,
          action.selectedEncryptionKeyItem
        );
      } catch (error) {
        logger.warn(
          error + ' failed to decrypt content: ' + JSON.stringify(f)
        );
      }
      const field = { ...f, value: decryptedContent };
      sendFieldToDevice({ field, index });
    }
  });
};

/*****Utility functions**********End*********/

/**********Transition Functions*********Begin*********/
const toEncryptSendResult = async ({ action, setAction }) => {
  try {
    const promises = action.initData.form.fields.map((f) =>
      encryptField(f, action.selectedEncryptionKeyItem)
    );
    const globalInputdata = await Promise.all(promises);
    setAction({
      ...action,
      globalInputdata,
      showContent: false,
      actionType: ACT_TYPE.ENCRYPT_SEND_RESULT,
      errorMessage: null,
    });
  } catch (e) {
    logger.error("Error:" + e, e);
    setAction({
      ...action,
      errorMessage: 'Failed to encrypt/decrypt: ' + e.message,
    });
  }
};

const toDecryptSendResult = ({ action, setAction }) => {
  try {
    const globalInputdata = action.initData.form.fields.map((f) =>
      decryptField(f, action.selectedEncryptionKeyItem)
    );
    setAction({
      ...action,
      globalInputdata,
      showContent: false,
      actionType: ACT_TYPE.DECRYPT_SEND_RESULT,
      errorMessage: null,
    });
  } catch (e) {
    logger.error("Error:"+e,e);
    setAction({
      ...action,
      errorMessage: 'Failed to encrypt/decrypt: ' + e.message,
    });
  }
};

/**********Transition Functions*********End*********/

/*********************Build Menu Items*****Begin**********/

const buildCancelMenu = (onDisconnect) => {
  return {
    menu: menusConfig.disconnect.menu,
    onPress: onDisconnect,
  };
};

const buildShowHideMenu = ({ action, setAction, onShowContent }) => {
  if (action.showContent) {
    return {
      menu: menusConfig.hideSecret.menu,
      onPress: () =>
        setAction({ ...action, showContent: false, errorMessage: null }),
    };
  }
  return {
    menu: menusConfig.showSecret.menu,
    onPress: onShowContent,
  };
};

const buildShowHideMenuForGeneric = ({ action, setAction }) => {
  const onShowContent = () =>
    setAction({ ...action, showContent: true, errorMessage: null });
  return buildShowHideMenu({ action, setAction, onShowContent });
};

const buildShowHideMenuForSelectKey = ({ action, setAction }) => {
  const onShowContent = () => {
    let globalInputdata = action.initData.form.fields.map((f) =>
      buildDisplayField(f, f.value)
    );
    setAction({
      ...action,
      globalInputdata,
      showContent: true,
      errorMessage: null,
    });
  };
  return buildShowHideMenu({ action, setAction, onShowContent });
};

const buildEncryptMenu = ({ action, setAction }) => {
  return {
    menu: menusConfig.encrypt.menu,
    onPress: () => toEncryptSendResult({ action, setAction }),
  };
};

const buildDecryptMenu = ({ action, setAction }) => {
  return {
    menu: menusConfig.decrypt.menu,
    onPress: () => toDecryptSendResult({ action, setAction }),
  };
};

const buildSendDecryptedResultMenu = ({
  action,
  setAction,
  sendFieldToDevice,
  onFinish,
}) => {
  return {
    menu: menusConfig.send.menu,
    onPress: () => {
      sendDecryptedFieldsToDevice({ action, sendFieldToDevice });
      onFinish(action);
    },
  };
};

const buildSendEncryptedResultMenu = ({
  action,
  setAction,
  sendFieldToDevice,
  onFinish,
}) => {
  return {
    menu: menusConfig.send.menu,
    onPress: async () => {
      await sendEncryptedFieldsToDevice({ action, sendFieldToDevice });
      onFinish(action);
    },
  };
};

/*********************Build Menu Items*****End**********/

/**************Main Renders *******Begin*****/

export const renderEncryptSelectKey = ({
  action,
  setAction,
  onDisconnect,
}) => {
  const menuItems = [
    buildCancelMenu(onDisconnect),
    buildShowHideMenuForSelectKey({ action, setAction }),
    buildEncryptMenu({ action, setAction }),
  ];

  const fieldType = 'encrypt';
  const title = 'Data Encryption';
  const helpOnContent = '1. Data received for encryption:';
  const helpOnSelectKey = '2. Encryption key to use:';
  const helpOnContinue = "3. Press the 'Encrypt' button to encrypt.";

  return renderSelectKey({
    action,
    setAction,
    fieldType,
    menuItems,
    title,
    helpOnSelectKey,
    helpOnContent,
    helpOnContinue,
  });
};

export const renderDecryptSelectKey = ({
  action,
  setAction,
  onDisconnect,
}) => {
  const menuItems = [
    buildCancelMenu(onDisconnect),
    buildShowHideMenuForSelectKey({ action, setAction }),
    buildDecryptMenu({ action, setAction }),
  ];

  const fieldType = 'decrypt';
  const title = 'Data Decryption';
  const helpOnContent = '1. Data received for decryption:';
  const helpOnSelectKey = '2. Encryption key to use';
  const helpOnContinue = "3. Press the 'Decrypt' button to decrypt.";

  return renderSelectKey({
    action,
    setAction,
    fieldType,
    menuItems,
    title,
    helpOnSelectKey,
    helpOnContent,
    helpOnContinue,
  });
};

export const renderEncryptSendResult = ({
  action,
  setAction,
  onDisconnect,
  sendFieldToDevice,
  onFinish,
}) => {
  const menuItems = [
    buildCancelMenu(onDisconnect),
    buildShowHideMenuForGeneric({ action, setAction }),
    buildSendEncryptedResultMenu({
      action,
      setAction,
      sendFieldToDevice,
      onFinish,
    }),
  ];
  const fieldType = 'encrypt';
  const title = 'Data Encryption';
  const formTitle = 'Sending Data';
  const helpOnContent = 'Encrypted data:';
  const helpOnContinue =
    'Press "Send" button to send the encrypted data to the connected application.';

  return renderSendingResult({
    action,
    fieldType,
    menuItems,
    title,
    formTitle,
    helpOnContent,
    helpOnContinue,
  });
};

export const renderDecryptSendResult = ({
  action,
  setAction,
  onDisconnect,
  sendFieldToDevice,
  onFinish,
}) => {
  const menuItems = [
    buildCancelMenu(onDisconnect),
    buildShowHideMenuForGeneric({ action, setAction }),
    buildSendDecryptedResultMenu({
      action,
      setAction,
      sendFieldToDevice,
      onFinish,
    }),
  ];
  const fieldType = 'decrypt';
  const title = 'Data Decryption';
  const formTitle = 'Sending Data';
  const helpOnContent = 'Decrypted data:';
  const helpOnContinue =
    'Press "Send" button to send the decrypted data to the connected application.';

  return renderSendingResult({
    action,
    fieldType,
    menuItems,
    title,
    formTitle,
    helpOnContent,
    helpOnContinue,
  });
};

/**************Main Renders *******End*****/

/*********************Render Utils***************Begin*****/

const renderSelectKey = ({
  action,
  setAction,
  fieldType,
  menuItems,
  title,
  helpOnSelectKey,
  helpOnContent,
  helpOnContinue,
}) => {
  const onEncryptionKeySelected = (selectedEncryptionKeyItem) => {
    setAction({ ...action, selectedEncryptionKeyItem, errorMessage: null });
  };
  return (
    <EditorWithTabMenu
      title={title}
      menuItems={menuItems}
      selected={menusConfig.encryptedQrCode.menu}
    >
      <div style={styles.content}>

        
        <DisplayBlockText content={helpOnContent} />
        {action.globalInputdata.map((dataitem, index) => (
          <RenderAField
            key={getMapItemKey(dataitem, index)}
            dataitem={dataitem}
            showContent={action.showContent}
            fieldType={fieldType}
          />
        ))}
      </div>
      <div style={styles.content}>
        <DisplayBlockText content={helpOnSelectKey} />
        <SelectEncryptionKey
          onEncryptionKeySelected={onEncryptionKeySelected}
          encryptionKeyList={action.encryptionKeyList}
          selectedEncryptionKeyItem={action.selectedEncryptionKeyItem}
        />
        <DisplayBlockText content={helpOnContinue} />
        {renderErrorMessage(action.errorMessage)}
      </div>
      
    </EditorWithTabMenu>
  );
};

const renderSendingResult = ({
  action,
  fieldType,
  menuItems,
  title,
  formTitle,
  helpOnContent,
  helpOnContinue,
}) => {
  return (
    <EditorWithTabMenu
      title={title}
      menuItems={menuItems}
      selected={menusConfig.encryptedQrCode.menu}
    >
      <div style={styles.content}>
        <div style={styles.formTitle}>
          <span style={styles.formtitleText}>{formTitle}</span>
        </div>
        <DisplayBlockText content={helpOnContent} />
        {action.globalInputdata.map((dataitem, index) => (
          <RenderAField
            key={getMapItemKey(dataitem, index)}
            dataitem={dataitem}
            showContent={action.showContent}
            fieldType={fieldType}
          />
        ))}
      </div>
      <DisplayBlockText content={helpOnContinue} />
    </EditorWithTabMenu>
  );
};

const renderErrorMessage = (errorMessage) => {
  if (errorMessage) {
    return (
      <div style={styles.inputContainer}>
        <span style={styles.errorMessage}>{errorMessage}</span>
      </div>
    );
  } else {
    return null;
  }
};

const RenderAField = ({ dataitem, showContent, fieldType }) => {
  if (dataitem.type !== fieldType) {
    return null;
  }

  let value = '************************';
  if (showContent) {
    value = dataitem.value ? dataitem.value : '';
  }
  return (
    <div style={styles.inputContainer}>
      <TextInputField
        value={value}
        placeholder={dataitem.label}
        dark={true}
        editable={false}
        secureTextEntry={!showContent}
      />
    </div>
  );
};

/*********************Render Utils***************End*****/