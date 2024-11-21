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
            <Title>Seamless Content Transfer and Collaboration Across Devices</Title>
            <TickText>
            Transfer content between devices, all protected by end-to-end encryption, ensuring the highest level of data security.
            </TickText>
            <TickText>
            Direct transfers without relying on third-party services, subscriptions, or cloud storages.            
            </TickText>
            <TickText>
            Securely and conveniently share content on publicly accessible or unfamiliar devices without signing in or sharing personal information like email addresses. Simply establish a secure, end-to-end encrypted connection between devices to share data safely.
            </TickText>
            <TickText>
            Transfer content to and from any device type—smartphones, tablets, laptops, smart TVs—without worrying about compatibility or security.
            </TickText>
            <TickText>
            Integrate secure content transfer directly into your business applications, enabling seamless collaboration with customers and partners, enriching in-store experience and providing exceptional services.
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
