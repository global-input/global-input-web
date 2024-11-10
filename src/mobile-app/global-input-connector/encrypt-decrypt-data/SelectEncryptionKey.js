import React, { useState } from 'react';
import { styles } from './styles';
import images from '../../configs/images';
import {appdata} from '../../store';

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

const SelectEncryptionKey = ({
  onEncryptionKeySelected,
  encryptionKeyList,
  selectedEncryptionKeyItem,
}) => {
  const [action, setAction] = useState(() =>
    buildActionData(encryptionKeyList)
  );

  const loadNextBatchOfItems = () => {
    populateItemsInAction(action, encryptionKeyList);
    setAction({ ...action });
  };

  const onScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    if (scrollHeight - scrollTop === clientHeight) {
      if (!action.endReached) {
        loadNextBatchOfItems();
      }
    }
  };

  const renderActiveIcon = (encryptionKeyItem) => {
    if (appdata.isEncryptionKeyIsActive(encryptionKeyItem)) {
      return (
        <img
          src={images.activeIcon}
          style={styles.itemIcon}
          alt="Active Key Icon"
        />
      );
    } else {
      return null;
    }
  };

  const renderSelectIcon = (encryptionKeyItem) => {
    let icon = images.device.radio.unchecked;
    if (encryptionKeyItem === selectedEncryptionKeyItem) {
      icon = images.device.radio.checked;
    }
    return <img src={icon} style={styles.itemIcon} alt="Select Icon" />;
  };

  const renderItemListItem = (item) => {
    return (
      <div
        key={item.key}
        style={styles.itemRecord}
        onClick={() => {
          onEncryptionKeySelected(item.encryptionKeyItem);
        }}
      >
        <div style={styles.itemRow}>
          <div style={styles.listContainer}>
            <div style={styles.listvalue}>
              {renderSelectIcon(item.encryptionKeyItem)}
              <img
                src={images.key}
                style={styles.itemIcon}
                alt="Key Icon"
              />
              <span style={styles.keyText}>
                {item.encryptionKeyItem.name}
              </span>
            </div>
            {renderActiveIcon(item.encryptionKeyItem)}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      style={{ overflowY: 'auto', maxHeight: '400px' }} // Adjust as needed
      onScroll={onScroll}
    >
      {action.items.map((item) => renderItemListItem(item))}
    </div>
  );
};

export default SelectEncryptionKey;