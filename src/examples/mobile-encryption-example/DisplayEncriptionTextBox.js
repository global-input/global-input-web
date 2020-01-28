import React, {useEffect} from 'react';
import QRCode from "qrcode.react";
import PageContainer from './generic-example-container';
import {Title,P,CenterContainer} from './basic-app-layout';
import * as actions from './actions';


export default ({dispatch,mobile}) => {
    
    useEffect(()=>{        
            const mobileConfig=buildMobileConfig({dispatch});
            mobile.sendInitData(mobileConfig);                                       
    },[]);  
    if(content){
        return(
        <CenterContainer>
                
        </CenterContainer>
            
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
        return {
            action:"input",
            dataType:"form", 
            form:{
                title:"Encrypted QR Code",
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
                    label:"Print",
                    icon:"print",
                    viewId:"footer",
                    operations:{
                        onInput:printQRCode
         
                    }
                }]
            }
        };
}