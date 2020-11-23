import React from 'react';

import * as theme from '../../page-components/themes/light-blue-background';
import SecondScreenExperience from './SecondScreenExperience';

import * as mobile from '../../mobile';
import { usePageTitle } from '../../page-metadata';
const AboutSecondScreen = () => {

  usePageTitle('Second Screen Experience');

  return (
    <theme.Page>
      <mobile.MobileConnect initData={mobile.aboutSecondScreen.initData} onFieldChange={mobile.aboutSecondScreen.onFieldChange} />
      <SecondScreenExperience theme={theme} />
    </theme.Page>
  )
};

export default AboutSecondScreen;
