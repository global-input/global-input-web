import { useReducer, useEffect, useRef} from "react";
import { createMessageConnector } from 'global-input-message';

export const MobileState = {    
    INITIALIZING:1,    
    ERROR:2,    
    WAITING_FOR_MOBILE:3,
    MOBILE_CONNECTED:4,
    MOBILE_DISCONNECTED:5,
};
const initialState={
    mobileState:MobileState.INITIALIZING,
    connectionCode:null,
    errorMessage:null    
};
const reducer= (state, action)=>{  
    console.log("--------state------"+JSON.stringify(state));  
    const {type}=action;
    const  mobileState=type;
    switch(type){                        
        case  MobileState.WAITING_FOR_MOBILE:
              const {connectionCode}=action;        
              return {...state,mobileState,connectionCode};   
        case  MobileState.ERROR:
              const {errorMessage}=action;        
              return {...state,mobileState,errorMessage};                         
        default: 
              return {...initialState,mobileState};
    }
};


export default ({initData})=>{
    const mobile=useRef(null);

    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(()=>{
            mobile.current = createMessageConnector(); 
            const disconnect = () => {  
                if(mobile.current){
                    mobile.current.disconnect();
                    mobile.current=null;
                }                
            };   
            const waitForMobileToConnect = () => {                
                if(mobile.current){
                  const connectionCode = mobile.current.buildInputCodeData();
                  console.log("[[" + connectionCode + "]]");                                      
                  dispatch({type:MobileState.WAITING_FOR_MOBILE,connectionCode});                
                }                     
            };
            const onSenderConnected = (sender, senders) => {
                dispatch({type:MobileState.MOBILE_CONNECTED});
            };
            const onSenderDisconnected = (sender, senders) => {
                disconnect();
                dispatch({type:MobileState.MOBILE_DISCONNECTED});
            };
            const onRegisterFailed = errorMessage => {
                dispatch({type:MobileState.SET_ERROR,errorMessage});
            };            
            const mobileConfig={
                initData,
                onRegistered: next => {
                    next();
                    waitForMobileToConnect();
                },
                onRegisterFailed,
                onSenderConnected,
                onSenderDisconnected    
            };
            mobile.current.connect(mobileConfig);
            
            return () => {
                disconnect();
            }
    },[]);
    return {...state,mobile:mobile.current};
};



