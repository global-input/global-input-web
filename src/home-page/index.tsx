import React from 'react';
import { config } from '../configs';
import {PageFooter} from '../page-footer';
import {PageHeader} from '../page-header';
import { useMobile } from '../mobile-ui/home';

import {PosterImage} from './poster-image';
import {HowItWorks} from "./how-it-works";
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
export const HomePage: React.FC<HomePageProps> = ({ editConnectionSettings }) => {

  const MobileConnect = useMobile();

  return (
    <Container>
        <PageHeader selected={config.paths.home.path}/>
        <HeadBackGround>
          <PosterImage/>
          <TitleSection>

                <Title>{headerTextContent.title}</Title>
                <Subtitle>{headerTextContent.subtitle}</Subtitle>
                <SmallTitle>{headerTextContent.smallText}</SmallTitle>
                <ButtonContainer>
                  <LinkButton to={config.paths.getAppScreen.path}>Get It Free</LinkButton>
                  <MobileConnect />
                </ButtonContainer>
          </TitleSection>

        <CardSection/>
        <HowItWorks />
      </HeadBackGround>
      <PageFooter />
    </Container>
  )
};
