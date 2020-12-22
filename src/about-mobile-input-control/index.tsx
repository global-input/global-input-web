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
            <Title>Providing Mobile Input and Control to Devices</Title>
            <Row>
            <Column>
                  <SecureCommunicationGraph/>
                  <MobileInputGraph/>
            </Column>

                  <Column>
                        <TickText>End-to-End encryption with secure key transfer.</TickText>
                        <TickText>Same mobile app across all applications and devices.</TickText>
                        <TickText>Introducing  mobile features into business applications</TickText>
                        <TickText>No Changes to the existing application architecture.</TickText>
                        <TickText>Mobile Integration at the edge.</TickText>
                        <TickText>Reduced costs for businesses.</TickText>
                        <TickText>Increased convenience for users.</TickText>

                 </Column>
            </Row>
            <ConnectButton mobile={mobile} label="See It In Action"/>
            <ConnectWindow mobile={mobile}/>
        </Content>
        <PageFooter />
    </Container>
  )
};
