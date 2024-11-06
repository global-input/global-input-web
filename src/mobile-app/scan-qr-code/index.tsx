import React, { useState, useCallback } from 'react';
import styled from "styled-components";
import Switch from "react-switch";

import { Scanner, IDetectedBarcode } from '@yudiel/react-qr-scanner';

import DisplayCode from "./DisplayCode";



import { usePageTitle } from "../../page-metadata";

import {appdata} from "../../appdata";

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


const ScanQRCode: React.FC = () => {
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

