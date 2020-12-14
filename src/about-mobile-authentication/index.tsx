import React from 'react';
import { config } from '../configs';
import { PageHeader } from '../page-header';
import {PageFooter} from '../page-footer';

import { useMobile } from '../mobile-ui/aboutAuthentication';
import { usePageTitle } from '../page-metadata';

import { Container,Content, SignInGraph,
  TickText,Column,Title,Row } from './layout';

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
            <MobileConnect label="See It In Action"/>
        </Content>
        <PageFooter />
    </Container>
  )
};
