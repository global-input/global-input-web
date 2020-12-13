import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Route, Switch, Redirect
} from 'react-router-dom';
import { config } from "./configs";
import {HomePage} from "./home-page";
import {GetAppPage} from './get-app-page';
import PrivacyPage from './privacy-page';
import ContactUsPage from "./contact-us-page";
import { AboutMobileAuthentication } from "./about-mobile-authentication";
import {AboutMobileInputControl} from './about-mobile-input-control';
import AboutSecondScreen from './about-second-screen';
import AboutMobilePersonalStorage from './about-mobile-personal-storage';
import AboutContentEncryption from './about-content-encryption';
import AboutMobileContentTransfer from './about-mobile-content-transfer';

import * as microApps from './micro-apps';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
const App: React.FC = () => (
  <Router>
    <ScrollToTop />
    <Switch>
      <Route path={config.paths.home.path} exact component={HomePage} />
      <Route path={config.paths.getAppScreen.path} component={GetAppPage} />
      <Route path={config.paths.privacy.path} component={PrivacyPage} />
      <Route path={config.paths.contactUs.path} component={ContactUsPage} />
      <Route path={config.paths.mobileAuthentication.path} component={AboutMobileAuthentication} />
      <Route path={config.paths.mobileControl.path} component={AboutMobileInputControl} />
      <Route path={config.paths.secondScreen.path} component={AboutSecondScreen} />
      <Route path={config.paths.mobilePersonalStorage.path} component={AboutMobilePersonalStorage} />
      <Route path={config.paths.aboutContentEncryption.path} component={AboutContentEncryption} />
      <Route path={config.paths.mobileContentTransfer.path} component={AboutMobileContentTransfer} />
      <Route path={config.paths.examples.contentTransfer.path} component={microApps.ContentTransferScreen} />
      <Route path={config.paths.examples.gameControl.path} component={microApps.GameControlScreen} />
      <Route path={config.paths.examples.mediaPlayer.path} component={microApps.MediaPlayerScreen} />
      <Route path={config.paths.examples.mobileEncryption.path} component={microApps.MobileEncryptionScreen} />
      <Route path={config.paths.examples.transferForm.path} component={microApps.TransferFormDataScreen} />
      <Route path={config.paths.examples.sendMessage.path} component={microApps.SendMessageScreen} />
      <Route path={config.paths.examples.mobileEncryption.oldPath} component={microApps.MobileEncryptionScreen} />
      <Redirect to={config.paths.home.path} />
    </Switch>
  </Router>
);

export default App;
