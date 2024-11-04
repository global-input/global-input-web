import React, { useState, useCallback } from 'react';
import Switch from "react-switch";
import { PageHeader } from "../page-header";
import { PageFooter } from "../page-footer";
import { Scanner, IDetectedBarcode } from '@yudiel/react-qr-scanner';
import DisplayUserLogin from "../display-user-login";
import DisplayCode from "./DisplayCode";
import {
  Container,
  Content  
} from "./layout";

import { useConnectToMobile, ConnectWindow, ConnectButton } from "./mobile-ui";

import { usePageTitle } from "../page-metadata";
import { config } from "../configs";
import {appdata} from "../appdata";

let lastCodeDataProcessed =null;
const initialState = {
  message: '',
  content: '',
  inputActive: true,
  modal: '',
  modaldata: {},
}


const StartScanQRCode: React.FC = () => {
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
              

              if(!code[i].rawValue){
                return data;
              }
              
              
              if (!data.inputActive) {                     
                return {...data, content:code[i].rawValue, message:'QR Code Content'};        
              }
              if (appdata.isActiveEncryptionKeyEncryptedMessage(code[i].rawValue)) {
                const decryptedContent = appdata.decryptCodeDataWithAnyEncryptionKey(code[i].rawValue);      
                if (decryptedContent) {
                  
                  return {...data, content:decryptedContent, message:'Decrypted QR Code Content'};        
          
                } else {
                  
                  return {...data, content:code[i].rawValue, message:'Failed to decrypt the content!'};        
          
                }
              }
          
              return data;
          
            });
          
      }
    }

    

  },[]);
    
  

  return (
    <Container>
      <PageHeader selected={config.paths.contactUs.path} />
      
        <Content>
        <label>
          <span>Global Input</span>
          <Switch onChange={onDataInputSwitchChange} checked={data.inputActive} />
      </label>

        
        
        
      <Scanner
        onScan={onScanCodes}
        allowMultiple={true}
        scanDelay={1000}

        
        
        // constraints={{ facingMode: 'environment' }}
        // containerStyle={{ width: '100%' }}
        // videoStyle={{ width: '100%' }}
      />
      <DisplayCode  title={data.message} content={data.content}/>
      
      
      
</Content>
</Container>
      
    
  );
};



const ScanQRCode: React.FC = () => {
  const [isUserConfigured, setUserSetup] = useState(false);

  
  const onLoggedIn=useCallback(() => {
    if (appdata.getLoginUserinfo()) {
      setUserSetup(true);
    }
    else{
      setUserSetup(false);
    }
  },[]);

   if(!isUserConfigured){
    return(
      <Container>
            <PageHeader selected={config.paths.contactUs.path} />       
              <Content>
        <DisplayUserLogin onLoggedIn={onLoggedIn} />
        
        </Content>
      </Container>                      
        );      
  }
  return (
    <StartScanQRCode/>
  );




}
export default ScanQRCode;
