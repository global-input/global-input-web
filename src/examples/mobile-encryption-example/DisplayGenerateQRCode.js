import React, {useEffect} from 'react';
import QRCode from "qrcode.react";
import PageContainer from './generic-example-container';
import {Title,P,CenterContainer} from '../../page-components/themes/basic-app-layout';
import * as actions from './actions';
import * as mobile from "./mobile";

export default ({content, label, size,level, dispatch}) => {
    
    useEffect(()=>{
        const setSize = size => actions.qrCodeService.setSize({dispatch,size});        
        const setLevel = level => actions.qrCodeService.setLevel({dispatch,level});        
        const printQRCode=()=>{
            window.print();
        }
        mobile.qrCodeService.generateQRCode({setSize,setLevel,printQRCode});         
    },[]);  
    if(content){
        return(
        <CenterContainer>
            <P>{label}</P>
            <QRCode value={content} level={level} size={size}/>
            <P>Scan with Global Input App</P>
        </CenterContainer>
            
        )
    }
    else{
          return null;
    }    
};

