import React from "react";
import { PageHeader } from "../page-header";
import { PageFooter } from "../page-footer";

import {
  Container,
  Content,
  Title,
  PageTitle,
  Line,
  Row,
  Column,
} from "./layout";

import { useConnectToMobile, ConnectWindow, ConnectButton } from "./mobile-ui";

import { usePageTitle } from "../page-metadata";
import { config } from "../web-config";

const ContactUsPage: React.FC = () => {
  const mobile = useConnectToMobile();
  usePageTitle("Global Input App - Contact Us");

  return (
    <Container>
      <PageHeader selected={config.paths.contactUs.path} />
      <PageTitle>Contact Us!</PageTitle>
      <Content>
        <Row>
          <Column>
            <Title>Address</Title>
            <Line>Iterative Solution Limited</Line>
            <Line>Kemp House</Line>
            <Line>124 City Road</Line>
            <Line>London</Line>
            <Line>EC1V 2NX</Line>
          </Column>
          <Column>
            <Title>Phone</Title>
            <Line>+44 (0) 20 3290 6278</Line>
            <Title>Email</Title>
            <Line>info@iterativesolution.co.uk</Line>
          </Column>
        </Row>
        <ConnectButton mobile={mobile} label="Get details on your phone" />
        <ConnectWindow mobile={mobile} />
      </Content>
      <Row></Row>

      <PageFooter />
    </Container>
  );
};

export default ContactUsPage;
