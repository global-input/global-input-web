import React from "react";
import { config } from "../configs";
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
            <Title>Share your secrets securely</Title>
            <TickText>Exchange secrets via encrypted QR codes.</TickText>
            <TickText>Allows for confidentiality in public places</TickText>
            <TickText>Secure backup and transfer of data</TickText>
          </Column>
          <EncryptedQRCodeGraph />
        </Row>
        <Row2>
          <Column>
            <Title>Encryption with your phone</Title>
            <TickText>Encryption keys are stored on your device</TickText>
            <TickText>
              Users have full control over the encryption process
            </TickText>
            <TickText>Confidential data can be encrypted by default</TickText>
            <TickText>Allows for multiple layers of encryption</TickText>
          </Column>
          <MobileEncryptionGraphGraph />
        </Row2>

        <Row>
          <Column>
            <Title>Encrypting keys in vaults</Title>
            <TickText>Control and protect access to data</TickText>
            <TickText>See exactly who's accessing your data</TickText>
            <TickText>
              Easily grant permission to those requesting access
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
