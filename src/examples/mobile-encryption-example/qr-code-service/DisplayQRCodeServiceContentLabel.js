import { useGlobalInputApp } from 'global-input-react';
import React, {useEffect} from 'react';
import * as actions from '../actions';

import {Title,P,TextInputBox,ErrorMessage} from '../app-layout';

const FIELDS={
      CONTENT:"qrCodeContent",
      LABEL:"qrCodeLabel",
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
export default ({content,label, errorMessage, dispatch,back,mobile})=>{ 
        
        const {setOnFieldChanged}=useGlobalInputApp({initData,mobile});
        setOnFieldChanged(({field})=>{
                switch(field.id){
                        case FIELDS.CONTENT:
                                 actions.qrCodeService.setContent({dispatch,content:field.value});
                                 break;
                        case FIELDS.LABEL:
                                actions.qrCodeService.setLabel({dispatch,label:field.value});
                                break;
                        case FIELDS.BACK:
                                back();
                                break;
                        case FIELDS.NEXT:
                                actions.qrCodeService.generate({dispatch});
                                break;
                }
        });



        return(
                <>
                        <Title>QR Code Generation</Title>  
                        <P>Please operate on your mobile to build an encrypted content. </P>                        
                        <ErrorMessage errorMessage={errorMessage}/>
                        <TextInputBox id="content" value={content} label="Content" readOnly={true}/>
                        <TextInputBox id="label" value={label} label="Label" readOnly={true}/>
                </>        
        
        );       
};

 
