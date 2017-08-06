import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './css/App.css';
import './css/home.css';
import "./css/global-input.css"
import  "./css/QRCodePrintService.css";

import  "./css/SimpleInput.css";

import {Home} from "./home";
import {SimpleInputHome} from "./simple-input";
import {SignInInputHome} from "./sign-in-input";
import {SettingsCodeScreen} from "./settings-code";

import {QRPrintingServiceHome} from "./qrcode-print-service";
import {DisplaySecurityGroupHome} from "./display-security-group";
import {DisplayAPIKeyHome} from "./display-api-key";
import {DisplayCodeEncryptionKeyHome} from "./display-code-encryption-key";



export default class App extends Component{
  render(){
    return (

      <Router>

        <div className="topContainer">
            <Route  path="/" component={Home}/>

            <QRPrintingServiceHome/>
            <SignInInputHome/>
            <SimpleInputHome/>
            <DisplaySecurityGroupHome/>
            <DisplayAPIKeyHome/>
            <DisplayCodeEncryptionKeyHome/>

            </div>
      </Router>
      )
    }
}
