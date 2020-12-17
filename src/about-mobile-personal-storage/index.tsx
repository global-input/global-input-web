import React from 'react';
import { config } from '../configs';
import { PageHeader } from '../page-header';
import {PageFooter} from '../page-footer';

import { useMobile } from '../mobile-ui/aboutSecureStorage';
import { usePageTitle } from '../page-metadata';

import { Container,Content, MobileStorageGraphGraph,
  CustomerServiceGraphGraph,
  TickText,Column,Title,Row,Row2 } from './layout';

export const AboutMobileSecureStorage: React.FC = () => {
  usePageTitle('Mobile Authentication');
  const MobileConnect = useMobile();

  return (
    <Container>
        <PageHeader selected={config.paths.mobilePersonalStorage.path} />
        <Content>
            <Row2>
                  <Column>
                      <Title>Mobile Secure Storage</Title>
                      <TickText>
                        Data stays protected in storage, memory and transfer with encryption.
                      </TickText>
                      <TickText>
                        Data decrypted only at the point of use.
                    </TickText>
                    <TickText>
                        Encrypted keys stays encrypted in mobile and never leaves the device.
                    </TickText>
                    <TickText>
                        User owns their own data and and the encryption that protects the data.
                    </TickText>
                    <TickText>
                      Complete solution for data backup and secure data transfer.
                    </TickText>

                 </Column>
                 <MobileStorageGraphGraph/>
            </Row2>
            <Row>
              <Column>
              <TickText>
              Ability to provide personalized services without collecting users' data.
              </TickText>
              <TickText>
                Ability serve enter customer details customers while keeping  distance.
              </TickText>
              <TickText>
                Achieving customer collaborations through visiting customer's phone.
              </TickText>
              <TickText>
                Allowing customers to lock their own their data through their smart phones.
              </TickText>
              <TickText>
                No longer need for a shared input device or touch screen.
              </TickText>


              </Column>
              <CustomerServiceGraphGraph/>

            </Row>




            <MobileConnect label="See It In Action"/>
        </Content>
        <PageFooter />
    </Container>
  )
};
