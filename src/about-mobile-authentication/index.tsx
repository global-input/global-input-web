import React from 'react';
import { config } from '../configs';
import { PageHeader } from '../page-header';
import {PageFooter} from '../page-footer';

import { useConnectToMobile,ConnectWindow,ConnectButton } from './mobile-ui';
import { usePageTitle } from '../page-metadata';

import { Container,Content, SignInGraph,
  TickText,Column,Title,Row } from './layout';

export const AboutMobileAuthentication: React.FC = () => {
  usePageTitle('Mobile Authentication');
  const mobile = useConnectToMobile();

  return (
    <Container>
        <PageHeader selected={config.paths.mobileAuthentication.path} />
        <Content>
            <Title>Use Mobile for Subscription, Signing in and Beyond</Title>
            <Row>
                  <SignInGraph/>
                  <Column>
                      <TickText>
      Superior security and improved user experience at the same time.
                      </TickText>
                      <TickText>
                      One-click subscription and sign In with user mobiles.
                    </TickText>
                    <TickText>
                      Secure transfer between user mobiles and applications using end-to-end encryption.
                    </TickText>
                    <TickText>
                        Users manage their own data on their own mobile devices.
                    </TickText>
                    <TickText>
                        Ability to use mobile to securely operate on the application after signing in.
                    </TickText>
                    <TickText>
                        Enhance the existing password-based authentications without using a password manager.
                    </TickText>
                 </Column>
            </Row>
            <ConnectButton mobile={mobile} label="See It In Action"/>
            <ConnectWindow mobile={mobile}/>
        </Content>
        <PageFooter />
    </Container>
  )
};
