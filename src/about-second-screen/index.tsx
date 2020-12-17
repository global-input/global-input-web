import React from 'react';
import { config } from '../configs';
import { PageHeader } from '../page-header';
import {PageFooter} from '../page-footer';

import { useMobile } from '../mobile-ui/aboutSecondScreen';
import { usePageTitle } from '../page-metadata';

import { Container,Content, SecondScreenGraph,
  TickText,Column,Title,Row } from './layout';

export const AboutSecondScreen: React.FC = () => {
  usePageTitle('Second Screen Experience');
  const MobileConnect = useMobile();

  return (
    <Container>
        <PageHeader selected={config.paths.secondScreen.path} />
        <Content>
            <Title>Second Screen Experience</Title>
            <Row>
                  <SecondScreenGraph/>
                  <Column>
                      <TickText>
          No need to develop a separate mobile app.
                      </TickText>
                    <TickText>
                      No need to implement specific server architecture.
                    </TickText>
                    <TickText>
                      Simplest and most flexible solution for second screen experience.
                    </TickText>
                    <TickText>
                      Centralize the client functionalities into one device while having the ability to operate using multiple devices.
                    </TickText>
                    <TickText>
                        Subscription, sign In, mobile control, second screen experience, all in one place.
                    </TickText>
                    <TickText>
                      Native mobile app solution but without specific mobile app development.
                    </TickText>



                 </Column>
            </Row>
            <MobileConnect label="See It In Action"/>
        </Content>
        <PageFooter />
    </Container>
  )
};
