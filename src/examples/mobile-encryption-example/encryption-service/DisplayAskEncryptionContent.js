import React, {useEffect} from 'react';
import QRCode from "qrcode.react";
import PageContainer from '../generic-example-container';
import {Title,P,ContentContainer,TextAreaBox, TextButton,ErrorMessage} from '../basic-app-layout';
import * as actions from '../actions';


export default ({dispatch,mobile, content,errorMessage,backToServiceSelection}) => {
    
    useEffect(()=>{        
            const mobileConfig=buildMobileConfig({dispatch,backToServiceSelection});
            mobile.sendInitData(mobileConfig);                                       
    },[]);  
        const setContent= content => actions.encryptionService.setContent({content,dispatch});
        const onSendContent=()=>{
            
            if(!content){
                actions.encryptionService.setContent({dispatch,content,errorMessage:'Please provide a content before clicking on the "Send" button.'});
            }
            else{
                actions.encryptionService.encrypt(dispatch);
            }
            
        }
        return(
            
                <ContentContainer>
                    <Title>Encryption</Title>
                    <ErrorMessage errorMessage={errorMessage}/>
                    <P>You may paste the content into the following text box, and then click the 'Send' button to the send the content to your mobile for encryption.</P>                                        
                    <TextAreaBox onChange={evt=>setContent(evt.target.value)}/>                    
                    <TextButton label="Send" onClick={onSendContent}/>                                        
                </ContentContainer>
        
        );
                     
};

const buildMobileConfig=({dispatch,backToServiceSelection})=>{
        
        return {
            action:"input",
            dataType:"form", 
            form:{
                title:"Mobile Encryption",
                fields:[{
                    type:'info',
                    value: 'You need to operate on the connected application to provide the content for encryption.',
                },{
                    type:"button",
                    label:"Back",
                    icon:"back",                    
                    operations:{
                        onInput:backToServiceSelection
         
                    }
                }]
            }
        };
}