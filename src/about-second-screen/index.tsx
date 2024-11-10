import React from "react";
import { config } from "../mobile-app/configs";
import { PageHeader } from "../page-header";
import { PageFooter } from "../page-footer";

import { useConnectToMobile, ConnectWindow, ConnectButton } from "./mobile-ui";
import { usePageTitle } from "../page-metadata";

import {
  Container,
  Content,
  SecondScreenGraph,
  TickText,
  Column,
  Title,
  Row,
} from "./layout";

export const AboutSecondScreen: React.FC = () => {
  usePageTitle("Second Screen Experience");
  const mobile = useConnectToMobile();

  return (
    <Container>
      <PageHeader selected={config.paths.secondScreen.path} />
      <Content>
        <Title>Second Screen Experience</Title>
        <Row>
          <SecondScreenGraph />
          <Column>
            <TickText>
            Eliminates the Need for Multiple Apps: Operate all your applications and devices from a single mobile app.
            </TickText>
            <TickText>
            No Server-Side Changes Required: Operate on the client side, simplifying the integration process.
            </TickText>
            <TickText>
            Flexible and Adaptable: Customize the mobile app to suit your needs and preferences.
            </TickText>
            <TickText>
            Reduced Development Overhead: No need for extensive re-engineering or additional hardware.
            </TickText>
            <TickText>Real-Time Synchronisation: Provides real-time updates and synchronisation across devices, offering a cohesive and interactive user experience.


            </TickText>
            
            
            <TickText>
            Improved User Engagement: Delivers a unified, seamless experience, driving higher user engagement across platforms.
            </TickText>
            


          </Column>
        </Row>
        <ConnectButton mobile={mobile} label="See it in action" />
        <ConnectWindow mobile={mobile} />
      </Content>
      <PageFooter />
    </Container>
  );
};
