import React, {useState} from 'react';
import { useGlobalInputApp } from 'global-input-react';
import {PageContainer,Title,P,TextAreaBox, TextButton} from '../app-layout';


const encryptedContentId='encryptedContent';
const FIELDS={
    CONTENT:"encryptedContent",
    BACK:"backOnDisplayEncryptedContent"
}
const initData= content=> ({
  action:"input",
  dataType:"form",
  key:"general",
  form:{
    title:"Mobile Encryption",
    fields:[{
      id:FIELDS.CONTENT,
      label:"Content",
      type:'encrypt',      
      value:content      
    },{
      type:"info",
      value:"The encrypted content has now been sent to the application."
    },{
      id:FIELDS.BACK,
      label:"Back",
      type:"button",      
      icon:'back'      
    }]
  }
});

export default ({content,back}) => {    
      const [encryptedContent,setEncryptedContent] = useState('');
      


      const mobile=useGlobalInputApp({initData:()=>initData(content)},[content]);
      mobile.setOnchange(({field})=>{                
              switch(field.id){
                  case FIELDS.CONTENT:
                        if(field.value){
                          setEncryptedContent(field.value as string);
                        }
                        else{
                          back();
                        }
                        
                      break;
                  case FIELDS.BACK:
                        back();
                        break;  
                  default:                      
              }
        });           
        const copyToClipboard=()=>{
            const textElement=document.getElementById(encryptedContentId) as HTMLInputElement;
            textElement && textElement.select();
            document.execCommand("Copy");                      
        }
        
            return(
                                    
                <PageContainer>                    
                      <Title>Mobile Encryption</Title>    
                      <mobile.ConnectQR/>
                      {mobile.isConnected && (<>
                            {encryptedContent && (
                                <>
                                    <P>The encrypted content received from your mobile is displayed in the text box below.
                                    You may click on the "Copy" button to copy the content into your clipboard.</P>
            
                                    <TextButton label="Copy" onClick={copyToClipboard}/>
                                    
                                    <TextAreaBox id={encryptedContentId} value={encryptedContent} onChange={evt=>{
                                      
                                    }}/>                
                                </>
                            )}
                            {!encryptedContent && (
                                <>                                
                                    <P>The content is sent to your mobile for encryption</P>
                                    <P>You may follow the instruction on your mobile to encrypt the content.</P>                    
                                </>
                            )}
                      </>)}
                                
                </PageContainer>
                
            );
                
        
        
                     
};

