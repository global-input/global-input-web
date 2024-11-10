import React from "react";
import { config } from "../mobile-app/configs";
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
            <Title> Streamlined Operation Across Platforms</Title>
            <TickText>Secure Communication: Ensure end-to-end encrypted interactions for absolute security.</TickText>
            <TickText>Unified Mobile Experience: Manage all your devices and applications using a single mobile app.</TickText>
            <TickText>
            Enhanced Usability: Bring the convenience and efficiency of mobile operations to your existing applications.
            </TickText>
            
          </Column>
          <SecureCommunicationGraph />
        </Row2>
        <Row>
          <Column>
            <Title>Seamless Integration and Cost Efficiency</Title>
            <TickText>
            Effortless Integration: Compatible with your current application architecture, eliminating the need for extensive changes.
            </TickText>
            <TickText>
            Cost-Effective Solution: Reduce operational costs by leveraging mobile devices without additional hardware investment.
            </TickText>
            <TickText>User-Centric Convenience: Provide an intuitive user experience, boosting satisfaction and engagement.
              </TickText>
          </Column>
          <MobileInputGraph />
        </Row>






        
        <ConnectButton mobile={mobile} label="See it in action" />
        <ConnectWindow mobile={mobile} />
      </Content>
      <PageFooter />
    </Container>
  );
};
