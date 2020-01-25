import {createMessageConnector} from 'global-input-message';
import * as actions from './actions';

let globalInputConnector=null;
const ServicesProvided={
    QRCODE:{label:"Create Encrypted QR Codes",value:"qrcode"},
    ENCRYPT:{label:"Encrypt Content",value:"encrypt"},
    DECRYPT:{label:"Decrypt Content",value:"decrypt"}
};

const gotoQRCodeService=({dispatch})=>{
    console.log("---gotoQRCodeService-");
    const setCodeContent=()=>{

    };
         const initData={
               form:{
                     fields:[{
                           label:"QR Code Content",
                           value:"",
                           operations:{
                                 onInput:value=>setCodeContent(value)
                           }
                     }                              
                     ]
               }
         };
         globalInputConnector.sendInitData(initData);         
        actions.gotoQRCodeService({dispatch});
}


export const disconnect= ()=>{
    if(!globalInputConnector){
        return;
    }
    globalInputConnector.disconnect();
    globalInputConnector=null;
}
export const connect = ({dispatch}) => {
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
  const onSenderDisconnected=(sender,senders)=>displayQRCode();

  const onServiceSelected=value=>{
      console.log("------onServiceSelected:"+value);

      switch(value){         

           case ServicesProvided.QRCODE.value: return gotoQRCodeService({dispatch});
           case  ServicesProvided.ENCRYPT.value:return actions.gotoEncryptionService({dispatch});
           case  ServicesProvided.DECRYPT.value:return actions.gotoDecryptionService({dispatch});
      }
  };

  globalInputConnector=createMessageConnector();
                const mobileConfig = {
                    initData: {
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
