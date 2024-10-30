/* eslint-disable react/prop-types */
import React from "react";
import { createRoot } from 'react-dom/client';
import { Snackbar, Button } from "@material-ui/core";

import "./index.css";
import App from "./App";

import * as serviceWorker from "./serviceWorker";

import { RenderReloader, onServiceWorkerUpdate } from "./renderReloader";

const reloader = (needsToReload, reloadPage) => {
  return (
    <Snackbar
      open={needsToReload}
      message="New version is available!"
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      action={
        <Button color="inherit" size="small" onClick={reloadPage}>
          Reload
        </Button>
      }
    />
  );
};
const container = document.getElementById('root');
if(container) {
  createRoot(container).render(
    <React.StrictMode>
      <RenderReloader reloader={reloader} />
      <App />
    </React.StrictMode>
  );
}


serviceWorker.register({ onUpdate: onServiceWorkerUpdate });