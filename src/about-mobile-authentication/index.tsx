import React from 'react';
import { config } from '../configs';
import { PageHeader } from '../page-header';
import {PageFooter} from '../page-footer';

import { useMobile } from '../mobile-ui/aboutAuthentication';
import { usePageTitle } from '../page-metadata';

import { Container,Content, SignInGraph,
  Text,Tick,Column,Title,Row } from './layout';

export const AboutMobileAuthentication: React.FC = () => {
  usePageTitle('Mobile Authentication');
  const MobileConnect = useMobile();

  return (
    <Container>
        <PageHeader selected={config.paths.mobileAuthentication.path} />
        <Content>
            <Title>Use Mobile for Subscription, Signing in and Beyond</Title>
            <Row>
                  <SignInGraph/>
                  <Column>
                      <Text>
                        <Tick/>
                          Enhancing the security of the existing password-based authentications — No Architectural changes required
                      </Text>
                    <Text>
                        <Tick/>
                        Randomising passwords or using key-based authentications.
                    </Text>
                    <Text>
                        <Tick/>
                      Securing data transfer between mobile and applications with the end-to-end encryption.
                    </Text>
                    <Text>
                        <Tick/>
                        Users manage their own data on their own mobile device.
                    </Text>
                    <Text>
                      <Tick/>
                      One-click subscription
                    </Text>
                    <Text>
                        <Tick/>
                        One-click sign In
                    </Text>
                    <Text>
                        <Tick/>
                        Secure mobile operation on devices
                    </Text>
                 </Column>
            </Row>
            <MobileConnect label="See It In Action"/>
        </Content>
        <PageFooter />
    </Container>
  )
};
