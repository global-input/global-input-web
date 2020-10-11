import React, {useEffect} from 'react';
import { useGlobalInputApp } from 'global-input-react';
import {Title,P,TextAreaBox, TextButton,ErrorMessage} from '../app-layout';
import * as actions from '../actions';

const FIELDS={
    BACK:"backOnMobileEncryption"
}
const initData={
    action:"input",
    dataType:"form", 
    form:{
        title:"Mobile Encryption",
        fields:[{
            type:'info',
            value: 'You need to operate on the connected application to provide the content for encryption.',
        },{
            id:FIELDS.BACK,
            type:"button",
            label:"Back",
            icon:"back"            
        }]
    }
};

export default ({dispatch,mobile, content,errorMessage,back}) => {
    const {setOnFieldChanged}=useGlobalInputApp({initData,mobile});
        setOnFieldChanged(({field})=>{
              switch(field.id){
                  case FIELDS.BACK:
                        back();
                        break;                        
              }
        });    
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

