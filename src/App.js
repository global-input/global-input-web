import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './css/App.css';
import './css/home.css';
import "./css/global-input.css"
import  "./css/SimpleInput.css";

import {Home} from "./home";
import {SimpleInputHome} from "./simple-input";
 import {SignInInputHome} from "./sign-in-input";


import {QRPrintingServiceHome} from "./qrcode-print-service";
import {DisplayPrePairingHome} from "./display-pre-pairing";
import {textValues,images} from  "./configs";




export default class App extends Component{
  render(){
    return (

      <Router>

        <div className="topContainer">
            <Route  path="/" component={Home}/>



            <SignInInputHome/>

            <SimpleInputHome/>
            <QRPrintingServiceHome/>
            <DisplayPrePairingHome/>


                   

            </div>


      </Router>
      )
    }
}
