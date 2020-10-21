import React,{useState} from 'react';
import { useGlobalInputApp } from 'global-input-react';
import QRCode from "qrcode.react";
import  './no-print.css';
import {P,Title,ContentContainer,A,PageContainer} from '../app-layout';
const FIELDS={
    SIZE:"QRCODE_SIZE",
    LEVEL:"QRCODE_LEVEL",
    BACK:"BACK_ON_QRCODE_GENERATE",
    PRINT:"PrintQRCode"
};

const initData = {
    action:"input",
    dataType:"form", 
    form:{
        title:"QR Code Generated",
        fields:[{
            id:FIELDS.SIZE,
            label:"Size",
            value:300,
            type:"range",
            minimumValue:100,
            maximumValue:1000,
            step:10            
        },{
            id:FIELDS.LEVEL,
            label:"Level",
            type:"list",
            selectType:"single",
            value:"H",
            items:[
                    {value:"L", label:"Low"},
                    {value:"M", label:"Medium"},
                    {value:"Q", label:"Quality"},
                    {value:"H", label:"High"}
                  ]            
          },{
            id:FIELDS.BACK,
            type:"button",
            label:"Back",
            icon:"back",
            viewId:"footer"            
        },{
            id:FIELDS.PRINT,
            type:"button",
            label:"Print",
            icon:"print",
            viewId:"footer",            
        },{
            type:'info',
            value:'The connected application should be displaying a QR Code with the content received from your mobile.'
        }]
    }
};

export default ({content, label,back}) => {
    const mobile=useGlobalInputApp({initData});
    const [size,setSize]=useState(300);
    const [level,setLevel]=useState('H');

    mobile.setOnchange(({field})=>{
            switch(field.id){
                case FIELDS.SIZE:
                    setSize(field.value as number);
                    break;
                case FIELDS.LEVEL:
                    setLevel(field.value as string);
                    break;
                case FIELDS.BACK:
                    back();
                    break;
                case FIELDS.PRINT:
                    window.print();
                    break;
                default:                                        
            }
        });    
    if(content){
        return(
        <PageContainer>        
            <Title>Mobile Encryption</Title>                                    
            <mobile.ConnectQR/>
            {mobile.isConnected && (
                <ContentContainer row="center">          
                    <P>{label}</P>            
                    <QRCode value={content} level={level} size={size}/>
                    <P>Scan with <A href="https://globalinput.co.uk/">Global Input App</A></P>
                </ContentContainer>            
            )}
        
        </PageContainer>
            
        )
    }
    else{
          return null;
    }    
};