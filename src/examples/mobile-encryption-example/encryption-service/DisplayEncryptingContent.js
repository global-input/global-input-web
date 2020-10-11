import React, {useEffect} from 'react';
import { useGlobalInputApp } from 'global-input-react';

import {Title,P,TextAreaBox, TextButton,ErrorMessage} from '../app-layout';
import * as actions from '../actions';

const encryptedContentId='encryptedContent';
const FIELDS={
    CONTENT:"encryptedContent",
    BACK:"backOnDisplayEncryptedContent"
}
const initData= content=> ({
  action:"input",
  dataType:"form",
  key:"general",
  form:{
    title:"Mobile Encryption",
    fields:[{
      id:FIELDS.CONTENT,
      label:"Content",
      type:'encrypt',      
      value:content      
    },{
      type:"info",
      value:"The encrypted content has now been sent to the application."
    },{
      id:FIELDS.BACK,
      label:"Back",
      type:"button",      
      icon:'back'      
    }]
  }
});

export default ({dispatch,mobile, content,encryptedContent,errorMessage}) => {
      const {setOnFieldChanged}=useGlobalInputApp({initData:()=>initData(content),mobile},[content]);
      setOnFieldChanged(({field})=>{
              switch(field.id){
                  case FIELDS.CONTENT:
                        actions.encryptionService.setEncryptedContent({dispatch,encryptedContent:field.value});
                        break;
                  case FIELDS.BACK:
                        actions.encryptionService.init({dispatch})
                        break;                        
              }
        });           
        const copyToClipboard=()=>{
            document.getElementById(encryptedContentId).select();
            document.execCommand("Copy");                      
        }
        if(encryptedContent){
            return(
                
                    
                    <>
                      <Title>Mobile Encryption</Title>    
                        <P>The encrypted content received from your mobile is displayed in the text box below.
                        You may click on the "Copy" button to copy the content into your clipboard.</P>
                    
                        <TextButton label="Copy" onClick={copyToClipboard}/>
                        <ErrorMessage errorMessage={errorMessage}/>                        
                        <TextAreaBox id={encryptedContentId} value={encryptedContent}/>                        
                    </>
                
            );
                
        }
        else{
            return(
                
                  
                    
                    <>
                    <Title>Mobile Encryption</Title>
                      <P>The content is sent to your mobile for encryption</P>
                      <P>You may follow the instruction on your mobile to encrypt the content.</P>                    
                    </>
                
            );
        }
        
                     
};

