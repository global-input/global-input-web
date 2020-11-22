import React from 'react';

import * as theme from '../../page-components/themes/light-blue-background';
import SecondScreenExperience from './SecondScreenExperience';

import { MobileConnect } from '../../mobile';
import { usePageTitle } from '../../page-metadata';
const AboutSecondScreen = () => {
  const initData = {
    form: {
      title: "About Second Screen",
      fields: []
    }
  };
  usePageTitle('Second Screen Experience');

  return (
    <theme.Page>
      <MobileConnect initData={initData} />
      <SecondScreenExperience theme={theme} />
    </theme.Page>
  )
};

export default AboutSecondScreen;
