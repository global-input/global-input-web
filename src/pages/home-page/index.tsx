import React from 'react'

import BasicLayout from "../../page-components/themes/basic-layout";

import { HomeHeaderBackground } from "./header-backgrounds";
import HowItWorks from "./how-it-works";

import FeaturesSection from './features-section';
import PageFooter from '../../page-components/page-footer';
import { config } from '../../configs';
import { SimpleHeaderBackground } from './header-backgrounds';
import RightPosterImage from './right-poster-image';
import { HomeTitleSection } from '../../page-components/text-title-sections';
import SmallText from './SmallText';
import ButtonsContainer from '../../page-components/buttons-container';
import { pagesLinks } from "../../page-components/links-components";
import { CardSection } from './card-section';
import { useWindowSize } from '../../app-layout';
import { useConnectToMobile } from '../../mobile';
import * as mobileUI from '../../mobile-ui';


const headerTextContent = {
  title: "Mobile Integration",
  subtitle: "Use Mobiles to Operate on Device Applications",
  smallText: "Authentication, Encryption, Second Screen & Mobile Input & Control "
};

interface HomePageProps {
  editConnectionSettings: () => void;
}
const HomePage: React.FC<HomePageProps> = ({ editConnectionSettings }) => {
  const { GetAppButton } = pagesLinks.buttons;
  const [width] = useWindowSize();
  const { DisplayMobileConnect } = useConnectToMobile(mobileUI.home.initData, mobileUI.home.onFieldChange);


  return (
    <BasicLayout selected={config.paths.home.path}>
      <HomeHeaderBackground>
        <SimpleHeaderBackground>

          <RightPosterImage scWidth={width} />
          <DisplayMobileConnect />
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
      <FeaturesSection scWidth={width} />
      <PageFooter />


    </BasicLayout>
  )
};

export default HomePage;
