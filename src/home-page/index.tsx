import React from "react";
import { config } from "../configs";
import { PageFooter } from "../page-footer";
import { PageHeader } from "../page-header";
import {
  useConnectToMobile,
  ConnectWindow,
  ConnectButton,
  DisconnectButton,
} from "./mobile-ui";
import { usePageTitle } from "../page-metadata";
import { PosterImage } from "./poster-image";
import { HowItWorks } from "./how-it-works";
import { CardSection } from "./card-section";

import {
  Container,
  Content,
  TitleSection,
  Title,
  Subtitle,
  ButtonContainer,
  LinkButton,
} from "./layout";

const headerTextContent = {
  title: "Mobile Integration",
  subtitle:
    "Use your phone to authenticate, encrypt and remotely control applications.",
};

interface HomePageProps {
  editConnectionSettings: () => void;
}
export const HomePage: React.FC<HomePageProps> = () => {
  usePageTitle(
    "Global Input App - Introducing Mobile Interoperability into Web and Device Applications"
  );
  const mobile = useConnectToMobile();

  return (
    <Container>
      <PageHeader selected={config.paths.home.path} />
      <Content>
        <PosterImage />
        <TitleSection>
          <Title>{headerTextContent.title}</Title>
          <Subtitle>{headerTextContent.subtitle}</Subtitle>
          <ButtonContainer>
            <LinkButton to={config.paths.getAppScreen.path}>
              Get it free
            </LinkButton>
            <ConnectButton label="Try it out" mobile={mobile} />
            <DisconnectButton mobile={mobile} />
          </ButtonContainer>
        </TitleSection>

        <CardSection />

        <HowItWorks />
        <ConnectWindow mobile={mobile} />
      </Content>
      <PageFooter />
    </Container>
  );
};
