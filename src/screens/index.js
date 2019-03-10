import React from 'react';
import {Route,Link} from 'react-router-dom';

import {styles} from './styles';
import examples from "./examples";

import SecondScreenHowItWorks from "./second-screen-how-it-works";

import HomeScreen from './home-screen';

import LearnMoreScreen from "./learn-more-screen";
import GetAppScreen from './get-app-screen';
import PrivacyScreen from './privacy-screen';
import ContactUsScreen from "./contact-us-screen";
import MobileAuthenticationScreen from "./modile-authentication-screen";
import MobileControlScreen from './mobile-control-screen';


import MediaSecondScreen from './media-second-screen';
const screens={
      renderRoute:function(){
        return(
          <React.Fragment>
            <Route  path={HomeScreen.pagePath} exact component={HomeScreen}/>
            {examples.renderRoute()}
            <Route path={SecondScreenHowItWorks.pagePath} component={SecondScreenHowItWorks}/>
            <Route path={LearnMoreScreen.pagePath} component={LearnMoreScreen}/>
            <Route path={GetAppScreen.pagePath} component={GetAppScreen}/>
            <Route path={PrivacyScreen.pagePath} component={PrivacyScreen}/>
            <Route path={ContactUsScreen.pagePath} component={ContactUsScreen}/>
            <Route path={MobileAuthenticationScreen.pagePath} component={MobileAuthenticationScreen}/>
            <Route path={MobileControlScreen.pagePath} component={MobileControlScreen}/>
            <Route path={MediaSecondScreen.pagePath} component={MediaSecondScreen}/>

          </React.Fragment>
        );
      },
      paths:{
          authentication:MobileAuthenticationScreen.pagePath,
          mobileControl:MobileControlScreen.pagePath,
          secondScreen:SecondScreenHowItWorks.pagePath
      },
      readMore:{
          secondScreen:function(linkText){
                return(<Link to={SecondScreenHowItWorks.pagePath} style={styles.readMorelink.get()}>{linkText}</Link>);
          }
      }
};
export default screens;
