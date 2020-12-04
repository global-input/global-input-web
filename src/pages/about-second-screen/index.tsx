import React from 'react';

import * as theme from '../../page-components/themes/light-blue-background';
import SecondScreenExperience from './SecondScreenExperience';

import { useConnectToMobile } from '../../mobile/use-connect-to-mobile';
import * as mobileUI from '../../mobile-ui';
import { usePageTitle } from '../../page-metadata';
const AboutSecondScreen = () => {
  const { DisplayMobileConnect } = useConnectToMobile(mobileUI.aboutSecondScreen.initData, mobileUI.aboutSecondScreen.onFieldChange);
  usePageTitle('Second Screen Experience');

  return (
    <theme.Page>
      <SecondScreenExperience theme={theme} />
      <DisplayMobileConnect />
    </theme.Page>
  )
};

export default AboutSecondScreen;
