import React, {useEffect} from 'react';


import {Title,P,TextAreaBox, TextButton,ErrorMessage} from '../app-layout';
import * as actions from '../actions';

const encryptedContentId='encryptedContent'

export default ({dispatch,globalInputApp, content,encryptedContent,errorMessage}) => {
    
    useEffect(()=>{        
            const mobileConfig=buildMobileConfig({dispatch,content});
            globalInputApp.setInitData(mobileConfig);                                       
    },[]);          
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

const buildMobileConfig=({dispatch,content})=>{
        const onEncryptedContent=encryptedContent=>{
            actions.encryptionService.setEncryptedContent({dispatch,encryptedContent});
        };
        const finishEncryption=()=>{

        }
        return {
            action:"input",
            dataType:"form",
            key:"general",
            form:{
              title:"Mobile Encryption",
              fields:[{
                label:"Content",
                type:'encrypt',
                id:"content",
                value:content,
                operations:{
                  onInput:onEncryptedContent
                }
              },{
                type:"info",
                value:"The encrypted content has now been sent to the application."
              },{
                label:"Back",
                type:"button",
                id:"back",
                icon:'back',                            
                operations:{
                  onInput:() => actions.encryptionService.init({dispatch})
                }
              }]
            }
       };
}