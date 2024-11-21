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
            <Title>Share Your Secrets Securely</Title>
            <TickText>Encrypted QR Code Transfers: Share sensitive information securely by generating and scanning encrypted QR codes.</TickText>
            <TickText>Confidentiality in Public Spaces: Keep your data private even in public places, preventing prying eyes from accessing your secrets.</TickText>
            <TickText>Secure Data Backup and Transfer: Backup and transfer your data with confidence, knowing it’s protected by strong encryption.</TickText>
          </Column>
          <EncryptedQRCodeGraph />
        </Row>
        <Row2>
          <Column>
            <Title>Encryption at Your Fingertips</Title>
            <TickText>Device-Exclusive Encryption Keys: Your encryption keys are securely stored and managed directly on your mobile device—no cloud needed.</TickText>
            <TickText>
            User-Controlled Encryption: Maintain full control over the encryption process, giving you the power to protect your sensitive data.
            </TickText>
            <TickText>Automatic Data Protection: Encrypt confidential data by default, ensuring your information is always protected without extra steps.</TickText>
            <TickText>Multi-Layered Security: Implement multiple layers of encryption for added security, making your data impenetrable.</TickText>
          </Column>
          <MobileEncryptionGraphGraph />
        </Row2>

        <Row>
          <Column>
            <Title>Vault-Level Security for Your Keys</Title>
            <TickText>Granular Data Access Control: Control who can access individual data items by using different encryption keys, ensuring only authorised individuals have permission.</TickText>
            <TickText>Secure Key Storage: Store encryption keys securely in users' device leading to ultimate security and accountability.</TickText>
            
            <TickText>
            Secure Permission Management: Encryption keys are managed and shared securely on the devices with explicit user permission, ensuring that only authorised users can access sensitive data.
            </TickText>
          </Column>
          <KeyCloudGraphGraph />
        </Row>

        <ConnectButton mobile={mobile} label="See it in action" />
        <ConnectWindow mobile={mobile} />
      </Content>
      <PageFooter />
    </Container>
  );
};
