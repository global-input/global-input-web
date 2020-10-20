import React, {useState,useCallback} from 'react';
import {PageContainer,P,Title,ContentContainer} from './app-layout';
import { useGlobalInputApp } from 'global-input-react'; 
import QRCodeService from './qr-code';
import EncryptionService  from './encryption-service';
import DecryptionService  from './decryption-service';

const pages ={
      SELECTION:"selection",
      QRCODE:"qrcode",
      ENCRYPTION:"encryption",
      DECRYPTION:"decryption"
};


export default ()=>{
      const [page,setPage]=useState(pages.SELECTION);
      const gotoServiceSelection=useCallback(()=>setPage(pages.SELECTION),[setPage]);

      const onServiceSelection = id=>{
            switch(id){
                  case pages.QRCODE:
                        setPage(pages.QRCODE);
                        break;
                  case pages.ENCRYPTION:
                        setPage(pages.ENCRYPTION);
                        break;
                  case pages.DECRYPTION:
                        setPage(pages.DECRYPTION);
                        break;
                  default:
                        setPage(pages.SELECTION);      
            }
      };      
      switch(page){
                  case pages.QRCODE:
                                    return (<QRCodeService back={gotoServiceSelection}/>);
                  case pages.ENCRYPTION:
                                    return (<EncryptionService back={gotoServiceSelection}/>);
                  case pages.DECRYPTION:    
                                    return (<DecryptionService back={gotoServiceSelection}/>);
                  case pages.SELECTION:
                               return (<ServiceSelection onServiceSelection={onServiceSelection}/>);
                  default:                                                
                      return null;
                        
      }      
};
const initData = {
      action: "input",
      dataType: "form",
      form: {
            title: "Mobile Encryption Services",
            fields: [{
                  id:pages.QRCODE,
                  type: "button",
                  label: "Encrypted QR Code",
                  icon: "qrcode",
                  viewId: "row1",                        
            }, {
                  id:pages.ENCRYPTION,
                  type: "button",
                  label: "Encrypt",
                  icon: "encrypt",
                  viewId: "foot",                        
            }, {
                  id:pages.DECRYPTION,
                  type: "button",
                  icon: "decrypt",
                  label: "Decrypt",
                  viewId: "foot",                        
            }]
      },
};


const ServiceSelection=({onServiceSelection})=>{
      const mobile = useGlobalInputApp({initData});
      mobile.setOnchange(({field})=>{            
            onServiceSelection(field.id);
      });
      return(<PageContainer>
            {!mobile.isConnected && (<Title>Mobile Encryption</Title>)}                  
            <mobile.ConnectQR/>
            {mobile.errorMessage}            
            {mobile.isConnected && (
                  
                        <ContentContainer row="">
                              <Title>Select Service</Title>
                              <P>A set of available services are display on you mobile. Please operate on your mobile.</P>
                        </ContentContainer>
                
            )}                                    
      </PageContainer>);


}

