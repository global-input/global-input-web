import React, { useState } from 'react';
import styled from 'styled-components';
import images from '../../../configs/images';
import {appdata} from '../../../appdata';

const populateItemsInAction = (action, encryptionKeyList) => {
  if (!encryptionKeyList) return;
  
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

const buildActionData = (encryptionKeyList) => {
  const action = {
    startIndex: 0,
    items: [],
    endReached: false,
    numberRecordsInBatch: 50,
  };
  populateItemsInAction(action, encryptionKeyList);
  return action;
};

const SelectEncryptionKey = ({ onEncryptionKeySelected, encryptionKeyList, selectedEncryptionKeyItem }) => {
  const [action, setAction] = useState(() => buildActionData(encryptionKeyList));

  const loadNextBatchOfItems = (currentAction) => {
    populateItemsInAction(currentAction, encryptionKeyList);
    setAction({ ...currentAction });
  };

  const onEndReached = () => {
    if (!action.endReached) {
      loadNextBatchOfItems(action);
    }
  };

  const renderActiveIcon = (encryptionKeyItem) => {
    if (appdata.isEncryptionKeyIsActive(encryptionKeyItem)) {
      return <Icon src={images.activeIcon} alt="Active Icon" />;
    }
    return null;
  };

  const renderSelectIcon = (encryptionKeyItem) => {
    const icon = encryptionKeyItem === selectedEncryptionKeyItem ? images.device.radio.checked : images.device.radio.unchecked;
    return <Icon src={icon} alt="Select Icon" />;
  };

  const renderItemListItem = ({ encryptionKeyItem }) => (
    <ItemContainer onClick={() => onEncryptionKeySelected(encryptionKeyItem)}>
      <Row>
        <ListContainer>
          <ListValue>
            {renderSelectIcon(encryptionKeyItem)}
            <Icon src={images.key} alt="Key Icon" />
            <KeyText>{encryptionKeyItem.name}</KeyText>
          </ListValue>
          {renderActiveIcon(encryptionKeyItem)}
        </ListContainer>
      </Row>
    </ItemContainer>
  );

  return (
    <ItemListContainer>
      {action.items.map((item) => renderItemListItem({ encryptionKeyItem: item.encryptionKeyItem }))}
      <LoadMoreButton onClick={onEndReached}>Load More</LoadMoreButton>
    </ItemListContainer>
  );
};

export default SelectEncryptionKey;

// Styled Components
const ItemListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemContainer = styled.div`
  padding: 10px;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
`;

const Row = styled.div`
  display: flex;
`;

const ListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
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

const LoadMoreButton = styled.button`
  padding: 10px;
  margin-top: 10px;
  cursor: pointer;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 4px;
  &:hover {
    background-color: #e0e0e0;
  }
`;