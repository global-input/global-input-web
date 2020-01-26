import {createMessageConnector} from 'global-input-message'; ////global-input-message////
import * as actions from './actions';
import { generatePath } from 'react-router-dom';


let globalInputConnector=null;
const ServicesProvided={
    QRCODE:{label:"Create Encrypted QR Codes",value:"qrcode"},
    ENCRYPT:{label:"Encrypt Content",value:"encrypt"},
    DECRYPT:{label:"Decrypt Content",value:"decrypt"}
};

export const disconnect= ()=>{
    if(!globalInputConnector){
        return;
    }
    globalInputConnector.disconnect();
    globalInputConnector=null;
}
export const connect = ({dispatch,onFinish}) => {
  if(globalInputConnector){
      return;
  }
  const displayQRCode = () => {
    const connectionCode=globalInputConnector.buildInputCodeData();
    console.log("[["+connectionCode+"]]");
    actions.displayQRCode({dispatch,connectionCode})
  };
  const onInput=()=>{

  };
  const onSenderConnected=(sender,senders)=>{
        console.log("-----sender connected");
        actions.selectService({dispatch});
  };
  const onSenderDisconnected=(sender,senders)=>{
      disconnect();
      onFinish();  
  }

  const onServiceSelected=value=>{
      console.log("------onServiceSelected:"+value);

      switch(value){         

           case ServicesProvided.QRCODE.value: 
                         qrCodeService.startService({dispatch});
                         break;
           case  ServicesProvided.ENCRYPT.value: 
                         actions.gotoEncryptionService({dispatch});
                         break;
           case  ServicesProvided.DECRYPT.value:
                         actions.gotoDecryptionService({dispatch});
                         break;
      }
  };

  globalInputConnector=createMessageConnector();
                const mobileConfig = {
                    initData: {
                        action:"input",
                        dataType:"form",
                        form: {
                        title: "Selecting Services",
                        fields: [{
                            label: "Select one of them below:",
                            type:"list",
                            selectType:'single',
                            items:[ServicesProvided.QRCODE, ServicesProvided.ENCRYPT, ServicesProvided.DECRYPT],
                            operations: {onInput:values => onServiceSelected(values[0])}
                        }]
                        },            
                    },
                    onRegistered:  next => {
                        next();
                        displayQRCode();
                    },
                    onRegisterFailed:function(registeredMessage){
                        console.log("failed to register to the WebSocket:"+registeredMessage);
                    },
                    onSenderConnected,
                    onSenderDisconnected,
                    apikey:"k7jc3QcMPKEXGW5UC",
                    securityGroup:"1CNbWCFpsbmRQuKdd",
                    aes:"dfhrhahfhhfsdhlnnnlkfjlihjc3QcMPKEXGW5UC",
                    client:"thisShouldBeUniqueId"
                    //url:"http://localhost:1337"
            };
            console.log("------connecting.....");
            globalInputConnector.connect(mobileConfig);
};


export const qrCodeService={
    startService:({dispatch})=>{
        console.log("---gotoQRCodeService-");
        const setCodeContent=content=>{
            actions.qrCodeService.setContent({dispatch,content});
        };
        const setLabel=label=>{
            actions.qrCodeService.setLabel({dispatch,label});
        }; 
        const generateQRCode = () =>{
            console.log("-----called generateQRCode");
            actions.qrCodeService.generate({dispatch});
        };       
             const initData={
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
             globalInputConnector.sendInitData(initData);         
             actions.qrCodeService.startService({dispatch});
    },
    generateQRCode:({setSize,setLevel,printQRCode})=>{
        const initData={
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
        globalInputConnector.sendInitData(initData);
    }
    
}