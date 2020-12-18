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
            </Content>
        </Container>
    )
};

const FooterMobileAuthentication =  () => (<Item1 to={config.paths.mobileAuthentication.path}>Mobile Authentication</Item1>);
const FooterMobileEncryption =      () => (<Item2 to={config.paths.aboutContentEncryption.path}>Mobile Encryption</Item2>);
const FooterSecondScreen =          () => (<Item3 to={config.paths.secondScreen.path}>Second Screen</Item3>);
const FooterMobileInputControl =    () => (<Item4 to={config.paths.mobileControl.path}>Mobile Input &amp; Control</Item4>);


const FooterMobilePersonalStorage = () => (<Item5 to={config.paths.mobilePersonalStorage.path}>Mobile Secure Storage</Item5>);
const FooterMobileContentTransfer = () => (<Item6 to={config.paths.mobileContentTransfer.path}>Content Transfer</Item6>);
const FooterDownload =              () => (<Item7 to={config.paths.getAppScreen.path}>Get It Free</Item7>);
const FooterPrivacyPolicy =         () => (<Item8 to={config.paths.privacy.path}>Privacy Policy</Item8>);
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

      display: flex;
      margin-bottom:10px;
      align-items: center;
      flex-direction:column;
      width: 100%;

      @media only screen and (min-width: 280px){
        justify-content:space-between;
        flex-direction: row;
        flex-wrap:wrap;
        width:95%;
      }



      @media only screen and (min-width: 500px){
            width: 500px;
      }
      @media only screen and (min-width: 600px){
        width: 600px;
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
      font-size: 8px;
      color:white;

      text-decoration:none;
      &: hover{
          text-decoration: none;
          font-weight: 500;
          text-shadow: 0 0 50px #ffff;

      }
      @media only screen and (min-width: 280px){
          border-left: 1px solid white;
          width: 120px;

      }

      @media only screen and (min-width:310px){
        width: 140px;
        font-size: 12px;
      }


      @media only screen and (min-width:400px){
        width: 180px;
        font-size: 14px;
      }
      @media only screen and (min-width:500px){
        width: 240px;
        font-size: 16px;
      }
      @media only screen and (min-width:600px){
        width: 250px;
      }

`;


const Item1=styled(Item)`

@media only screen and (min-width: 280px){
    border-left: 0px solid white;
}

`;
const Item2=styled(Item)`
`;
const Item3=styled(Item)`
@media only screen and (min-width: 280px){
  border-left: 0px solid white;
}
@media only screen and (min-width: 900px){
  border-left: 1px solid white;
}
`;
const Item4=styled(Item)`
@media only screen and (min-width: 900px){
  border-left: 0px solid white;
}
`;
const Item5=styled(Item)`
@media only screen and (min-width: 280px){
  border-left: 0px solid white;
}
@media only screen and (min-width: 900px){
  border-left: 1px solid white;
}
`;
const Item6=styled(Item)`
  display:none;


  @media only screen and (min-width:900px){
    display:flex;
  }

`;
const Item7=styled(Item)`
@media only screen and (min-width: 900px){
  border-left: 0px solid white;
}
`;
const Item8=styled(Item)`
@media only screen and (min-width: 280px){
  border-left: 0px solid white;
}
@media only screen and (min-width: 900px){
  border-left: 1px solid white;
}
`;
const Item9=styled(Item)`
`;
