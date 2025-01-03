// src/mobile-app/others/manage-keys/generate-new-key/index.js

import React, { useState, useEffect } from 'react';
import { styles } from '../styles'; // Ensure styles are adjusted for React.js

import images from '../../../configs/images';
import manageKeysTextConfig from '../../../configs/manageKeysTextConfig';
import menusConfig from '../../../configs/menusConfig';



import EditorWithTabMenu from "../../../components/menu/EditorWithTabMenu";
import IconButton from "../../../components/buttons/IconButton";
import DisplayBlockText from "../../../components/display-text/DisplayBlockText";
import TextInputField from "../../../components/input/TextInputField";


import { generateRandomString } from '../../../store';

const getStateFromProps = ({ importDecryptedKey, name }) => ({
  encryptionKey: importDecryptedKey
    ? importDecryptedKey
    : generateRandomString(23),
  name: name ? name : '',
  errorMessage: '',
});

const GenerateNewKey = ({ importDecryptedKey, name, importNewKey, onBack }) => {
  const [compData, setCompData] = useState(() =>
    getStateFromProps({ importDecryptedKey, name })
  );

  const generateNewEncryptionKey = () =>
    setCompData({
      ...compData,
      encryptionKey: generateRandomString(23),
      errorMessage: '',
    });

  const onChangeName = (name) =>
    setCompData({ ...compData, name, errorMessage: '' });

  const onImportNewKey = () => {
    const name = compData.name.trim();
    if (!name) {
      setCompData({
        ...compData,
        errorMessage: manageKeysTextConfig.errorMessages.nameMissing,
      });
      return;
    }
    importNewKey(name, compData.encryptionKey);
  };

  const renderErrorMessage = () => {
    if (compData.errorMessage) {
      return (
        <div style={styles.errorMessageContainer}>
          <span style={styles.errorMessage}>{compData.errorMessage}</span>
        </div>
      );
    } else {
      return null;
    }
  };

  const renderRandomButton = () => {
    if (importDecryptedKey) {
      return null;
    } else {
      return (
        <IconButton
          image={menusConfig.randomGenerator.menu.image}
          label={menusConfig.randomGenerator.menu.label}
          onPress={generateNewEncryptionKey}
        />
      );
    }
  };

  useEffect(() => {
    setCompData(getStateFromProps({ importDecryptedKey, name }));
  }, [importDecryptedKey, name]);

  const menuItems = [
    {
      menu: menusConfig.cancel.menu,
      onPress: onBack,
    },
    {
      menu: menusConfig.importSingle.menu,
      onPress: onImportNewKey,
    },
  ];

  return (
    <EditorWithTabMenu
      title={manageKeysTextConfig.generateNewKey.title}
      menuItems={menuItems}
      selected={menusConfig.manageKeys.menu}
    >
      <div style={styles.keyFieldRow}>
        <div style={styles.keyvalueContainer}>
          <img src={images.key} style={styles.itemIcon} alt="Key Icon" />
          <span style={styles.fieldValue}>{compData.encryptionKey}</span>
        </div>
        {renderRandomButton()}
      </div>

      <div style={styles.nameFieldContainer}>
        <TextInputField
          placeholder={manageKeysTextConfig.nameField.placeHolder}
          value={compData.name}
          labelIcon={images.labelIcon}
          onChangeTextValue={onChangeName}
        />
      </div>
      {renderErrorMessage()}
      <div style={styles.helpContainer}>
        <DisplayBlockText
          content={manageKeysTextConfig.generateNewKey.content}
        />
      </div>
    </EditorWithTabMenu>
  );
};

export default GenerateNewKey;