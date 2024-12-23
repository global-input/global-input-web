import React, { useState } from 'react';
import styled from 'styled-components';

import { styles } from './styles';
import appStoreIcon from "./images/app-store.png";
import playStoreIcon from "./images/play-store.png";

import images from '../configs/images';
import userLoginText from '../configs/userLoginText';
import * as appStore from '../store';
import DialogButton from '../components/modal/DialogButton';
import TextInputField from '../components/input/TextInputField';
import { developmentPassword } from 'global-input-config';

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

const initialData = {
  password: developmentPassword,
  repeatedPassword: developmentPassword,
  revealSecret: true,
  errorMessage: null,
  resettingApp: false,
};

const DisplayUserLogin = ({ onLoggedIn }) => {
  const [compData, setCompData] = useState(initialData);

  const setPassword = (password) => setCompData({ ...compData, password });
  const setErrorMessage = (errorMessage) =>
    setCompData({ ...compData, errorMessage });
  const setRepeatedPassword = (repeatedPassword) =>
    setCompData({ ...compData, repeatedPassword });
  
  const setupPassword = () =>
    appStore.setupApp(compData.password.trim(), compData.repeatedPassword.trim(), onLoggedIn, setErrorMessage);

  const login = () => appStore.appSignin(compData.password.trim(), onLoggedIn, setErrorMessage);

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
          <TextInputField
            placeholder={userLoginText.setup.password.placeHolder}
            value={compData.password}
            type={compData.revealSecret ? 'text' : 'password'}
            onChangeTextValue={setPassword}
            autoComplete="off"
          />
        </div>
        <div style={styles.formItem}>
          <TextInputField
            placeholder={userLoginText.setup.repeatedPassword.placeHolder}
            value={compData.repeatedPassword}
            type={compData.revealSecret ? 'text' : 'password'}
            onChangeTextValue={setRepeatedPassword}
            autoComplete="off"
          />
        </div>
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
      </div>
    );
  };

  const renderLoginForm = () => {
    return (
      <div style={styles.form}>
        <div style={styles.formItem}>
          <TextInputField
            placeholder={userLoginText.login.password.placeHolder}
            value={compData.password}
            type="password"
            onChangeTextValue={setPassword}
            autoComplete="off"
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

  // Detect platform
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  const isIOS = /iPhone|iPad|iPod|MacIntel/.test(navigator.platform) ||
                /Mac OS X/.test(userAgent);
  const isAndroid = /Android/.test(userAgent);

  const renderStoreLinks = () => {
    // Conditional logic for displaying icons
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
      // Show both if not on iOS or Android
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
      {/* If you had a footer, you could leave it empty or remove it */}
      <div style={{ ...styles.footer, marginTop: '20px' }}>
        {/* Additional content or instructions can go here */}
      </div>
    </div>
  );
};

export default DisplayUserLogin;