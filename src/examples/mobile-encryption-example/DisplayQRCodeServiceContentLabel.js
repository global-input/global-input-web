import React, {useEffect} from 'react';
import * as actions from './actions';
import * as mobile from "./mobile";

import PageContainer from './generic-example-container';
import {Title,P,Code,Concept} from '../../page-components/themes/basic-app-layout';

export default ({content,label, errorMessage, dispatch})=>{   
        useEffect(()=>{            
                const setCodeContent = content => actions.qrCodeService.setContent({dispatch,content});
                const setLabel = label => actions.qrCodeService.setLabel({dispatch,label});
                const generateQRCode=()=>{
                    actions.qrCodeService.generate({dispatch});
                };            
                mobile.qrCodeService.displayContentLabel({setCodeContent,setLabel,generateQRCode});            
        },[]);

        return(
        <PageContainer>
                <Title>Encrypted QR Code Service</Title>  
                <P>Please operate on your mobile to encrypt content to use for QR Code</P>                                
                <P>
                                <Concept>Content:</Concept><Code>{content}</Code>
                                <Concept>Label:</Concept><Code>{label}</Code>
                </P>                
                <P>{errorMessage}</P>
        </PageContainer>   
        );       
};
