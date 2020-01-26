import React, {useReducer, useState, useRef, useEffect} from 'react';
import QRCode from "qrcode.react";
import LighBlueBackground from '../../page-components/themes/ligh-blue-background';
import * as globalInput from "./globalInput";
import textContent from './textContent';
import * as actions from './actions';
import QRCodeGenerator from './qr-code-generator';

import GenericExampleContainer from './generic-example-container';


export default ()=>{            
      
      const [state,dispatch]=useReducer(actions.reducer,actions.initialState);
      useEffect(()=>{
            const onFinish=()=>{
                  actions.onFinish({dispatch});
            }
           globalInput.connect({dispatch,onFinish});
            return ()=>{
                  globalInput.disconnect();                     
            }
      },[]);
      const {ActionType}=actions;
      const theme=LighBlueBackground;
      console.log("-------state.type:"+state.type);
      switch(state.type){
                  case ActionType.CONNECTING: return renderConnecting({theme, state, dispatch});
                  case ActionType.DISPLAY_CODE: return renderCode({theme, state, dispatch});
                  case ActionType.SELECT_SERVICE: return renderSelectService({theme, state, dispatch});
                  case ActionType.QRCODE_SERVICE_START: 
                  case ActionType.QRCODE_SERVICE_CONTENT: 
                  case ActionType.QRCODE_SERVICE_LABEL: return renderQRCodeService({theme, state, dispatch});                        
                  case ActionType.QRCODE_SERVICE_GENERATE:  return renderGenerateQRCode({theme, state, dispatch}); 
                  case ActionType.SESSION_FINISHED: return renderSessionFinished({theme, state, dispatch});
                  
                  default: return renderError({theme, state, dispatch});                              
      }
};

const renderError= ({theme, state, dispatch})=> {      
      if(!state.errorMessage){
            return null;
      }
      const {P,Title,ListLinks,Code,Concept,FirstSection,NextSection}=theme;
      return (
            <GenericExampleContainer>
                  <Title>Error</Title>
                  <P>{state.errorMessage}</P>
            </GenericExampleContainer>
      );
};
const renderConnecting=({theme, state, dispatch}) =>{
      const {P,Title,ListLinks,Code,Concept,FirstSection,NextSection}=theme;
      return(
            <GenericExampleContainer>
                  <Title>Connecting...</Title>
            </GenericExampleContainer>
      )
}


const renderCode=({theme, state, dispatch})=>{
const {connectionCode,level,size}=state;
return (

      <GenericExampleContainer>
            <QRCode value={connectionCode} level={level} size={size}/>
      </GenericExampleContainer>
      
);

};
const renderSelectService=({theme, state, dispatch})=>{
      const {P,Title,ListLinks,Code,Concept,FirstSection,NextSection}=LighBlueBackground;
      return (
            <GenericExampleContainer>
                  <Title>{textContent.serviceSelection.title}</Title>
                  <P>{textContent.serviceSelection.content}</P>
            </GenericExampleContainer>      
      )
}
const renderSessionFinished = ({theme, state, dispatch})=>{
      const {P,Title,ListLinks,Code,Concept,FirstSection,NextSection}=theme;
      return (
            <GenericExampleContainer>
            <Title>{textContent.sessionFinished.title}</Title>
            <P>{textContent.sessionFinished.content}</P>
            </GenericExampleContainer>

      
      )
}
const renderQRCodeService=({theme, state, dispatch})=>{
      const {P,Title,ListLinks,Code,Concept,FirstSection,NextSection}=theme;      
      
      
      const disContent=()=>{
            const content=actions.qrCodeService.getContent(state);
            const label=actions.qrCodeService.getLabel(state);
            if(!content && !label){
                  return null;
            }
            return (
                     <P>
                        <Concept>Content:</Concept><Code>{content}</Code>
                        <Concept>Label:</Concept><Code>{label}</Code>
                     </P>
                   )

      }
      const displayError=()=>{
            const errorMessage=actions.qrCodeService.getErrorMessage(state);      
            if(!errorMessage){
                  return null;
            }
            return (<P>{errorMessage}</P>);
      }
      return(
      <GenericExampleContainer>
      <Title>{textContent.qrCodeService.title}</Title>
      <P>{textContent.qrCodeService.content}</P>      
      {disContent()}
      {displayError()}
      </GenericExampleContainer>   
      );
         
};

const renderGenerateQRCode=({theme, state, dispatch})=>{
      console.log("========generate QR Code");
      const content=actions.qrCodeService.getContent(state);
      const label=actions.qrCodeService.getLabel(state);
      return (<QRCodeGenerator 
            
      content={content} 
      label={label}/>);
};