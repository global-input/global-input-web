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
          INIT:21,
          SET_CONTENT:22,          
          ENCRYPT:24,
          SET_ENCRYPTED_CONTENT:25
     },
     DECRYPTION_SERVICE:{
          INIT:31,
          SET_CONTENT:32,          
          DECRYPT:34,
          SET_DECRYPTED_CONTENT:35,
          FAILED:36
     },
     SESSION_FINISHED:41
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
               const {type,content,errorMessage}=action;               
               const qrCodeService={...state.qrCodeService, content,errorMessage};               
               return {...state, type,qrCodeService};
          },
          setLabel:(state, action)=>{
               const {type,label}=action;   
               let   {qrCodeService} = state;
               qrCodeService={...qrCodeService, label};               
               return {...state, type,qrCodeService};
          },
          generate:(state, action)=>{
               const {type}=action;
               let {qrCodeService}=state;               
               const {content}=qrCodeService;               
               if(!content){    
                    const errorMessage='You need to provide content before continue.';                     
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
      },
      encryptionService:{
               init:(state,action) =>{
                    const {type}=action;               
                    const encryptionService = {
                         content:'', 
                         encryptedContent:'',                        
                         errorMessage:''                         
                    };
                    return {...state, type,encryptionService};
               },
               setContent: (state, action)=>{
                    const {type,content,errorMessage}=action;               
                    const encryptionService={...state.encryptionService, content,encryptedContent:'',errorMessage};
                    return {...state, type,encryptionService};
               },
               setEncryptedContent:(state, action)=>{
                    const {type,encryptedContent}=action;               
                    const encryptionService={...state.encryptionService, encryptedContent,errorMessage:''};               
                    return {...state, type,encryptionService};
               },               
      },
      decryptionService:{
          init:(state,action) =>{
               const {type}=action;               
               const decryptionService = {
                     content:'', 
                     decryptedContent:'',                        
                     errorMessage:''                         
               };
               return {...state, type,decryptionService};
          },
          setContent: (state, action)=>{
               const {type,content, errorMessage}=action;               
               const decryptionService={...state.decryptionService, content,decryptedContent:'',errorMessage};               
               return {...state, type,decryptionService};
          },
          setDecryptedContent:(state, action)=>{
               const {type,decryptedContent}=action;               
               const decryptionService={...state.decryptionService, decryptedContent,errorMessage:''};               
               return {...state, type,decryptionService};
          },
          failed:(state, action) => {
               const {type,errorMessage}=action;               
               const decryptionService={...state.decryptionService, errorMessage};               
               return {...state, type,decryptionService};
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
        
        case ActionType.ENCRYPTION_SERVICE.INIT: return transformers.encryptionService.init(state,action);        
        case ActionType.ENCRYPTION_SERVICE.SET_CONTENT: return transformers.encryptionService.setContent(state,action);         
        case ActionType.ENCRYPTION_SERVICE.ENCRYPT: return transformers.setActionType(state,action);
        case ActionType.ENCRYPTION_SERVICE.SET_ENCRYPTED_CONTENT: return transformers.encryptionService.setEncryptedContent(state,action);

        case ActionType.DECRYPTION_SERVICE.INIT: return transformers.decryptionService.init(state,action);        
        case ActionType.DECRYPTION_SERVICE.SET_CONTENT: return transformers.decryptionService.setContent(state,action);        
        case ActionType.DECRYPTION_SERVICE.DECRYPT: return transformers.setActionType(state,action);
        case ActionType.DECRYPTION_SERVICE.SET_DECRYPTED_CONTENT: return transformers.decryptionService.setDecryptedContent(state,action);        
        case ActionType.DECRYPTION_SERVICE.FAILED: return transformers.decryptionService.failed(state,action);
        
        default:
              return state;
    }
};

export const displayQRCode = ({dispatch,connectionCode})=>{
     dispatch({type:ActionType.DISPLAY_CODE, connectionCode});     
}

export const selectService = ({dispatch}) => {
     dispatch({type:ActionType.SELECT_SERVICE});          
};

export const onFinish = ({dispatch}) => {
     dispatch({type:ActionType.SESSION_FINISHED});
};

export const setErrorMessage = ({dispatch,errorMessage}) => {
     dispatch({type:ActionType.ERROR,errorMessage});
};

export const qrCodeService={
          init: ({dispatch}) => dispatch({type:ActionType.QRCODE_SERVICE.INIT}),
          setContent:({dispatch, content,errorMessage}) => dispatch({type:ActionType.QRCODE_SERVICE.SET_CONTENT,content,errorMessage}),
          setLabel:({dispatch, label}) => dispatch({type:ActionType.QRCODE_SERVICE.SET_LABEL,label}),
          generate:({dispatch}) => dispatch({type:ActionType.QRCODE_SERVICE.GENERATE_QR_CODE}),
          setSize:({dispatch,size}) => dispatch({type:ActionType.QRCODE_SERVICE.SET_SIZE,size}),
          setLevel:({dispatch,level}) => dispatch({type:ActionType.QRCODE_SERVICE.SET_LEVEL,level}),
          getData:state => state.qrCodeService,
};
        

export const encryptionService={
          init: ({dispatch}) => dispatch({type:ActionType.ENCRYPTION_SERVICE.INIT}),
          setContent:({dispatch, content,errorMessage}) =>dispatch({type:ActionType.ENCRYPTION_SERVICE.SET_CONTENT,content,errorMessage}),          
          getData:state => state.encryptionService,
          encrypt: dispatch => dispatch({type:ActionType.ENCRYPTION_SERVICE.ENCRYPT}),
          setEncryptedContent: ({dispatch,encryptedContent}) => dispatch({type:ActionType.ENCRYPTION_SERVICE.SET_ENCRYPTED_CONTENT, encryptedContent})

};
export const decryptionService={
          init: ({dispatch}) => dispatch({type:ActionType.DECRYPTION_SERVICE.INIT}),
          setContent:({dispatch, content,errorMessage}) =>dispatch({type:ActionType.DECRYPTION_SERVICE.SET_CONTENT,content,errorMessage}),          
          getData:state => state.decryptionService,
          decrypt: dispatch => dispatch({type:ActionType.DECRYPTION_SERVICE.DECRYPT}),
          setDecryptedContent: ({dispatch,decryptedContent}) => dispatch({type:ActionType.DECRYPTION_SERVICE.SET_DECRYPTED_CONTENT, decryptedContent}),
          failed: ({dispatch,errorMessage}) => dispatch({type:ActionType.DECRYPTION_SERVICE.FAILED, errorMessage}),
};
