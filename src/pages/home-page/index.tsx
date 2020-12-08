import React from 'react';
import {PageHeader} from '../../page-header';
import {PosterImage} from './poster-image';
import {HowItWorks} from "./how-it-works";


import {PageFooter} from '../../page-footer';
import { config } from '../../configs';


import { useWindowSize } from '../../app-layout';

import { useMobile } from '../../mobile-ui/home';

import {CardSection} from './card-section';

import {HeadBackGround} from './header-backgrounds';

import {Container,TitleSection,Title,Subtitle,SmallTitle,ButtonContainer,LinkButton} from './layout';


const headerTextContent = {
  title: "Mobile Integration",
  subtitle: "Use Mobiles to Operate on Device Applications",
  smallText: "Authentication, Encryption, Second Screen & Mobile Input & Control "
};

interface HomePageProps {
  editConnectionSettings: () => void;
}
const HomePage: React.FC<HomePageProps> = ({ editConnectionSettings }) => {
  const [width] = useWindowSize();
  const MobileConnect = useMobile();


  return (
    <Container>
        <PageHeader selected={config.paths.home.path}/>
        <HeadBackGround>
          <PosterImage/>
          <TitleSection>
                <MobileConnect />
                <Title>{headerTextContent.title}</Title>
                <Subtitle>{headerTextContent.subtitle}</Subtitle>
                <SmallTitle>{headerTextContent.smallText}</SmallTitle>
                <ButtonContainer>
                  <LinkButton to={config.paths.getAppScreen.path}>Get It Free</LinkButton>
                </ButtonContainer>
          </TitleSection>

        <CardSection/>
        <HowItWorks />
      </HeadBackGround>
      <PageFooter />
    </Container>

  )
};

export default HomePage;
