import React from 'react';
import { config } from '../configs';
import { PageHeader } from '../page-header';
import {PageFooter} from '../page-footer';

import { useConnectToMobile,ConnectWindow,ConnectButton } from './mobile-ui';
import { usePageTitle } from '../page-metadata';

import { Container,Content, SecondScreenGraph,
  TickText,Column,Title,Row } from './layout';

export const AboutSecondScreen: React.FC = () => {
  usePageTitle('Second Screen Experience');
  const mobile = useConnectToMobile();

  return (
    <Container>
        <PageHeader selected={config.paths.secondScreen.path} />
        <Content>
            <Title>Second Screen Experience</Title>
            <Row>
                  <SecondScreenGraph/>
                  <Column>
                      <TickText>
                        Removes the need to develop a standalone mobile app
                      </TickText>
                    <TickText>
                        Removes the need to change your server architecture
                    </TickText>
                    <TickText>
                        Centralises your client functionalities into a single device
                    </TickText>
                    <TickText>
                        Allows for a native mobile app with little development effort
                    </TickText>
                    <TickText>
                        The simplest yet most flexible solution
                    </TickText>



                 </Column>
            </Row>
            <ConnectButton mobile={mobile} label="See it in action"/>
            <ConnectWindow mobile={mobile}/>
        </Content>
        <PageFooter />
    </Container>
  )
};
