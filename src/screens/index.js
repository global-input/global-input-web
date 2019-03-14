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
import SecureFormDataTrabsferScreen from "./about-secure-content-transfer";
import AboutPrintScanQRCodes from './about-print-scan-qr-codes';
import {config} from "../configs";
export const pagelinks={
    chromeStore:"https://chrome.google.com/webstore/detail/global-input-app/hcklienddlealndjnakkagefaelhnjkp?hl=en",
    renderChromeStoreLink:function(linkText){
        return(
          <a href={this.chromeStore} target="_blank" style={styles.buttonLinks.get('white')}>{linkText}</a>
        );
    }


};

const screens={
      renderRoute:function(){
        return(
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
            <Route path={config.paths.secureTransfer.path} component={SecureFormDataTrabsferScreen}/>
            <Route path={config.paths.printScanQRCodes.path} component={AboutPrintScanQRCodes}/>


          </React.Fragment>
        );
      },
      allLinks:{
          authentication:config.paths.mobileAuthentication.path,
          mobileControl:config.paths.mobileControl.path,
          secondScreen:config.paths.secondScreen.path
      },
      readMore:{
          secondScreen:function(linkText){

                return(<Link to={config.paths.secondScreen.path} style={styles.readMorelink.get()}>{linkText}</Link>);
          },
          mobileControl:function(linkText){

                return(<Link to={config.paths.mobileControl.path} style={styles.readMorelink.get()}>{linkText}</Link>);
          },
          authenticationDevice:function(linkText){

                return(<Link to={config.paths.mobileAuthentication.path} style={styles.readMorelink.get()}>{linkText}</Link>);
          },
          formOperation:function(linkText){
                return(<Link to={config.paths.formOperation.path} style={styles.readMorelink.get()}>{linkText}</Link>);
          },
          secureTransferFormData:function(linkText){
                return(<Link to={config.paths.secureTransfer.path} style={styles.readMorelink.get()}>{linkText}</Link>);
          },
          printScanQRCodes:function(linkText){
                return(<Link to={config.paths.printScanQRCodes.path} style={styles.readMorelink.get()}>{linkText}</Link>);
          },


      },
      buttons:{
        learnMoreWhite:function(linkText){
              return(<Link to={config.paths.learnMore.path} style={styles.buttonLinks.get('white')}>{linkText}</Link>);
        },
        getAppScreen:function(linkText){
          return(
              <Link to={config.paths.getAppScreen.path} style={styles.buttonLinks.get()}>
                      {linkText}
              </Link>
          );
        },
      },
};
export default screens;
