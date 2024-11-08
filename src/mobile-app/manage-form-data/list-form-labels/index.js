// ListFormLabels.js

import React, { useState } from 'react';
import styled from 'styled-components';

import images from '../../../configs/images';
import manageFormDataTextConfig from '../../../configs/manageFormDataTextConfig';
import menusConfig from '../../../configs/menusConfig';

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
        <ItemRecord key={item.key} onClick={() => onLabelSelected(item.label)}>
          <ItemRow>
            <ItemIcon src={images.folder} alt="Folder Icon" />
            <FormLabelText>{labelText}</FormLabelText>
          </ItemRow>
        </ItemRecord>
      );
    } else {
      return <EndSpace key={index} />;
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

  return (
    <ViewWithTabMenu
      menuItems={adjustedMenuItems}
      selected={menusConfig.manageFormData.menu}
      header={renderHeader()}
      floatingButton={menusConfig.addRecord.menu}
      onPressFloatingIcon={onCreateFormData}
    >
      <ListContainer onScroll={onEndReached}>
        {data.items.map((item, index) => renderItemListItem(item, index))}
      </ListContainer>
    </ViewWithTabMenu>
  );
};

export default ListFormLabels;

// Styled Components

const ItemRecord = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-bottom: 1px solid rgba(72, 128, 237, 0.2);
  padding-bottom: 5px;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 20px;
  flex: 1;
  cursor: pointer;
`;

const ItemRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;

const ItemIcon = styled.img`
  margin-right: 5px;
`;

const FormLabelText = styled.p`
  color: rgba(72, 128, 237, 1);
  font-family: 'Futura-Medium';
  font-size: 18px;
  margin: 0;
`;

const EndSpace = styled.div`
  height: 50px;
`;

const ListContainer = styled.div`
  overflow-y: auto;
`;