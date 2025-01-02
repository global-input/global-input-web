import React from "react";
import { config } from "../web-config";
import { PageHeader } from "../page-header";
import { PageFooter } from "../page-footer";

import { useConnectToMobile, ConnectWindow, ConnectButton } from "./mobile-ui";
import { usePageTitle } from "../page-metadata";

import {
  Container,
  Content,
  MobileContentTransferGraphGraph,
  TickText,
  Column,
  Title,
  Row2,
} from "./layout";

export const AboutMobileContentTransfer: React.FC = () => {
  usePageTitle("Mobile Content Transfer");
  const mobile = useConnectToMobile();

  return (
    <Container>
      <PageHeader selected={config.paths.mobileContentTransfer.path} />
      <Content>
        <Row2>
          <Column>
            <Title>Secure Device-to-Device Transfer</Title>
            <TickText>
            Enable direct encrypted transfers between devices.
            </TickText>
            <TickText>
            Support transfers without user accounts or cloud storage.
            </TickText>
            <TickText>
            Allow secure sharing on public devices.
            </TickText>
            <TickText>
            Enable cross-platform content.
            </TickText>
            <TickText>
            Perfect for streaming and IoT integrations.
            </TickText>
            <TickText>
            Integrate content sharing into business applications.
            </TickText>
            
            
          </Column>

            
            
            
          
          <MobileContentTransferGraphGraph />
        </Row2>

        <ConnectButton mobile={mobile} label="See it in action" />
        <ConnectWindow mobile={mobile} />
      </Content>
      <PageFooter />
    </Container>
  );
};
