import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import menusConfig from '../../../configs/menusConfig';

import ViewWithTabMenu from '../../../components/menu/ViewWithTabMenu';
import DisplayBlockText from '../../../components/display-text/DisplayBlockText';

import {appdata, formDataUtil} from '../../../store';


const importDecryptionError =
  'Please first import and activate the encryption key that was used for encrypting the exported content.';
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
    setCompData({ content, errorMessage: '', password: '' });
  }, [content]);

  const setErrorMessage = (errorMessage) =>
    setCompData({ ...compData, errorMessage });

  const decryptFormData = () => {
    const globalInputData = appdata.decryptFormDataText(compData.content);
    if (!globalInputData) {
      setErrorMessage(importDecryptionError);
      return;
    }

    onDecryptedFormData(globalInputData.forms);
  };

  const renderErrorMessage = () => {
    if (compData.errorMessage) {
      return (
        <InputContainer>
          <ErrorMessage>{compData.errorMessage}</ErrorMessage>
        </InputContainer>
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
    },
  ];

  const cc = formDataUtil.buldTextContentResolved(
    appdata.getActiveEncryptionKeyItem(),
    formDataMessage
  );

  return (
    <ViewWithTabMenu
      title={windowTitle}
      menuItems={menuItems}
      selected={menusConfig.others.menu}
    >
      <FormContainer>
        <DisplayBlockText content={cc} />
        {renderErrorMessage()}
      </FormContainer>
    </ViewWithTabMenu>
  );
};

// Styled Components
const FormContainer = styled.div`
  padding: 20px;
`;

const InputContainer = styled.div`
  margin-top: 10px;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 16px;
`;