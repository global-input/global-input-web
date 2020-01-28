import React, {useReducer, useState, useRef, useEffect} from 'react';
import {createMessageConnector} from 'global-input-message'; ////global-input-message////

import * as actions from './actions';
import DisplayConnecting from './DisplayConnecting';
import DisplayErrorMessage from './DisplayErrorMessage';
import DisplayConnectionCode from './DisplayConnectionCode';
import DisplayServiceSelection from './DisplayServiceSelection';
import DisplaySessionDisconnected from './DisplaySessionDisconnected';


import DisplayQRCodeServiceContentLabel from './DisplayQRCodeServiceContentLabel';
import DisplayGenerateQRCode from './DisplayGenerateQRCode';


export default ()=>{            
      
      const [state,dispatch]=useReducer(actions.reducer,actions.initialState);
      let mobile=useRef(null);
      useEffect(()=>{                                    
                  mobile.current=createMessageConnector();
                  const disconnect= ()=>{
                        if(!mobile.current){
                        return;
                        }
                        mobile.current.disconnect();
                        mobile.current=null;
                  };
                  const waitForMobileToConnect = () => {
                        if(mobile.current){
                              const connectionCode=mobile.current.buildInputCodeData();
                              console.log("[["+connectionCode+"]]");
                              actions.displayQRCode({dispatch,connectionCode});
                        }                        
                  };
                  const mobileConfig=buildMobileConfig({dispatch,disconnect,waitForMobileToConnect});

                  mobile.current.connect(mobileConfig); 

                  return ()=>{                        
                        disconnect();                        
                  }
      },[]);
      const {ActionType}=actions;      
      console.log("-------state.type:"+state.type);      
      switch(state.type){
                  case ActionType.CONNECTING:
                              if(state.errorMessage){
                                    return (<DisplayErrorMessage {...state}/>);
                              }
                              else{
                                    return (<DisplayConnecting {...state}/>);
                              }                              
                  case ActionType.DISPLAY_CODE: 
                              return (<DisplayConnectionCode {...state}/>);
                  case ActionType.SELECT_SERVICE: 
                              return (<DisplayServiceSelection {...state}/>);
                  case ActionType.QRCODE_SERVICE.INIT:                               
                  case ActionType.QRCODE_SERVICE.SET_CONTENT: 
                  case ActionType.QRCODE_SERVICE.SET_LABEL:                               
                              return (<DisplayQRCodeServiceContentLabel  
                                    dispatch={dispatch} 
                                    mobile={mobile.current}
                                    {...actions.qrCodeService.getData(state)}/>);
                  case ActionType.QRCODE_SERVICE.GENERATE_QR_CODE:  
                  case ActionType.QRCODE_SERVICE.SET_LEVEL:
                  case ActionType.QRCODE_SERVICE.SET_SIZE:
                              return (<DisplayGenerateQRCode dispatch={dispatch} 
                                      mobile={mobile.current}
                                      {...actions.qrCodeService.getData(state)}/>)
                  case ActionType.SESSION_FINISHED: 
                              return (<DisplaySessionDisconnected/>);

                  case ActionType.ENCRYPTION_SERVICE: 
                     //return renderEncryptionService({theme, state, dispatch});
                  
                  default: return (<DisplayErrorMessage {...state}/>);
      }
};

 
 
 
const buildMobileConfig =({dispatch,disconnect,waitForMobileToConnect})=>{   
            const ServicesProvided={
                  QRCODE:{label:"Create Encrypted QR Codes",value:"qrcode"},
                  ENCRYPT:{label:"Encrypt Content",value:"encrypt"},
                  DECRYPT:{label:"Decrypt Content",value:"decrypt"}
            };
           
            const onServiceSelected=(value)=>{                  
                  switch(value){                    
                        case ServicesProvided.QRCODE.value: 
                                     actions.qrCodeService.init({dispatch});
                                     break;
                       case  ServicesProvided.ENCRYPT.value: 
                                     actions.encryptionService.init({dispatch});
                                     break;
                       case  ServicesProvided.DECRYPT.value:
                                     actions.decryptionService.init({dispatch});
                                     break;
                  }
            };
            const onSenderConnected=(sender,senders)=>{                  
                  actions.selectService({dispatch});
            };
            const onSenderDisconnected=(sender,senders)=>{
                  disconnect();
                  actions.onFinish({dispatch});
            };            
            const onError=errorMessage=>{
                  actions.setErrorMessage({dispatch,errorMessage});
            };
            return  {
                  initData: {
                      action:"input",
                      dataType:"form",
                      form: {
                      title: "Selecting Services",
                      fields: [{
                          label: "Select one of them below:",
                          type:"list",
                          selectType:'single',
                          items:[ServicesProvided.QRCODE, ServicesProvided.ENCRYPT, ServicesProvided.DECRYPT],
                          operations: {onInput:values => onServiceSelected(values[0])}
                      }]
                      },            
                  },
                  onRegistered:  next => {
                      next();                                            
                      waitForMobileToConnect();    
                  },
                  onRegisterFailed:function(registeredMessage){                        
                      onError(registeredMessage);
                  },
                  onSenderConnected,
                  onSenderDisconnected,
                  apikey:"k7jc3QcMPKEXGW5UC",
                  securityGroup:"1CNbWCFpsbmRQuKdd",
                  aes:"dfhrhahfhhfsdhlnnnlkfjlihjc3QcMPKEXGW5UC",
                  client:"thisShouldBeUniqueId"
                  //url:"http://localhost:1337"
             };
              
             
};