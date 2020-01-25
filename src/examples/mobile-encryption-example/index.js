import React, {useReducer, useState, useRef, useEffect} from 'react';
import QRCode from "qrcode.react";
import LighBlueBackground from '../../page-components/themes/ligh-blue-background';
import styles from './styles';
import * as globalInput from "./globalInput";
import textContent from './textContent';
import * as actions from './actions';



export default ()=>{            
      
      const [state,dispatch]=useReducer(actions.reducer,actions.initialState);
      useEffect(()=>{
            globalInput.connect({dispatch});
            return ()=>{
                  globalInput.disconnect();                     
            }
      },[]);
    return(
        <div style={styles.container}>
           <div style={styles.title}>{textContent.title}</div>
           <div style={styles.topControl}>
           <span style={styles.githuburl}><a href={textContent.githuburl} target="_blank">{textContent.githuburl}</a> </span>                
          </div>
          <div style={styles.areaContainer}>
              {renderMain(state,dispatch)}
          </div>
        </div>
      );
};
const renderMain= (state,dispatch)=>{    
            const {ActionType}=actions;
            switch(state.type){
                        case ActionType.CONNECTING: return renderConnecting();
                        case ActionType.DISPLAY_CODE: return renderCode(state);
                        case ActionType.SELECT_SERVICE: return renderSelectService(state);
                        case ActionType.QRCODE_SERVICE: return renderQRCodeService(state);                        
                        default: return renderError(state);                              
            }

};

const renderError= state=> {
      if(!state.errorMessage){
            return null;
      }
      return (<div style={styles.errorMessage}>{state.errorMessage}</div>);

};
const renderConnecting=() =>{
      return(<div style={styles.loading}>Connecting...</div>)
}


const renderCode=state=>{
const {connectionCode,level,size}=state;
return (<QRCode value={connectionCode} level={level} size={size}/>);
};
const renderSelectService=state=>{
      const {P,Title,ListLinks,Code,Concept,FirstSection,NextSection}=LighBlueBackground;
      return (
            <>
            <Title>{textContent.serviceSelection.title}</Title>
            <P>{textContent.serviceSelection.content}</P>
            </>

      
      )
}
const renderQRCodeService=state=>{
            
};

