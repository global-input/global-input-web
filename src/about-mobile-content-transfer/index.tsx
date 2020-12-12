import React from 'react';
import * as theme from '../page-components/themes/light-blue-background';
import MobileContentTransfer from './MobileContentTransfer';

import { useMobile } from '../mobile-ui/aboutContentTransfer';
import { usePageTitle } from '../page-metadata';
import { config } from '../configs';
import { PageHeader } from '../page-header';
import {PageFooter} from '../page-footer';
import {Container, Content} from './layout';

const AboutMobileContentTransfer = () => {
  const MobileConnect = useMobile();
  usePageTitle('Mobile Content Transfer');
  return (

<Container>
      <PageHeader selected={config.paths.mobileContentTransfer.path} />
      <Content>
      <MobileConnect />
      </Content>
      <PageFooter />
    </Container>
  )
};
export default AboutMobileContentTransfer;
