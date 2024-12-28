import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { styles } from './styles';
import appStoreIcon from "./images/app-store.png";
import playStoreIcon from "./images/play-store.png";
import images from '../configs/images';
import userLoginText from '../configs/userLoginText';
import * as appStore from '../store';
import DialogButton from '../components/modal/DialogButton';
import TextInputField from '../components/input/TextInputField';
import PasswordInputField from './PasswordInputField';

const AppStoreImage = styled.img.attrs({
  src: appStoreIcon,
  alt: "App Store",
})`
  width: 120px;
  height: auto;
  margin: 5px;
`;

const PlayStoreImage = styled.img.attrs({
  src: playStoreIcon,
  alt: "Play Store",
})`
  width: 120px;
  height: auto;
  margin: 5px;
`;

const ButtonLink = styled.a.attrs({
  target: "_blank",
  rel: `noopener noreferrer`,
})`
  display: inline-flex;
`;

const StoreLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px; /* Add spacing to give breathing room */
`;
const RememberPasswordBlock = styled.div`
  margin-top: 12px;
  color:white;  
  font-size: 14px;
  
`;
const StyledLabel = styled.label`
  cursor: pointer;
`;
const initialData = {
  password: '',
  repeatedPassword: '',
  visibilityState: {
    password: false,
    repeatedPassword: false,
    loginPassword: false
  },
  errorMessage: null,
  resettingApp: false,
};



const RememberPassword = ({ rememberPassword, setRememberPassword }) => {
return(
  <div style={styles.formItem}>
        <RememberPasswordBlock>
          <StyledLabel>
            <input
              type="checkbox"
              checked={rememberPassword}
              onChange={(e) => setRememberPassword(e.target.checked)}
            />
            <span style={{ marginLeft: '5px' }}>Remember Password (Checking this box will store your password on your device.)</span>
          </StyledLabel>
          
    </RememberPasswordBlock>
        </div>
);
}


const DisplayUserLogin = ({ onLoggedIn }) => {
  const [compData, setCompData] = useState(initialData);

  // 1. ADD NEW STATE FOR REMEMBERING PASSWORD
  const [rememberPassword, setRememberPassword] = useState(false);

  const setPassword = (password) => setCompData({ ...compData, password });
  const setErrorMessage = (errorMessage) =>
    setCompData({ ...compData, errorMessage });
  const setRepeatedPassword = (repeatedPassword) =>
    setCompData({ ...compData, repeatedPassword });


  const toggleFieldVisibility = (field) => {
    setCompData({
      ...compData,
      visibilityState: {
        ...compData.visibilityState,
        [field]: !compData.visibilityState[field]
      }
    });
  };

  
  // 2. ON COMPONENT MOUNT, RETRIEVE A SAVED PASSWORD (IF ANY)
  useEffect(() => {
    const loadRememberPassword =async ()=>{
      const savedPassword = await appStore.getRememberPassword();
      if (savedPassword) {
        setCompData({ ...compData, password: savedPassword });
        setRememberPassword(true);
      }

    }
    loadRememberPassword();    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Modified setupPassword to optionally store password
  const setupPassword = () => {
    appStore.setupApp(
      compData.password.trim(),
      compData.repeatedPassword.trim(),
      onLoggedIn,
      setErrorMessage,
      rememberPassword
    );    
  };

  // Modified login to optionally store password
  const login = () => {
    appStore.appSignin(compData.password.trim(), onLoggedIn, setErrorMessage, rememberPassword);    
  };

  const resetApp = () => {
    setCompData({ ...compData, resettingApp: true });
  };

  const cancelResetApp = () => {
    setCompData({ ...compData, resettingApp: false });
  };

  const confirmResetApp = () => {
    appStore.resetApp();
    setCompData({ ...compData, resettingApp: false });
  };

  const renderErrorMessage = () => {
    if (compData.errorMessage) {
      return (
        <div style={styles.formItem}>
          <span style={styles.errorMessage}>{compData.errorMessage}</span>
        </div>
      );
    } else {
      return null;
    }
  };

  const renderLoginSetUpPage = () => {
    return (
      <div style={styles.form}>
        <div style={styles.formHeader}>
          <span style={styles.titleText}>{userLoginText.setup.title}</span>
        </div>
        <div style={styles.formItem}>
  <PasswordInputField
    placeholder={userLoginText.setup.password.placeHolder}
    value={compData.password}
    isVisible={compData.visibilityState.password}
    onToggleVisibility={() => toggleFieldVisibility('password')}
    onChangeTextValue={setPassword}
  />
</div>
<div style={styles.formItem}>
  <PasswordInputField
    placeholder={userLoginText.setup.repeatedPassword.placeHolder}
    value={compData.repeatedPassword}
    isVisible={compData.visibilityState.repeatedPassword}
    onToggleVisibility={() => toggleFieldVisibility('repeatedPassword')}
    onChangeTextValue={setRepeatedPassword}
  />
</div>

        {/* 3. RENDER THE CHECKBOX IN SETUP MODE */}
        

        <div style={styles.formItem}>
          <DialogButton
            position="separate"
            buttonText={userLoginText.setup.buttonText}
            onPress={setupPassword}
          />
        </div>
        <div style={styles.helpContainer}>
          {renderErrorMessage()}
          <span style={styles.helpText}>{userLoginText.login.content}</span>
        </div>
        <RememberPassword rememberPassword={rememberPassword} setRememberPassword={setRememberPassword}/>
        
      </div>
    );
  };

  const renderLoginForm = () => {
    return (
      <div style={styles.form}>
        <div style={styles.formItem}>
  <PasswordInputField
    placeholder={userLoginText.login.password.placeHolder}
    value={compData.password}
    isVisible={compData.visibilityState.loginPassword}
    onToggleVisibility={() => toggleFieldVisibility('loginPassword')}
    onChangeTextValue={setPassword}
  />
</div>

        

        <div style={styles.formItem}>
          <DialogButton
            position="separate"
            buttonText={userLoginText.login.buttonText}
            onPress={login}
          />
        </div>
        <div style={styles.formItem}>
          <DialogButton
            position="separate"
            buttonText={userLoginText.resetApp.buttonText}
            onPress={resetApp}
          />
        </div>
        <div style={styles.helpContainer}>
          {renderErrorMessage()}
          <span style={styles.helpText}>{userLoginText.login.content}</span>
        </div>
        <RememberPassword rememberPassword={rememberPassword} setRememberPassword={setRememberPassword}/>
      </div>
    );
  };

  const resettingApp = () => {
    return (
      <div style={styles.form}>
        <div style={styles.formHeader}>
          <span style={styles.titleText}>{userLoginText.resetApp.title}</span>
        </div>
        <div style={styles.formItem}>
          <div style={styles.helpContainer}>
            <span style={styles.helpText}>{userLoginText.resetApp.content}</span>
          </div>
        </div>
        <div style={styles.formItem}>
          <DialogButton
            position="separate"
            buttonText={userLoginText.resetApp.confirmText}
            onPress={confirmResetApp}
          />
        </div>
        <div style={styles.formItem}>
          <DialogButton
            position="separate"
            buttonText={userLoginText.resetApp.cancelText}
            onPress={cancelResetApp}
          />
        </div>
      </div>
    );
  };

  const renderContent = () => {
    if (appStore.isAppLoginSetup()) {
      if (compData.resettingApp) {
        return resettingApp();
      } else {
        return renderLoginForm();
      }
    } else {
      return renderLoginSetUpPage();
    }
  };

  const renderHeader = () => {
    return <div style={styles.header}></div>;
  };

  // Detect platform for store badges
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  const isIOS = /iPhone|iPad|iPod|MacIntel/.test(navigator.platform) ||
                /Mac OS X/.test(userAgent);
  const isAndroid = /Android/.test(userAgent);

  const renderStoreLinks = () => {
    if (isIOS) {
      return (
        <StoreLinksContainer>
          <ButtonLink href="https://apps.apple.com/us/app/global-input-app/id1269541616">
            <AppStoreImage />
          </ButtonLink>
        </StoreLinksContainer>
      );
    } else if (isAndroid) {
      return (
        <StoreLinksContainer>
          <ButtonLink href="https://play.google.com/store/apps/details?id=uk.co.globalinput2">
            <PlayStoreImage />
          </ButtonLink>
        </StoreLinksContainer>
      );
    } else {
      return (
        <StoreLinksContainer>
          <ButtonLink href="https://apps.apple.com/us/app/global-input-app/id1269541616">
            <AppStoreImage />
          </ButtonLink>
          <ButtonLink href="https://play.google.com/store/apps/details?id=uk.co.globalinput2">
            <PlayStoreImage />
          </ButtonLink>
        </StoreLinksContainer>
      );
    }
  };

  return (
    <div style={styles.container}>
      {renderHeader()}
      <div style={styles.content}>
        <img style={styles.logo} src={images.logo} alt="Logo" />
        <span style={styles.logoText}>{userLoginText.app.title}</span>
        {renderContent()}
        {renderStoreLinks()}
      </div>
      <div style={{ ...styles.footer, marginTop: '20px' }}>
        {/* Additional content or instructions can go here */}
      </div>
    </div>
  );
};

export default DisplayUserLogin;