import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { config } from '../../configs';

import authenticationImage from './images/authentication.svg'
import mobileControlImage from './images/control.svg';
import secondScreenImage from './images/second-screen.svg';
import encryptionImage from './images/encryption.png';
import mobilePersonStorageImage from './images/personal-storage.png';
import mobileContentTransferImage from './images/transfer.png';
import arrow from './images/arrow.svg';

const textContent = {
    authentication: {
        title: "Mobile Authentication",
        content: ["Authentication on shared devices in public view, No need to hide screen, keyboard even mobile screen when signing in on a shared device"],
    },
    mobileControl: {
        title: "Mobile Input & Control",
        content: ["Extends applications to allows users to use smartphones to operate and transfer data securely."],
    },
    secondScreen: {
        title: "Second Screen",
        content: ["A simple and innovative solution to introduce the Second Screen Experience to the Smart TV applications"],
    },
    encryption: {
        title: "Mobile Encryption",
        content: ["Applications send content to your mobile device for encryption/decryption, so your encryption keys never leaves your device."],
    },
    mobilePersonStorage: {
        title: "Mobile Personal Storage",
        content: ["Applications does not have store personal in their databases, because they can request on-demand from the connected mobile app"],
    },
    mobileContentTransfer: {
        title: "Mobile Content Transfer",
        content: ["You can transfer content securely from your mobile device over to computers or other smart devices or vise versa"],
    }
};


export const CardSection=()=>(
    <Cards>
        <CardsContent>
                <AuthenticationCard/>
                <MobileControlCard/>
                <SecondScreenCard />

                <MobileEncryptionCard />

                <PersonalStorageCard/>
                <ContentTransferCard/>


        </CardsContent>


    </Cards>

)



const AuthenticationCard = () => (
    <Card>
            <IconContainer>
                <Icon src={authenticationImage}/>
            </IconContainer>
            <Title>{textContent.authentication.title}</Title>
            <Content>{textContent.authentication.content}</Content>
            <More to={config.paths.mobileAuthentication.path}/>
    </Card>
);



const MobileControlCard = () => (
    <Card>
            <IconContainer>
                <Icon src={mobileControlImage}/>
            </IconContainer>
            <Title>{textContent.mobileControl.title}</Title>
            <Content>{textContent.mobileControl.content}</Content>
            <More to={config.paths.mobileControl.path}/>
    </Card>
);
const SecondScreenCard = () => (
    <Card>
            <IconContainer>
                <Icon src={secondScreenImage}/>
            </IconContainer>
            <Title>{textContent.secondScreen.title}</Title>
            <Content>{textContent.secondScreen.content}</Content>
            <More to={config.paths.secondScreen.path}/>
    </Card>
);
const MobileEncryptionCard = () => (

    <Card>
            <IconContainer>
                <Icon src={encryptionImage}/>
            </IconContainer>
            <Title>{textContent.encryption.title}</Title>
            <Content>{textContent.encryption.content}</Content>
            <More to={config.paths.aboutContentEncryption.path}/>
    </Card>
);
const PersonalStorageCard = () => (
    <Card>
            <IconContainer>
                <Icon src={mobilePersonStorageImage}/>
            </IconContainer>
            <Title>{textContent.mobilePersonStorage.title}</Title>
            <Content>{textContent.mobilePersonStorage.content}</Content>
            <More to={config.paths.mobilePersonalStorage.path}/>
    </Card>
);
const ContentTransferCard = () => (
    <Card>
            <IconContainer>
                <Icon src={mobileContentTransferImage}/>
            </IconContainer>
            <Title>{textContent.mobileContentTransfer.title}</Title>
            <Content>{textContent.mobileContentTransfer.content}</Content>
            <More to={config.paths.mobileContentTransfer.path}/>
    </Card>
)






const IconContainer=styled.div`
      width:100%;
      margin-bottom:20px;
      margin-top:20px;
`;
const Icon=styled.img`
      display: block;
      margin-left: auto;
      margin-right: auto;
`;


const Title=styled.div`
      font-size: 20px;
      display: flex;
      flex-direction: row;
      width: 100%;
      justify-content: center;
      font-size: 25px;
      @media only screen and (min-width:600px){
        font-size: 20px;
`;



const Content= styled.div`
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      padding-left: 20px;
      padding-right: 20px;
      padding-top: 20px;
      font-size: 14px;
      width: 100%;
  `;

const Footer=styled.div`
    text-align: center;
    width: 100%;
    bottom: 30px;
    margin-top: 10px;
    color: #A8A8A8;
    position:absolute;
    bottom:20px;
    left:0;
`

const More= ({to}) => (
    <Footer>
        <Link to={to}> MORE <img src={arrow}  alt='arrow' /></Link>
    </Footer>
);
const Cards=styled.div`
   display: flex;
   flex-direction:column;
   justify-content:flex-start;
   align-items:center;
   width:100%;
   margin-top:60px;
`;
const CardsContent=styled.div`
   display: flex;
   flex-direction:column;
   justify-content:flex-start;
   align-items:center;
   width:100%;


   @media only screen and (min-width:750px){
     flex-wrap: wrap;
     flex-direction:row;
     justify-content: space-between;
     padding:20px;
   }
   @media only screen and (min-width:700px){
    width:700px;
  }

   @media only screen and (min-width:800px){
    width:800px;

  }
  @media only screen and (min-width:1024px){
    width:900px;
  }
  @media only screen and (min-width:1400px){
    width:1350px;
  }


`;
const Card =styled.div`
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      background-color: #FFFFFF;
      color: #5291CD;


      height: 300px;

      border-radius: 5px;
      padding-top: 20px
      position: relative;
      padding-bottom: 50px;
      margin-top:10px;
      margin-bottom:10px;
      position: relative;
      width: 95%;
      @media only screen and (min-width:400px){
        width: 370px;
      }
`;