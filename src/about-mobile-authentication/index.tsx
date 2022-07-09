import React from 'react';
import { config } from '../configs';
import { PageHeader } from '../page-header';
import {PageFooter} from '../page-footer';

import { useConnectToMobile,ConnectWindow,ConnectButton } from './mobile-ui';
import { usePageTitle } from '../page-metadata';

import { Container,Content, SignInGraph,MultiFactorGraph,
  TickText,Column,Title,Row, Row2 } from './layout';

export const AboutMobileAuthentication: React.FC = () => {
  usePageTitle('Mobile Authentication');
  const mobile = useConnectToMobile();

  return (
    <Container>
        <PageHeader selected={config.paths.mobileAuthentication.path} />
        <Content>
            <Title>Use your phone to sign in to websites and more</Title>
            <Row2>

                  <Column>
                      <TickText>
                      Massively improved security and user experience
                      </TickText>
                      <TickText>
                      Just one click to sign in with your phone
                    </TickText>
                    <TickText>
                      Secure transfer of infomation using end-to-end encryption
                    </TickText>
                    <TickText>
                      Users are responsible for their own data
                    </TickText>
                    <TickText>
                      Securely interact with the application using your phone after signing in
                    </TickText>
                    <TickText>
                        Enhances the existing password-based authentication flow
                    </TickText>
                 </Column>
                 <SignInGraph/>
            </Row2>
            <Row>

                  <Column>
                    <TickText>
                       Authentication, subscription and more with just one mobile app
                    </TickText>
                    <TickText>
                       Reduces the need for customer support calls with self-service
                    </TickText>
                    <TickText>
                       Easy and flexible integration into businesses.
                    </TickText>


                 </Column>
                 <MultiFactorGraph/>
            </Row>
            <ConnectButton mobile={mobile} label="See it in action"/>
            <ConnectWindow mobile={mobile}/>
        </Content>
        <PageFooter />
    </Container>
  )
};
