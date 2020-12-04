import React from 'react';

import * as theme from '../../page-components/themes/light-blue-background';
import SecondScreenExperience from './SecondScreenExperience';


import { useMobile } from '../../mobile-ui/aboutSecondScreen';
import { usePageTitle } from '../../page-metadata';
const AboutSecondScreen = () => {
  const MobileConnect = useMobile();
  usePageTitle('Second Screen Experience');

  return (
    <theme.Page>
      <SecondScreenExperience theme={theme} />
      <MobileConnect />
    </theme.Page>
  )
};

export default AboutSecondScreen;
