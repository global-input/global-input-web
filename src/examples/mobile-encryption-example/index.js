import React, {useReducer, useState, useRef, useEffect} from 'react';


import * as mobile from "./mobile";
import textContent from './textContent';
import * as actions from './actions';
//import QRCodeGenerator from './qr-code-generator';
//import EncryptionService from './encryption-service';

import DisplayConnecting from './DisplayConnecting';
import DisplayErrorMessage from './DisplayErrorMessage';
import DisplayConnectionCode from './DisplayConnectionCode';
import DisplayServiceSelection from './DisplayServiceSelection';
import DisplaySessionDisconnected from './DisplaySessionDisconnected';


import DisplayQRCodeServiceContentLabel from './DisplayQRCodeServiceContentLabel';
import DisplayGenerateQRCode from './DisplayGenerateQRCode';


export default ()=>{            
      
      const [state,dispatch]=useReducer(actions.reducer,actions.initialState);
      useEffect(()=>{                  
                  const onWaitConnect=connectionCode=>{
                        actions.displayQRCode({dispatch,connectionCode})
                  };
                  const onSenderConnected=(sender,senders)=>{                  
                        actions.selectService({dispatch});
                  };
                  const onSenderDisconnected=(sender,senders)=>{
                        mobile.disconnect();
                        actions.onFinish({dispatch});
                  };
                  const onQRCodeServiceSelected=()=>{
                        actions.qrCodeService.init({dispatch});
                  }
                  const onEncryptedServiceSelected=()=>{
                        actions.encryptionService.init({dispatch});
                  };
                  const onDecryptedServiceSelected=()=>{
                        actions.decryptionService.init({dispatch});
                  };
                  const onError=errorMessage=>{
                        actions.setErrorMessage({dispatch,errorMessage});
                  };

                  mobile.connect({
                        onWaitConnect,
                        onError,
                        onSenderConnected,
                        onSenderDisconnected,
                        onQRCodeServiceSelected,
                        onEncryptedServiceSelected,
                        onDecryptedServiceSelected
                  });
                  return ()=>{
                        mobile.disconnect();                     
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
                              return (<DisplayQRCodeServiceContentLabel  dispatch={dispatch} {...actions.qrCodeService.getData(state)}/>);
                  case ActionType.QRCODE_SERVICE.GENERATE_QR_CODE:  
                  case ActionType.QRCODE_SERVICE.SET_LEVEL:
                  case ActionType.QRCODE_SERVICE.SET_SIZE:
                              return (<DisplayGenerateQRCode dispatch={dispatch} {...actions.qrCodeService.getData(state)}/>)
                  case ActionType.SESSION_FINISHED: 
                              return (<DisplaySessionDisconnected/>);

                  case ActionType.ENCRYPTION_SERVICE: 
                     //return renderEncryptionService({theme, state, dispatch});
                  
                  default: return (<DisplayErrorMessage {...state}/>);
      }
};

const renderError= ({theme, state,PageContainer})=> {
      const {P,Title}=theme;
      return (
            <PageContainer>
                  <Title>Error</Title>
                  <P>{state.errorMessage}</P>
            </PageContainer>
      );
};
const renderConnecting=({theme, state,PageContainer}) =>{      
      const {Title,P}=theme;
      if(state.errorMessage){
            return renderError({theme, state});      
      }
      return(
            <PageContainer>
                  <Title>Wait</Title>
                  <P>Loading...</P>
            </PageContainer>
      );
}


const renderSelectService=({theme, PageContainer})=>{
      const {P,Title}=theme;
      return (
            <PageContainer>
                  <Title>{textContent.serviceSelection.title}</Title>
                  <P>{textContent.serviceSelection.content}</P>
            </PageContainer>   
      )
}


/*
const qrCodeService = {
      renderInit:({theme,PageContainer})=>{
            const {P,Title}=theme;
          return(
            <PageContainer>
                  <Title>{textContent.qrCodeService.title}</Title>
                  <P>{textContent.qrCodeService.content}</P>                  
            </PageContainer>
            );  
      },
      displayContentLabel: ({theme, state,Container})=>{
            const {P,Title,Code,Concept}=theme;      
            const {content,label}=actions.qrCodeService.getData(state);            
            return(<DisplayContentLabel 
                        <Container>
                              <Title>{textContent.qrCodeService.title}</Title>
                              <P>{textContent.qrCodeService.content}</P>      
                              <P>
                                    <Concept>Content:</Concept><Code>{content}</Code>
                                    <Concept>Label:</Concept><Code>{label}</Code>
                              </P>
                              <P>{state.errorMessage}</P>
                        </Container>   
            );
               
      }
}


const renderGenerateQRCode=({theme, state, dispatch})=>{      
      const content=actions.qrCodeService.getContent(state);
      const label=actions.qrCodeService.getLabel(state);
      return (<QRCodeGenerator 
      theme={theme}      
      content={content} 
      label={label}/>);
};


const renderEncryptionService = ({theme, state, dispatch})=>{
      return (<EncryptionService theme={theme} Container={GenericExampleContainer}/>);
}
*/