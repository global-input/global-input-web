import React, { useState, useCallback } from 'react';
import Switch from "react-switch";
import { PageHeader } from "../page-header";
import { PageFooter } from "../page-footer";
import { QrReader } from '@blackbox-vision/react-qr-reader';
import DisplayUserLogin from "../display-user-login";
import {
  Container,
  Content,
  CardsContent
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

const MessageContent = ({ data }) => {
  if(data.message || data.content){
    return (
      <CardsContent>
        <h2>{data.message}</h2>
        <p>{data.content}</p>
        </CardsContent>
    );
  }
  else{
    return  null;
  }
}

const StartScanQRCode: React.FC = () => {
  const [data, setData] = useState(initialState);
  
  
  usePageTitle("Global Input App - Scan QR Code");

  const setContentAndMessage = useCallback((content, message) =>{     
    console.log("----------setting content:"+content+" message:"+message);
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
          setContentAndMessage('', 'Permission denied');
          break;
        case 'NotReadableError':
          setContentAndMessage('', 'Cannot read the image');
          break;
        case 'NotFoundException':
          setContentAndMessage('', 'No QR code found in the image');
          break;
        default:
          setContentAndMessage('', error.message);          
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
        return {...data, content:lastCodeDataProcessed.code, message:'QR Code Content'};        
      }
      if (appdata.isActiveEncryptionKeyEncryptedMessage(lastCodeDataProcessed.code)) {
        var decryptedContent = appdata.decryptCodeDataWithAnyEncryptionKey(lastCodeDataProcessed.code);
        if (decryptedContent) {
          setContentAndMessage(decryptedContent, 'Decrypted QR Code Content');
        } else {
          setContentAndMessage(lastCodeDataProcessed.code, 'Failed to decrypt the content!');
        }
        return;

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
      {data.content}dddd
      data.inputActive=[{data.inputActive?'true':'false'}]
      
</Content>
</Container>
      
    
  );
};



const ScanQRCode: React.FC = () => {
  
  const onLoggedIn=useCallback(() => {
  },[]);

  if (!appdata.getLoginUserinfo()) {
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
