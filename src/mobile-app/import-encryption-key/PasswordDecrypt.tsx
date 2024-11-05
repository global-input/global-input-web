import React, { useState } from 'react';
import styled from 'styled-components';
import { images } from '../../configs';
import manageKeysTextConfig from '../../configs/manageKeysTextConfig';
import menusConfig from '../../configs/menusConfig';
import DisplayBlockText from '../components/display-text/DisplayBlockText';
import TextInputField from '../components/input/TextInputField';

import EditorWithTabMenu from '../components/menu/EditorWithTabMenu';
import { appdata } from '../../appdata';

interface PasswordDecryptProps {
  codedata: string;
  onEncryptionKeyDecrypted: (decryptedKey: string) => void;
  onBack: () => void;
}

const PasswordDecrypt: React.FC<PasswordDecryptProps> = ({ codedata, onEncryptionKeyDecrypted, onBack }) => {
  const [action, setAction] = useState({ password: '', errorMessage: '' });

  const setPassword = (password: string) =>
    setAction({ ...action, password, errorMessage: '' });

  const setErrorMessage = (errorMessage: string) =>
    setAction({ ...action, errorMessage });

  const decryptWithPassword = () => {
    const { password } = action;
    if (!password) {
      setErrorMessage(manageKeysTextConfig.errorMessages.passwordIsmissing);
    } else {
      try {
        const encryptionKeyDecrypted = appdata.decryptExportedEncryptionKey(codedata, password);
        if (!encryptionKeyDecrypted) {
          setErrorMessage(manageKeysTextConfig.errorMessages.invalidPassword);
        } else {
          onEncryptionKeyDecrypted(encryptionKeyDecrypted);
        }
      } catch (error) {
        console.error(error);
        setErrorMessage(manageKeysTextConfig.errorMessages.invalidPassword);
      }
    }
  };

  const renderErrorMessage = () => {
    return action.errorMessage ? (
      <ErrorContainer>
        <ErrorMessage>{action.errorMessage}</ErrorMessage>
      </ErrorContainer>
    ) : null;
  };

  const menuItems = [
    { menu: menusConfig.cancel.menu, onPress: onBack },
    { menu: menusConfig.decrypt.menu, onPress: decryptWithPassword },
  ];

  return (
    <EditorWithTabMenu title={manageKeysTextConfig.importKey.title} menuItems={menuItems} selected={menusConfig.eye.menu}>
      <DisplayBlockText content={manageKeysTextConfig.importKey.content} />
      <InputContainer>
        <TextInputField
          labelIcon={images.passwordIcon}
          placeholder={manageKeysTextConfig.importKey.password.placeHolder}
          value={action.password}
          secureTextEntry={true}
          onChangeTextValue={textValue => setPassword(textValue)}
          autoCapitalize="none"
        />
      </InputContainer>
      {renderErrorMessage()}
      <DisplayBlockText content={manageKeysTextConfig.importKey.content2} />
    </EditorWithTabMenu>
  );
};

export default PasswordDecrypt;

// Styled Components
const InputContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ErrorContainer = styled.div`
  padding: 10px;
  margin-top: 10px;
  background-color: #fdecea;
  border: 1px solid #f5c2c7;
  border-radius: 5px;
`;

const ErrorMessage = styled.p`
  color: #d32f2f;
  font-size: 14px;
  text-align: center;
  margin: 0;
`;