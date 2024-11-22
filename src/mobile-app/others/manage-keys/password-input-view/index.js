// PasswordInputView/index.js

import React, { useState, useEffect } from 'react';
import { styles } from '../styles';

import images from '../../../configs/images';
import  menusConfig from '../../../configs/menusConfig';
import  manageKeysTextConfig  from '../../../configs/manageKeysTextConfig';

import EditorWithTabMenu from '../../../components/menu/EditorWithTabMenu';
import DisplayBlockText from '../../../components/display-text/DisplayBlockText';
import TextInputField from '../../../components/input/TextInputField';


import DisplayKeyDetails from '../manage-keys-view/DisplayKeyDetails';

const renderErrorMessage = (errorMessage) => {
  if (errorMessage) {
    return (
      <div style={styles.errorMessageContainer}>
        <div style={styles.errorMessage}>{errorMessage}</div>
      </div>
    );
  } else {
    return null;
  }
};

export default function PasswordInputView({
  encryptionKeyItem,
  nextStep,
  title,
  placeHolder,
  onBack,
  help1,
  help2,
}) {
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const onNextStep = () => {
    if (password.trim().length < 5) {
      setErrorMessage(manageKeysTextConfig.errorMessages.passwordTooShort);
      return;
    }
    nextStep(password.trim());
  };

  useEffect(() => {
    setPassword('');
    setErrorMessage('');
  }, [encryptionKeyItem]);

  const menuItems = [
    {
      menu: menusConfig.cancel.menu,
      onPress: onBack,
    },
    {
      menu: menusConfig.encrypt.menu,
      onPress: onNextStep,
    },
  ];

  return (
    <EditorWithTabMenu
      title={title}
      menuItems={menuItems}
      selected={menusConfig.eye.menu}
    >
      <DisplayKeyDetails encryptionKeyItem={encryptionKeyItem} />
      <div style={styles.help}>
        <DisplayBlockText content={help1} />
      </div>

      <div style={styles.formContainer}>
        <div style={styles.itemRow}>
          <TextInputField
            labelIcon={images.passwordIcon}
            placeholder={placeHolder}
            value={password}            
            onChangeTextValue={setPassword}
          />
        </div>
        {renderErrorMessage(errorMessage)}
      </div>
      <div style={styles.help}>
        <DisplayBlockText content={help2} />
      </div>
    </EditorWithTabMenu>
  );
}