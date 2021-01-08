import React from 'react';
import { config } from '../configs';
import { PageHeader } from '../page-header';
import {PageFooter} from '../page-footer';

import { useConnectToMobile,ConnectWindow,ConnectButton } from './mobile-ui';
import { usePageTitle } from '../page-metadata';

import { Container,Content, EncryptedQRCodeGraph,MobileEncryptionGraphGraph,KeyCloudGraphGraph,
  TickText,Column,Title,Row,Row2 } from './layout';

export const AboutMobileEncryption: React.FC = () => {
  usePageTitle('Mobile Authentication');
  const mobile = useConnectToMobile();

  return (
    <Container>
        <PageHeader selected={config.paths.aboutContentEncryption.path} />
        <Content>
            <Row>
                  <Column>
                      <Title>Secure Sharing Secrets</Title>
                      <TickText>
                        Exchange secrets via Encrypted QR Codes.
                      </TickText>
                      <TickText>
                        Protect confidentiality when working in public places or with shared screens.
                    </TickText>
                    <TickText>
                        Print secrets ans decrypt with scanning.
                    </TickText>
                    <TickText>
                        Protecting QR Codes using encryption and keys.
                    </TickText>
                    <TickText>
                      Complete solution for data backup and secure data transfer.
                    </TickText>
                 </Column>
                 <EncryptedQRCodeGraph/>
            </Row>
            <Row2>
              <Column>
               <Title>Encrypting/Decrypting Using Mobiles</Title>
              <TickText>
                        Protecting encryption keys inside mobiles.
                      </TickText>
                      <TickText>
                        Giving user full control over data encryption processes.
                    </TickText>
                    <TickText>
                        Encryption is the default state of the confidential data.
                    </TickText>
                    <TickText>
                        Allowing users to manage keys in the mobiles.
                    </TickText>
                    <TickText>
                        Allow multiple layers of encryption.
                    </TickText>
              </Column>
              <MobileEncryptionGraphGraph/>




            </Row2>

            <Row>
                  <Column>
                      <Title>Encrypting Keys in Key Vaults.</Title>
                      <TickText>
                      Physical Separations Keys from Data Access
                      </TickText>
                      <TickText>
                      Access Control with Encryption
                    </TickText>
                    <TickText>
                      Increased Accountability in Data Access.
                    </TickText>
                    <TickText>
                      Access Permission Granted at the point of each Use
                    </TickText>


                 </Column>
                 <KeyCloudGraphGraph/>
            </Row>

            <ConnectButton mobile={mobile} label="See It In Action"/>
            <ConnectWindow mobile={mobile}/>
        </Content>
        <PageFooter />
    </Container>
  )
};
