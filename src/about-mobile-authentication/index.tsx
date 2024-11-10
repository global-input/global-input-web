import React from "react";
import { config } from "../mobile-app/configs";
import { PageHeader } from "../page-header";
import { PageFooter } from "../page-footer";

import { useConnectToMobile, ConnectWindow, ConnectButton } from "./mobile-ui";
import { usePageTitle } from "../page-metadata";

import {
  Container,
  Content,
  SignInGraph,
  MultiFactorGraph,
  TickText,
  Column,
  Title,
  Row,
  Row2,
} from "./layout";

export const AboutMobileAuthentication: React.FC = () => {
  usePageTitle("Mobile Authentication");
  const mobile = useConnectToMobile();

  return (
    <Container>
      <PageHeader selected={config.paths.mobileAuthentication.path} />
      <Content>
        <Row2>
          <Column>
            <Title> Seamless and Secure Authentication</Title>
            <TickText>Boost the security without compromising on convenience.</TickText>
            <TickText>Sign in with just a tap, eliminating the need for cumbersome passwords</TickText>
            <TickText>
            Safeguard authentication from storage to the application.
            </TickText>
            <TickText>Keep control of your data in your hands, and no central storage.</TickText>
            <TickText>
              Securely operate on the application after signing in.
            </TickText>
            <TickText>
            Extra layer of security to the current password-based systems without the need for extensive re-engineering or sacrificing user experience.
            </TickText>
          </Column>
          <SignInGraph />
        </Row2>
        <Row>
          <Column>
            <Title>Simplifying Authentication for Business and Users</Title>
            <TickText>
            Unified app from signing in to subscribing and to operate on the applications and devices securely on all platforms.
            </TickText>
            <TickText>
             No more customer support calls for password resets etc and no more password fatigue for users, and no more password storage and management for businesses.
            </TickText>
            <TickText>No more development overhead and operational complexity thanks to straightforward and intuitive integration.
              </TickText>
          </Column>
          <MultiFactorGraph />
        </Row>
        <ConnectButton mobile={mobile} label="See it in action" />
        <ConnectWindow mobile={mobile} />
      </Content>
      <PageFooter />
    </Container>
  );
};
