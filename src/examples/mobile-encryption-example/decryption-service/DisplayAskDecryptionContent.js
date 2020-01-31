import React, {useEffect} from 'react';
import PageContainer from '../generic-example-container';
import {Title,P,ContentContainer,TextAreaBox, TextButton,ErrorMessage} from '../basic-app-layout';
import * as actions from '../actions';


export default ({dispatch,mobile, content,errorMessage,backToServiceSelection}) => {
    
    useEffect(()=>{        
            const mobileConfig=buildMobileConfig({dispatch,backToServiceSelection});
            mobile.sendInitData(mobileConfig);                                       
    },[]);  
        const setContent= content => actions.decryptionService.setContent({content,dispatch});
        const onSend=()=>{
            
            if(!content){                
                actions.decryptionService.setContent({dispatch,content,errorMessage:'Please provide the content to decrypt before clicking on the "Send" button.'});
            }
            else{
                actions.decryptionService.decrypt(dispatch);
            }
            
        }
        return(
            
                <ContentContainer>
                    <Title>Mobile Decryption</Title>
                <P>You may paste the encrypted content into the text box below, and click the 'Send' button to send it to your mobile for decryption.</P>                
                    <TextButton label="Send" onClick={onSend}/>
                    <ErrorMessage errorMessage={errorMessage}/>                
                    <TextAreaBox onChange={evt=>setContent(evt.target.value)}/>                    
                </ContentContainer>

            
        
        );
                     
};

const buildMobileConfig=({dispatch,backToServiceSelection})=>{
        return {
            action:"input",
            dataType:"form", 
            form:{
                title:"Mobile Decryption",
                fields:[{
                    type:'info',
                    value: 'You need to operate on the connected application to provide the encrypted content for decryption.',
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
};