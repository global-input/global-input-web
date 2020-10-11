import React, { useReducer, useState, useRef, useEffect } from 'react';
import { useGlobalInputApp } from 'global-input-react'; 

import {PageContainer,QRCodeContainer,P,A,Title,ContentContainer} from './app-layout';


import * as actions from './actions';


import DisplayQRCodeServiceContentLabel from './qr-code-service/DisplayQRCodeServiceContentLabel';
import DisplayGenerateQRCode from './qr-code-service/DisplayGenerateQRCode';

import DisplayAskEncriptionContent from './encryption-service/DisplayAskEncryptionContent';
import DisplayEncryptingContent from './encryption-service/DisplayEncryptingContent';

import DisplayAskDecryptionContent from './decryption-service/DisplayAskDecryptionContent';
import DisplayDecryptingContent from './decryption-service/DisplayDecryptingContent';
import DecryptionFailed from './decryption-service/DecryptionFailed';

const MobileServices ={
      QRCODE:"qrcode",
      ENCRYPTION:"encryption",
      DECRYPTION:"decryption"
};


      const initData = {
            action: "input",
            dataType: "form",
            form: {
                  title: "Mobile Encryption Services",
                  fields: [{
                        id:MobileServices.QRCODE,
                        type: "button",
                        label: "Encrypted QR Code",
                        icon: "qrcode",
                        viewId: "row1",                        
                  }, {
                        id:MobileServices.ENCRYPTION,
                        type: "button",
                        label: "Encrypt",
                        icon: "encrypt",
                        viewId: "foot",                        
                  }, {
                        id:MobileServices.DECRYPTION,
                        type: "button",
                        icon: "decrypt",
                        label: "Decrypt",
                        viewId: "foot",                        
                  }]
            },
      };
      
export default () => {

      const [state, dispatch] = useReducer(actions.reducer, actions.initialState);
      
      const {setOnFieldChanged,setInitData,mobile,WhenWaiting, WhenConnected,WhenError, WhenDisconnected,errorMessage,connectionMessage} = useGlobalInputApp({initData});            
      setOnFieldChanged(({field})=>{
            switch(field.id){
                  case MobileServices.QRCODE:
                        actions.qrCodeService.init({ dispatch });
                        break;
                  case MobileServices.ENCRYPTION:
                        actions.encryptionService.init({ dispatch });
                        break;
                  case MobileServices.DECRYPTION:
                        actions.decryptionService.init({ dispatch });
            }
      });

      const back=()=>{
            actions.selectService({dispatch});
            setInitData(initData);            
      };
      
      
      
      return(<PageContainer>
                  <WhenConnected>
                        {selectPages({state, dispatch,mobile,back})}
                  </WhenConnected>            
                  <WhenWaiting>
                        
                        <Title>Mobile Encryption</Title>
                        
                        {connectionMessage}
                        <AppInfo/>
                        
                  </WhenWaiting> 
                  
                  <WhenError>
                        
                              <Title>Mobile Encryption</Title>
                              {errorMessage}
                       
                  </WhenError>   
                  <WhenDisconnected>
                        
                              <QRCodeContainer>                                          
                                    Disconnected, reload the page to try again.
                              </QRCodeContainer>
                        
                  </WhenDisconnected>              
            </PageContainer>);
      
};

const selectPages=({state, dispatch,back,mobile})=>{   
      const { ActionType } = actions;      
      switch (state.type) {  
            case ActionType.SELECT_SERVICE:
                                    return (
                                          <PageContainer>
                                                <Title>Mobile Encryption</Title>
                                                      <ContentContainer row="">
                                                      <Title>Select Service</Title>
                                                      <P>A set of available services are display on you mobile. Please operate on your mobile.</P>
                                    
                                                      </ContentContainer>
                                          </PageContainer>
                                    );                     
                        case ActionType.QRCODE_SERVICE.INIT:
                        case ActionType.QRCODE_SERVICE.SET_CONTENT:
                        case ActionType.QRCODE_SERVICE.SET_LABEL:                              
                              return (<DisplayQRCodeServiceContentLabel
                                    dispatch={dispatch}
                                    mobile={mobile}
                                    back={back}                                    
                                    {...actions.qrCodeService.getData(state)} />);                                    
                        case ActionType.QRCODE_SERVICE.GENERATE_QR_CODE:
                        case ActionType.QRCODE_SERVICE.SET_LEVEL:
                        case ActionType.QRCODE_SERVICE.SET_SIZE:
                              return (<DisplayGenerateQRCode dispatch={dispatch}
                                    mobile={mobile}
                                    {...actions.qrCodeService.getData(state)} />)
      
                        case ActionType.ENCRYPTION_SERVICE.INIT:
                        case ActionType.ENCRYPTION_SERVICE.SET_CONTENT:
                        case ActionType.ENCRYPTION_SERVICE.SET_ERROR_MESSAGE:
                              return (
                                    <DisplayAskEncriptionContent
                                          dispatch={dispatch}
                                          back={back}
                                          mobile={mobile}
                                          {...actions.encryptionService.getData(state)} />
                              );
            
                        case ActionType.ENCRYPTION_SERVICE.ENCRYPT:
                        case ActionType.ENCRYPTION_SERVICE.SET_ENCRYPTED_CONTENT:
            
                              return (<DisplayEncryptingContent
                                    dispatch={dispatch}
                                    mobile={mobile}
                                    {...actions.encryptionService.getData(state)} />);
                              
                        case ActionType.DECRYPTION_SERVICE.INIT:
                        case ActionType.DECRYPTION_SERVICE.SET_CONTENT:
                              return (
                                    <DisplayAskDecryptionContent
                                          dispatch={dispatch}
                                          mobile={mobile}
                                          back={back}
                                          {...actions.decryptionService.getData(state)} />
                              );
      
                        case ActionType.DECRYPTION_SERVICE.DECRYPT:
                        case ActionType.DECRYPTION_SERVICE.SET_DECRYPTED_CONTENT:
            
                              return (<DisplayDecryptingContent
                                    dispatch={dispatch}
                                    mobile={mobile}
                                    {...actions.decryptionService.getData(state)} />);
                        
                        case ActionType.DECRYPTION_SERVICE.FAILED:
                              return (<DecryptionFailed 
                                    mobile={mobile}
                                    dispatch={dispatch}
                                    {...actions.decryptionService.getData(state)}/>);
                        
                        
            
                        default: return (
                                    <ContentContainer row="">
                                                <Title>Error</Title>
                                                <P>Unknown Error</P>
                                    </ContentContainer>);
                  
                  }
      

};




const AppInfo=()=>(
      <P>This example application (with <A href="https://github.com/global-input/mobile-encryption">its source code</A>) demonstrates how you can use the <a href="https://github.com/global-input/global-input-react">extension library</a> to implement a <a href="https://globalinput.co.uk/global-input-app/mobile-content-encryption">Mobile Encryption</a> mechanism to secure user information in a way that allows users to have complete control over their own data.            
      </P>
)