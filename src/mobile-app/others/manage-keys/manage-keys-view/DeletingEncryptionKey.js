// DeletingEncryptionKey.js

import React from 'react';

import { styles } from '../styles';

import manageKeysTextConfig from '../../../configs/manageKeysTextConfig';
import menusConfig  from '../../../configs/menusConfig';

import ViewWithTabMenu  from '../../../components/menu/ViewWithTabMenu';
import DisplayBlockText  from '../../../components/display-text/DisplayBlockText';

import DisplayKeyDetails from './DisplayKeyDetails';

export default function DeletingEncryptionKey({ deleteEncryptionKey, encryptionKeyItem, onBack }) {
  const menuItems = [
    {
      menu: menusConfig.delete.menu,
      onPress: () => {
        deleteEncryptionKey(encryptionKeyItem);
      },
    },
    {
      menu: menusConfig.cancel.menu,
      onPress: onBack,
    },
  ];

  return (
    <ViewWithTabMenu
      menuItems={menuItems}
      selected={menusConfig.manageKeys.menu}
      title={manageKeysTextConfig.deletingEncryptionKey.title}
    >
      <div style={styles.help}>
        <DisplayBlockText
          content={manageKeysTextConfig.deletingEncryptionKey.content1}
        />
      </div>
      <DisplayKeyDetails encryptionKeyItem={encryptionKeyItem} />
      <div style={styles.help}>
        <DisplayBlockText
          content={manageKeysTextConfig.deletingEncryptionKey.content2}
        />
      </div>
    </ViewWithTabMenu>
  );
}