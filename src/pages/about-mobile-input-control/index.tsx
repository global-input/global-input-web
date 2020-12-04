import React from 'react';
import * as theme from '../../page-components/themes/light-blue-background';

import IntroducingMobileInputAndControl from './IntroducingMobileInputAndControl';
import { useConnectToMobile } from '../../mobile';
import * as mobileUI from '../../mobile-ui';
import { usePageTitle } from '../../page-metadata';

const AboutMobileInputControl: React.FC = () => {
  usePageTitle('Mobile Input &amp; Control');
  const { DisplayMobileConnect } = useConnectToMobile(mobileUI.aboutControl.initData, mobileUI.aboutControl.onFieldChange);
  return (
    <theme.Page>
      <IntroducingMobileInputAndControl theme={theme} />
      <DisplayMobileConnect />
    </theme.Page>
  )
};


export default AboutMobileInputControl;
