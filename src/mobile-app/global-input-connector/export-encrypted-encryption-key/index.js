import React, { useState } from 'react';
import styled from 'styled-components';
import images from '../../configs/images';
import manageKeysTextConfig from '../../configs/manageKeysTextConfig';
import menusConfig from '../../configs/menusConfig';
import {appdata} from '../../store';

import EditorWithTabMenu from '../../components/menu/EditorWithTabMenu';
import TextInputField from '../../components/input/TextInputField';
import DisplayBlockText from '../../components/display-text/DisplayBlockText';

const populateItemsInAction = (action, encryptionKeyList) => {
  if (!encryptionKeyList) {
    console.log("encryptionKeyList is null");
    return action;
  }
  
  let { endReached, startIndex, numberRocordsInBatch } = action;
  let items = [...action.items];
  for (let counter = 0; counter < numberRocordsInBatch; counter++) {
    if (startIndex >= encryptionKeyList.length) {
      endReached = true;
      break;
    }
    const encryptionKeyItem = encryptionKeyList[startIndex];
    items.push({
      encryptionKeyItem,
      key: encryptionKeyItem.encryptionKey,
    });
    startIndex++;
  }
  return { ...action, items, endReached, startIndex };
};

const buildInitialData = () => {
  const encryptionKeyList = appdata.getEncryptionKeyList();
  const activeEncryptionKey = appdata.getDecryptedActiveEncryptionKey();
  const selectedEncryptionKeyItem = appdata.findEncryptionKeyByDecryptedValue(activeEncryptionKey);
  const action = {
    password: "",
    errorMessage: "",
    startIndex: 0,
    items: [],
    endReached: false,
    numberRocordsInBatch: 50,
    selectedEncryptionKeyItem,
  };
  return populateItemsInAction(action, encryptionKeyList);
};

const loadNextBatchOfItems = (action) => {
  const encryptionKeyList = appdata.getEncryptionKeyList();
  return populateItemsInAction(action, encryptionKeyList);  
};

const ExportEncryptedEncryptionKey = ({ onCancel, onCompleted }) => {
  const [action, setAction] = useState(buildInitialData);

  const setPassword = (password) => setAction({ ...action, password });
  const setErrorMessage = (errorMessage) => setAction({ ...action, errorMessage });

  const onEncrypt = () => {
    try {            
      if (!action.password) {
        setErrorMessage(manageKeysTextConfig.errorMessages.passwordIsmissing);
      } else if (action.password.length < 5) {
        setErrorMessage(manageKeysTextConfig.errorMessages.passwordTooShort);
      } else {
        const encryptedContent = appdata.exportEncryptionKeyItemWithPassword(action.selectedEncryptionKeyItem, action.password);
        const codedataname = manageKeysTextConfig.export.qrcode.title;
        onCompleted(encryptedContent, codedataname);                
      }
    } catch (error) {
      console.error(error);
      setErrorMessage(manageKeysTextConfig.errorMessages.failedToEncrypt + error);      
    }
  };

  const onEndReached = () => {  
    if (!action.endReached) {
      setAction(loadNextBatchOfItems(action));
    }
  };
  
  const menuItems = [
    { menu: menusConfig.back.menu, onPress: onCancel },
    { menu: menusConfig.encryptedQrCode.menu, onPress: onEncrypt }
  ];

  return (
    <EditorWithTabMenu title={manageKeysTextConfig.export.fillContent.title} menuItems={menuItems}>
      <Content>
        <DisplayBlockText content={manageKeysTextConfig.export.fillContent.selectKey.content} />
        <StyledList>
          {action.items.map((item, index) => (
            <ItemContainer key={index} onClick={() => setAction({ ...action, selectedEncryptionKeyItem: item.encryptionKeyItem })}>
              <ListRow>
                <ListValue>
                  <Icon src={action.selectedEncryptionKeyItem === item.encryptionKeyItem ? images.device.radio.checked : images.device.radio.unchecked} />
                  <Icon src={images.key} />
                  <KeyText>{item.encryptionKeyItem.name}</KeyText>
                  {appdata.isEncryptionKeyIsActive(item.encryptionKeyItem) && <Icon src={images.activeIcon} />}
                </ListValue>
              </ListRow>
            </ItemContainer>
          ))}
          {!action.endReached && <EndSpace onClick={onEndReached}>Load More</EndSpace>}
        </StyledList>
      </Content>
      <Content>
        <DisplayBlockText content={manageKeysTextConfig.export.fillContent.password.content1} />
        <InputContainer>
          <TextInputField
            placeholder={manageKeysTextConfig.export.fillContent.password.placeHolder}
            value={action.password}
            secureTextEntry={false}
            onChangeTextValue={setPassword}
          />
        </InputContainer>
        {action.errorMessage && (
          <ErrorContainer>
            <ErrorMessage>{action.errorMessage}</ErrorMessage>
          </ErrorContainer>
        )}
      </Content>
      <Content>
        <DisplayBlockText content={manageKeysTextConfig.export.fillContent.password.content2} />
      </Content>
    </EditorWithTabMenu>
  );
};

export default ExportEncryptedEncryptionKey;

// Styled Components
const Content = styled.div`
  padding: 20px;
`;

const StyledList = styled.div`
  max-height: 400px;
  overflow-y: auto;
`;

const ItemContainer = styled.div`
  padding: 10px;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
`;

const ListRow = styled.div`
  display: flex;
`;

const ListValue = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 8px;
`;

const KeyText = styled.p`
  font-size: 16px;
  color: #333;
`;

const InputContainer = styled.div`
  margin-top: 10px;
`;

const ErrorContainer = styled.div`
  color: red;
  padding: 10px;
`;

const ErrorMessage = styled.p`
  margin: 0;
`;

const EndSpace = styled.div`
  text-align: center;
  padding: 15px;
  cursor: pointer;
  color: #007BFF;
`;