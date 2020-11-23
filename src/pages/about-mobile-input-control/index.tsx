import React from 'react';
import * as theme from '../../page-components/themes/light-blue-background';

import IntroducingMobileInputAndControl from './IntroducingMobileInputAndControl';
import * as mobile from '../../mobile';
import { usePageTitle } from '../../page-metadata';

const AboutMobileInputControl: React.FC = () => {
  usePageTitle('Mobile Input &amp; Control');
  return (
    <theme.Page>
      <mobile.MobileConnect initData={mobile.aboutControl.initData} onFieldChange={mobile.aboutControl.onFieldChange} />
      <IntroducingMobileInputAndControl theme={theme} />
    </theme.Page>
  )
};


export default AboutMobileInputControl;
