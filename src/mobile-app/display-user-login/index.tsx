import React, { useState } from 'react';
import styled from 'styled-components';

import { userLoginText } from '../configs';
import { appdata } from '../store';
import logo from '../images/logo.png';

const DialogButton = function ({ buttonText, onClick, position }) {
  return (
    <Button onClick={onClick}>{buttonText}</Button>
  );
}

const TextInputField= styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  transition: border 0.3s ease;

  &:focus {
    border-color: #007BFF;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 100%;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Header = styled.div`
  margin-bottom: 20px;
`;

const Form = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const FormItem = styled.div`
  margin-bottom: 16px;
`;

const ErrorMessage = styled.p`
  color: #FF4D4D;
  font-size: 14px;
  text-align: center;
  font-weight: bold;
`;

const TitleText = styled.h2`
  text-align: center;
  margin-bottom: 24px;
  font-size: 24px;
  color: #333;
`;

const HelpText = styled.p`
  font-size: 14px;
  color: #666;
  text-align: center;
  margin-top: 8px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const DisplayUserLogin = ({ onLoggedIn }) => {
  const initialData = {
    password: 'camilla',
    repeatedPassword: '',
    revealSecret: true,
    errorMessage: null,
    resettingApp: false,
  };

  const [compData, setCompData] = useState(initialData);

  const setPassword = (password) =>
    setCompData((prev) => ({ ...prev, password }));
  const setErrorMessage = (errorMessage) =>
    setCompData((prev) => ({ ...prev, errorMessage }));
  const setRepeatedPassword = (repeatedPassword) =>
    setCompData((prev) => ({ ...prev, repeatedPassword }));
  const setRevealSecret = (revealSecret) =>
    setCompData((prev) => ({ ...prev, revealSecret }));
  const setResettingApp = (resettingApp) =>
    setCompData((prev) => ({ ...prev, resettingApp }));

  const setupPassword = () => {
    const password = compData.password.trim();
    const repeatedPassword = compData.repeatedPassword.trim();
    if (!password) {
      setErrorMessage(userLoginText.errorMessages.setup.missingPassword);
    } else if (!repeatedPassword) {
      setErrorMessage(userLoginText.errorMessages.setup.missingRepeatedPassword);
    } else if (password !== repeatedPassword) {
      setErrorMessage(userLoginText.errorMessages.setup.repeatedPasswordNotMatch);
    } else {
      if (appdata.userAppLoginSetup(password)) {
        onLoggedIn();
      } else {
        setErrorMessage(userLoginText.errorMessages.setup.failedToSetup);
      }
    }
  };

  const login = () => {
    const password = compData.password.trim();
    if (!password) {
      setErrorMessage(userLoginText.errorMessages.login.missingPassword);
    } else if (appdata.userAppLogin(password)) {
      onLoggedIn();
    } else {
      setErrorMessage(userLoginText.errorMessages.login.incorrectPassword);
    }
  };

  const resetApp = () => setResettingApp(true);
  const cancelResetApp = () => setResettingApp(false);
  const confirmResetApp = () => {
    appdata.resetApp();
    setResettingApp(false);
  };

  const renderErrorMessage = () => compData.errorMessage && (
    <FormItem>
      <ErrorMessage>{compData.errorMessage}</ErrorMessage>
    </FormItem>
  );

  const renderLoginSetUpPage = () => (
    <Form>
      <TitleText>{userLoginText.setup.title}</TitleText>
      {renderErrorMessage()}
      <FormItem>
        <TextInputField
          placeholder={userLoginText.setup.password.placeHolder}
          value={compData.password}
          type={compData.revealSecret ? 'text' : 'password'}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="off"
          autoCapitalize="none"
        />
      </FormItem>
      <FormItem>
        <TextInputField
          placeholder={userLoginText.setup.repeatedPassword.placeHolder}
          value={compData.repeatedPassword}
          type={compData.revealSecret ? 'text' : 'password'}
          onChange={(e) => setRepeatedPassword(e.target.value)}
          autoComplete="off"
          autoCapitalize="none"
        />
      </FormItem>
      <FormItem>
        <DialogButton
          position="separate"
          buttonText={userLoginText.setup.buttonText}
          onClick={setupPassword}
        />
      </FormItem>
      <HelpText>{userLoginText.setup.content}</HelpText>
    </Form>
  );

  const renderLoginForm = () => (
    <Form>
      {renderErrorMessage()}
      <FormItem>
        <TextInputField
          placeholder={userLoginText.login.password.placeHolder}
          value={compData.password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="off"
          autoCapitalize="none"
        />
      </FormItem>
      <FormItem>
        <DialogButton
          position="separate"
          buttonText={userLoginText.login.buttonText}
          onClick={login}
        />
      </FormItem>
      <HelpText>{userLoginText.login.content}</HelpText>
      <FormItem>
        <DialogButton
          position="separate"
          buttonText={userLoginText.resetApp.buttonText}
          onClick={resetApp}
        />
      </FormItem>
    </Form>
  );

  const resettingAppContent = () => (
    <Form>
      <TitleText>{userLoginText.resetApp.title}</TitleText>
      <FormItem>
        <HelpText>{userLoginText.resetApp.content}</HelpText>
      </FormItem>
      <FormItem>
        <DialogButton
          position="separate"
          buttonText={userLoginText.resetApp.confirmText}
          onClick={confirmResetApp}
        />
      </FormItem>
      <FormItem>
        <DialogButton
          position="separate"
          buttonText={userLoginText.resetApp.cancelText}
          onClick={cancelResetApp}
        />
      </FormItem>
    </Form>
  );

  const renderContent = () => {
    if (appdata.isFormDataPasswordProtected()) {
      return compData.resettingApp ? resettingAppContent() : renderLoginForm();
    } else {
      return renderLoginSetUpPage();
    }
  };

  return (
    <Container>
      <Header />
      <Content>        
        <TitleText>{userLoginText.app.title}</TitleText>
        {renderContent()}
      </Content>
    </Container>
  );
};

export default DisplayUserLogin;