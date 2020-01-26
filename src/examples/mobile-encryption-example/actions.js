export const ActionType = {
     ERROR:0,
     CONNECTING:1,
     DISPLAY_CODE:2,
     SELECT_SERVICE:3,
     QRCODE_SERVICE_START:11,
     QRCODE_SERVICE_CONTENT:12,
     QRCODE_SERVICE_LABEL:13,
     QRCODE_SERVICE_GENERATE:14,

     ENCRYPTION_SERVICE:21,
     DECRYPTION_SERVICE:31,
     SESSION_FINISHED:41,
};

export const initialState={
     type:ActionType.CONNECTING,
     connectionCode:null,
     size:400,
     level:'H',
     errorMessage:null,
     qrCodeService:null
}
const utils={
     computeDefaultSize:() => {      
          return  Math.min(window.innerWidth-50,window.innerHeight-50,400);    
     }
};

const transformers={
     setActionType: (state, action)=>{
          const {type}=action;
          return {...state, type};        
     },
      setError:(state, action)=>{
          const {errorMessage,type}=action;
          return {...state, errorMessage, type};        
      },
      displayCode:(state, action)=>{
             const size=utils.computeDefaultSize();
             const {connectionCode,type}=action;                         
             return {...state, connectionCode,size,type};
      },  
      qrCodeService:{
          start:  (state, action)=>{          
               const {type}=action;
               const qrCodeService={content:'',label:'', errorMessage:''}
               return {...state, type,qrCodeService};
          },
          setContent:(state, action)=>{
               const {type,content}=action;               
               const qrCodeService={...state.qrCodeService, content,errorMessage:''};               
               return {...state, type,qrCodeService};
          },
          setLabel:(state, action)=>{
               const {type,label}=action;               
               const qrCodeService={...state.qrCodeService, label,errorMessage:''};               
               return {...state, type,qrCodeService};
          },
          generate:(state, action)=>{
               const {type}=action;
               let {qrCodeService}=state;               
               const content={qrCodeService};
               if(!content){
                    qrCodeService={...qrCodeService,errorMessage:'Content is empty'};                                   
                    return {...state, qrCodeService};
               } 
               else{
                    qrCodeService={...qrCodeService,errorMessage:''};                                   
                    return {...state, type,qrCodeService};
               }               
          },

      } 
        
}


export const reducer= (state, action)=>{
    switch(action.type){
        case  ActionType.ERROR: return transformers.setError(state, action);
        case ActionType.DISPLAY_CODE:return transformers.displayCode(state,action);                         
        case ActionType.SELECT_SERVICE: return transformers.setActionType(state,action);                         
        case ActionType.SESSION_FINISHED: return transformers.setActionType(state,action);
        case ActionType.QRCODE_SERVICE_START:return transformers.qrCodeService.start(state,action);
        case ActionType.QRCODE_SERVICE_CONTENT:return transformers.qrCodeService.setContent(state,action);
        case ActionType.QRCODE_SERVICE_LABEL:return transformers.qrCodeService.setLabel(state,action);
        case ActionType.QRCODE_SERVICE_GENERATE:return transformers.qrCodeService.generate(state,action);
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

export const gotoEncryptionService=({dispatch}) =>{
     dispatch({type:ActionType.ENCRYPTION_SERVICE});  
     
     
};
export const gotoDecryptionService=({dispatch}) =>{
     dispatch({type:ActionType.DECRYPTION_SERVICE});
};
export const onFinish=({dispatch}) =>{
     dispatch({type:ActionType.SESSION_FINISHED});
}

export const qrCodeService={
          startService: ({dispatch}) => dispatch({type:ActionType.QRCODE_SERVICE_START}),
          setContent:({dispatch, content}) =>dispatch({type:ActionType.QRCODE_SERVICE_CONTENT,content}),
          setLabel:({dispatch, label}) =>dispatch({type:ActionType.QRCODE_SERVICE_LABEL,label}),
          generate:({dispatch}) =>dispatch({type:ActionType.QRCODE_SERVICE_GENERATE}),
          getContent:state => state.qrCodeService.content,
          getLabel:state => state.qrCodeService.label,
          getErrorMessage: state => state.qrCodeService.errorMessage
}


