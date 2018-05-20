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
import "./css/simpleAnimate.css";


import {HomeScreen} from "./home";
import {DevelopersScreen} from "./developers";



import {ContentTransfer} from "./content-transfer";
import {QRCodePrinting} from "./qr-printing";
import {FormDataTransfer} from "./formdata-transfer";

import {applicationPathConfig} from "./page-templates";
import {AboutScreen} from "./about";
import {PrivacyScreen} from "./privacy";
import {ContactFormHome} from "./contact-form";

export default class App extends Component{
  render(){

    return (

      <Router>

        <div className="topContainer">
            <Route  path={applicationPathConfig.home.menu.link} exact component={HomeScreen}/>
            <Route  path={applicationPathConfig.contentTransfer.menu.link}  component={ContentTransfer}/>
            <Route  path={applicationPathConfig.qrPrinting.menu.link}  component={QRCodePrinting}/>
            <Route  path={applicationPathConfig.formData.menu.link}  component={FormDataTransfer}/>
            <Route  path={applicationPathConfig.developer.menu.link}  component={DevelopersScreen}/>
            <Route  path={applicationPathConfig.about.home.menu.link}  component={AboutScreen}/>
            <Route  path={applicationPathConfig.about.privacy.menu.link}  component={PrivacyScreen}/>
            <Route  path={applicationPathConfig.about.contact.menu.link}  component={ContactFormHome}/>
        </div>


      </Router>
      )
    }
}
