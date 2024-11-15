import React, { useState, useCallback } from 'react';
import styled from "styled-components";
import ScanQRCode from './scan-qr-code';
import manageFormDataTextConfig from "./configs/manageFormDataTextConfig";
import {ImportEncryptionKeyView} from './import-encryption-key';
import {appdata} from "./store";

import DisplayUserLogin from "./display-user-login";
import GlobalInputConnector from './global-input-connector';
import menusConfig from './configs/menusConfig';
import {ManageFormData} from './manage-form-data'
import {ManageKeysView} from './others/manage-keys';
import {QRCodeEncryptionView} from "./qr-code-encryption";
import OthersView from './others/others-view';

enum Page {
    UserLogin= 'user-login',    
    ScanQRCode = 'scan-qr-code',
    ImportEncryptionKey = 'import-encryption-key',
    GlobalInputConnector = 'global-input-connector',
    ManageFormData = 'manage-form-data',
    ManageKeys = 'manage-keys',
    EncryptedQRCode= 'encrypted-qr-code',
    OthersMenu= 'others-menu',
};

interface PageData {
    page: Page;
    code: string|null;
}

const initialState = {
    page: Page.ManageFormData,
    code: null,
};
const MobileApp: React.FC = () => {    
    const [page, setPage] = useState<PageData>(initialState);
    

    const toUserLoginScreen = useCallback(() => {  
        setPage({
            page: Page.UserLogin,
            code: null,
        });
    }
    ,[]);
    const onLoggedIn=useCallback(() => {
        if (appdata.getLoginUserinfo()) {
            setPage({
                page: Page.ScanQRCode,
                code: null,
            });          
        }
        else{
            setPage({
                page: Page.UserLogin,
                code: null,
            });          
        }
      },[]);



      


      
      const onImportEncryptionKey = useCallback((code) => {
        setPage({
            page: Page.ImportEncryptionKey,
            code: code,
        });
    } ,[]);

    const onImportNotProtectedEncryptionKey = useCallback((encryptionKey) => {
        // todo: implement this
    },[]);

    const onGlobalInputConnect = useCallback((codeData) => {
        setPage({
            page: Page.GlobalInputConnector,
            code: codeData,
        }
        )

    },[]);
    
    
    
    const onImportSettingsData = useCallback((data) => {
        //todo: implement this
    },[]);

    const toCameraView =useCallback(() => {
        setPage({
            page: Page.ScanQRCode,
            code: null,
        });
    },[]);

    
    

    // const toImportEncryptionKey = useCallback((code) => {
    //     setPage({
    //         page: Page.ImportEncryptionKey,
    //         code: code,
    //     });
    // },[]);

const toManageFormData = useCallback(() => {
    setPage
    ({
        page: Page.ManageFormData,
        code: null,
    });


},[]);
const toManageKeys = useCallback(() => {
    setPage({
        page: Page.ManageKeys,
        code: null,
    });
    
},[]);
const toEncryptedQRCode = useCallback(() => {
    setPage({
        page: Page.EncryptedQRCode,
        code: null,
    });

},[]);

const toOthersMenu = useCallback(() => {
    setPage({
        page: Page.OthersMenu,
        code: null,
    });
},[]);




    const menuItems= [
    {
      menu: menusConfig.eye.menu,
      onPress: toCameraView,
    },
    {
      menu: menusConfig.manageFormData.menu,
      onPress: toManageFormData,
    },
    {
      menu: menusConfig.manageKeys.menu,
      onPress: toManageKeys,
    },
    {
      menu: menusConfig.encryptedQrCode.menu,
      onPress: toEncryptedQRCode,
    },
    {
      menu: menusConfig.others.menu,
      onPress: toOthersMenu,
    }
  ]

  const renderPage = (page) => {
    switch (page.page) {
      case Page.UserLogin:
        return <DisplayUserLogin onLoggedIn={onLoggedIn} />;
      case Page.ScanQRCode:
        return (
          <ScanQRCode
            onImportEncryptionKey={onImportEncryptionKey}
            onImportNotProtectedEncryptionKey={onImportNotProtectedEncryptionKey}
            onGlobalInputConnect={onGlobalInputConnect}
            onImportSettingsData={onImportSettingsData}
          />
        );
      case Page.ImportEncryptionKey:
        return <ImportEncryptionKeyView codedata={page.code} toCameraView={toCameraView} />;
      case Page.GlobalInputConnector:
        return <GlobalInputConnector codedata={page.code} toCameraView={toCameraView} menuItems={menuItems} />;
      case Page.ManageFormData:
        return (
          <ManageFormData
            title={manageFormDataTextConfig.title}
            formDataStorage={appdata}
            menuItems={menuItems}
          />
        );
      case Page.ManageKeys:
        return <ManageKeysView menuItems={menuItems} />;
      case Page.EncryptedQRCode:
        return <QRCodeEncryptionView menuItems={menuItems}/>;
      case Page.OthersMenu:
        return <OthersView menuItems={menuItems} logout={toUserLoginScreen} />;
      default:
        return null;
    }
  };
   
    // return(
    //     <Container>
    //           <PageHeader selected={config.paths.home.path} />       
    //             <Content>
    //               {renderPage(page)}
    //       </Content>
    //     </Container>                      
    //       );    

return renderPage(page);
    



}

export default MobileApp;



export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  color: white;
  background-color: black;  
  @media and (min-width: 600px) and (max-width: 800) {
    background-color: white;
    background-repeat: no-repeat;
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  width: 100%;
  
  
`;
