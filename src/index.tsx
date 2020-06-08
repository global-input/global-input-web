import React from 'react';
import ReactDOM from 'react-dom';


import './index.css';
import App from './App';


import ServiceWorkerWrapper from "./ServiceWorkerWrapper";



ReactDOM.render(
  <React.StrictMode>  
    <ServiceWorkerWrapper/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


