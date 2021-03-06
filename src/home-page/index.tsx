import React from 'react';
import { config } from '../configs';
import {PageFooter} from '../page-footer';
import {PageHeader} from '../page-header';
import { useConnectToMobile,ConnectWindow,ConnectButton } from './mobile-ui';
import { usePageTitle } from '../page-metadata';
import {PosterImage} from './poster-image';
import {HowItWorks} from "./how-it-works";
import {CardSection} from './card-section';


import {Container,Content,TitleSection,Title,Subtitle,SmallTitle,ButtonContainer,LinkButton} from './layout';


const headerTextContent = {
  title: "Mobile Integration",
  subtitle: "Use Mobiles to Operate on Device Applications",
  smallText: "Authentication, Encryption, Second Screen & Mobile Input & Control "
};

interface HomePageProps {
  editConnectionSettings: () => void;
}
export const HomePage: React.FC<HomePageProps> = ({ editConnectionSettings }) => {
  usePageTitle('Global Input App - Introducing Mobile Interoperability into Web and Device Applications');
  const mobile = useConnectToMobile();

  return (
    <Container>
        <PageHeader selected={config.paths.home.path}/>
        <Content>
          <PosterImage/>
          <TitleSection>

                <Title>{headerTextContent.title}</Title>
                <Subtitle>{headerTextContent.subtitle}</Subtitle>
                <SmallTitle>{headerTextContent.smallText}</SmallTitle>
                <ButtonContainer>
                  <LinkButton to={config.paths.getAppScreen.path}>Get It Free</LinkButton>
                  <ConnectButton mobile={mobile}/>
                </ButtonContainer>
          </TitleSection>

        <CardSection/>

        <HowItWorks />
        <ConnectWindow mobile={mobile}/>

      </Content>
      <PageFooter />
    </Container>
  )
};
