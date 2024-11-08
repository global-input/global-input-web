import React from 'react';
import styled from 'styled-components';
import ACT_TYPE from '../ACT_TYPE';
import menusConfig from '../../../configs/menusConfig';
import SelectEncryptionKey from './SelectEncryptionKey';
import { encryptData, decryptData, appdata } from '../../../appdata';

import EditorWithTabMenu from '../../components/menu/EditorWithTabMenu';
import DisplayBlockText from '../../components/display-text/DisplayBlockText';
import TextInputField from '../../components/input/TextInputField';

const initDataActionForEncryptionAndDecryption = (initData, actionType) => {
  const globalInputdata = initData.form.fields.map(f => ({ ...f, value: '' }));
  let encryptionKeyList = appdata.getEncryptionKeyList();
  let selectedEncryptionKeyItem = null;
  if (initData.encryptionKey && encryptionKeyList?.length) {
    let matchedKeyItems = encryptionKeyList.filter(ekey => ekey.name === initData.encryptionKey);
    selectedEncryptionKeyItem = matchedKeyItems.length ? matchedKeyItems[0] : null;
  }
  if (!selectedEncryptionKeyItem) {
    let activeEncryptionKey = appdata.getDecryptedActiveEncryptionKey();
    selectedEncryptionKeyItem = appdata.findEncryptionKeyByDecryptedValue(activeEncryptionKey);
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
  initDataActionForEncryptionAndDecryption(initData, ACT_TYPE.ENCRYPT_SELECT_KEY);

export const initDataActionForDecryption = (initData) =>
  initDataActionForEncryptionAndDecryption(initData, ACT_TYPE.DECRYPT_SELECT_KEY);

const buildDisplayField = (field, value) => {
  if (value && value.length > 255) {
    return { ...field, value: `${value.slice(0, 255)}...` };
  }
  return { ...field, value };
};

const encryptField = (field, encryptionKeyItem) => {
  if (field.type === 'encrypt' && field.value) {
    const encryptedValue = encryptData(field.value, encryptionKeyItem);
    return buildDisplayField(field, encryptedValue);
  }
  return field;
};

const decryptField = (field, encryptionKeyItem) => {
  if (field.type === 'decrypt' && field.value) {
    const decryptedValue = decryptData(field.value, encryptionKeyItem);
    return buildDisplayField(field, decryptedValue);
  }
  return field;
};

const sendEncryptedFieldsToDevice = ({ action, sendFieldToDevice }) => {
  action.initData.form.fields.forEach((f, index) => {
    if (f.type === 'encrypt' && f.value) {
      const encryptedContent = encryptData(f.value, action.selectedEncryptionKeyItem);
      sendFieldToDevice({ field: { ...f, value: encryptedContent }, index });
    }
  });
};

const sendDecryptedFieldsToDevice = ({ action, sendFieldToDevice }) => {
  action.initData.form.fields.forEach((f, index) => {
    if (f.type === 'decrypt' && f.value) {
      try {
        const decryptedContent = decryptData(f.value, action.selectedEncryptionKeyItem);
        sendFieldToDevice({ field: { ...f, value: decryptedContent }, index });
      } catch (error) {
        console.warn(`Failed to decrypt content: ${JSON.stringify(f)}`);
      }
    }
  });
};



/**********Transition Functions*********Begin*********/
const toEncryptSendResult = ({action, setAction}) => {
  try {
    const globalInputdata = action.initData.form.fields.map(f =>
      encryptField(f, action.selectedEncryptionKeyItem)
    );
    setAction({
      ...action,
      globalInputdata,
      showContent: false,
      actionType: ACT_TYPE.ENCRYPT_SEND_RESULT,
      errorMessage: null
    });
  } catch (e) {
    if (e) {
      console.log(e + ':' + e.stack);
    }
    setAction({
      ...action,
      errorMessage: 'failed to encrypt/decrypt:' + e
    });
  }
};


const toDecryptSendResult = ({action, setAction}) => {
  try {
    console.log('*********toDecryptSendResult****');
    const globalInputdata = action.initData.form.fields.map(f =>
      decryptField(f, action.selectedEncryptionKeyItem)
    );
    console.log(
      '-----------decrypted globalInputdata:' + JSON.stringify(globalInputdata)
    );
    setAction({
      ...action,
      globalInputdata,
      showContent: false,
      actionType: ACT_TYPE.DECRYPT_SEND_RESULT,
      errorMessage: null
    });
  } catch (e) {
    if (e) {
      console.log(e + ':' + e.stack);
    }
    setAction({
      ...action,
      errorMessage: 'failed to encrypt/decrypt:' + e
    });
  }
};




/**********Transition Functions*********End*********/









/*********************Build Menu Items*****Begin**********/


const buildCancelMenu = onDisconnect => {
  return {
    menu: menusConfig.disconnect.menu,
    onPress: onDisconnect
  };
};
const buildShowHideMenu = ({action, setAction, onShowContent}) => {
  if (action.showContent) {
    return {
      menu: menusConfig.hideSecret.menu,
      onPress: () =>
        setAction({...action, showContent: false, errorMessage: null})
    };
  }
  return {
    menu: menusConfig.showSecret.menu,
    onPress: onShowContent
  };
};

const buildShowHideMenuForGeneric = ({action, setAction}) => {
  const onShowContent = () =>
    setAction({...action, showContent: true, errorMessage: null});
  return buildShowHideMenu({action, setAction, onShowContent});
};

const buldShowHideMenuForSelectKey = ({action, setAction}) => {
  const onShowContent = () => {
    let globalInputdata = action.globalInputdata;
    globalInputdata = action.initData.form.fields.map(f =>
      buildDisplayField(f, f.value)
    );
    setAction({
      ...action,
      globalInputdata,
      showContent: true,
      errorMessage: null
    });
  };
  return buildShowHideMenu({action, setAction, onShowContent});
};


const buildEncryptMenu = ({action, setAction}) => {
  return {
    menu: menusConfig.encrypt.menu,
    onPress: () => toEncryptSendResult({action, setAction})
  };
};
const buildDecryptMenu = ({action, setAction}) => {
  return {
    menu: menusConfig.decrypt.menu,
    onPress: () => toDecryptSendResult({action, setAction})
  };
};

const buildSendDecryptedResultMenu=({action, setAction,sendFieldToDevice,onFinish})=>{      
  return {
    menu: menusConfig.send.menu,
    onPress:() => {
        sendDecryptedFieldsToDevice({action,sendFieldToDevice});        
        onFinish(action);
    }
  };
};
const buildSendEncryptedResultMenu = ({action, setAction,sendFieldToDevice,onFinish})=>{      
  return {
    menu: menusConfig.send.menu,
    onPress:() => {
        sendEncryptedFieldsToDevice({action,sendFieldToDevice});        
        onFinish(action);
    }
  };
};
/*********************Build Menu Items*****End**********/


/**************Main Renders *******Begin*****/


export const renderEncryptSelectKey = ({ action, setAction, onDisconnect }) => {
  const menuItems = [
    { menu: menusConfig.disconnect.menu, onPress: onDisconnect },
    {
      menu: action.showContent ? menusConfig.hideSecret.menu : menusConfig.showSecret.menu,
      onPress: () => setAction({ ...action, showContent: !action.showContent }),
    },
    { menu: menusConfig.encrypt.menu, onPress: () => toEncryptSendResult({ action, setAction }) },
  ];

  return renderSelectKey({
    action,
    setAction,
    fieldType: 'encrypt',
    menuItems,
    title: 'Data Encryption',
    helpOnContent: '1. Data received for encryption:',
    helpOnSelectKey: '2. Encryption key to use:',
    helpOnContinue: "3. Press the 'Encrypt' button to encrypt.",
  });
};

export const renderDecryptSelectKey = ({
  action,
  setAction,
  onDisconnect  
}) => {
  const menuItems = [
    buildCancelMenu(onDisconnect),
    buldShowHideMenuForSelectKey({action, setAction}),
    buildDecryptMenu({action, setAction})
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
    helpOnContinue
  });
};

export const renderEncryptSendResult = ({
  action,
  setAction,
  onDisconnect,
  sendFieldToDevice,
  onFinish
}) => {
  const menuItems = [
    buildCancelMenu(onDisconnect),
    buildShowHideMenuForGeneric({action, setAction}),
    buildSendEncryptedResultMenu({action, setAction,sendFieldToDevice,onFinish})
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
    helpOnContinue
  });
};
export const renderDecryptSendResult = ({
  action,
  setAction,
  onDisconnect,
  sendFieldToDevice,
  onFinish
}) => {
  
  const menuItems = [
    buildCancelMenu(onDisconnect),
    buildShowHideMenuForGeneric({action, setAction}),
    buildSendDecryptedResultMenu({action, setAction,sendFieldToDevice,onFinish})
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
    helpOnContinue
  });
};


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
    setAction({ ...action, selectedEncryptionKeyItem });
  };
  return (
    <EditorWithTabMenu title={title} menuItems={menuItems}>
      <Content>
        <DisplayBlockText content={helpOnContent} />
        {action.globalInputdata.map((dataitem, index) => (
          <RenderAField key={index} dataitem={dataitem} showContent={action.showContent} fieldType={fieldType} />
        ))}
      </Content>
      <Content>
        <DisplayBlockText content={helpOnSelectKey} />
        <SelectEncryptionKey
          onEncryptionKeySelected={onEncryptionKeySelected}
          encryptionKeyList={action.encryptionKeyList}
          selectedEncryptionKeyItem={action.selectedEncryptionKeyItem}
        />
      </Content>
      <DisplayBlockText content={helpOnContinue} />
      {renderErrorMessage(action.errorMessage)}
    </EditorWithTabMenu>
  );
};

