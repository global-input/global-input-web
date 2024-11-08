import React, { useState } from 'react';
import styled from 'styled-components';
import {domainForms} from '../../../appdata';

import menusConfig from  "../../../configs/menusConfig";

import ViewWithTabMenu from '../../components/menu/ViewWithTabMenu';
import ListFormDataHeader from './ListFormDataHeader';

import noteIcon from '../../images/note.png';

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
  const [action, setAction] = useState(() => getStateFromProps({ formDataList }));

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
        <ItemRecord key={item.key} onClick={() => onFormDataSelected(item.formData)}>
          <ItemRow>
            <ItemIcon src={noteIcon} alt="Note Icon" />
            <FormIdText>{item.formData.id}</FormIdText>
          </ItemRow>
        </ItemRecord>
      );
    } else {
      return <EndSpace key={item.key} />;
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

  return (
    <ViewWithTabMenu
      menuItems={adjustedMenuItems}
      selected={menusConfig.manageFormData.menu}
      header={renderHeader()}
      floatingButton={menusConfig.addRecord.menu}
      onPressFloatingIcon={onCreateFormData}
    >
      <ListContainer onScroll={onEndReached}>
        {action.items.map((item) => renderItemListItem(item))}
      </ListContainer>
    </ViewWithTabMenu>
  );
};

export default ListFormData;

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

const FormIdText = styled.p`
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