import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,Switch,Redirect
} from 'react-router-dom'


import {config} from "./configs";

import {HomePageWithScrollToTop as HomePage} from "./pages/home-page";
import GetAppPage from './pages/get-app-page';
import PrivacyPage from './pages/privacy-page';
import ContactUsPage from "./pages/contact-us-page";
import AboutMobileAuthentication from "./pages/about-mobile-authentication";
import AboutMobileInputControl from './pages/about-mobile-input-control';
import AboutSecondScreen from './pages/about-second-screen';

import PortablePersonalStorage from './pages/about-portable-personal-storage';
import AboutPrintScanQRCodes from './pages/about-print-scan-qr-codes';
import AboutMobileTools from './pages/about-mobile-tools';
import DocumentationPage from './pages/documentation-page';




import ContentTransferScreen from './pages/examples/content-transfer-screen';
import GameControlScreen from './pages/examples/game-game-control-screen';
import MediaPlayerScreen from './pages/examples/media-player-screen';
import QRPrintingScreen from './pages/examples/qr-printing-screen';
import SendMessageScreen from './pages/examples/send-message-screen';
import TransferFormDataScreen from './pages/examples/transfer-form-data-screen';


const App=props=>(
      <Router>
        <Switch>
            <Route path={config.paths.home.path} exact component={HomePage}/>

            <Route path={config.paths.getAppScreen.path} component={GetAppPage}/>
            <Route path={config.paths.privacy.path} component={PrivacyPage}/>
            <Route path={config.paths.contactus.path} component={ContactUsPage}/>
            <Route path={config.paths.mobileAuthentication.path} component={AboutMobileAuthentication}/>
            <Route path={config.paths.mobileControl.path} component={AboutMobileInputControl}/>
            <Route path={config.paths.secondScreen.path} component={AboutSecondScreen}/>
            <Route path={config.paths.portablePersonalStorage.path} component={PortablePersonalStorage}/>
            <Route path={config.paths.secureTransfer.path} component={PortablePersonalStorage}/>
            <Route path={config.paths.printScanQRCodes.path} component={AboutPrintScanQRCodes}/>
            <Route path={config.paths.copyAndPaste.path} component={AboutMobileTools}/>
            <Route path={config.paths.documentationPage.path} component={DocumentationPage}/>

            <Route  path={config.paths.examples.contentTransfer.path}  component={ContentTransferScreen}/>
            <Route  path={config.paths.examples.mediaPlayer.path}  component={MediaPlayerScreen}/>
            <Route  path={config.paths.examples.gameControl.path}  component={GameControlScreen}/>
            <Route path={config.paths.examples.transferForm.path} component={TransferFormDataScreen}/>
            <Route path={config.paths.examples.sendMessage.path} component={SendMessageScreen}/>
            <Route path={config.paths.examples.qrPrinting.path} component={QRPrintingScreen}/>
            <Redirect to={config.paths.home.path}/>
        </Switch>
      </Router>
    );
export default App;
