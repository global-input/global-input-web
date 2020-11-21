import React, { useState } from 'react'

import BasicLayout from "../../page-components/themes/basic-layout";
import BasicCardsContainer from './basics-cards-container';
import IconHeaderCard from "../../page-components/icon-header-card";

import { HomeHeaderBackground } from "./header-backgrounds";
import HowItWorks from "./how-it-works";

import FeaturesSection from './features-section';
import PageFooter from '../../page-components/themes/page-footer';
import { withScrollToTop, withResponsiveComponent } from "../../components/screen-media";
import { config } from '../../configs';
import RenderPageMetadata from "../RenderPageMetadata";

import { SimpleHeaderBackground } from './header-backgrounds';
import RightPosterImage from '../../page-components/right-poster-image';
import { HomeTitleSection } from '../../page-components/text-title-sections';
import SmallText from './header-section/small-text';
import ButtonsContainer from '../../page-components/buttons-container';
import { pagesLinks } from "../../links-components";

import { useMobile, DisplayMobileConnect } from '../../mobile';


const images = {
  authentication: require('./images/authentication.svg'),
  mobileControl: require('./images/control.svg'),
  secondScreen: require('./images/second-screen.svg'),
  encryption: require('./images/encryption.png'),
  mobilePersonStorage: require('./images/personal-storage.png'),
  mobileContentTransfer: require('./images/transfer.png'),
  rightPoster: require('./header-section/images/right-poster.png'),
  rightPoster400: require('./header-section/images/right-poster-400.png'),
  rightPoster200: require('./header-section/images/right-poster-200.png')
}




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
  <IconHeaderCard titleIcon={images.authentication}
    title={textContent.authentication.title}
    content={textContent.authentication.content}
    link={config.paths.mobileAuthentication.path}
  />
);

const MobileControlCard = () => (
  <IconHeaderCard titleIcon={images.mobileControl}
    title={textContent.mobileControl.title}
    content={textContent.mobileControl.content}
    link={config.paths.mobileControl.path}
  />

);
const SecondScreenCard = () => (
  <IconHeaderCard titleIcon={images.secondScreen}
    title={textContent.secondScreen.title}
    content={textContent.secondScreen.content}
    link={config.paths.secondScreen.path}
  />
);
const MobileEncryptionCard = () => (
  <IconHeaderCard titleIcon={images.encryption}
    title={textContent.encryption.title}
    content={textContent.encryption.content}
    link={config.paths.aboutContentEncryption.path}
  />
);
const PersonalStorageCard = () => (
  <IconHeaderCard titleIcon={images.mobilePersonStorage}
    title={textContent.mobilePersonStorage.title}
    content={textContent.mobilePersonStorage.content}
    link={config.paths.mobilePersonalStorage.path}
  />
);
const ContentTransferCard = () => (
  <IconHeaderCard titleIcon={images.mobileContentTransfer}
    title={textContent.mobileContentTransfer.title}
    content={textContent.mobileContentTransfer.content}
    link={config.paths.mobileContentTransfer.path}
  />
)


const CardSection = withResponsiveComponent(({ screenMedia }) => {
  if (screenMedia.biggerThan(1340)) {
    return (

      <>
        <BasicCardsContainer>
          <AuthenticationCard />
          <MobileControlCard />
          <SecondScreenCard />
        </BasicCardsContainer>
        <BasicCardsContainer>
          <MobileEncryptionCard />
          <PersonalStorageCard />
          <ContentTransferCard />
        </BasicCardsContainer>
      </>
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


});

interface HomeProps {
  history: any;

}
const HomePage: React.FC<HomeProps> = () => {
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
  const mobile = useMobile(initData, false);
  mobile.setOnFieldChange(field => { });

  const { GetAppButton } = pagesLinks.buttons;
  return (
    <BasicLayout onLogoClick={mobile.toggleConnect} selected={config.paths.home.path} onReClicked={mobile.disableConnect}>

      <HomeHeaderBackground>
        <SimpleHeaderBackground>
          <DisplayMobileConnect mobile={mobile} />
          {(!mobile.connect) && (<RightPosterImage
            image={images.rightPoster}
            image200={images.rightPoster200}
            image400={images.rightPoster400} />)}
          <HomeTitleSection
            title={headerTextContent.title}
            subtitle={headerTextContent.subtitle}>

            <SmallText content={headerTextContent.smallText} />

            <ButtonsContainer>
              <GetAppButton>Get It Free</GetAppButton>
            </ButtonsContainer>
          </HomeTitleSection>
        </SimpleHeaderBackground>



        <CardSection />
        <HowItWorks />
      </HomeHeaderBackground>
      <FeaturesSection />
      <PageFooter />
      <RenderPageMetadata />
    </BasicLayout>
  )
};




export default HomePage;

export const HomePageWithScrollToTop = withScrollToTop(HomePage, 'topContent');
