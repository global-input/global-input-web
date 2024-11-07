const setNotification= ({setAction,notificationMessage}) =>{    
    setAction(action=>({...action, notificationMessage}));
};

const clearNotification= ({setAction}) =>{    
    setAction(action => ({...action, notificationMessage:null});
};

const delayedExecute= (messageTimerHandler, first, second, timeToDelay)=>{      
    if (handler.current) {
        clearTimeout(handler.current);
    }   
    first();
    handler.current = setTimeout(() => {
    second();        
    handler.current = null;
  }, timeToDelay);
};

export const displayNotificationMessage = ({messageTimerHandler,notificationMessage,setAction}) => {      
    const setNotification =   ()=>setNotification({setAction, notificationMessage});
    const clearNotification = ()=>clearNotification({setAction}));    
    delayedExecute(messageTimerHandler, setNotification,clearNotification,2000);        
};

