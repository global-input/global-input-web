import React, {useEffect} from 'react';

import {Title,P,TextAreaBox, TextButton,ErrorMessage} from '../app-layout';
import * as actions from '../actions';


export default ({dispatch,globalInputApp, content,errorMessage,back}) => {
    
    useEffect(()=>{        
            const mobileConfig=buildMobileConfig({dispatch,back});
            globalInputApp.setInitData(mobileConfig);                                       
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
            
                <>
                    <Title>Encryption</Title>
                    <ErrorMessage errorMessage={errorMessage}/>
                    <P>You may paste the content into the following text box, and then click the 'Send' button to the send the content to your mobile for encryption.</P>                                        
                    <TextAreaBox onChange={evt=>setContent(evt.target.value)}/>                    
                    <TextButton label="Send" onClick={onSendContent}/>                                        
                </>
        
        );
                     
};

const buildMobileConfig=({dispatch,back})=>{
        
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
                        onInput:back
         
                    }
                }]
            }
        };
}