import React, { useState, useCallback } from 'react';
import Switch from "react-switch";
import { PageHeader } from "../page-header";
import { PageFooter } from "../page-footer";
import { QrReader } from '@blackbox-vision/react-qr-reader';
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

  const setContentAndMessage = useCallback((content, message) =>{         
    setData (data => ({...data, content, message}));    
  },[]);
  

  const onDataInputSwitchChange =useCallback((inputActive) => {
    console.log("-----:inputActive"+ inputActive);
    setData(data=>{
        return {...data, inputActive: !!inputActive};        
    });
    
  },[]);


  const handleScan = useCallback((result, error) => {
    if (error) {
      switch(error.name){
        case 'NotAllowedError':
          console.log("---Permission denied");
          setContentAndMessage('', 'Permission denied');
          break;
        case 'NotReadableError':
          console.log("---Cannot read the image");
          setContentAndMessage('', 'Cannot read the image');
          break;
        case 'NotFoundException':                    
          break;
        default:
          console.log("---Error:=------"+error.message, error);
          setContentAndMessage('', error.name);          
        }        
        return;      
    }
    if(!result){
      console.log("result is empty");
      return;
    }
    var currentTime = new Date().getTime()
    if (lastCodeDataProcessed) {      
      if ((currentTime - lastCodeDataProcessed.lastTime) < 2000) {
        
          return
      }      
    } 
    else{
      lastCodeDataProcessed={};
      console.log("first time");
    }
    console.log("result="+result.getText());
    lastCodeDataProcessed.lastTime=currentTime;
    lastCodeDataProcessed.code=result?.getText();
    if(navigator.vibrate){
        navigator.vibrate(200);
    }
    setData(data=>{
      if (!data.inputActive) { 
        console.log("------:lastCodeDataProcessed.code"+ lastCodeDataProcessed.code);

        return {...data, content:lastCodeDataProcessed.code, message:'QR Code Content'};        
      }
      if (appdata.isActiveEncryptionKeyEncryptedMessage(lastCodeDataProcessed.code)) {
        const decryptedContent = appdata.decryptCodeDataWithAnyEncryptionKey(lastCodeDataProcessed.code);
        console.log("------:decryptedContent"+ decryptedContent);
        if (decryptedContent) {
          
          return {...data, content:decryptedContent, message:'Decrypted QR Code Content'};        

        } else {
          
          return {...data, content:lastCodeDataProcessed.code, message:'Failed to decrypt the content!'};        

        }
      }

      return data;

    });
    
    

  }, [setContentAndMessage]);
    
  
console.log("****data.inputActive="+data.inputActive);
  return (
    <Container>
      <PageHeader selected={config.paths.contactUs.path} />
      
        <Content>
        <label>
          <span>Global Input</span>
          <Switch onChange={onDataInputSwitchChange} checked={data.inputActive} />
      </label>

        
        
        
      <QrReader
        onResult={handleScan}
        constraints={{ facingMode: 'environment' }}
        containerStyle={{ width: '100%' }}
        videoStyle={{ width: '100%' }}
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
