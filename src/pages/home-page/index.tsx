import React from 'react'

import BasicLayout from "../../page-components/themes/basic-layout";
import BasicCardsContainer from './basics-cards-container';
import IconHeaderCard from "../../page-components/icon-header-card";

import { HomeHeaderBackground } from "./header-backgrounds";
import HowItWorks from "./how-it-works";

import FeaturesSection from './features-section';
import PageFooter from '../../page-components/themes/page-footer';
import { config } from '../../configs';


import { SimpleHeaderBackground } from './header-backgrounds';
import RightPosterImage from './right-poster-image';
import { HomeTitleSection } from '../../page-components/text-title-sections';
import SmallText from './SmallText';
import ButtonsContainer from '../../page-components/buttons-container';
import { pagesLinks } from "../../links-components";

import { MobileConnect } from '../../mobile';
import { useWindowSize } from '../../app-layout';
import authenticationImage from './images/authentication.svg'
import mobileControlImage from './images/control.svg';
import secondScreenImage from './images/second-screen.svg';
import encryptionImage from './images/encryption.png';
import mobilePersonStorageImage from './images/personal-storage.png';
import mobileContentTransferImage from './images/transfer.png';



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

const headerTextContent = {
  title: "Mobile Integration",
  subtitle: "Mobile Solution for Device Applications",
  smallText: "Data Security, Mobile Input & Control for IoT",
  description: "Users Carry Their Around Own Data or their Key "
};
const AuthenticationCard = () => (
  <IconHeaderCard titleIcon={authenticationImage}
    title={textContent.authentication.title}
    content={textContent.authentication.content}
    link={config.paths.mobileAuthentication.path}
  />
);

const MobileControlCard = () => (
  <IconHeaderCard titleIcon={mobileControlImage}
    title={textContent.mobileControl.title}
    content={textContent.mobileControl.content}
    link={config.paths.mobileControl.path}
  />

);
const SecondScreenCard = () => (
  <IconHeaderCard titleIcon={secondScreenImage}
    title={textContent.secondScreen.title}
    content={textContent.secondScreen.content}
    link={config.paths.secondScreen.path}
  />
);
const MobileEncryptionCard = () => (
  <IconHeaderCard titleIcon={encryptionImage}
    title={textContent.encryption.title}
    content={textContent.encryption.content}
    link={config.paths.aboutContentEncryption.path}
  />
);
const PersonalStorageCard = () => (
  <IconHeaderCard titleIcon={mobilePersonStorageImage}
    title={textContent.mobilePersonStorage.title}
    content={textContent.mobilePersonStorage.content}
    link={config.paths.mobilePersonalStorage.path}
  />
);
const ContentTransferCard = () => (
  <IconHeaderCard titleIcon={mobileContentTransferImage}
    title={textContent.mobileContentTransfer.title}
    content={textContent.mobileContentTransfer.content}
    link={config.paths.mobileContentTransfer.path}
  />
)


const CardSection = ({ scWidth }) => {

  if (scWidth > 1340) {
    return (<>
      <BasicCardsContainer>
        <AuthenticationCard />
        <MobileControlCard />
        <SecondScreenCard />
      </BasicCardsContainer>
      <BasicCardsContainer>
        <MobileEncryptionCard />
        <PersonalStorageCard />
        <ContentTransferCard />
      </BasicCardsContainer></>
    );
  }
  else {
    return (
      <>
        <BasicCardsContainer>
          <AuthenticationCard />
          <MobileEncryptionCard />


        </BasicCardsContainer>
        <BasicCardsContainer>
          <SecondScreenCard />
          <MobileControlCard />

        </BasicCardsContainer>
        <BasicCardsContainer>
          <PersonalStorageCard />
          <ContentTransferCard />
        </BasicCardsContainer>
        <BasicCardsContainer>
          <PersonalStorageCard />
          <ContentTransferCard />
        </BasicCardsContainer>
      </>
    );
  }
};


const HomePage: React.FC = () => {
  const initData = {
    id: "website-home",
    form: {
      title: "Home",
      fields: [{
        type: "info",
        value: "Welcome to Global Input App home page!"
      }]
    }
  };


  const { GetAppButton } = pagesLinks.buttons;

  const [width] = useWindowSize();

  return (
    <BasicLayout selected={config.paths.home.path}>
      <HomeHeaderBackground>
        <SimpleHeaderBackground>

          <RightPosterImage scWidth={width} />
          <MobileConnect initData={initData} silent={false} />
          <HomeTitleSection
            title={headerTextContent.title}
            subtitle={headerTextContent.subtitle}>

            <SmallText content={headerTextContent.smallText} scWidth={width} />

            <ButtonsContainer>
              <GetAppButton>Get It Free</GetAppButton>
            </ButtonsContainer>
          </HomeTitleSection>
        </SimpleHeaderBackground>

        <CardSection scWidth={width} />
        <HowItWorks />
      </HomeHeaderBackground>
      <FeaturesSection />
      <PageFooter />


    </BasicLayout>
  )
};

export default HomePage;
