import React, {useState} from 'react';
import { useGlobalInputApp } from 'global-input-react';
import {Title,P,TextAreaBox, TextButton,PageContainer} from '../app-layout';


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

export default ({back, next}) => {
    const [content,setContent]=useState('');

    const mobile=useGlobalInputApp({initData});
    mobile.setOnchange(({field})=>{
            switch(field.id){
                case FIELDS.BACK:
                    back();                
            }
    })   
    const onSendContent=()=>next(content);  
        return(
            <PageContainer>
                <Title>Content Encryption</Title>                    
                <mobile.ConnectQR/>
            {mobile.isConnected && (
                <>                               
                    <P>You may paste the content into the following text box, and then click the 'Send' button to the send the content to your mobile for encryption.</P>                                        
                    <TextAreaBox id="contentToEncrypt" onChange={evt=>setContent(evt.target.value)} value={content}/>                    
                    <TextButton label="Send" onClick={onSendContent}/>
                </>            
            )}
            </PageContainer>
        
        );
                     
};

