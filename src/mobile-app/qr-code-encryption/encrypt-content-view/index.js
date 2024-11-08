// EncryptContentView.js

import React, { useState } from 'react';
import styled from 'styled-components';

import images from '../../../configs/images';
import encryptedQrCodeTextConfig from '../../../configs/encryptedQrCodeTextConfig';
import menusConfig from '../../../configs/menusConfig';

import EditorWithTabMenu from '../../components/menu/EditorWithTabMenu';
import TextInputField from '../../components/input/TextInputField';
import DisplayBlockText from '../../components/display-text/DisplayBlockText';

import {appdata} from '../../../appdata';

const populateItemsInAction = (action, encryptionKeyList) => {
  if (!encryptionKeyList) {
    return;
  }
  for (let counter = 0; counter < action.numberRecordsInBatch; counter++) {
    if (action.startIndex >= encryptionKeyList.length) {
      action.endReached = true;
      break;
    }
    const encryptionKeyItem = encryptionKeyList[action.startIndex];
    action.items.push({
      encryptionKeyItem,
      key: encryptionKeyItem.encryptionKey,
    });
    action.startIndex++;
  }
};

const getStateFromProps = () => {
  const encryptionKeyList = appdata.getEncryptionKeyList();
  const activeEncryptionKey = appdata.getDecryptedActiveEncryptionKey();
  const selectedEncryptionKeyItem = appdata.findEncryptionKeyByDecryptedValue(activeEncryptionKey);
  const action = {
    content: '',
    errorMessage: '',
    startIndex: 0,
    items: [],
    endReached: false,
    numberRecordsInBatch: 50,
    selectedEncryptionKeyItem,
  };
  populateItemsInAction(action, encryptionKeyList);

  return action;
};

const EncryptContentView = ({ onContentEncrypted, menuItems, title, help }) => {
  const [action, setAction] = useState(() => getStateFromProps());

  const loadNextBatchOfItems = (currentAction) => {
    const encryptionKeyList = appdata.getEncryptionKeyList();
    populateItemsInAction(currentAction, encryptionKeyList);
    setAction({ ...currentAction });
  };

  const onEndReached = () => {
    if (!action.endReached) {
      loadNextBatchOfItems(action);
    }
  };

  const onItemSelected = (selectedItem) =>
    setAction({ ...action, selectedEncryptionKeyItem: selectedItem.encryptionKeyItem });

  const setContent = (content) => setAction({ ...action, content, errorMessage: '' });

  const setErrorMessage = (errorMessage) => setAction({ ...action, errorMessage });

  const onContentCompleted = () => {
    try {
      const content = action.content;
      if (!content) {
        setErrorMessage(encryptedQrCodeTextConfig.errorMessages.contentIsMissing);
      } else {
        const encryptedContent = appdata.encryptWithAnEncryptionKey(
          content,
          action.selectedEncryptionKeyItem
        );
        onContentEncrypted(encryptedContent, encryptedQrCodeTextConfig.qrcodeLabel);
      }
    } catch (error) {
      console.error(error);
      setErrorMessage(`${encryptedQrCodeTextConfig.errorMessages.failedToEncrypt} ${error}`);
    }
  };

  const renderErrorMessage = () => {
    if (action.errorMessage) {
      return (
        <InputContainer>
          <ErrorMessage>{action.errorMessage}</ErrorMessage>
        </InputContainer>
      );
    } else {
      return null;
    }
  };

  const renderActiveIcon = (encryptionKeyItem) => {
    if (appdata.isEncryptionKeyIsActive(encryptionKeyItem)) {
      return <ItemIcon src={images.activeIcon} alt="Active Icon" />;
    } else {
      return null;
    }
  };

  const renderSelectIcon = (encryptionKeyItem) => {
    let icon = images.device.radio.unchecked;
    if (encryptionKeyItem === action.selectedEncryptionKeyItem) {
      icon = images.device.radio.checked;
    }
    return <ItemIcon src={icon} alt="Select Icon" />;
  };

  const renderItemListItem = (item) => {
    return (
      <ItemRecord key={item.key} onClick={() => onItemSelected(item)}>
        <ItemRow>
          <ListContainer>
            <ListValue>
              {renderSelectIcon(item.encryptionKeyItem)}
              <ItemIcon src={images.key} alt="Key Icon" />
              <KeyText>{item.encryptionKeyItem.name}</KeyText>
            </ListValue>
            {renderActiveIcon(item.encryptionKeyItem)}
          </ListContainer>
        </ItemRow>
      </ItemRecord>
    );
  };

  const menus = [...menuItems];
  menus.push({
    menu: menusConfig.encrypt.menu,
    onPress: onContentCompleted,
  });

  return (
    <EditorWithTabMenu title={title} menuItems={menus} selected={menusConfig.encryptedQrCode.menu}>
      <Content>
        <DisplayBlockText content={encryptedQrCodeTextConfig.enterContent.content} />

        <TextInputField
          labelIcon={images.message}
          placeholder={encryptedQrCodeTextConfig.placeHolder}
          value={action.content}
          secureTextEntry={false}
          onChangeTextValue={setContent}
          dark={true}
          autoCapitalize="none"
        />

        {renderErrorMessage()}
      </Content>
      <Content>
        <DisplayBlockText content={encryptedQrCodeTextConfig.encryptionKey.content} />
        <ListContainerDiv onScroll={onEndReached}>
          {action.items.map((item) => renderItemListItem(item))}
        </ListContainerDiv>
      </Content>

      <DisplayBlockText content={help} />
    </EditorWithTabMenu>
  );
};

export default EncryptContentView;

// Styled Components

const Content = styled.div`
  margin: 20px 0;
`;

const InputContainer = styled.div`
  margin-top: 10px;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
`;

const ItemRecord = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid rgba(72, 128, 237, 0.2);
  padding-bottom: 5px;
  margin: 10px 10px 20px 10px;
  cursor: pointer;
`;

const ItemRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ListValue = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ItemIcon = styled.img`
  margin-right: 5px;
`;

const KeyText = styled.p`
  color: rgba(72, 128, 237, 1);
  font-family: 'Futura-Medium';
  font-size: 18px;
  margin: 0;
`;

const ListContainerDiv = styled.div`
  max-height: 400px;
  overflow-y: auto;
`;