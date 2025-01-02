import React from "react";
import { config } from "../web-config";
import { PageHeader } from "../page-header";
import { PageFooter } from "../page-footer";

import { useConnectToMobile, ConnectWindow, ConnectButton } from "./mobile-ui";
import { usePageTitle } from "../page-metadata";

import {
  Container,
  Content,
  MobileInputGraph,
  SecureCommunicationGraph,
  TickText,
  Column,
  Title,
  Row,
  Row2
} from "./layout";

export const AboutMobileInputControl: React.FC = () => {
  usePageTitle("Mobile Input &amp; Control");
  const mobile = useConnectToMobile();

  return (
    <Container>
      <PageHeader selected={config.paths.mobileControl.path} />
      <Content>

      <Row2>
          <Column>
            <Title> Universal Mobile Control Integration</Title>
            <TickText>Enable mobile control with simple JSON-based UI definitions.</TickText>
            <TickText>Implement end-to-end encrypted communication in minutes.</TickText>
            <TickText>
            Add second screen capabilities without infrastructure changes.
            </TickText>
            <TickText>
            Support all device types from a single integration.
            </TickText>
            <TickText>
            Deploy across streaming, IoT, and self-service platforms. 
            </TickText>
            <TickText>
            Zero backend modifications required.
            </TickText>
            
          </Column>
          <SecureCommunicationGraph />
        </Row2>
        <Row>
          <Column>
            <Title>Ready for Any Platform</Title>
            <TickText>
            One-week typical integration time for full mobile control capability
            </TickText>
            <TickText>
            No additional hardware or infrastructure investment needed
            </TickText>
            <TickText>
            Perfect for keyboard-intensive operations on streaming devices 
              </TickText>
              <TickText>
              Support multiple concurrent device connections
              </TickText>
              <TickText>
              Customize mobile UI to match your brand and UX requirements 
              </TickText>
              <TickText>
              Scale from single device to enterprise deployments
              </TickText>
          </Column>
          <MobileInputGraph />
        </Row>






        
        <ConnectButton mobile={mobile} label="Connect Mobile" />
        <ConnectWindow mobile={mobile} />
      </Content>
      <PageFooter />
    </Container>
  );
};
