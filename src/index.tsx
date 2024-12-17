/* eslint-disable react/prop-types */
import React from "react";
import { createRoot } from 'react-dom/client';
import styled from 'styled-components';

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { RenderReloader, onServiceWorkerUpdate } from "./renderReloader";

const SnackbarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background: #323232;
  color: #fff;
  padding: 8px 16px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  box-shadow: 0px 2px 4px rgba(0,0,0,0.3);
  z-index: 9999;
`;

const SnackbarMessage = styled.span`
  margin-right: 16px;
`;

const SnackbarAction = styled.button`
  border: none;
  background: transparent;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  padding: 0;
  text-transform: uppercase;
  font-size: 0.875rem;
`;

// Replicates the previous 'reloader' function that used Material-UI
const reloader = (needsToReload, reloadPage) => {
  if (!needsToReload) return null;
  return (
    <SnackbarContainer>
      <SnackbarMessage>New version is available!</SnackbarMessage>
      <SnackbarAction onClick={reloadPage}>
        Reload
      </SnackbarAction>
    </SnackbarContainer>
  );
};

const container = document.getElementById('root');
if (container) {
  createRoot(container).render(
    <React.StrictMode>
      <RenderReloader reloader={reloader} />
      <App />
    </React.StrictMode>
  );
}

serviceWorker.register({ onUpdate: onServiceWorkerUpdate });