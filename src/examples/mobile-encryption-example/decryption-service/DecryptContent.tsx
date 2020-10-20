import React, {useState} from 'react';
import { useGlobalInputApp } from 'global-input-react';
import {PageContainer,Title,P,TextAreaBox, TextButton} from '../app-layout';


const decryptedContentId='encryptedContent';
const FIELDS={
    CONTENT:"decryptedContent",
    BACK:"backOnContentToDecrypt"
}
const initData= content=> ({
  action:"input",
  dataType:"form",
  key:"general",
  form:{
    title:"Mobile Decryption",
    fields:[{
      id:FIELDS.CONTENT,
      label:"Content",
      type:'decrypt',      
      value:content      
    },{
      type:"info",
      value:"The decrypted content has now been sent to the application."
    },{
      id:FIELDS.BACK,
      label:"Back",
      type:"button",      
      icon:'back'      
    }]
  }
});

export default ({content,back}) => {    
      const [decryptedContent,setDecryptedContent] = useState('');
      


      const mobile=useGlobalInputApp({initData:()=>initData(content)},[content]);
      mobile.setOnchange(({field})=>{                
              switch(field.id){
                  case FIELDS.CONTENT:
                       if(field.value){
                            setDecryptedContent(field.value as string);
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
            const textElement=document.getElementById(decryptedContentId) as HTMLInputElement;
            textElement && textElement.select();
            document.execCommand("Copy");                      
        }
        
            return(
                <PageContainer> 
            <mobile.ConnectQR/>
            {mobile.isConnected && (<>
                      <Title>Mobile Decryption</Title>    
                        {decryptedContent && (<>
                                <P>The encrypted content received from your mobile is displayed in the following text box.
                            You may click on the "Copy" button to copy the content into your clipboard</P>
                    
                                <TextButton label="Copy" onClick={copyToClipboard}/>
                                
                                <TextAreaBox id={decryptedContentId} value={decryptedContent} onChange={evt=>{
                                  
                                }}/>                
                            </>
                        )}
                        {!decryptedContent && (
                            <>                                
                                <Title>Mobile Decryption</Title>
                                <P>The encrypted content is sent to your mobile for decryption. Now you can operate on your mobile to decrypt the content</P>
                            </>
                        )}
                            
           </>)}
                </PageContainer>
                
            );
                
        
        
                     
};

