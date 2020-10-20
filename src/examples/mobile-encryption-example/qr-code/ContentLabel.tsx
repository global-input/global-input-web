import { useGlobalInputApp } from 'global-input-react';
import React, {useState} from 'react';


import {PageContainer,ContentContainer,Title,P,TextInputBox} from '../app-layout';

const FIELDS={
      CONTENT:"content",
      LABEL:"label",
      BACK:"backOnQrcode",
      NEXT:"nextOnQrCode"
}

const initData={
        action:"input",
        dataType:"qrcode",
        form:{
                title:"QR Code Content",                         
            fields:[{
                    id:FIELDS.CONTENT,
                    label:"Content for the QR Code",                     
                    value:""                    
            },{
                    id:FIELDS.LABEL,
                    label:"Label for the QR Code",                    
                    value:""
            },{
                id:FIELDS.BACK,    
                label:"Back", 
                type:"button",                  
                icon:"back",
                viewId:"foot"
            },{
                    id:FIELDS.NEXT,
                    label:"Next", 
                    type:"button",                      
                    icon:"continue",
                    viewId:"foot"
            },{
                    type:'info',                    
                    value:'You may press the "Encrypt" icon below to generate an encrypted content',
                    viewId:'info'
            }]
        }
    };
export default ({ back,next})=>{ 
        const [content,setContent]=useState('');
        const [label,setLabel]=useState('');

        const mobile=useGlobalInputApp({initData});
        mobile.setOnchange(({field})=>{                
                switch(field.id){
                        case FIELDS.CONTENT:
                                setContent(field.value as string);
                                 break;
                        case FIELDS.LABEL:
                                setLabel(field.value as string);                                
                                break;
                        case FIELDS.BACK:
                                back();
                                break;
                        case FIELDS.NEXT:
                                next(content,label);
                                break;
                        default:
                               
                                break;
                }
        });
        return(
                <PageContainer>    
                        
                        <Title>QR Code Generator</Title>  
                        <mobile.ConnectQR/>
                        {mobile.isConnected && (
                                <>
                                <P>Please provide the content for the QR Code. </P>                        
                                <P>You can encrypt an content using your mobile and send it to this application so you can generate an Encrypted QR Code</P>                        
                                <TextInputBox id="content" value={content} label="Content"  type="text" onChange={evt=>{
                                                setContent(evt.target.value);
                                                mobile.sendValue(FIELDS.CONTENT,evt.target.value);

                                }}/>
                                <TextInputBox id="label" value={label} label="Label" type="text" onChange={evt=>{
                                                setLabel(evt.target.value);
                                                mobile.sendValue(FIELDS.LABEL,evt.target.value);
                                }}/>
                                </>
                        )}
                
                </PageContainer>                
        
        );       
};

 
