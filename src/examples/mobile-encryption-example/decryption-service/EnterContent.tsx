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
                    <Title>Mobile Decryption</Title>
                <P>You may paste the encrypted content into the text box below, and click the 'Send' button to send it to your mobile for decryption.</P> 
                    <TextAreaBox id="contentToDecrypt" onChange={evt=>setContent(evt.target.value)} value={content}/> 
                    <TextButton label="Send" onClick={onSendContent}/>
                </>            
            )}
            </PageContainer>
        
        );
                     
};

