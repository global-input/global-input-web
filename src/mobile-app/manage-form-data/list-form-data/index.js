// src/mobile-app/manage-form-data/list-form-data/index.js

import React, { useState, useEffect } from 'react';
import { styles } from '../styles'; // Ensure styles are adjusted for React.js
import { domainForms } from '../../store';
import menusConfig  from '../../configs/menusConfig';
import ViewWithTabMenu  from '../../components/menu/ViewWithTabMenu';
import ListFormDataHeader from './ListFormDataHeader';
import noteIcon from '../../images/note.png'; // Ensure this path is correct

const createNewAction = () => {
  return {
    filterString: '',
    startIndex: 0,
    items: [],
    endReached: false,
    numberRocordsInBatch: 20,
    formDataList: [],
  };
};

const populateItemsInAction = (action) => {
  if (!action.formDataList || !action.formDataList.length) {
    return;
  }
  const formDataList = action.formDataList;

  if (action.items.length > 0) {
    action.items.pop();
  }

  for (let counter = 0; counter < action.numberRocordsInBatch; counter++) {
    if (action.startIndex >= formDataList.length) {
      action.endReached = true;
      break;
    }
    const formData = formDataList[action.startIndex];
    action.items.push({
      formData,
      key: formData.id,
    });
    action.startIndex++;
  }

  action.items.push({
    formData: null,
    key: 'xspan4dfsabbdfshtr1',
  });
};

const getStateFromProps = ({ formDataList }) => {
  const action = createNewAction();
  action.formDataList = formDataList;
  populateItemsInAction(action);
  return action;
};

const ListFormData = ({
  menuItems,
  formDataList,
  onFormDataSelected,
  onCreateFormData,
  titleIcon,
  toListLabels,
  title,
}) => {  
  const [action, setAction] = useState(() =>
    getStateFromProps({ formDataList })
  );

  useEffect(() => {
    setAction(getStateFromProps({ formDataList }));
  }, [formDataList]);

  const onChangeFilterString = (filterString) => {
    const newAction = createNewAction();
    newAction.filterString = filterString;
    newAction.formDataList = domainForms.searchFormData(formDataList, newAction);
    populateItemsInAction(newAction);
    setAction(newAction);
  };

  const onSearchLooseFocus = () => {
    if (action.items.length <= 1) {
      onChangeFilterString('');
    }
  };

  const renderItemListItem = (item) => {
    if (item.formData) {
      return (
        <div
          onClick={() => onFormDataSelected(item.formData)}
          style={{ ...styles.itemRecord, cursor: 'pointer' }}
        >
          <div style={styles.itemRow}>
            <img src={noteIcon} style={styles.itemIcon} alt="Note Icon" />
            <span style={styles.formIdText}>{item.formData.id}</span>
          </div>
        </div>
      );
    } else {
      return <div style={styles.endSpace}></div>;
    }
  };

  const onEndReached = () => {
    if (!action.endReached) {
      const newAction = { ...action };
      populateItemsInAction(newAction);
      setAction(newAction);
    }
  };

  const renderHeader = () => {
    return (
      <ListFormDataHeader
        title={title}
        titleIcon={titleIcon}
        onChangeFilterString={onChangeFilterString}
        onSearchLooseFocus={onSearchLooseFocus}
        toListLabels={toListLabels}
      />
    );
  };

  // Adjust menuItems if filterString is present
  let adjustedMenuItems = menuItems;
  if (action.filterString) {
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
        {action.items.map((item) => (
          <React.Fragment key={item.key}>
            {renderItemListItem(item)}
          </React.Fragment>
        ))}
      </div>
    </ViewWithTabMenu>
  );
};

export default ListFormData;