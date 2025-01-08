import React from "react";
import { config } from "../web-config";
import { PageFooter } from "../page-footer";
import { PageHeader } from "../page-header";
import {
  useConnectToMobile,
  ConnectWindow,
  ConnectButton,
  DisconnectButton,
} from "./mobile-ui";
import { usePageTitle, useCanonicalPage } from "../page-metadata"; // Import your hooks
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
} from "./layout";

const headerTextContent = {
  title: "Mobile Integration Framework",
  subtitle:
    "Enable secure mobile capabilities in your applications with minimal code changes. Features encrypted QR authentication, dynamic mobile UI generation, and secure data exchange - perfect for streaming services, self-service systems, and IoT applications.",
};

interface HomePageProps {}

export const HomePage: React.FC<HomePageProps> = () => {
  const mobile = useConnectToMobile();

  // Set the page title
  usePageTitle(
    "Global Input App - Introducing Mobile Interoperability into Web and Device Applications"
  );

  // Manage canonical link
  useCanonicalPage("https://globalinput.co.uk/");

  return (
    <Container>
      <PageHeader selected={config.paths.home.path} />
      <Content>
        <PosterImage />
        <TitleSection>
          <Title>{headerTextContent.title}</Title>
          <Subtitle>{headerTextContent.subtitle}</Subtitle>
          <ButtonContainer>
            <ConnectButton label="Connect Mobile" mobile={mobile} />
            <ConnectWindow mobile={mobile} />
            <DisconnectButton mobile={mobile} />
          </ButtonContainer>
        </TitleSection>

        <CardSection />
        <HowItWorks />
      </Content>
      <PageFooter />
    </Container>
  );
};