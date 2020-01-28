import React, {useEffect} from 'react';
import * as actions from '../actions';


import PageContainer from '../generic-example-container';
import {Title,P,Code,Concept,ErrorMessage} from '../basic-app-layout';

export default ({content,label, errorMessage, dispatch,mobile})=>{   
        useEffect(()=>{  
                const mobileConfig=buildMobileConfig({dispatch});            
                mobile.sendInitData(mobileConfig);                                       
                
        },[]);

        return(
        <PageContainer>
                <Title>Encrypted QR Code Service</Title>  
                <P>Please operate on your mobile to encrypt content to use for QR Code</P>                                
                <ErrorMessage errorMessage={errorMessage}/>
                <P>
                                <Concept>Content:</Concept><Code>{content}</Code>
                                <Concept>Label:</Concept><Code>{label}</Code>
                </P>                
                
        </PageContainer>   
        );       
};


const buildMobileConfig=({dispatch})=>{
        const setCodeContent = content => actions.qrCodeService.setContent({dispatch,content});
        const setLabel = label => actions.qrCodeService.setLabel({dispatch,label});
        const generateQRCode=()=>{
                    actions.qrCodeService.generate({dispatch});
        };

        return {
                action:"input",
                dataType:"qrcode",
                form:{
                        title:"QR Code Generation",                         
                    fields:[{
                            label:"Content of the QR Code", 
                            id:"content",                            
                            value:"",
                            operations:{
                                    onInput:setCodeContent
                            }
                    },{
                            label:"Label",
                            id:"label",
                            value:"",                          
                            operations:{
                                onInput:setLabel
                            }
                    },{
                            label:"Next", 
                            type:"button",  
                            id:"next",
                            icon:"continue",                                                 
                            operations:{
                                onInput:generateQRCode
                            }
                    }]
                }
            };
}