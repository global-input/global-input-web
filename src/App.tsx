import React, { useEffect,Suspense } from "react";
import { useLocation } from "react-router-dom";
import {
  BrowserRouter as Router,
  Route,
  Routes,  
} from "react-router-dom";
import { config } from "./web-config";
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
import MobileApp from "./mobile-app";

import * as microApps from "./micro-apps";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};








const App: React.FC = () => (
  <Router future={{
    v7_startTransition: true, // Enable the future flag
    v7_relativeSplatPath: true, // Enable the future flag
  }}>
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
      <Route path="/global-input-app/mobile-app" element={
      <Suspense fallback={<LoadingCircle/>}>
        <MobileApp/>
      </Suspense>
      } />
      

      
      <Route path="/global-input-app/*" element={<HomePage/>} />
      <Route path="*" element={<HomePage/>} />
      

    </Routes>
  </Router>
);

export default App;

const styles = {
  loading: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
};
const LoadingCircle = () => (
  <div style={styles.loading}>
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">
          <path fill="#C779D0" d="M25,5A20.14,20.14,0,0,1,45,22.88a2.51,2.51,0,0,0,2.49,2.26h0A2.52,2.52,0,0,0,50,22.33a25.14,25.14,0,0,0-50,0,2.52,2.52,0,0,0,2.5,2.81h0A2.51,2.51,0,0,0,5,22.88,20.14,20.14,0,0,1,25,5Z">
              <animateTransform attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.5s" repeatCount="indefinite" />
          </path>
      </svg>
  </div>
);

