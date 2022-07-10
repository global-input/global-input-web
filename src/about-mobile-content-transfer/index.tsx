import React from "react";
import { config } from "../configs";
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
            <Title>Transfer content with your phone</Title>
            <TickText>
              Securely transfer content across devices using end-to-end
              encryption
            </TickText>
            <TickText>
              Point-to-point transfer with no subscriptions or services in
              between
            </TickText>
            <TickText>
              Applications can request content from the mobile app
            </TickText>
            <TickText>
              Transfer content securely between publicly shared devices
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
