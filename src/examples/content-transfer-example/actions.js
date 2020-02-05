
export const ActionType = {    
    INITIALIZING:1,
    SESSION_FINISHED:2,  
    WAITING_FOR_MOBILE:3,
    MOBILE_CONNECTED:4, 
    SET_CONTENT:5, 
    SET_ERROR_MESSAGE:6,
    
};
export const initialState={
    type:ActionType.INITIALIZING,
    connectionCode:null,
    errorMessage:null,
    size:400,
    level:'H'    
}

export const reducer= (state, action)=>{    
    const {type}=action;        
    switch(type){                
        case  ActionType.WAITING_FOR_MOBILE:
                    const {connectionCode}=action;        
                    return {...state,type,connectionCode};

        case ActionType.SET_CONTENT:
                    const {content}=action;        
                    return {...initialState,type,content};
        case ActionType.SET_ERROR_MESSAGE:
                    const {errorMessage}=action;
                    return {...initialState,type,content};
        default: 
                    return {...initialState,type};

    }
};

export const waitForMobile =({dispatch,connectionCode})=>{
    dispatch({type:ActionType.WAITING_FOR_MOBILE,connectionCode});
};

export const onFinish = ({dispatch}) => {
    dispatch({type:ActionType.SESSION_FINISHED});
};
export const mobileConnected = ({dispatch}) => {
    dispatch({type:ActionType.MOBILE_CONNECTED});
};
export const setContent = ({dispatch,content}) => {
    dispatch({type:ActionType.SET_CONTENT,content});
};

export const setErrorMessage = ({dispatch,errorMessage}) => {
        dispatch({type:ActionType.SET_ERROR,errorMessage});
}
