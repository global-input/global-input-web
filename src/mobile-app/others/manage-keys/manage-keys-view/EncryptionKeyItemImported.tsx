import React from 'react';

import manageKeysTextConfig from "../../../../configs/manageKeysTextConfig";
import menusConfig from "../../../../configs/menusConfig";
import EditorWithTabMenu from "../../../components/menu/EditorWithTabMenu";
import DisplayBlockText from "../../../components/display-text/DisplayBlockText";

import DisplayKeyDetails from "./DisplayKeyDetails";
const EncryptionKeyItemImported=({ encryptionKeyItem, onBack, onQrCodeSelected, onClipboardCopySelected }) => {

  const menuItems = [{
    menu: menusConfig.back.menu,
    onPress: onBack
  }, {
    menu: menusConfig.qrcode.menu,
    onPress: () => {
      onQrCodeSelected(encryptionKeyItem);
    }
  }, {
    menu: menusConfig.exportText.menu,
    onPress: () => {
      onClipboardCopySelected(encryptionKeyItem);
    }
  }];

  return (
    <EditorWithTabMenu title={manageKeysTextConfig.encryptionImported.title}
      menuItems={menuItems} selected={menusConfig.manageKeys.menu}>

      <DisplayKeyDetails encryptionKeyItem={encryptionKeyItem} />
      <DisplayBlockText content={manageKeysTextConfig.encryptionImported.content} />
    </EditorWithTabMenu>

  );
};


export default EncryptionKeyItemImported;