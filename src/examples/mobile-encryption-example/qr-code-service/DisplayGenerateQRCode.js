import React, {useEffect} from 'react';
import QRCode from "qrcode.react";
import { useGlobalInputApp } from 'global-input-react';

import {P,ContentContainer,A} from '../app-layout';
import * as actions from '../actions';
import  './no-print.css';

const FIELDS={
    SIZE:"QRCODE_SIZE",
    LEVEL:"QRCODE_LEVEL",
    BACK:"BACK_ON_QRCODE_GENERATE",
    PRINT:"PrintQRCode"


}
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
export default ({content, label, size,level, dispatch,mobile}) => {
    const {setOnFieldChanged}=useGlobalInputApp({initData,mobile});
        setOnFieldChanged(({field})=>{
            switch(field.id){
                case FIELDS.SIZE:                    
                    actions.qrCodeService.setSize({dispatch,size:field.value});         
                    break;
                case FIELDS.LEVEL:
                    if(field.value && field.value.length){
                        actions.qrCodeService.setLevel({dispatch,level:field.value[0]});                                
                    }
                    else{
                        console.error("receoved unexpected data");
                    }
                    break;
                case FIELDS.BACK:
                    actions.qrCodeService.init({dispatch});
                    break;
                case FIELDS.PRINT:
                    window.print();
                    break;
                default:                                        
            }
        });    
    if(content){
        return(
        <ContentContainer row="center">          
            <P>{label}</P>            
            <QRCode value={content} level={level} size={size}/>
            <P>Scan with <A href="https://globalinput.co.uk/">Global Input App</A></P>
        </ContentContainer>
            
        )
    }
    else{
          return null;
    }    
};

