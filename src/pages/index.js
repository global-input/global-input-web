import React from 'react';
import {Route,Link} from 'react-router-dom';

import {styles, images} from './styles';
import examples from "./examples";

import HomePage from './home-page';

import LearnMorePage from "./learn-more-page";
import GetAppPage from './get-app-page';
import PrivacyPage from './privacy-page';
import ContactUsPage from "./contact-us-page";
import AboutMobileAuthentication from "./about-mobile-authentication";
import AboutMobileInputControl from './about-mobile-input-control';
import AboutSecondScreen from './about-second-screen';

import AboutFormOperation from './about-form-operation';
import AboutMobileTransferFormData from "./about-secure-content-transfer";
import AboutPrintScanQRCodes from './about-print-scan-qr-codes';
import AboutCopyAndPaste from './about-copy-and-paste';
import {config} from "../configs";



const PageRoute=props=>(
      <React.Fragment>
        {config.paths.home.paths.map((p,index)=><Route  key={index} path={p} exact component={HomePage}/>)}
        {examples.renderRoute()}
        <Route path={config.paths.learnMore.path} component={LearnMorePage}/>
        <Route path={config.paths.getAppScreen.path} component={GetAppPage}/>
        <Route path={config.paths.privacy.path} component={PrivacyPage}/>
        <Route path={config.paths.contactus.path} component={ContactUsPage}/>
        <Route path={config.paths.mobileAuthentication.path} component={AboutMobileAuthentication}/>
        <Route path={config.paths.mobileControl.path} component={AboutMobileInputControl}/>
        <Route path={config.paths.secondScreen.path} component={AboutSecondScreen}/>
        <Route path={config.paths.formOperation.path} component={AboutFormOperation}/>
        <Route path={config.paths.secureTransfer.path} component={AboutMobileTransferFormData}/>
        <Route path={config.paths.printScanQRCodes.path} component={AboutPrintScanQRCodes}/>
        <Route path={config.paths.copyAndPaste.path} component={AboutCopyAndPaste}/>
      </React.Fragment>
    );

const pages={
      Route:PageRoute,      
};


export default pages;
