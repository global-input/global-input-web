import React from 'react';
import * as theme from '../page-components/themes/light-blue-background';

import IntroducingMobileInputAndControl from './IntroducingMobileInputAndControl';

import { useMobile } from '../mobile-ui/aboutControl';
import { usePageTitle } from '../page-metadata';

import { config } from '../configs';
import { PageHeader } from '../page-header';
import {PageFooter} from '../page-footer';
import {Container, Content} from './layout';


const AboutMobileInputControl: React.FC = () => {
  usePageTitle('Mobile Input &amp; Control');
  const MobileConnect = useMobile();
  return (
    <Container>
      <PageHeader selected={config.paths.mobileControl.path} />
      <Content>
      <IntroducingMobileInputAndControl theme={theme} />
      <MobileConnect label="See It In Action"/>
      </Content>
      <PageFooter />

    </Container>
  )
};


export default AboutMobileInputControl;
