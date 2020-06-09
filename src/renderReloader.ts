import React,{useState,createContext,useContext} from 'react';



type AvailableListener=(boolean)=>void;
let waitingWorker:ServiceWorker|null=null;
const postSkipWaiting=()=>{    
  waitingWorker && waitingWorker.postMessage({type:"SKIP_WAITING"});
};


let availableListener:AvailableListener|null=null;
let available=false;
export const onServiceWorkerUpdate=(registration:ServiceWorkerRegistration)=>{
  available=true;
  waitingWorker=registration.waiting
  availableListener && availableListener(available);        
};



const reloadPage=()=>{
    postSkipWaiting();
    window.location.reload(true);
}
type Props={
   reloader:(boolean, any)=>any
};

export const RenderReloader=(props:Props)=>{
    const [needsToReload,setNeedsToReload]=useState(available);
    availableListener=setNeedsToReload;    
    return props.reloader(needsToReload,reloadPage);

};

