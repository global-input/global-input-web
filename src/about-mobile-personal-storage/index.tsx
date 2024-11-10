import React from "react";
import { config } from "../mobile-app/configs";
import { PageHeader } from "../page-header";
import { PageFooter } from "../page-footer";

import { useConnectToMobile, ConnectWindow, ConnectButton } from "./mobile-ui";
import { usePageTitle } from "../page-metadata";

import {
  Container,
  Content,
  MobileStorageGraphGraph,
  CustomerServiceGraphGraph,
  TickText,
  Column,
  Title,
  Row,
  Row2,
} from "./layout";

export const AboutMobileSecureStorage: React.FC = () => {
  usePageTitle("Mobile Authentication");
  const mobile = useConnectToMobile();

  return (
    <Container>
      <PageHeader selected={config.paths.mobilePersonalStorage.path} />
      <Content>
        <Row2>
          <Column>
            <Title>Super secure storage on your phone</Title>
            <TickText>
              Data stays well protected and is tranferred with encryption
            </TickText>
            <TickText>Data is decrypted only when needed</TickText>
            <TickText>
              Keys stay encrypted and will never leave your device
            </TickText>
            <TickText>
              The user is completely responsible for their own data
            </TickText>
          </Column>
          <MobileStorageGraphGraph />
        </Row2>
        <Row>
          <Column>
            <Title>Greater flexibility</Title>
            <TickText>
              Allows for personalized services without collecting user data
            </TickText>
            <TickText>
              Allows a customer to give their personal details securely and
              remotely
            </TickText>
            <TickText>Removes the need for a shared input device</TickText>
          </Column>
          <CustomerServiceGraphGraph />
        </Row>

        <ConnectButton mobile={mobile} label="See it in action" />
        <ConnectWindow mobile={mobile} />
      </Content>
      <PageFooter />
    </Container>
  );
};
