import React from 'react';
import { config } from '../configs';
import { PageHeader } from '../page-header';
import {PageFooter} from '../page-footer';

import { useConnectToMobile,ConnectWindow,ConnectButton } from './mobile-ui';
import { usePageTitle } from '../page-metadata';

import { Container,Content, MobileInputGraph,SecureCommunicationGraph,
  TickText,Column,Title,Row } from './layout';

export const AboutMobileInputControl: React.FC = () => {
  usePageTitle('Mobile Input &amp; Control');
  const mobile = useConnectToMobile();

  return (
    <Container>
        <PageHeader selected={config.paths.mobileControl.path} />
        <Content>
            <Title>Control other devices with your phone</Title>
            <Row>
            <Column>
                  <SecureCommunicationGraph/>
                  <MobileInputGraph/>
            </Column>

                  <Column>
                        <TickText>Secure communication with end-to-end encryption</TickText>
                        <TickText>One mobile app for all applications and devices</TickText>
                        <TickText>Brings the convenience of a mobile phone into applications</TickText>
                        <TickText>Works seamlessly with your existing application architecture</TickText>
                        <TickText>Reduced costs for businesses</TickText>
                        <TickText>Increased convenience for users</TickText>

                 </Column>
            </Row>
            <ConnectButton mobile={mobile} label="See it in action"/>
            <ConnectWindow mobile={mobile}/>
        </Content>
        <PageFooter />
    </Container>
  )
};
