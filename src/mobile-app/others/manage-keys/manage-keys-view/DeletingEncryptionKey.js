import React  from 'react';
import {  
  View
} from 'react-native';

import {styles} from "../styles";

import {manageKeysTextConfig,menusConfig} from "../../../configs";

import {ViewWithTabMenu,DisplayBlockText} from "../../../components";

import DisplayKeyDetails from "./DisplayKeyDetails";

export default({deleteEncryptionKey,encryptionKeyItem,onBack})=>{

  var menuItems=[{
    menu:menusConfig.delete.menu,
    onPress:()=>{
        deleteEncryptionKey(encryptionKeyItem);
    }
   },{
     menu:menusConfig.cancel.menu,
     onPress:onBack
   }];


  return(
    <ViewWithTabMenu menuItems={menuItems} selected={menusConfig.manageKeys.menu}
         title={manageKeysTextConfig.deletingEncryptionKey.title} selected={menusConfig.manageKeys.menu}>
         <View style={styles.help}>
             <DisplayBlockText content={manageKeysTextConfig.deletingEncryptionKey.content1}/>
         </View>
          <DisplayKeyDetails encryptionKeyItem={encryptionKeyItem}/>
                          <View style={styles.help}>
                              <DisplayBlockText content={manageKeysTextConfig.deletingEncryptionKey.content2}/>
                          </View>
    </ViewWithTabMenu>
  );
};
