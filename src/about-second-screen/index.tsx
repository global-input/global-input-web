import React from "react";
import { config } from "../web-config";
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
        <Title>Instant Second Screen for Streaming Services</Title>
        <Row>
          <SecondScreenGraph />
          <Column>
            <TickText>
            Add second screen capabilities with JSON-based UI definitions.
            </TickText>
            <TickText>
            Enable mobile keyboard input for Smart TVs and streaming devices.
            </TickText>
            <TickText>
            Deploy without server-side changes or additional infrastructure.

            </TickText>
            <TickText>
            Support real-time content synchronization across devices
            </TickText>
            <TickText>Integrate in days - perfect for existing streaming applications


            </TickText>
            
            
            <TickText>
            Scale across platforms - Smart TVs, gaming consoles, set-top boxes
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
