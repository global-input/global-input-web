import React from 'react';
import ReactDOM from 'react-dom';
import {Snackbar, Button} from '@material-ui/core';


import './index.css';
import App from './App';


import * as serviceWorker from './serviceWorker';

import {RenderReloader,onServiceWorkerUpdate} from './renderReloader';

const reloader=(needsToReload, reloadPage)=>{
  return(
      <Snackbar open={needsToReload} message="new version is available!"
              onClick={reloadPage}
              anchorOrigin={{vertical:'top',horizontal:'center'}}  
              action={
                  <Button color="inherit"
                  size="small" onClick={reloadPage}>
                  Reload     
                  </Button>
              }/>
  );
}

ReactDOM.render(
  <React.StrictMode>  
    <RenderReloader reloader={reloader}/>            
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.register({
  onUpdate:onServiceWorkerUpdate
});