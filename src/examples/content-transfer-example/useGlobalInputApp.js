import React, { useReducer, useEffect, useRef, useMemo} from "react";
import { createMessageConnector } from 'global-input-message';
import QRCode from "qrcode.react";

const ACTION_TYPES = {    
    DISCONNECT:1,
    CONNECT:2,
    SET_ERROR:3,    
    SET_CONNECTION_CODE:5,
    MOBILE_CONNECTED:6
};

export const MobileState = {    
    INITIALIZING:1,      
    DISCONNECTED:2,
    ERROR:3, 
    WAITING_FOR_MOBILE:4,
    MOBILE_CONNECTED:5   
    
};

const initialState={
    mobileState:MobileState.INITIALIZING,
    connectionCode:null,
    errorMessage:null,    
    mobile:createMessageConnector(),
    senders:null,    
}

const doProcessInitData=(state, action)=>{
    const {mobile}=state;    
    if(!action.initData){
        console.warn("ignored empty InitData");
        return state;
    }                
    if(mobile.isConnected()){
        const {initData}=action;                    
        mobile.sendInitData(initData);
        return {...state,errorMessage:''};                             
    }                                
    const {initData,mobileConfig}=action; 
    if(!mobileConfig){
        console.warn("ignored empty mobileConfig");
        return state;
    }                                                                       
    mobileConfig.initData=initData;                        
    mobile.connect(mobileConfig);
    return {...state,errorMessage:''};
};

const reducer= (state, action)=>{
    
    switch(action.type){   
        case ACTION_TYPES.DISCONNECT:      
            {                
                const {mobile}=state;    
                if(mobile){
                    mobile.disconnect();
                 }                  
                return {...initialState,mobileState:MobileState.DISCONNECTED};                      
            }
        case  ACTION_TYPES.SET_ERROR:
            {
                const {mobile}=state;    
                const {errorMessage}=action;   
                if(mobile){
                    mobile.disconnect();
                }     
                return {...state,mobileState:MobileState.ERROR,errorMessage};                                      
            }    
        case ACTION_TYPES.CONNECT:
                return doProcessInitData(state, action);
        
        case  ACTION_TYPES.SET_CONNECTION_CODE:              
            {
                const {mobile}=state;                    
                if(!mobile){                   
                    return state;
                } 
                const mobileState=MobileState.WAITING_FOR_MOBILE               
                const connectionCode = mobile.buildInputCodeData();           
                console.log("[[" + connectionCode + "]]");
                return {...state,mobileState,connectionCode};                
            }
        case ACTION_TYPES.MOBILE_CONNECTED:
            {
                const {senders}= action;
                const mobileState=MobileState.MOBILE_CONNECTED               
                return {...state,mobileState,connectionCode:null,senders};
            }              
        default: 
              return state;
    };
    
};

const DefaultQRCodeContainer=({children})=>(
    <div style={styles.barcode}>
            {children}
    </div>                  
);
const DefaultLabelContainer=({children})=>(
    <div style={styles.label}>
            {children}
    </div>                  
);

export default ({initData, options, renders}, dependencies)=>{
            
    const [state, dispatch] = useReducer(reducer, initialState);    
    const {mobileState,
        connectionCode,
        errorMessage,    
        mobile,
        senders}=state;

    const disconnect = () => {         
        dispatch({type:ACTION_TYPES.DISCONNECT});            
    };
    const setMobileData=initData=>dispatch({type:ACTION_TYPES.SET_INIT_DATA, initData});    
    const waitForMobileToConnect = ()=> dispatch({type:ACTION_TYPES.SET_CONNECTION_CODE});                    
    const onSenderConnected = (sender, senders) => {
        dispatch({type:ACTION_TYPES.MOBILE_CONNECTED, senders});
    };
    const onSenderDisconnected = (sender, senders) => {            
        disconnect();
    };
    const onError = errorMessage => {                   
        dispatch({type:ACTION_TYPES.SET_ERROR,errorMessage});
    }; 
    
    useEffect(()=>{               
        if(typeof initData ==='function'){
            initData=initData();            
        }
        if(!initData){
            return;
        }        
        const mobileConfig={            
            onRegistered: next => {
                next();
                waitForMobileToConnect();
            },
            onRegisterFailed:onError,
            onSenderConnected,
            onSenderDisconnected,
            onError,
            ...options
        };
        dispatch({type:ACTION_TYPES.CONNECT,initData,mobileConfig});
        return ()=>disconnect();
        
        
    },dependencies?dependencies:[]);
    
    const connectionCodeQR=useMemo(()=>{             
              if(!connectionCode){               
                  return null;                  
              }              
              let  qrCodeSize = window.innerWidth-10;
              if(qrCodeSize>400){
                qrCodeSize=400;
              }
              let QRCodeContainer=DefaultQRCodeContainer;
              if(renders && renders.QRCodeContainer){
                QRCodeContainer=renders.QRCodeContainer;                
              }
              let LabelContainer=DefaultLabelContainer;
              if(renders && renders.LabelContainer){
                LabelContainer=renders.LabelContainer;                
              }
              return (
                    <QRCodeContainer>                    
                        <QRCode value={connectionCode} level='H' size={qrCodeSize} />                    
                        <LabelContainer>
                            Scan with 
                            <a href="https://globalinput.co.uk/global-input-app/get-app" target="_blank"> Global Input App</a>
                        </LabelContainer>
                    </QRCodeContainer>
              );
    },[connectionCode]);
    
    const connectionMessage=(()=>{
        switch(state.mobileState){
                case MobileState.ERROR:return errorMessage;
                case MobileState.INITIALIZING: return "Initializing...";
                case MobileState.DISCONNECTED:return "Disconnected";
                case MobileState.WAITING_FOR_MOBILE:return connectionCodeQR;
                default:return null;
        }
    })();     
    
    return {
            mobileState,
            connectionCode,
            mobile,
            connectionCodeQR,
            connectionMessage,
            disconnect,
            initData,
            setMobileData           
    };
};



const styles={
    barcode:{
        backgroundColor:"white",        
        padding:20,
        display:"flex",
        flexDirection:"column",
        justifyContent:"flex-start",
        alignItems:"center"      
    },
    label:{
        paddingTop:20,
        color:"#A9C8E6", //#4880ED
    }
}