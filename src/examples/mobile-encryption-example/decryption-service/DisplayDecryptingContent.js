import React from 'react';
import { useGlobalInputApp } from 'global-input-react';

import {Title,P,TextAreaBox, TextButton,ErrorMessage} from '../app-layout';
import * as actions from '../actions';

const decryptedContentId='decryptedContent'

const FIELDS={
  CONTENT:"contentToDecrypt",
  BACK:"backOnContentToDecrypt"
}
const initData = content => ({
  action:"input",
  dataType:"form",
  key:"general",
  form:{
    title:"Mobile Decryption",
    fields:[{
      id:FIELDS.CONTENT,
      label:"Content",
      type:'decrypt',      
      value:content,      
    },{
      type:"info",
      value:"The decrypted content has now been sent to the application."
    },{
      id:FIELDS.BACK,
      label:"Back",
      type:"button",      
      icon:'back'
    }]
  }
});

export default ({dispatch,mobile, content,decryptedContent,errorMessage}) => {
  const {setOnFieldChanged}=useGlobalInputApp({initData:()=>initData(content),mobile},[content]);
  setOnFieldChanged(({field})=>{
          switch(field.id){
              case FIELDS.CONTENT:
                if(!field.value){
                  actions.decryptionService.failed({dispatch, errorMessage:'You might have selected a wrong encryption key or there was something wrong with the encrypted content.'});
                }
                else{
                  actions.decryptionService.setDecryptedContent({dispatch,decryptedContent:field.value});
                }
                    break;
              case FIELDS.BACK:
                  actions.decryptionService.init({dispatch});
                  break;                        
          }
    });           
    
        const copyToClipboard=()=>{
            document.getElementById(decryptedContentId).select();
            document.execCommand("Copy");                      
        }
        if(decryptedContent){
            return(
                
                    <>
                      <Title>Mobile Decryption</Title>
                    <P>The encrypted content received from your mobile is displayed in the following text box.
                    You may click on the "Copy" button to copy the content into your clipboard</P>
                    
                        <TextButton label="Copy" onClick={copyToClipboard}/>
                        <ErrorMessage errorMessage={errorMessage}/>                        
                        <TextAreaBox id={decryptedContentId} value={decryptedContent}/>
                        
                    </>
                
            );
                
        }
        else{
            return(
                
                  <>
                    <Title>Mobile Decryption</Title>
                    <P>The encrypted content is sent to your mobile for decryption. Now you can operate on your mobile to decrypt the content</P>
                  </>
               
            );
        }
        
                     
};

