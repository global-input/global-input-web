import React, { useState, useCallback, useEffect } from 'react';
import styled from "styled-components";
import GlobalInputEye from './global-input-eye';
import manageFormDataTextConfig from "./configs/manageFormDataTextConfig";
import {ImportEncryptionKeyView} from './import-encryption-key';
import * as appStore from './store';

import DisplayUserLogin from "./display-user-login";
import GlobalInputConnector from './global-input-connector';
import menusConfig from './configs/menusConfig';
import {ManageFormData} from './manage-form-data'
import {ManageKeysView} from './others/manage-keys';
import {QRCodeEncryptionView} from "./qr-code-encryption";
import OthersView from './others/others-view';
import {HelpScreen} from './help-screen'
import { ImportSettingsView } from './import-settings';
enum Page {
    UserLogin= 'user-login',    
    ScanQRCode = 'scan-qr-code',
    ImportEncryptionKey = 'import-encryption-key',
    GlobalInputConnector = 'global-input-connector',
    ManageFormData = 'manage-form-data',
    ManageKeys = 'manage-keys',
    EncryptedQRCode= 'encrypted-qr-code',
    OthersMenu= 'others-menu',
    HelpScreen= 'help-screen',
    ImportSettings = 'import-settings',
    ImportMotProtectedEncryptionKey = 'import-not-protected-encryption-key'
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
    const [previousPage, setPreviousPage] = useState<PageData>(initialState);
    
    
    
    
    const toBack=useCallback(() => {
        setPage(previousPage);
    },[previousPage]);
    

    const toUserLoginScreen = useCallback(() => {  
        setPage({
            page: Page.UserLogin,
            code: null,
        });
    }
    ,[]);
    



      


      
      const onImportEncryptionKey = useCallback((code) => {
        setPage({
            page: Page.ImportEncryptionKey,
            code: code,
        });
    } ,[]);

    
    const onGlobalInputConnect = useCallback((codeData) => {
        setPage({
            page: Page.GlobalInputConnector,
            code: codeData,
        }
        )

    },[]);
    
    
    
    const onImportSettingsData = useCallback((data) => {
        setPage({
            page: Page.ImportSettings,
            code: data
        });
        
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

const toImportNotProtectedEncryptionKey = useCallback(() => {
    setPage({
        page: Page.ImportMotProtectedEncryptionKey,
        code: null,
    });
},[]);

const toHelpScreen = useCallback(() => {
    setPage({
        page: Page.HelpScreen,
        code: null,
    });    

},[]);

const renderHelpScreen =  useCallback(() => {
  const menuItems = [
    {
      menu: menusConfig.back.menu,
      onPress: toBack,
    },
  ]
  return <HelpScreen menuItems={menuItems} />
  
},[toBack]);  



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
  
  
       
      useEffect(() => {
      if (!appStore.isUserSignedIn()) {          
          setPage({
              page: Page.UserLogin,
              code: null,
          });          
      }
    }, []);
    


    switch (page.page) {
      case Page.UserLogin:
        return <DisplayUserLogin onLoggedIn={toBack} />;
      case Page.ScanQRCode:        
        return(<GlobalInputEye
          menuItems={menuItems}
          isAuthorized={true}
          isAuthorizationChecked={true}
          toGlobalInput={onGlobalInputConnect}
          toImportProtectedEncryptionKey={onImportEncryptionKey}
          toImportNotProtectedEncryptionKey={toImportNotProtectedEncryptionKey}
          toImportSettingsData={onImportSettingsData}
          toHelpScreen={toHelpScreen}
        />);

      case Page.ImportEncryptionKey:
        return <ImportEncryptionKeyView codedata={page.code} toCameraView={toCameraView} />;
      case Page.GlobalInputConnector:         
        return <GlobalInputConnector codedata={page.code} toCameraView={toCameraView} menuItems={menuItems} />;
      case Page.ManageFormData:
        return (
          <ManageFormData
            title={manageFormDataTextConfig.title}
            formDataStorage={appStore.appdata}
            menuItems={menuItems}
          />
        );
      case Page.ManageKeys:
        return <ManageKeysView menuItems={menuItems} />;
      case Page.EncryptedQRCode:
        return <QRCodeEncryptionView menuItems={menuItems}/>;
      case Page.OthersMenu:
        return <OthersView menuItems={menuItems} logout={toUserLoginScreen} />;
      case Page.HelpScreen:
        return renderHelpScreen();
      case Page.ImportSettings:
        return <ImportSettingsView        
        codedata={page.code}
        toCameraView={toCameraView}
      />
      case Page.ImportMotProtectedEncryptionKey:
        return <ImportEncryptionKeyView          
          decryptedEncryptionKey={page.code}
          toCameraView={toCameraView}
        />
    
    
      default:
        return null;
    }



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
