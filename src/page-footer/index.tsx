import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { config } from "../mobile-app/configs";
import footerBackground from "./images/footer-background.svg";

export const PageFooter = () => {
  return (
    <Container>
      <Content>
        <FooterMobileAuthentication />
        <FooterMobileEncryption />
        <FooterSecondScreen />
        <FooterMobileInputControl />
        <FooterMobilePersonalStorage />
        <FooterMobileContentTransfer />
        <FooterDownload />
        <FooterPrivacyPolicy />
        <FooterContactUs />
      </Content>
    </Container>
  );
};

const FooterMobileAuthentication = () => (
  <Item to={config.paths.mobileAuthentication.path}>Mobile Authentication</Item>
);
const FooterMobileEncryption = () => (
  <Item to={config.paths.aboutContentEncryption.path}>Mobile Encryption</Item>
);
const FooterSecondScreen = () => (
  <Item to={config.paths.secondScreen.path}>Second Screen</Item>
);
const FooterMobileInputControl = () => (
  <Item to={config.paths.mobileControl.path}>Mobile Input &amp; Control</Item>
);
const FooterMobilePersonalStorage = () => (
  <Item to={config.paths.mobilePersonalStorage.path}>
    Mobile Secure Storage
  </Item>
);
const FooterMobileContentTransfer = () => (
  <Item2 to={config.paths.mobileContentTransfer.path}>Content Transfer</Item2>
);
const FooterDownload = () => (
  <Item to={config.paths.getAppScreen.path}>Get It Free</Item>
);
const FooterPrivacyPolicy = () => (
  <Item to={config.paths.privacy.path}>Privacy Policy</Item>
);
const FooterContactUs = () => (
  <Item to={config.paths.contactUs.path}>Contact Us</Item>
);

const Container = styled.div`
  padding-top: 50px;
  background-image: url(${footerBackground});
  background-repeat: no-repeat;
  width: 100%;
  min-height: 300px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-size: auto;
  @media only screen and (min-width: 600px) {
    background-size: cover;
  }
`;

const Content = styled.div`
  display: flex;
  margin-bottom: 30px;
  align-items: center;
  flex-direction: column;

  @media only screen and (min-width: 280px) {
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
    width: 95%;
  }
  @media only screen and (min-width: 500px) {
    width: 400px;
  }
  @media only screen and (min-width: 600px) {
    width: 500px;
  }
  @media only screen and (min-width: 1000px) {
    width: 600px;
  }
`;
const Item = styled(Link)`

      margin-bottom: 10px;
      font-size: 8px;
      color:white;
      text-decoration:none;

      transition: all 0.3s ease 0s;

      &: hover{
        color: #e3e3e3;
      }

    }
    @media only screen and (min-width: 280px){
        width: 120px;
    }

    @media only screen and (min-width:310px){
      width: 140px;
      font-size: 10px;
    }


    @media only screen and (min-width:400px){
      width: 180px;
      font-size: 12px;
    }
    @media only screen and (min-width:500px){
      font-size: 14px;
    }
    @media only screen and (min-width:1000px){
      width: 200px;
    }
`;

const Item2 = styled(Item)`
  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;
