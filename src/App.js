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

import AboutMobilePersonalStorage from './pages/about-mobile-personal-storage';
import AboutContentEncryption from './pages/about-content-encryption';
import AboutMobileContentTransfer from './pages/about-mobile-content-transfer';
import DocumentationPage from './pages/documentation-page';

import * as examples from './examples';

const App=props=>(
      <Router>
        <Switch>
            <Route path={config.paths.home.path} exact component={HomePage}/>

            <Route path={config.paths.getAppScreen.path} component={GetAppPage}/>
            <Route path={config.paths.privacy.path} component={PrivacyPage}/>
            <Route path={config.paths.contactus.path} component={ContactUsPage}/>

            <Route path={config.paths.mobileAuthentication.path} component={AboutMobileAuthentication}/>
            <Route path={config.paths.mobileAuthentication.oldpath} component={AboutMobileAuthentication}/>

            <Route path={config.paths.mobileControl.path} component={AboutMobileInputControl}/>
            <Route path={config.paths.mobileControl.oldpath} component={AboutMobileInputControl}/>



            <Route path={config.paths.secondScreen.path} component={AboutSecondScreen}/>
            <Route path={config.paths.secondScreen.oldpath} component={AboutSecondScreen}/>

            <Route path={config.paths.mobilePersonalStorage.path} component={AboutMobilePersonalStorage}/>
            <Route path={config.paths.mobilePersonalStorage.oldpath} component={AboutMobilePersonalStorage}/>




            <Route path={config.paths.aboutContentEncryption.path} component={AboutContentEncryption}/>
            <Route path={config.paths.aboutContentEncryption.oldpath} component={AboutContentEncryption}/>


            <Route path={config.paths.mobileContentTransfer.path} component={AboutMobileContentTransfer}/>
            <Route path={config.paths.mobileContentTransfer.oldpath} component={AboutMobileContentTransfer}/>
            <Route path={config.paths.mobileContentTransfer.oldpath2} component={AboutMobileContentTransfer}/>



            <Route path={config.paths.documentationPage.path} component={DocumentationPage}/>

            <Route  path={config.paths.examples.contentTransfer.path}  component={examples.ContentTransferScreen}/>
            <Route  path={config.paths.examples.mediaPlayer.path}  component={examples.MediaPlayerScreen}/>
            <Route  path={config.paths.examples.gameControl.path}  component={examples.GameControlScreen}/>
            <Route path={config.paths.examples.transferForm.path} component={examples.TransferFormDataScreen}/>
            <Route path={config.paths.examples.sendMessage.path} component={examples.SendMessageScreen}/>                        
            <Route path={config.paths.examples.mobileEncryption.path} component={examples.MobileEncryptionScreen}/>
            <Route path={config.paths.examples.mobileEncryption.oldpath} component={examples.MobileEncryptionScreen}/>
            

            <Redirect to={config.paths.home.path}/>
        </Switch>
      </Router>
    );
export default App;


