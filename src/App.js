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


import {DevelopersScreen} from "./developers";



import HomeScreen from "./screens/home-screen";
import ContentTransferScreen from "./screens/examples/content-transfer-screen";
import GameControlScreen from "./screens/examples/game-game-control-screen";
import SecondScreenHowItWorks from "./screens/second-screen-how-it-works";
import TransferFormDataScreen from "./screens/examples/transfer-form-data-screen";
import SendMessageScreen from './screens/examples/send-message-screen';

import QRPrintingScreen from './screens/examples/qr-printing-screen';
import MediaPlayerScreen from "./screens/examples/media-player-screen";

import LearnMoreScreen from "./screens/learn-more-screen";

import GetAppScreen from './screens/get-app-screen';

import {applicationPathConfig} from "./page-templates";

import {PrivacyScreen} from "./privacy";
import {ContactFormHome} from "./contact-form";





export default class App extends Component{


  render(){

    return (

      <Router>

        <div className="topContainer">
            <Route  path={pagelinks.home.link} exact component={HomeScreen}/>
            <Route  path={pagelinks.home.link2} exact component={HomeScreen}/>
            <Route  path={pagelinks.app.link}  component={HomeScreen}/>
            <Route  path={pagelinks.app.link2}  component={HomeScreen}/>

            <Route  path={ContentTransferScreen.pagePath}  component={ContentTransferScreen}/>


            <Route  path={pagelinks.platform.link}  component={DevelopersScreen}/>
            <Route  path={pagelinks.platform.link2}  component={DevelopersScreen}/>
            <Route  path={pagelinks.platform.link3}  component={DevelopersScreen}/>


           <Route  path={applicationPathConfig.about.contact.menu.link}  component={ContactFormHome}/>



            <Route  path={applicationPathConfig.about.privacy.menu.link}  component={PrivacyScreen}/>

          <Route  path={applicationPathConfig.videoPlayer.menu.link}  component={MediaPlayerScreen}/>

            <Route  path={applicationPathConfig.gameExample.menu.link}  component={GameControlScreen}/>


            <Route path={SecondScreenHowItWorks.pagePath} component={SecondScreenHowItWorks}/>
            <Route path={TransferFormDataScreen.pagePath} component={TransferFormDataScreen}/>


            <Route path={SendMessageScreen.pagePath} component={SendMessageScreen}/>
            <Route path={QRPrintingScreen.pagePath} component={QRPrintingScreen}/>

            <Route path={LearnMoreScreen.pagePath} component={LearnMoreScreen}/>
            <Route path={GetAppScreen.pagePath} component={GetAppScreen}/>

        </div>


      </Router>
      )
    }
}
