import React,{useState,createContext,useContext} from 'react';
import {Snackbar, Button} from '@material-ui/core';

import * as serviceWorker from './serviceWorker';

type UpdateListener=(boolean)=>void;

const createApplicationState=()=>{
  let upToDate=true;
  let waitingWorker:ServiceWorker|null=null;

  let updateListener: UpdateListener | null =null;

  const onServiceWorkerUpdate=(registration:ServiceWorkerRegistration)=>{
      upToDate=false;
      waitingWorker=registration.waiting
      updateListener && updateListener(false);        
  };
  const reloadPage=()=>{    
      waitingWorker && waitingWorker.postMessage({type:"SKIP_WAITING"});
  };

  const setUpdateListener=fc=>updateListener=fc;
  return {
    upToDate,    
    setUpdateListener,
    onServiceWorkerUpdate,
    reloadPage
  };  
};
const applicationState=createApplicationState();




export default ()=>{
    const [upToDate,setUpToDate]=useState(applicationState.upToDate);
    applicationState.setUpdateListener(setUpToDate);
    const onReload=()=>{
      applicationState.reloadPage();
      setUpToDate(false);
      window.location.reload(true);
    }
    return(upToDate?null:<Snackbar open={true} message="new version is available!"
    onClick={onReload}
    anchorOrigin={{vertical:'top',horizontal:'center'}}  
    action={
        <Button color="inherit"
        size="small" onClick={onReload}>
         Reload     
        </Button>
    }/>);


}




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.register({
  onUpdate:applicationState.onServiceWorkerUpdate
});