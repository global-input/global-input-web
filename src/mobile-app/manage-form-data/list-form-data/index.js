import React, {useState} from 'react';
import {Text, View, FlatList, Image, TouchableHighlight} from 'react-native';

import {styles} from '../styles';
import {domainForms} from '../../store';

import {menusConfig} from '../../configs';

import {ViewWithTabMenu} from '../../components';

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

const populateItemsInAction = action => {
  if (!action.formDataList || !action.formDataList.length) {
    return;
  }
  var formDataList = action.formDataList;

  if (action.items.length > 0) {
    action.items.pop();
  }

  for (var counter = 0; counter < action.numberRocordsInBatch; counter++) {
    if (action.startIndex >= formDataList.length) {
      action.endReached = true;
      break;
    }
    var formData = formDataList[action.startIndex];
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
};;

const getStateFromProps = ({formDataList}) => {
  var action = createNewAction();
  action.formDataList = formDataList;
  populateItemsInAction(action);
  return action;
};
export default ({
  menuItems,
  formDataList,
  onFormDataSelected,
  onCreateFormData,
  titleIcon,
  toListLabels,
  title
}) => {
  const [action, setAction] = useState(() => getStateFromProps({formDataList}));
  const onChangeFilterString = filterString => {
    var action = createNewAction();
    action.filterString = filterString;
    action.formDataList = domainForms.searchFormData(formDataList, action);
    populateItemsInAction(action);
    setAction(action);
  };
  const onSearchLooseFocus = () => {
    if (action.items.length <= 1) {
      onChangeFilterString('');
    }
  };
  const renderItemListItem = ({item}) => {
    if (item.formData) {
      return (
        <TouchableHighlight
          onPress={() => {
            onFormDataSelected(item.formData);
          }}>
          <View style={styles.itemRecord}>
            <View style={styles.itemRow}>
              <Image source={noteIcon} style={styles.itemIcon} />
              <Text style={styles.formIdText}>{item.formData.id}</Text>
            </View>
          </View>
        </TouchableHighlight>
      );
    } else {
      return <View style={styles.endSpace} />;
    }
  };
  const onEndReached = () => {
    if (!action.endReached) {
      const newAction = {...action};
      populateItemsInAction(newAction);
      setAction(newAction);
    }
  };
  const rendeCreateFormDataIcon = () => {
    if (onCreateFormData) {
      return (
        <FloatingIcon
          image={menusConfig.addRecord.menu.image}
          label={menusConfig.addRecord.menu.label}
          onPress={onCreateFormData}
        />
      );
    } else {
      return null;
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

  if (action.filterString) {
    menuItems = [
      {
        menu: menusConfig.back.menu,
        onPress: () => {
          onChangeFilterString('');
        },
      }
    ];
  }

  return (
    <ViewWithTabMenu
      menuItems={menuItems}
      selected={menusConfig.manageFormData.menu}
      header={renderHeader()}
      floatingButton={menusConfig.addRecord.menu}
      onPressFloatingIcon={onCreateFormData}>
      <FlatList
        data={action.items}
        renderItem={renderItemListItem}
        onEndReached={onEndReached}
      />
    </ViewWithTabMenu>
  );
};
