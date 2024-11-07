import React, { useState } from 'react';
import {
  Text,
  View,
  FlatList,
  Image,
  TouchableHighlight,
} from 'react-native';


import { styles } from "../styles";



import { images, manageFormDataTextConfig, menusConfig } from "../../configs";

import { ViewWithTabMenu } from "../../components";
import ListFormLabelsHeader from "./ListFormLabelsHeader";


const EMPTY_ID = "xspan4dfsabbdfshtr1";
const createNewAction = () => {
  return {
    filterString: "",
    startIndex: 0,
    items: [],
    endReached: false,
    numberRocordsInBatch: 20,
    labels: []
  };
};

const itemKeyExtractor = item => {
  const key = item.key ? item.key : item.label;
  return key ? key : EMPTY_ID;
}
const populateItemsInAction = action => {
  if ((!action.labels) || (!action.labels.length)) {
    return;
  }
  var labels = action.labels;


  if (action.items.length > 0) {
    action.items.pop();
  }
  for (var counter = 0; counter < action.numberRocordsInBatch; counter++) {
    if (action.startIndex >= labels.length) {
      action.endReached = true;
      break;
    }
    var label = labels[action.startIndex];
    action.items.push({
      label,
      key: label
    });
    action.startIndex++;
  }
  action.items.push({
    label: EMPTY_ID,
    key: EMPTY_ID
  });
};

const getStateFromProps = ({ labels }) => {
  var action = createNewAction();
  action.labels = labels;
  populateItemsInAction(action);
  return action;
};

export default ({ labels, toList, menuItems, onCreateFormData, onLabelSelected }) => {

  const [data, setData] = useState(() => getStateFromProps({ labels }));

  const onChangeFilterString = (filterString) => {
    var action = createNewAction();
    action.filterString = filterString;
    if (action.filterString) {
      action.labels = labels.filter(l => l.toLowerCase().startsWith(action.filterString.toLowerCase()));
    }
    else {
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
      onChangeFilterString("");
    }
  };
  const renderItemListItem = ({ item, index }) => {
    if (item.key !== EMPTY_ID) {
      var labelText = item.label;
      if (!labelText) {
        labelText = manageFormDataTextConfig.labelsSiwtch.root;
      }
      return (
        <TouchableHighlight onPress={() => {
          onLabelSelected(item.label);
        }}>
          <View style={styles.itemRecord}>
            <View style={styles.itemRow}>
              <Image source={images.folder} style={styles.itemIcon} /><Text style={styles.formLabelText}>{labelText}</Text>
            </View>
          </View>
        </TouchableHighlight>
      );
    }
    else {

      return (<View style={styles.endSpace}></View>);
    }

  };
  const renderCreateFormDataIcon = ({ onCreateFormData }) => {
    if (onCreateFormData) {
      return (
        <FloatingIcon image={menusConfig.addRecord.menu.image} label={menusConfig.addRecord.menu.label} onPress={onCreateFormData} />
      );
    }
    else {
      return null;
    }
  };
  const renderHeader = () => {
    return (
      <ListFormLabelsHeader action={data}
        title={manageFormDataTextConfig.labelsSiwtch.title}
        toList={toList}
        onChangeFilterString={onChangeFilterString}
        onSearchLooseFocus={onSearchLooseFocus} />
    );
  };

  if (data.filterString) {
    menuItems = [{
      menu: menusConfig.back.menu,
      onPress: () => { onChangeFilterString(""); }
    }];
  }




  return (

    <ViewWithTabMenu menuItems={menuItems} selected={menusConfig.manageFormData.menu}
      header={renderHeader()}
      floatingButton={menusConfig.addRecord.menu}
      onPressFloatingIcon={onCreateFormData}>

      <FlatList
        keyExtractor={itemKeyExtractor}
        data={data.items}
        renderItem={renderItemListItem}
        onEndReached={onEndReached} />
    </ViewWithTabMenu>
  );

};
