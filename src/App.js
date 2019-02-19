import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/general.css";
import "./css/loader.css";
import "./css/print.css";
import "./css/input.css";
import "./css/simpleAnimate.css";
import {pagelinks} from "./configs";

import {HomeScreen} from "./home";
import {DevelopersScreen} from "./developers";



import {ContentTransfer} from "./content-transfer";
import ContentTransferScreen from "./content-transfer-screen";




import {QRCodePrinting} from "./qr-printing";
import {FormDataTransfer} from "./formdata-transfer";

import {applicationPathConfig} from "./page-templates";

import {PrivacyScreen} from "./privacy";
import {ContactFormHome} from "./contact-form";
import MediaPlayerScreen from "./media-player-screen";
import {GameExample} from "./game-example";
import {MessageSender} from "./send-message";


export default class App extends Component{
  render(){

    return (

      <Router>

        <div className="topContainer">
            <Route  path={pagelinks.home.link} exact component={HomeScreen}/>
            <Route  path={pagelinks.home.link2} exact component={HomeScreen}/>
            <Route  path={pagelinks.app.link}  component={HomeScreen}/>
            <Route  path={pagelinks.app.link2}  component={HomeScreen}/>

            <Route  path={applicationPathConfig.contentTransfer.menu.link}  component={ContentTransferScreen}/>
            <Route  path={applicationPathConfig.qrPrinting.menu.link}  component={QRCodePrinting}/>
            <Route  path={applicationPathConfig.formData.menu.link}  component={FormDataTransfer}/>
            <Route  path={pagelinks.platform.link}  component={DevelopersScreen}/>
            <Route  path={pagelinks.platform.link2}  component={DevelopersScreen}/>
            <Route  path={pagelinks.platform.link3}  component={DevelopersScreen}/>


           <Route  path={applicationPathConfig.about.contact.menu.link}  component={ContactFormHome}/>



            <Route  path={applicationPathConfig.about.privacy.menu.link}  component={PrivacyScreen}/>

          <Route  path={applicationPathConfig.videoPlayer.menu.link}  component={MediaPlayerScreen}/>

            <Route  path={applicationPathConfig.gameExample.menu.link}  component={GameExample}/>
            <Route  path={applicationPathConfig.sendMessage.menu.link}  component={MessageSender}/>
        </div>


      </Router>
      )
    }
}
