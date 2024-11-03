import React, { useState } from 'react';
import styled from 'styled-components';

import { images, userLoginText } from '../configs';
import { appdata } from '../appdata';
import logo from '../images/logo.png';



const DialogButton = function ({ buttonText, onClick, position }) {
  return (
    <button onClick={onClick}>{buttonText}</button>
  );
}


const TextInputField= styled.input`
  /* Add styles for the input field */
`;
// Container for the entire component
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* Add other styles as per your original styles.container */
`;

// Header component
const Header = styled.div`
  /* Add styles for the header */
`;

// Form container
const Form = styled.div`
  width: 100%;
  max-width: 400px;
  /* Additional form styles */
`;

// Form item wrapper
const FormItem = styled.div`
  margin-bottom: 16px;
  /* Additional styles */code 
`;

// Error message text
const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  /* Additional styles */
`;

// Title text
const TitleText = styled.h2`
  text-align: center;
  /* Additional styles */
`;

// Help text
const HelpText = styled.p`
  font-size: 14px;
  color: #666;
  /* Additional styles */
`;

// Logo image
const Logo = styled.img`
  width: 100px;
  height: auto;
  margin-bottom: 16px;
`;

// Content wrapper
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Additional styled components as needed...
interface UserLoginProps {
  onLoggedIn: () => void;
}

const DisplayUserLogin: React.FC<UserLoginProps> = ({ onLoggedIn }) => {
  const initialData = {
    password: '',
    repeatedPassword: '',
    revealSecret: true,
    errorMessage: null as string | null,
    resettingApp: false,
  };

  const [compData, setCompData] = useState(initialData);

  const setPassword = (password: string) =>
    setCompData((prev) => ({ ...prev, password }));
  const setErrorMessage = (errorMessage: string | null) =>
    setCompData((prev) => ({ ...prev, errorMessage }));
  const setRepeatedPassword = (repeatedPassword: string) =>
    setCompData((prev) => ({ ...prev, repeatedPassword }));
  const setRevealSecret = (revealSecret: boolean) =>
    setCompData((prev) => ({ ...prev, revealSecret }));
  const setResettingApp = (resettingApp: boolean) =>
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

  const resetApp = () => {
    setResettingApp(true);
  };

  const cancelResetApp = () => {
    setResettingApp(false);
  };

  const confirmResetApp = () => {
    appdata.resetApp();
    setResettingApp(false);
  };

  const renderErrorMessage = () => {
    if (compData.errorMessage) {
      return (
        <FormItem>
          <ErrorMessage>{compData.errorMessage}</ErrorMessage>
        </FormItem>
      );
    }
    return null;
  };

  const renderLoginSetUpPage = () => (
    <Form>
      <TitleText>{userLoginText.setup.title}</TitleText>
      {renderErrorMessage()}
      <FormItem>
        <TextInputField
          placeholder={userLoginText.setup.password.placeHolder}
          value={compData.password}
          type={compData.revealSecret ? 'text' : 'password'}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          autoComplete="off"
        />
      </FormItem>
      <FormItem>
        <TextInputField
          placeholder={userLoginText.setup.repeatedPassword.placeHolder}
          value={compData.repeatedPassword}
          type={compData.revealSecret ? 'text' : 'password'}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRepeatedPassword(e.target.value)}
          autoComplete="off"
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
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          autoComplete="off"
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
      if (compData.resettingApp) {
        return resettingAppContent();
      } else {
        return renderLoginForm();
      }
    } else {
      return renderLoginSetUpPage();
    }
  };

  return (
    <Container>
      {/* If you have a header, include it here */}
      <Header />
      <Content>
        <Logo src={logo} alt="Logo" />
        <TitleText>{userLoginText.app.title}</TitleText>
        {renderContent()}
      </Content>
    </Container>
  );
};

export default DisplayUserLogin;