const RenderAField = ({ dataitem, showContent, fieldType }) => {
  if (dataitem.type !== fieldType) return null;
  const value = showContent ? dataitem.value || '' : '************************';
  return (
    <InputContainer>
      <TextInputField value={value} placeholder={dataitem.label} dark editable={false} secureTextEntry={!showContent} />
    </InputContainer>
  );
};

const renderErrorMessage = (errorMessage) =>
  errorMessage ? (
    <ErrorContainer>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </ErrorContainer>
  ) : null;



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
    <EditorWithTabMenu title={title} menuItems={menuItems}>
      <Content>
        <FormTitle>{formTitle}</FormTitle>
        <DisplayBlockText content={helpOnContent} />
        {action.globalInputdata.map((dataitem, index) => (
          <RenderAField key={index} dataitem={dataitem} showContent={action.showContent} fieldType={fieldType} />
        ))}
      </Content>
      <DisplayBlockText content={helpOnContinue} />
    </EditorWithTabMenu>
  );
};

// Styled Components
const Content = styled.div`
  padding: 20px;
`;

const InputContainer = styled.div`
  margin-bottom: 20px;
`;

const ErrorContainer = styled.div`
  padding: 10px;
  color: red;
`;

const ErrorMessage = styled.p`
  color: red;
`;

const FormTitle = styled.h3`
  margin-bottom: 15px;
`;