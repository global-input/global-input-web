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
            <Title>Use Mobile for Subscription, Signing in and Beyond</Title>
            <Row2>

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
                 <SignInGraph/>
            </Row2>
            <Row>

                  <Column>
                      <TickText>
                      All In One: Multi Factor Authentication, Password Sign In, Change Password with Random Passwords
                      </TickText>
                    <TickText>
                       Single Mobile App solution for Sign In, Subscriptions and Secure Mobile Operations.
                    </TickText>
                    <TickText>
                       Encryption Based authentication and Access Control.
                    </TickText>
                    <TickText>
                       Self-service and reduce the need for IT Support calls
                    </TickText>

                    <TickText>
                      Flexible Integration to Business Applications.
                    </TickText>


                 </Column>
                 <MultiFactorGraph/>
            </Row>
            <ConnectButton mobile={mobile} label="See It In Action"/>
            <ConnectWindow mobile={mobile}/>
        </Content>
        <PageFooter />
    </Container>
  )
};
