import React, {useState,useEffect} from 'react';
import {Text, View, Image, TouchableHighlight, FlatList} from 'react-native';

import {styles} from './styles';

import {images} from '../../configs';

import {appdata} from '../../store';

const populateItemsInAction = (action, encryptionKeyList) => {
  if (!encryptionKeyList) {
    return;
  }
  for (var counter = 0; counter < action.numberRocordsInBatch; counter++) {
    if (action.startIndex >= encryptionKeyList.length) {
      action.endReached = true;
      break;
    }
    var encryptionKeyItem = encryptionKeyList[action.startIndex];
    action.items.push({
      encryptionKeyItem,
      key: encryptionKeyItem.encryptionKey
    });
    action.startIndex++;
  }
};

const buildActionData = encryptionKeyList => {  
  var action = {    
    startIndex: 0,
    items: [],
    endReached: false,
    numberRocordsInBatch: 50    
  };
  populateItemsInAction(action, encryptionKeyList);

  return action;
};

export default ({onEncryptionKeySelected,encryptionKeyList,selectedEncryptionKeyItem}) => {
  
  const [action, setAction] = useState(() => buildActionData(encryptionKeyList));
  const loadNextBatchOfItems = action => {        
        populateItemsInAction(action, encryptionKeyList);
        setAction({...action});
  };    
  const onEndReached = () => {
    if (!action.endReached) {
      loadNextBatchOfItems(action);
    }
  }
  const renderActiveIcon = encryptionKeyItem => {
    if (appdata.isEncryptionKeyIsActive(encryptionKeyItem)) {
      return (
        <Image source={images.activeIcon} style={styles.itemIcon} />
      );
    }
    else {
      return null;
    }
  };

  const renderSelectIcon = encryptionKeyItem => {
    var icon = images.device.radio.unchecked;                                      
    if (encryptionKeyItem === selectedEncryptionKeyItem) {         
      icon = images.device.radio.checked;
    }    
    return (
      <Image source={icon} style={styles.itemIcon} />
    );
  };
  const renderItemListItem = ({ item }) => {

    return (
      <TouchableHighlight onPress={() => {        
            onEncryptionKeySelected(item.encryptionKeyItem);
      }}>
        <View style={styles.itemRecord}>
          <View style={styles.itemRow}>
            <View style={styles.listContainer}>
              <View style={styles.listvalue}>
                {renderSelectIcon(item.encryptionKeyItem)}
                <Image source={images.key} style={styles.itemIcon} />
                <Text style={styles.keyText}>{item.encryptionKeyItem.name}</Text>
              </View>
              {renderActiveIcon(item.encryptionKeyItem)}
            </View>

          </View>
        </View>
      </TouchableHighlight>
    );

  };

  return (
        <FlatList
          data={action.items}
          renderItem={renderItemListItem}
          onEndReached={onEndReached} />);
};
