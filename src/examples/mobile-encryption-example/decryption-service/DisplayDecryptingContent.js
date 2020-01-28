import React, {useEffect} from 'react';

import PageContainer from '../generic-example-container';
import {Title,P,CenterContainer,TextAreaBox, TextButton,ErrorMessage} from '../basic-app-layout';
import * as actions from '../actions';

const decryptedContentId='decryptedContent'

export default ({dispatch,mobile, content,decryptedContent,errorMessage}) => {
    
    useEffect(()=>{        
            const mobileConfig=buildMobileConfig({dispatch,content});
            mobile.sendInitData(mobileConfig);                                       
    },[]);          
        const copyToClipboard=()=>{
            document.getElementById(decryptedContentId).select();
            document.execCommand("Copy");                      
        }
        if(decryptedContent){
            return(
                <PageContainer>
                    <P>The encrypted content received from your mobile is displayed in the following text box.</P>
                    <P>You may click on the "Copy" button to copy the content into your clipboard</P>
                    
                    <CenterContainer type='right'>
                        <TextButton label="Copy" onClick={copyToClipboard}/>
                        <ErrorMessage errorMessage={errorMessage}/>
                        <CenterContainer>
                                <TextAreaBox id={decryptedContentId} value={decryptedContent}/>
                        </CenterContainer>                    
                    </CenterContainer>
                </PageContainer>        
            );
                
        }
        else{
            return(
                <PageContainer>
                    <Title>Mobile Decryption</Title>
                    <P>The encrypted content is sent to your mobile for your decryption</P>
                </PageContainer>        
            );
        }
        
                     
};

const buildMobileConfig=({dispatch,content})=>{
        const onDecryptedContent=decryptedContent=>{
            actions.decryptionService.setDecryptedContent({dispatch,decryptedContent});
        };
        const finishDecryption=()=>{

        }
        return {
            action:"input",
            dataType:"form",
            key:"general",
            form:{
              title:"Mobile Decryption",
              fields:[{
                label:"Content",
                type:'decrypt',
                id:"content",
                value:content,
                operations:{
                  onInput:onDecryptedContent
                }
              },{
                type:"info",
                value:"The decrypted content has now been sent to the application."
              },{
                label:"Finish",
                type:"button",
                id:"finish",                            
                operations:{
                  onInput:finishDecryption
                }
              }]
            }
       };
}