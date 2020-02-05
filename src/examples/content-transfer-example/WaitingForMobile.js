import React from 'react';
import QRCode from "qrcode.react";
import PageContainer from './generic-example-container';
import {Title,P} from './basic-app-layout';
export default ({connectionCode,level,size})=>{    
    if(!connectionCode){
        return (
                <PageContainer>                        
                <Title>Error</Title>
                <P>Connection code is empty</P>
                </PageContainer>
                )
    }
    return (
          <PageContainer>            
                <QRCode value={connectionCode} level={level} size={size}/>
                <P>Scan with Global Input App</P>
          </PageContainer>
    );    
};
    