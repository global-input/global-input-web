import React, { useState, useEffect } from 'react';
import {styles} from '../styles';

import menusConfig from '../../../configs/menusConfig';

import ViewWithTabMenu from '../../../components/menu/ViewWithTabMenu';
import DisplayBlockText from '../../../components/display-text/DisplayBlockText';

import {appdata, formDataUtil} from '../../../store';



const importDecryptionError = "Please first import and activate the encryption key that was used for encrypting the exported content.";
const formDataMessage = ['Press the "Decrypt" button to decrypt the data.'];


export const FormContentDataView = ({
  windowTitle,
  content,
  onDecryptedFormData,
  onBack,
}) => {
  const [compData, setCompData] = useState({
    content,
    errorMessage: '',
    password: '',
  });
  useEffect(() => {
    setCompData({content, errorMessage: '', password: ''});
  }, []);

  const setErrorMessage = errorMessage =>
    setCompData({...compData, errorMessage});

  const decryptFormData = async () => {
    var globalInputData = await appdata.decryptFormDataText(compData.content);
    if (!globalInputData) {
      setErrorMessage(importDecryptionError);
      return;
    }

    onDecryptedFormData(globalInputData.forms);
  };

  const renderErrorMessage = () => {
    if (compData.errorMessage) {
      return (
        <div style={styles.inputContainer}>
          <span style={styles.errorMessage}>{compData.errorMessage}</span>
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
      onPress: decryptFormData,
    }]


  const cc = formDataUtil.buildTextContentResolved(
    appdata.getActiveEncryptionKeyItem(),
    formDataMessage,
  );
  return (
    <ViewWithTabMenu
      title={windowTitle}
      menuItems={menuItems}
      selected={menusConfig.others.menu}>
      <div style={styles.formContainer}>
        <DisplayBlockText content={cc} />
        {renderErrorMessage()}
      </div>
    </ViewWithTabMenu>
  );
};
