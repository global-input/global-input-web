import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


import images from '../../../configs/images';
import manageKeysTextConfig from '../../../configs/manageKeysTextConfig';
import menusConfig from '../../../configs/menusConfig';



import EditorWithTabMenu from "../../../components/menu/EditorWithTabMenu";
import IconButton from "../../../components/buttons/IconButton";
import DisplayBlockText from "../../../components/display-text/DisplayBlockText";
import TextInputField from "../../../components/input/TextInputField";


import { generateRandomString } from "../../../store";

const getStateFromProps = ({ importDecryptedKey, name }) => ({
  encryptionKey: importDecryptedKey || generateRandomString(23),
  name: name || "",
  errorMessage: ""
});

interface GenerateNewKeyProps {
  importDecryptedKey?: string;
  name?: string;
  importNewKey: (name: string, encryptionKey: string) => void;
  onBack: () => void;
}

const GenerateNewKey: React.FC<GenerateNewKeyProps> = ({ importDecryptedKey, name, importNewKey, onBack }) => {
  const [compData, setCompData] = useState(() => getStateFromProps({ importDecryptedKey, name }));

  const generateNewEncryptionKey = () => setCompData({ ...compData, encryptionKey: generateRandomString(23), errorMessage: "" });
  const onChangeName = (name: string) => setCompData({ ...compData, name, errorMessage: "" });

  const onImportNewKey = () => {
    const trimmedName = compData.name.trim();
    if (!trimmedName) {
      setCompData({ ...compData, errorMessage: manageKeysTextConfig.errorMessages.nameMissing });
      return;
    }
    importNewKey(trimmedName, compData.encryptionKey);
  };

  const renderErrorMessage = () => (
    compData.errorMessage ? (
      <ErrorMessageContainer>
        <ErrorMessage>{compData.errorMessage}</ErrorMessage>
      </ErrorMessageContainer>
    ) : null
  );

  const renderRandomButton = () => (
    importDecryptedKey ? null : (
      <IconButton 
        image={menusConfig.randomGenerator.menu.image} 
        label={menusConfig.randomGenerator.menu.label} 
        onPress={generateNewEncryptionKey} 
      />
    )
  );

  useEffect(() => {
    setCompData(getStateFromProps({ importDecryptedKey, name }));
  }, [importDecryptedKey, name]);

  const menuItems = [
    { menu: menusConfig.cancel.menu, onPress: onBack },
    { menu: menusConfig.importSingle.menu, onPress: onImportNewKey }
  ];

  return (
    <EditorWithTabMenu title={manageKeysTextConfig.generateNewKey.title} menuItems={menuItems} selected={menusConfig.manageKeys.menu}>
      <KeyFieldRow>
        <KeyValueContainer>
          <Icon src={images.key} alt="Key Icon" />
          <FieldValue>{compData.encryptionKey}</FieldValue>
        </KeyValueContainer>
        {renderRandomButton()}
      </KeyFieldRow>

      <NameFieldContainer>
        <TextInputField
          placeholder={manageKeysTextConfig.nameField.placeHolder}
          value={compData.name}
          labelIcon={images.labelIcon}
          onChangeTextValue={onChangeName}
        />
      </NameFieldContainer>

      {renderErrorMessage()}

      <HelpContainer>
        <DisplayBlockText content={manageKeysTextConfig.generateNewKey.content} />
      </HelpContainer>
    </EditorWithTabMenu>
  );
};

export default GenerateNewKey;

// Styled Components
const KeyFieldRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const KeyValueContainer = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;

const FieldValue = styled.p`
  font-size: 16px;
  color: #333;
`;

const NameFieldContainer = styled.div`
  margin-bottom: 20px;
`;

const ErrorMessageContainer = styled.div`
  margin-bottom: 20px;
  background-color: #f8d7da;
  padding: 10px;
  border-radius: 4px;
`;

const ErrorMessage = styled.p`
  color: #721c24;
  font-size: 14px;
`;

const HelpContainer = styled.div`
  margin-top: 20px;
`;