import React, { useState, useCallback, useEffect } from 'react';
import styled from "styled-components";
import ScanQRCode from './scan-qr-code';
import { config } from "../configs";
import {ImportEncryptionKeyView} from './import-encryption-key';
import {appdata} from "../appdata";
import { PageHeader } from "../page-header";
import DisplayUserLogin from "./display-user-login";
enum Page {
    UserLogin= 'user-login',    
    ScanQRCode = 'scan-qr-code',
    ImportEncryptionKey = 'import-encryption-key',

};

interface PageData {
    page: Page;
    code: string|null;
}
const pageData:PageData ={
    page : Page.UserLogin,
    code : null,
}

const initialState = {
    page: Page.UserLogin,
    code: null,
};
const MobileApp: React.FC = () => {    
    const [page, setPage] = useState<PageData>(initialState);
    

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

    const onGlobalInputConnect = useCallback((data) => {
        //todo: implement this

    },[]);
    const onImportSettingsData = useCallback((data) => {
        //todo: implement this
    },[]);

    const toCameraView
    =useCallback(() => {
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

    return(
        <Container>
              <PageHeader selected={config.paths.home.path} />       
                <Content>
                {page.page===Page.UserLogin &&(<DisplayUserLogin onLoggedIn={onLoggedIn} />)}
                {page.page===Page.ScanQRCode &&(<ScanQRCode onImportEncryptionKey={onImportEncryptionKey} onImportNotProtectedEncryptionKey={onImportNotProtectedEncryptionKey}
                onGlobalInputConnect={onGlobalInputConnect} onImportSettingsData={onImportSettingsData}/>)}
                {page.page===Page.ImportEncryptionKey &&(<ImportEncryptionKeyView codedata={page.code} toCameraView={toCameraView}/>)}
          
          </Content>
        </Container>                      
          );    


    



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
