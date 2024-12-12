// src/mobile-app/display-user-login/index.js

import React, { useState, useEffect } from 'react';

import { styles } from './styles';


import images from '../configs/images';
import userLoginText from '../configs/userLoginText';

import * as appStore  from '../store';
import DialogButton from '../components/modal/DialogButton';
import TextInputField from '../components/input/TextInputField';
import {developmentPassword} from '../tests';


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
  const setRevealSecret = (revealSecret) =>
    setCompData({ ...compData, revealSecret });

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
            onChangeTextValue={(value) => setPassword(value)}
            autoComplete="off"
          />
        </div>
        <div style={styles.formItem}>
          <TextInputField
            placeholder={userLoginText.setup.repeatedPassword.placeHolder}
            value={compData.repeatedPassword}
            type={compData.revealSecret ? 'text' : 'password'}
            onChangeTextValue={(value) => setRepeatedPassword(value)}            
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
            onChangeTextValue={(value) => setPassword(value)}
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

  return (
    <div style={styles.container}>
      {renderHeader()}
      <div style={styles.content}>
        <img style={styles.logo} src={images.logo} alt="Logo" />
        <span style={styles.logoText}>{userLoginText.app.title}</span>
        {renderContent()}
      </div>
    </div>
  );
};

export default DisplayUserLogin;