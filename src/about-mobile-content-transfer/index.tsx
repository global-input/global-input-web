import React from 'react';
import { config } from '../configs';
import { PageHeader } from '../page-header';
import {PageFooter} from '../page-footer';

import { useMobile } from '../mobile-ui/aboutContentTransfer';
import { usePageTitle } from '../page-metadata';

import { Container,Content, MobileContentTransferGraphGraph,
  TickText,Column,Title,Row2 } from './layout';

export const AboutMobileContentTransfer: React.FC = () => {
  usePageTitle('Mobile Content Transfer');
  const MobileConnect = useMobile();

  return (
    <Container>
        <PageHeader selected={config.paths.mobileContentTransfer.path} />
        <Content>
            <Row2>
                  <Column>
                      <Title>Mobile Content Transfer</Title>
                      <TickText>
                        Secure transfer content across devices using end-to-end encryption.
                      </TickText>
                      <TickText>
                        Point-to-point transfer with no subscription and no services between.
                    </TickText>
                    <TickText>
                        Applications can request on-demand content from the mobile app.
                    </TickText>
                    <TickText>
                        Designed for transfer content to/form devices that are shared in public or workplaces.
                    </TickText>
                 </Column>
                 <MobileContentTransferGraphGraph/>
            </Row2>

            <MobileConnect label="See It In Action"/>
        </Content>
        <PageFooter />
    </Container>
  )
};
