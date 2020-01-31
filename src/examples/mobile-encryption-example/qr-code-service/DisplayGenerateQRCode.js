import React, {useEffect} from 'react';
import QRCode from "qrcode.react";
import PageContainer from '../generic-example-container';
import {Title,P,ContentContainer} from '../basic-app-layout';
import * as actions from '../actions';


export default ({content, label, size,level, dispatch,mobile}) => {
    
    useEffect(()=>{        
            const mobileConfig=buildMobileConfig({dispatch});
            mobile.sendInitData(mobileConfig);                                       
    },[]);  
    if(content){
        return(
        <ContentContainer row='center'>            
            <P>{label}</P>            
            <QRCode value={content} level={level} size={size}/>
            <P>Scan with Global Input App</P>
        </ContentContainer>
            
        )
    }
    else{
          return null;
    }    
};

const buildMobileConfig=({dispatch})=>{
        const setSize = size => actions.qrCodeService.setSize({dispatch,size});        
        const setLevel = level => actions.qrCodeService.setLevel({dispatch,level});        
        const printQRCode=()=>{
            window.print();
        };
        const backToContent=()=>{
            actions.qrCodeService.init({dispatch})
        }
        return {
            action:"input",
            dataType:"form", 
            form:{
                title:"QR Code Generated",
                fields:[{
                    label:"Size",
                    value:300,
                    type:"range",
                    minimumValue:100,
                    maximumValue:1000,
                    step:10,
                    operations:{
                        onInput:value=>setSize(value)
                    }
                },{
                    label:"Level",
                    type:"list",
                    selectType:"single",
                    value:"H",
                    items:[
                            {value:"L", label:"Low"},
                            {value:"M", label:"Medium"},
                            {value:"Q", label:"Quality"},
                            {value:"H", label:"High"}
                          ],
                    operations:{
                                  onInput:selectedValue=>{
                                          if(selectedValue && selectedValue.length){
                                                  setLevel(selectedValue[0])
                                          }
                                          else{
                                            console.error("receoved unexpected data");
                                          }
                                  }
                              },
                  },{
                    type:"button",
                    label:"Back",
                    icon:"back",
                    viewId:"footer",
                    operations:{
                        onInput:backToContent
         
                    }
                },{
                    type:"button",
                    label:"Print",
                    icon:"print",
                    viewId:"footer",
                    operations:{
                        onInput:printQRCode
         
                    }
                },{
                    type:'info',
                    value:'The connected application should be displaying a QR Code with the content received from your mobile.'
                }]
            }
        };
}