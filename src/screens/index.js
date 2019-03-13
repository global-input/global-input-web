import React from 'react';
import {Route,Link} from 'react-router-dom';

import {styles, images} from './styles';
import examples from "./examples";

import HomeScreen from './home-screen';

import LearnMoreScreen from "./learn-more-screen";
import GetAppScreen from './get-app-screen';
import PrivacyScreen from './privacy-screen';
import ContactUsScreen from "./contact-us-screen";
import MobileAuthenticationScreen from "./modile-authentication-screen";
import MobileControlScreen from './mobile-control-screen';
import MediaSecondScreen from './media-second-screen';

import FormOperationScreen from './form-operation-screen';
import SecureFormDataTrabsferScreen from "./secure-content-transfer-screen";
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
            {config.paths.home.paths.map((p,index)=><Route  key={index} path={p} exact component={HomeScreen}/>)}
            {examples.renderRoute()}

            <Route path={config.paths.learnMore.path} component={LearnMoreScreen}/>
            <Route path={config.paths.getAppScreen.path} component={GetAppScreen}/>
            <Route path={config.paths.privacy.path} component={PrivacyScreen}/>
            <Route path={config.paths.contactus.path} component={ContactUsScreen}/>
            <Route path={config.paths.mobileAuthentication.path} component={MobileAuthenticationScreen}/>
            <Route path={config.paths.mobileControl.path} component={MobileControlScreen}/>
            <Route path={config.paths.secondScreen.path} component={MediaSecondScreen}/>
            <Route path={config.paths.formOperation.path} component={FormOperationScreen}/>
            <Route path={config.paths.secureTransfer.path} component={SecureFormDataTrabsferScreen}/>

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
          }
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
