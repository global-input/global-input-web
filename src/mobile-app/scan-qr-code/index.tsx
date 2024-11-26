import React, { useState, useCallback } from 'react';
import styled from "styled-components";
import Switch from "react-switch";


import {IDetectedBarcode } from '@yudiel/react-qr-scanner';

import DisplayCode from "./DisplayCode";



import { usePageTitle } from "../../page-metadata";

import {appdata, globalInputSettings} from "../store";
import type {CodeData} from "global-input-message";
import { createMessageConnector } from "global-input-message";

import type {CodeProcessors} from "global-input-message";


import eyeTextConfig from '../configs/eyeTextConfig'


import {Scanner} from '../tests';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  color: white;
  background-color: black;  
  
`;

const initialState = {
  message: '',
  content: '',
  inputActive: true,
  modal: '',
  modaldata: {},
}


interface ScanQRCodeProps {
  onImportEncryptionKey: (codeData: string) => void;
  onImportNotProtectedEncryptionKey: (encryptionKey: string) => void;
  onGlobalInputConnect: (data: CodeData) => void;
  onImportSettingsData: (data: CodeData) => void;
}

const ScanQRCode: React.FC<ScanQRCodeProps> = ({ onImportEncryptionKey, onImportNotProtectedEncryptionKey,  onGlobalInputConnect, onImportSettingsData}) => {
  const [data, setData] = useState(initialState);
  
  
  usePageTitle("Global Input App - Scan QR Code");

  
  const onDataInputSwitchChange =useCallback((inputActive) => {
    
    setData(data=>{
        return {...data, inputActive: !!inputActive};        
    });
    
  },[]);



const onScanCodes = useCallback((code: IDetectedBarcode[]) => {
    
    if (code.length > 0) {
      for(let i=0;i<code.length;i++){                
            setData(data=>{
              const codeData = code[i].rawValue;
              

              if(!codeData){
                return data;
              }
              
              
              if (!data.inputActive) {                     
                return {...data, content:codeData, message:'QR Code Content'};        
              }
              if (appdata.isActiveEncryptionKeyEncryptedMessage(codeData)) {
                const decryptedContent = appdata.decryptCodeDataWithAnyEncryptionKey(codeData);      
                if (decryptedContent) {
                  
                  return {...data, content:decryptedContent, message:'Decrypted QR Code Content'};        
          
                } else {
                  
                  return {...data, content:codeData, message:'Failed to decrypt the content!'};        
          
                }
              }
             else if (appdata.isProtectedMasterEncryptionKey(codeData)) {
              onImportEncryptionKey(codeData);
              return data;
            }
            else if (appdata.isMasterEncryptionKeyCodedata(codeData)) {
              var encryptionKeyToBeImported =
                appdata.decryptExportedEncryptionKey(codeData);
              if (encryptionKeyToBeImported) {
                onImportNotProtectedEncryptionKey(encryptionKeyToBeImported);
                return;
              }
            }
              const connector = createMessageConnector();
              const codeAES = globalInputSettings.getCodeAES();
              const options: CodeProcessors = {
                onInputCodeData: onGlobalInputConnect,
                onPairing: onImportSettingsData,
                onError: message => {                  
                          setData(data=>{
                          return {...data, content:codeData, message: eyeTextConfig.inputDisabled.display};        
                          });                  
                }
              };
              if (codeAES) {
                options.codeAES = codeAES;
              }

              connector.processCodeData(codeData, options);
          
              return data;
          
            });
          
      }
    }

    

  },[]);
  const onError = useCallback((error:unknown) => {
          
    setData(data=>{
      return {...data, content:JSON.stringify(error), message:'Error'};        
    });
    
  },[]);
    
  

  return (
        
<Container>
    
        
      <Scanner
        onScan={onScanCodes}
        onError={onError}
        allowMultiple={true}
        scanDelay={1000}
        components={{ audio:false}}
        // constraints={{ facingMode: 'environment' }}
        // containerStyle={{ width: '100%' }}
        // videoStyle={{ width: '100%' }}
      />
      <DisplayCode  title={data.message} content={data.content}/>
      <label>
        <span>Global Input</span>
        <Switch onChange={onDataInputSwitchChange} checked={data.inputActive} />
      </label>


      
      </Container>        
      
      
    
  );
};



export default ScanQRCode;

