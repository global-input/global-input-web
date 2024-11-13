import React, { useState } from 'react';
import { styles } from './styles';
import { images } from '../configs';
import manageKeysTextConfig from '../configs/manageKeysTextConfig';
import menusConfig from '../configs/menusConfig';
import DisplayBlockText from '../components/display-text/DisplayBlockText';
import TextInputField from '../components/input/TextInputField';

import EditorWithTabMenu from '../components/menu/EditorWithTabMenu';
import { appdata } from '../store';

const PasswordDecrypt = ({ codedata, onEncryptionKeyDecrypted, onBack }) => {
  const [action, setAction] = useState({
    codedata,
    password: '',
    errorMessage: '',
  });

  const setPassword = (password) =>
    setAction({ ...action, password, errorMessage: '' });

  const setErrorMessage = (errorMessage) =>
    setAction({ ...action, errorMessage });

  const decryptWithPassword = () => {
    var { password, codedata } = action;
    if (!password) {
      console.log('Password is missing');
      setErrorMessage(manageKeysTextConfig.errorMessages.passwordIsmissing);
    } else {
      
      try {
        var encryptionKeyDecrypted = appdata.decryptExportedEncryptionKey(
          codedata,
          password
        );
        if (!encryptionKeyDecrypted) {          
          setErrorMessage(manageKeysTextConfig.errorMessages.invalidPassword);
        } else {          
          onEncryptionKeyDecrypted(encryptionKeyDecrypted);
        }
      } catch (error) {
        console.log(error);
        setErrorMessage(manageKeysTextConfig.errorMessages.invalidPassword);
      }
    }
  };

  const renderErrorMessage = () => {
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

  const menuItems = [
    {
      menu: menusConfig.cancel.menu,
      onPress: onBack,
    },
    {
      menu: menusConfig.decrypt.menu,
      onPress: decryptWithPassword,
    },
  ];

  return (
    <EditorWithTabMenu
      title={manageKeysTextConfig.importKey.title}
      menuItems={menuItems}
      selected={menusConfig.eye.menu}
    >
      <DisplayBlockText content={manageKeysTextConfig.importKey.content} />

      <div style={styles.inputContainer}>
        <TextInputField
          labelIcon={images.passwordIcon}
          placeholder={manageKeysTextConfig.importKey.password.placeHolder}
          value={action.password}
          secureTextEntry={true}
          onChangeTextValue={setPassword}
          autoCapitalize={'none'}
        />
      </div>
      {renderErrorMessage()}

      <DisplayBlockText content={manageKeysTextConfig.importKey.content2} />
    </EditorWithTabMenu>
  );
};

export default PasswordDecrypt;