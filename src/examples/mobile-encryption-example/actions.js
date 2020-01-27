export const ActionType = {
     ERROR:0,
     CONNECTING:1,
     DISPLAY_CODE:2,
     SELECT_SERVICE:3,
     QRCODE_SERVICE:{
          INIT:11,
          SET_LABEL:12,
          SET_CONTENT:13,
          GENERATE_QR_CODE:14,
          SET_SIZE:15,
          SET_LEVEL:16
     },
     ENCRYPTION_SERVICE:{
          INIT:21
     },
     DECRYPTION_SERVICE:{
          INIT:31
     },
     SESSION_FINISHED:{
          INIT:41
     },
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
          const errorMessage="";
          return {...state, type,errorMessage};        
     },
      setError:(state, action)=>{
          const {errorMessage,type}=action;
          return {...state, errorMessage, type};        
      },
      displayCode:(state, action)=>{
             const errorMessage="";
             const size=utils.computeDefaultSize();
             const {connectionCode,type}=action;                         
             return {...state, connectionCode,size,type,errorMessage};
      },  
      qrCodeService:{
          init:  (state, action)=>{          
               const {type}=action;               
               const qrCodeService = {
                    content:'',
                    label:'',
                    errorMessage:'',
                    size: 400,
                    level:'H'
               };
               return {...state, type,qrCodeService};
          },
          setContent:(state, action)=>{
               const {type,content}=action;               
               const qrCodeService={...state.qrCodeService, content,errorMessage:''};               
               return {...state, type,qrCodeService};
          },
          setLabel:(state, action)=>{
               const {type,label}=action;   
               let   {qrCodeService} = state;
               qrCodeService={...qrCodeService, label,errorMessage:''};               
               return {...state, type,qrCodeService};
          },
          generate:(state, action)=>{
               const {type}=action;
               let {qrCodeService}=state;               
               const {content}=qrCodeService;               
               if(!content){    
                    const errorMessage='Cannot create QR code with empty content';                     
                    qrCodeService={...qrCodeService,errorMessage};                    
                    return {...state, qrCodeService};
               } 
               else{                    
                    return {...state, type};
               }               
          },
          setSize:(state, action)=>{
               const {type,size}=action;
               let {qrCodeService}=state;                                
               qrCodeService={...qrCodeService,size,errorMessage:''};                    
               return {...state,type, qrCodeService};               
          },
          setLevel:(state, action)=>{
               const {type,level}=action;
               let {qrCodeService}=state;                                
               qrCodeService={...qrCodeService,level,errorMessage:''};                    
               return {...state,type, qrCodeService};               
          }
      } 
        
}


export const reducer= (state, action)=>{
    switch(action.type){
        case  ActionType.ERROR: return transformers.setError(state, action);
        case ActionType.DISPLAY_CODE:return transformers.displayCode(state,action);                         
        case ActionType.SELECT_SERVICE: return transformers.setActionType(state,action);                         
        case ActionType.SESSION_FINISHED: return transformers.setActionType(state,action);
        case ActionType.QRCODE_SERVICE.INIT:return transformers.qrCodeService.init(state,action);
        case ActionType.QRCODE_SERVICE.SET_CONTENT:return transformers.qrCodeService.setContent(state,action);
        case ActionType.QRCODE_SERVICE.SET_LABEL:return transformers.qrCodeService.setLabel(state,action);
        case ActionType.QRCODE_SERVICE.GENERATE_QR_CODE:return transformers.qrCodeService.generate(state,action);
        case ActionType.QRCODE_SERVICE.SET_SIZE:return transformers.qrCodeService.setSize(state,action);
        case ActionType.QRCODE_SERVICE.SET_LEVEL:return transformers.qrCodeService.setLevel(state,action);
        case ActionType.ENCRYPTION_SERVICE.INIT: return transformers.setActionType(state,action);
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

export const onFinish=({dispatch}) =>{
     dispatch({type:ActionType.SESSION_FINISHED});
};
export const setErrorMessage=({dispatch,errorMessage}) =>{
     dispatch({type:ActionType.ERROR,errorMessage});     
};

export const qrCodeService={
          init: ({dispatch}) => dispatch({type:ActionType.QRCODE_SERVICE.INIT}),
          setContent:({dispatch, content}) =>dispatch({type:ActionType.QRCODE_SERVICE.SET_CONTENT,content}),
          setLabel:({dispatch, label}) =>dispatch({type:ActionType.QRCODE_SERVICE.SET_LABEL,label}),
          generate:({dispatch}) =>dispatch({type:ActionType.QRCODE_SERVICE.GENERATE_QR_CODE}),
          setSize:({dispatch,size}) =>dispatch({type:ActionType.QRCODE_SERVICE.SET_SIZE,size}),
          setLevel:({dispatch,level}) =>dispatch({type:ActionType.QRCODE_SERVICE.SET_LEVEL,level}),
          getData:state => state.qrCodeService,

};
        

export const encryptionService={
          init: ({dispatch}) => dispatch({type:ActionType.ENCRYPTION_SERVICE.INIT})
};
export const decryptionService={
          init: ({dispatch}) => dispatch({type:ActionType.DECRYPTION_SERVICE.INIT})
}



