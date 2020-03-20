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

export default () => {

      const [state, dispatch] = useReducer(actions.reducer, actions.initialState);
      const [initData,setInitData]=useState('');      
      const globalInputApp = useGlobalInputApp({initData},[initData]);
      
      useEffect(()=>{   
            console.log("buildInitData");
            setInitData(buildInitData({dispatch}));
      },[])

      const back=()=>{
            actions.selectService({dispatch});
            globalInputApp.setInitData(buildInitData({dispatch}));
            
      };
      
      const {WhenWaiting, WhenConnected,WhenError, WhenDisconnected,errorMessage,connectionMessage}=globalInputApp;
      return(<>
                  <WhenConnected>
                        {selectPages({state, dispatch,globalInputApp,back})}
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
            </>);
      
};

const selectPages=({state, dispatch,back,globalInputApp})=>{   
      const { ActionType } = actions;
      console.log("-----:"+state.type);
      switch (state.type) {  
            case ActionType.SELECT_SERVICE:
                                    return (
                                          <PageContainer>
                                                <Title>Mobile Encryption</Title>
                                                      <ContentContainer>
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
                                    back={back}
                                    globalInputApp={globalInputApp}
                                    {...actions.qrCodeService.getData(state)} />);                                    
                        case ActionType.QRCODE_SERVICE.GENERATE_QR_CODE:
                        case ActionType.QRCODE_SERVICE.SET_LEVEL:
                        case ActionType.QRCODE_SERVICE.SET_SIZE:
                              return (<DisplayGenerateQRCode dispatch={dispatch}
                                    globalInputApp={globalInputApp}
                                    {...actions.qrCodeService.getData(state)} />)
      
                        case ActionType.ENCRYPTION_SERVICE.INIT:
                        case ActionType.ENCRYPTION_SERVICE.SET_CONTENT:
                        case ActionType.ENCRYPTION_SERVICE.SET_ERROR_MESSAGE:
                              return (
                                    <DisplayAskEncriptionContent
                                          dispatch={dispatch}
                                          back={back}
                                          globalInputApp={globalInputApp}
                                          {...actions.encryptionService.getData(state)} />
                              );
            
                        case ActionType.ENCRYPTION_SERVICE.ENCRYPT:
                        case ActionType.ENCRYPTION_SERVICE.SET_ENCRYPTED_CONTENT:
            
                              return (<DisplayEncryptingContent
                                    dispatch={dispatch}
                                    globalInputApp={globalInputApp}
                                    {...actions.encryptionService.getData(state)} />);
                              
                        case ActionType.DECRYPTION_SERVICE.INIT:
                        case ActionType.DECRYPTION_SERVICE.SET_CONTENT:
                              return (
                                    <DisplayAskDecryptionContent
                                          dispatch={dispatch}
                                          globalInputApp={globalInputApp}
                                          back={back}
                                          {...actions.decryptionService.getData(state)} />
                              );
      
                        case ActionType.DECRYPTION_SERVICE.DECRYPT:
                        case ActionType.DECRYPTION_SERVICE.SET_DECRYPTED_CONTENT:
            
                              return (<DisplayDecryptingContent
                                    dispatch={dispatch}
                                    globalInputApp={globalInputApp}
                                    {...actions.decryptionService.getData(state)} />);
                        
                        case ActionType.DECRYPTION_SERVICE.FAILED:
                              return (<DecryptionFailed globalInputApp={globalInputApp} 
                                    dispatch={dispatch}
                                    {...actions.decryptionService.getData(state)}/>);
                        
                        
            
                        default: return (
                                    <ContentContainer>
                                                <Title>Error</Title>
                                                <P>Unknown Error</P>
                                    </ContentContainer>);
                  
                  }
      

};

const buildInitData = ({dispatch}) =>{
      const initData = {
            action: "input",
            dataType: "form",
            form: {
                  title: "Mobile Encryption Services",
                  fields: [{
                        type: "button",
                        label: "Encrypted QR Code",
                        icon: "qrcode",
                        viewId: "row1",
                        operations: { onInput: () => actions.qrCodeService.init({ dispatch }) }

                  }, {
                        type: "button",
                        label: "Encrypt",
                        icon: "encrypt",
                        viewId: "foot",
                        operations: { onInput: () => actions.encryptionService.init({ dispatch }) }
                  }, {
                        type: "button",
                        icon: "decrypt",
                        label: "Decrypt",
                        viewId: "foot",
                        operations: { onInput: () => actions.decryptionService.init({ dispatch }) }
                  }]
            },
      };
      return initData;
}


const AppInfo=()=>(
      <P>This example application demonstrates how applications can use the <a href="https://github.com/global-input/global-input-react">Global Input App library</a> to include <A href="http://localhost:3000/global-input-app/mobile-content-encryption">Mobile Encryption</A> functionality on a multi-device environment.            
            Its source code is available on <A href="https://github.com/global-input/mobile-encryption">GitHub</A>.</P>  
)