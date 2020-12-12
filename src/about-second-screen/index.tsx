import React from 'react';

import * as theme from '../page-components/themes/light-blue-background';
import SecondScreenExperience from './SecondScreenExperience';


import { useMobile } from '../mobile-ui/aboutSecondScreen';
import { usePageTitle } from '../page-metadata';
import { config } from '../configs';
import { PageHeader } from '../page-header';
import {PageFooter} from '../page-footer';
import {Container, Content} from './layout';

const AboutSecondScreen = () => {
  const MobileConnect = useMobile();
  usePageTitle('Second Screen Experience');

  return (
    <Container>
      <PageHeader selected={config.paths.secondScreen.path} />
      <Content>
      <SecondScreenExperience theme={theme} />
      <MobileConnect />
      </Content>
      <PageFooter />

    </Container>
  )
};

export default AboutSecondScreen;
