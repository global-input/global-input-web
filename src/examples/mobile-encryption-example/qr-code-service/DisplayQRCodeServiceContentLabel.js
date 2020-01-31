import React, {useEffect} from 'react';
import * as actions from '../actions';


import PageContainer from '../generic-example-container';
import {Title,P,TextInputBox,ErrorMessage, ContentContainer} from '../basic-app-layout';

export default ({content,label, errorMessage, dispatch,mobile,backToServiceSelection})=>{ 
        useEffect(()=>{  
                const mobileConfig=buildMobileConfig({dispatch,backToServiceSelection});            
                mobile.sendInitData(mobileConfig);                                       
                
        },[]);

        return(
                <ContentContainer>
                        <Title>QR Code Generation</Title>  
                        <P>Please operate on your mobile to build an encrypted content. </P>                        
                        <ErrorMessage errorMessage={errorMessage}/>
                        <TextInputBox id="content" value={content} label="Content" readOnly={true}/>
                        <TextInputBox id="label" value={label} label="Label" readOnly={true}/>
                </ContentContainer>        
        
        );       
};

 
const buildMobileConfig = ({dispatch,backToServiceSelection}) => {
        
        const setCodeContent = content => actions.qrCodeService.setContent({dispatch,content});
        const setLabel = label => actions.qrCodeService.setLabel({dispatch,label});
        const generateQRCode = () => {                                           
                actions.qrCodeService.generate({dispatch});                
        };
        return {
                action:"input",
                dataType:"qrcode",
                form:{
                        title:"QR Code Content",                         
                    fields:[{
                            label:"Content for the QR Code", 
                            id:"content",                            
                            value:"",
                            operations:{
                                    onInput:setCodeContent
                            }
                    },{
                            label:"Label for the QR Code",
                            id:"label",
                            value:"",                          
                            operations:{
                                onInput:setLabel
                            } 
                    },{
                        label:"Back", 
                        type:"button",  
                        id:"back",
                        icon:"back",
                        viewId:"foot",                                                 
                        operations:{
                            onInput:backToServiceSelection
                        }
                    },{
                            label:"Next", 
                            type:"button",  
                            id:"next",
                            icon:"continue",
                            viewId:"foot",                                                 
                            operations:{
                                onInput:generateQRCode
                            }
                    },{
                            type:'info',
                            value:'You may press the "Encrypt" icon below to generate an encrypted content',
                            viewId:'info'
                    }]
                }
            };
}