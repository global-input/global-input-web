// EncryptionKeyItemActivated.js

import React from 'react';

import menusConfig  from '../../../configs/menusConfig';
import manageKeysTextConfig from '../../../configs/manageKeysTextConfig';

import ViewWithTabMenu from '../../../components/menu/ViewWithTabMenu';
import DisplayBlockText  from '../../../components/display-text/DisplayBlockText';

import DisplayKeyDetails from './DisplayKeyDetails';

export default function EncryptionKeyItemActivated({ onBack, encryptionKeyItem }) {
  const menuItems = [
    {},
    {
      menu: menusConfig.ok.menu,
      onClick: onBack,
    },
    {},
  ];

  return (
    <ViewWithTabMenu
      menuItems={menuItems}
      selected={menusConfig.manageKeys.menu}
      title={manageKeysTextConfig.encryptionActivated.title}
    >
      <DisplayKeyDetails encryptionKeyItem={encryptionKeyItem} />
      <DisplayBlockText
        content={manageKeysTextConfig.encryptionActivated.content}
      />
    </ViewWithTabMenu>
  );
}