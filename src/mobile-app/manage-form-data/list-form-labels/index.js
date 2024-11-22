// src/mobile-app/manage-form-data/list-form-labels/index.js

import React, { useState, useEffect } from 'react';
import { styles } from '../styles'; // Ensure styles are adjusted for React.js

import images from '../../configs/images';
import manageFormDataTextConfig from '../../configs/manageFormDataTextConfig';
import menusConfig from '../../configs/menusConfig';


import ViewWithTabMenu from '../../components/menu/ViewWithTabMenu';
import ListFormLabelsHeader from './ListFormLabelsHeader';

const EMPTY_ID = 'xspan4dfsabbdfshtr1';

const createNewAction = () => {
  return {
    filterString: '',
    startIndex: 0,
    items: [],
    endReached: false,
    numberRocordsInBatch: 20,
    labels: [],
  };
};

const itemKeyExtractor = (item) => {
  const key = item.key ? item.key : item.label;
  return key ? key : EMPTY_ID;
};

const populateItemsInAction = (action) => {
  if (!action.labels || !action.labels.length) {
    return;
  }
  const labels = action.labels;

  if (action.items.length > 0) {
    action.items.pop();
  }
  for (let counter = 0; counter < action.numberRocordsInBatch; counter++) {
    if (action.startIndex >= labels.length) {
      action.endReached = true;
      break;
    }
    const label = labels[action.startIndex];
    action.items.push({
      label,
      key: label,
    });
    action.startIndex++;
  }
  action.items.push({
    label: EMPTY_ID,
    key: EMPTY_ID,
  });
};

const getStateFromProps = ({ labels }) => {
  const action = createNewAction();
  action.labels = labels;
  populateItemsInAction(action);
  return action;
};

const ListFormLabels = ({ labels, toList, menuItems, onCreateFormData, onLabelSelected }) => {
  const [data, setData] = useState(() => getStateFromProps({ labels }));

  useEffect(() => {
    setData(getStateFromProps({ labels }));
  }, [labels]);

  const onChangeFilterString = (filterString) => {
    const action = createNewAction();
    action.filterString = filterString;
    if (action.filterString) {
      action.labels = labels.filter((l) =>
        l.toLowerCase().startsWith(action.filterString.toLowerCase())
      );
    } else {
      action.labels = labels;
    }
    populateItemsInAction(action);
    setData(action);
  };

  const onEndReached = () => {
    if (!data.endReached) {
      populateItemsInAction(data);
      setData({ ...data });
    }
  };

  const onSearchLooseFocus = () => {
    if (data.items.length <= 1) {
      onChangeFilterString('');
    }
  };

  const renderItemListItem = (item, index) => {
    if (item.key !== EMPTY_ID) {
      let labelText = item.label;
      if (!labelText) {
        labelText = manageFormDataTextConfig.labelsSiwtch.root;
      }
      return (
        <div
          key={itemKeyExtractor(item)}
          onClick={() => onLabelSelected(item.label)}
          style={{ ...styles.itemRecord, cursor: 'pointer' }}
        >
          <div style={styles.itemRow}>
            <img src={images.folder} style={styles.itemIcon} alt="Folder Icon" />
            <span style={styles.formLabelText}>{labelText}</span>
          </div>
        </div>
      );
    } else {
      return <div key={EMPTY_ID} style={styles.endSpace}></div>;
    }
  };

  const renderHeader = () => {
    return (
      <ListFormLabelsHeader
        action={data}
        title={manageFormDataTextConfig.labelsSiwtch.title}
        toList={toList}
        onChangeFilterString={onChangeFilterString}
        onSearchLooseFocus={onSearchLooseFocus}
      />
    );
  };

  // Adjust menuItems if filterString is present
  let adjustedMenuItems = menuItems;
  if (data.filterString) {
    adjustedMenuItems = [
      {
        menu: menusConfig.back.menu,
        onPress: () => {
          onChangeFilterString('');
        },
      },
    ];
  }

  // Function to handle scroll event for infinite scrolling
  const handleScroll = (e) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) {
      onEndReached();
    }
  };

  return (
    <ViewWithTabMenu
      menuItems={adjustedMenuItems}
      selected={menusConfig.manageFormData.menu}
      header={renderHeader()}
      floatingButton={menusConfig.addRecord.menu}
      onPressFloatingIcon={onCreateFormData}
    >
      <div
        style={styles.listContainer}
        onScroll={handleScroll}
        className="list-scroll-container"
      >
        {data.items.map((item, index) => renderItemListItem(item, index))}
      </div>
    </ViewWithTabMenu>
  );
};

export default ListFormLabels;