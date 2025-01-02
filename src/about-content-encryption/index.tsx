import React from "react";
import { config } from "../web-config";
import { PageHeader } from "../page-header";
import { PageFooter } from "../page-footer";

import { useConnectToMobile, ConnectWindow, ConnectButton } from "./mobile-ui";
import { usePageTitle } from "../page-metadata";

import {
  Container,
  Content,
  EncryptedQRCodeGraph,
  MobileEncryptionGraphGraph,
  KeyCloudGraphGraph,
  TickText,
  Column,
  Title,
  Row,
  Row2,
} from "./layout";

export const AboutMobileEncryption: React.FC = () => {
  usePageTitle("Mobile Authentication");
  const mobile = useConnectToMobile();

  return (
    <Container>
      <PageHeader selected={config.paths.aboutContentEncryption.path} />
      <Content>
        <Row>
          <Column>
            <Title>Device-Based Encryption</Title>
            <TickText>Keep encryption keys secure on users' mobile devices</TickText>
            <TickText>Enable encrypted QR transfers for sensitive data.</TickText>
            <TickText>Add encryption layer without server-side changes</TickText>
            <TickText>Support device-to-device secure communication</TickText>
            <TickText>Scale from individual keys to enterprise key management</TickText>
            <TickText>Perfect for handling sensitive customer data</TickText>
          </Column>
          <EncryptedQRCodeGraph />
        </Row>
        <Row2>
          <Column>
            <Title>Zero-Server Encryption Management</Title>
            <TickText>Eliminate server-side encryption infrastructure costs.</TickText>
            <TickText>
            Store and manage keys exclusively on user devices.
            </TickText>
            <TickText>Automate encryption/decryption on mobile devices.</TickText>
            <TickText>Deploy without changing existing security systems.</TickText>
            <TickText>Support multi-layer encryption requirements.</TickText>
            <TickText>Simplify GDPR compliance with user-controlled encryption.</TickText>
          </Column>
          <MobileEncryptionGraphGraph />
        </Row2>

        <Row>
          <Column>
            <Title>Secure Key Management</Title>
            <TickText>Enable granular access control through encryption keys</TickText>
            <TickText>Manage permissions through secure key sharing.</TickText>
            
            <TickText>
            Control individual data access with separate keys.
            </TickText>

            <TickText>
            Support key rotation and management policies.
            </TickText>
            <TickText>
            Scale key management across enterprise applications.
            </TickText>
            <TickText>
            Ensure accountability with device-based key storage.
            </TickText>

          </Column>
          <KeyCloudGraphGraph />
        </Row>

        <ConnectButton mobile={mobile} label="Connect Mobile" />
        <ConnectWindow mobile={mobile} />
      </Content>
      <PageFooter />
    </Container>
  );
};
