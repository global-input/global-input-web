export const ActionType = {
     ERROR:0,
     CONNECTING:1,
     DISPLAY_CODE:2,
     SELECT_SERVICE:3,
     QRCODE_SERVICE:4,
     ENCRYPTION_SERVICE:5,
     DECRYPTION_SERVICE:6,
};

export const initialState={
     type:ActionType.CONNECTING,
     connectionCode:null,
     size:400,
     level:'H',
     errorMessage:null
}
const utils={
     computeDefaultSize:() => {      
          return  Math.min(window.innerWidth-50,window.innerHeight-50,400);    
     }
};
const transformers={
      setError:(state, action)=>{
          const {errorMessage,type}=action;
          return {...state, errorMessage, type};        
      },
      displayCode:(state, action)=>{
             const size=utils.computeDefaultSize();
             const {connectionCode,type}=action;                         
             return {...state, connectionCode,size,type};        
      },
      selectService:(state, action) =>{
             const {type}=action;
             return {...state, type};        
      }
}


export const reducer= (state, action)=>{
    switch(action.type){
        case  ActionType.ERROR: return transformers.setError(state, action);
        case ActionType.DISPLAY_CODE:return transformers.displayCode(state,action);                         
        case ActionType.SELECT_SERVICE: return transformers.selectService(state,action);                         
        default:
              return state;
    }
};

export const displayQRCode = ({dispatch,connectionCode})=>{
     dispatch({type:ActionType.DISPLAY_CODE, connectionCode});     
}

export const selectService=({dispatch})=>{
     dispatch({type:ActionType.SELECT_SERVICE});          
};
export const gotoQRCodeService=({dispatch}) =>{     
     dispatch({type:ActionType.QRCODE_SERVICE});
                    
};
export const gotoEncryptionService=({dispatch}) =>{
     dispatch({type:ActionType.ENCRYPTION_SERVICE});  
     
     
};
export const gotoDecryptionService=({dispatch}) =>{
     dispatch({type:ActionType.DECRYPTION_SERVICE});
};
