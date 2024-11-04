import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  BrowserRouter as Router,
  Route,
  Routes,  
} from "react-router-dom";
import { config } from "./configs";
import { HomePage} from "./home-page";
import { GetAppPage } from "./get-app-page";
import PrivacyPage from "./privacy-page";
import ContactUsPage from "./contact-us-page";
import { AboutMobileAuthentication } from "./about-mobile-authentication";
import { AboutMobileInputControl } from "./about-mobile-input-control";
import { AboutSecondScreen } from "./about-second-screen";
import { AboutMobileSecureStorage } from "./about-mobile-personal-storage";
import { AboutMobileEncryption } from "./about-content-encryption";
import { AboutMobileContentTransfer } from "./about-mobile-content-transfer";
import ScanQRCode from "./mobile-app/scan-qr-code";

import * as microApps from "./micro-apps";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};








const App: React.FC = () => (
  <Router>
    <ScrollToTop />
    <Routes>
      
      <Route path={config.paths.home.path}  element={<HomePage/>} />
      
      
      <Route path={config.paths.getAppScreen.path} element={<GetAppPage/>} />
      <Route path={config.paths.privacy.path} element={<PrivacyPage/>} />
      <Route path={config.paths.contactUs.path} element={<ContactUsPage/>} />
      <Route
        path={config.paths.mobileAuthentication.path}
        element={<AboutMobileAuthentication/>}
      />
      <Route
        path={config.paths.mobileControl.path}
        element={<AboutMobileInputControl/>}
      />
      <Route
        path={config.paths.secondScreen.path}
        element={<AboutSecondScreen/>}
      />
      <Route
        path={config.paths.mobilePersonalStorage.path}
        element={<AboutMobileSecureStorage/>}
      />
      <Route
        path={config.paths.aboutContentEncryption.path}
        element={<AboutMobileEncryption/>}
      />
      <Route
        path={config.paths.mobileContentTransfer.path}
        element={<AboutMobileContentTransfer/>}
      />
      <Route
        path={config.paths.examples.contentTransfer.path}
        element={<microApps.ContentTransferScreen/>}
      />
      <Route
        path={config.paths.examples.gameControl.path}
        element={<microApps.GameControlScreen/>}
      />
      <Route
        path={config.paths.examples.mediaPlayer.path}
        element={<microApps.MediaPlayerScreen/>}
      />
      <Route
        path={config.paths.examples.mobileEncryption.path}
        element={<microApps.MobileEncryptionScreen/>}
      />
      <Route
        path={config.paths.examples.transferForm.path}
        element={<microApps.TransferFormDataScreen/>}
      />
      <Route
        path={config.paths.examples.sendMessage.path}
        element={<microApps.SendMessageScreen/>}
      />
      <Route
        path={config.paths.examples.mobileEncryption.oldPath}
        element={<microApps.OldMobileEncryptionScreen/>}
      />
      <Route path="/global-input-app/mobile/scan-qr-code" element={<ScanQRCode/>} />
      

      <Route path="*" element={<HomePage/>} />
      <Route path="/global-input-app/*" element={<HomePage/>} />
      

    </Routes>
  </Router>
);

export default App;
