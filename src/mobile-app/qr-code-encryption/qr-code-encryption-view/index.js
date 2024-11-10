import React, { useState } from 'react';




import encryptedQrCodeTextConfig from "../../configs/encryptedQrCodeTextConfig";

import menusConfig from "../../configs/menusConfig";





import ViewWithTabMenu  from "../../components/menu/ViewWithTabMenu";


import { QRCodeView } from "../../qr-code-view";
import EncryptContentView from "../encrypt-content-view";

const ACT_TYPE = {
  HOME: 1,
  ENCRYPT_CONTENT: 2,
  DISPLAY_QR_CODE: 3
}

const QRCodeEncryptionView = ({ menuItems }) => {
  const [actionType, setActionType] = useState(ACT_TYPE.HOME);
  const [content, setContent] = useState('');

  const toEncryptContent = () => {
    setContent('');
    setActionType(ACT_TYPE.ENCRYPT_CONTENT);
  };

  const toHome = () => {
    setContent('');
    setActionType(ACT_TYPE.HOME);
  };
  const onContentEncrypted = (encryptedContent, label) => {
    setContent(encryptedContent);
    setActionType(ACT_TYPE.DISPLAY_QR_CODE);
  };
  const renderEnterContentView = () => {
    var menus = [{
      menu: menusConfig.cancel.menu,
      onPress: toHome
    }];


    return (
      <EncryptContentView menuItems={menus}
        onContentEncrypted={onContentEncrypted}
        help={encryptedQrCodeTextConfig.encrypt.content}
        title={encryptedQrCodeTextConfig.title} />
    );
  };
  const renderDisplayQRCode = () => {
    // var menuItems=[{},{
    //       menu:menusConfig.ok.menu,
    //       onPress:()=>toHome()          
    // },{}];

    return (
      <QRCodeView qrcodeContent={content}
        help={encryptedQrCodeTextConfig.qrcode.content}
        help2={encryptedQrCodeTextConfig.qrcode.content2}
        title={encryptedQrCodeTextConfig.title}
        menuItems={menuItems}
      />
    );
  };
  const renderHome = () => {
    return (
      <ViewWithTabMenu title={encryptedQrCodeTextConfig.title}
        menuItems={menuItems} selected={menusConfig.encryptedQrCode.menu}
        floatingButton={menusConfig.addRecord.menu}
        onPressFloatingIcon={toEncryptContent} content={encryptedQrCodeTextConfig.content} />
    );
  };  
  switch (actionType) {
    case ACT_TYPE.ENCRYPT_CONTENT: return renderEnterContentView();
    case ACT_TYPE.DISPLAY_QR_CODE: return renderDisplayQRCode();
    default: return renderHome();
  }

};


export default QRCodeEncryptionView;