import React, {useEffect} from 'react';
import { useGlobalInputApp } from 'global-input-react';
import {Title,P,ContentContainer,TextAreaBox, TextButton,ErrorMessage} from '../app-layout';
import * as actions from '../actions';
const FIELDS={
    BACK:"backOnDecryption"
}
const initData={
    action:"input",
    dataType:"form", 
    form:{
        title:"Mobile Decryption",
        fields:[{
            type:'info',
            value: 'You need to operate on the connected application to provide the encrypted content for decryption.',
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
            
                <>
                    <Title>Mobile Decryption</Title>
                <P>You may paste the encrypted content into the text box below, and click the 'Send' button to send it to your mobile for decryption.</P>                                    
                    <ErrorMessage errorMessage={errorMessage}/>                
                    <TextAreaBox onChange={evt=>setContent(evt.target.value)}/> 
                    <TextButton label="Send" onClick={onSend}/>                   
                </>
            
        
        );
                     
};

