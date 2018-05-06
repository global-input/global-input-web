import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/general.css";
import "./css/loader.css";
import "./css/print.css";
import "./css/input.css";

import {Home,homeTextConfig} from "./home";
import {Documentation,documentationConfig} from "./documentation";
import {Pricing} from "./pricing";

import {ContentTransfer,contentTransferConfig} from "./content-transfer";
import {QRCodePrinting,qrPrintingConfig} from "./qr-printing";
import {FormDataTransfer,formDataTransferConfig} from "./formdata-transfer";


import {textValues,images} from  "./configs";



export default class App extends Component{
  render(){

    return (

      <Router>

        <div className="topContainer">
            <Route  path={homeTextConfig.menu.link} exact component={Home}/>
            <Route  path={documentationConfig.menu.link}  component={Documentation}/>
            <Route  path={contentTransferConfig.menu.link}  component={ContentTransfer}/>
            <Route  path={qrPrintingConfig.menu.link}  component={QRCodePrinting}/>
            <Route  path={formDataTransferConfig.menu.link}  component={FormDataTransfer}/>
        </div>


      </Router>
      )
    }
}
