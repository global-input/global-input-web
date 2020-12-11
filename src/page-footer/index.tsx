import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { config } from '../configs';
import footerBackground from './images/footer-background.svg';

export const PageFooter = () => {
    return (
        <Container>
            <Content>
                    <FooterMobileAuthentication />
                    <FooterMobileEncryption />
                    <FooterSecondScreen />
                    <FooterMobileInputControl/>
                    <FooterMobilePersonalStorage />
                    <FooterMobileContentTransfer/>
                    <FooterDownload />
                    <FooterPrivacyPolicy />
                    <FooterContactUs/>
                    <VerticalCover/>
            </Content>
        </Container>
    )
};

const FooterMobileAuthentication =  () => (<Item1 to={config.paths.mobileAuthentication.path}>Mobile Authentication</Item1>);
const FooterMobileEncryption =      () => (<Item2 to={config.paths.aboutContentEncryption.path}>Mobile Encryption</Item2>);
const FooterMobileInputControl =    () => (<Item3 to={config.paths.mobileControl.path}>Mobile Input &amp; Control</Item3>);

const FooterSecondScreen =          () => (<Item4 to={config.paths.secondScreen.path}>Second Screen</Item4>);
const FooterMobilePersonalStorage = () => (<Item5 to={config.paths.mobilePersonalStorage.path}>Mobile Secure Storage</Item5>);
const FooterMobileContentTransfer = () => (<Item6 to={config.paths.mobileContentTransfer.path}>Content Transfer</Item6>);

const FooterPrivacyPolicy =         () => (<Item7 to={config.paths.privacy.path}>Privacy Policy</Item7>);

const FooterDownload =              () => (<Item8 to={config.paths.getAppScreen.path}>Get It Free</Item8>);

const FooterContactUs =             () => (<Item9 to={config.paths.contactUs.path}>Contact Us</Item9>);

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
    @media only screen and (min-width: 600px){
        background-size: cover;
    }
`;

const Content = styled.div`
      flex-wrap:wrap;
      display: flex;
      margin-bottom:10px;
      position:relative;
      flex-direction: row;
      align-items: center;
      width: 100%;

      justify-content:space-between;
      @media only screen and (min-width: 500px){
            width: 500px;
      }
      @media only screen and (min-width: 600px){
        width: 500px;
      }
      @media only screen and (min-width: 700px){
        width: 600px;
      }
      @media only screen and (min-width: 800px){
        width: 700px;
      }
      @media only screen and (min-width: 900px){
        width: 800px;
      }
      @media only screen and (min-width: 1000px){
        width: 900px;
      }

      @media only screen and (min-width: 1100px){
        width: 1000px;
      }





`;
const Item = styled(Link)`

      padding-bottom: 10px;
      padding-left:5px;
      width: 120px;
      font-size: 8px;
      color:white;
      border-left: 1px solid white;

      &: hover{
          text-decoration: none;
          fontWeight: 300;
          border-bottom: 1px solid white;

          color:white;
      }


      @media only screen and (min-width:310px){
        width: 150px;
        font-size: 12px;
      }
      @media only screen and (min-width:360px){
        width: 170px;
        padding-left: 10px;
        font-size: 11px;
      }
      @media only screen and (min-width:400px){
        width: 190px;

        font-size: 14px;

      }
      @media only screen and (min-width:500px){
        width: 250px;
        font-size: 16px;

      }
      @media only screen and (min-width:600px){
        width: 250px;
      }

      @media only screen and (min-width:700px){
        width: 300px;
      }
      @media only screen and (min-width:800px){
        width: 200px;
      }
      @media only screen and (min-width:900px){
        width: 250px;
      }
      @media only screen and (min-width:1000px){
        width: 300px;
      }



`;


const Item1=styled(Item)`
`;
const Item2=styled(Item)`
`;
const Item3=styled(Item)`
`;
const Item4=styled(Item)`
`;
const Item5=styled(Item)`
`;
const Item6=styled(Item)`
  display:none;
  @media only screen and (min-width:800px){
    display:flex;
  }
  @media only screen and (min-width: 1400px){
    display:flex;
  }
`;
const Item7=styled(Item)`
`;
const Item8=styled(Item)`
`;
const Item9=styled(Item)`
`;

const VerticalCover=styled.div`
    height:100%;
    width:4px;
    background-color:#4f8fd4;
    position:absolute;
    top:0;
    left:-1px;
`;